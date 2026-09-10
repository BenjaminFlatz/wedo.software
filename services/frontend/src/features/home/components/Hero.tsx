import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface NodeUserData {
  radius: number;
  theta: number;
  phi: number;
  speed: number;
  bob: number;
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05060a, 0.028);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    );
    camera.position.set(0, 0, 26);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const makeGlowTexture = (hexColor: string) => {
      const size = 128;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (!ctx) return new THREE.Texture();
      const gradient = ctx.createRadialGradient(
        size / 2,
        size / 2,
        0,
        size / 2,
        size / 2,
        size / 2,
      );
      gradient.addColorStop(0, hexColor);
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);
      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const cyanGlow = makeGlowTexture('rgba(34,211,238,1)');
    const blueGlow = makeGlowTexture('rgba(59,130,246,1)');
    const whiteGlow = makeGlowTexture('rgba(255,255,255,1)');

    // Starfield
    const starCount = 500;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 120;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 120;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 120;
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      size: 0.6,
      map: whiteGlow,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Core
    const coreGeometry = new THREE.IcosahedronGeometry(3.2, 1);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(core);

    const coreGlow = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: cyanGlow, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending }),
    );
    coreGlow.scale.set(14, 14, 1);
    scene.add(coreGlow);

    // Orbiting nodes
    const nodeCount = 26;
    const nodes: THREE.Sprite[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const isBlue = i % 3 === 0;
      const sprite = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: isBlue ? blueGlow : cyanGlow,
          transparent: true,
          opacity: 0.9,
          blending: THREE.AdditiveBlending,
        }),
      );
      sprite.scale.set(1.4, 1.4, 1);

      const radius = 6 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      sprite.userData = {
        radius,
        theta,
        phi,
        speed: 0.05 + Math.random() * 0.1,
        bob: Math.random() * Math.PI * 2,
      } as NodeUserData;

      nodes.push(sprite);
      scene.add(sprite);
    }

    // Connection lines from core to every-other node
    const links: { line: THREE.Line; node: THREE.Sprite }[] = [];
    nodes.forEach((node, i) => {
      if (i % 2 !== 0) return;
      const lineGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        node.position.clone(),
      ]);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x22d3ee,
        transparent: true,
        opacity: 0.18,
      });
      const line = new THREE.Line(lineGeometry, lineMaterial);
      scene.add(line);
      links.push({ line, node });
    });

    // Traveling pulses along links
    const pulses = links.map(({ node }) => ({
      sprite: new THREE.Sprite(
        new THREE.SpriteMaterial({ map: whiteGlow, transparent: true, opacity: 0, blending: THREE.AdditiveBlending }),
      ),
      node,
      t: Math.random(),
      speed: 0.2 + Math.random() * 0.3,
    }));
    pulses.forEach((p) => {
      p.sprite.scale.set(0.8, 0.8, 1);
      scene.add(p.sprite);
    });

    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let smoothedScroll = 0;
    const clock = new THREE.Clock();
    let frameId: number;

    const animate = (time: number) => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      core.rotation.y += 0.0015;
      core.rotation.x += 0.0008;
      coreGlow.material.opacity = 0.4 + Math.sin(elapsed * 1.5) * 0.1;

      nodes.forEach((node) => {
        const data = node.userData as NodeUserData;
        data.theta += data.speed * 0.01;
        const x = data.radius * Math.sin(data.phi) * Math.cos(data.theta);
        const y = data.radius * Math.sin(data.phi) * Math.sin(data.theta) + Math.sin(elapsed + data.bob) * 0.4;
        const z = data.radius * Math.cos(data.phi);
        node.position.set(x, y, z);
      });

      links.forEach(({ line, node }) => {
        const positions = line.geometry.attributes.position as THREE.BufferAttribute;
        positions.setXYZ(1, node.position.x, node.position.y, node.position.z);
        positions.needsUpdate = true;
      });

      pulses.forEach((p) => {
        p.t += p.speed * 0.01;
        if (p.t > 1) p.t = 0;
        p.sprite.position.lerpVectors(new THREE.Vector3(0, 0, 0), p.node.position, p.t);
        p.sprite.material.opacity = Math.sin(p.t * Math.PI) * 0.9;
      });

      smoothedScroll += ((window.scrollY / window.innerHeight) - smoothedScroll) * 0.05;
      const cappedScroll = Math.min(smoothedScroll, 1.4);
      camera.position.z = 26 - cappedScroll * 6;

      camera.position.x += (mouse.x * 3 - camera.position.x) * 0.02;
      camera.position.y += (-mouse.y * 2 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      void time;
    };
    frameId = requestAnimationFrame(animate);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-[#05060a]">
      <div ref={containerRef} className="absolute inset-0" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
        <span className="badge-chip mb-6">Software Engineering & System Architecture</span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 glow-text">
          Resilient Systems. Scalable Software.
          <br />
          Seamless Integration.
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
          Based in Dornbirn, Austria, I design and build AI automation, enterprise web scraping
          pipelines and full-stack platforms that hold up under real-world load.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#products" className="cta-primary px-8 py-3 rounded-full">
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
