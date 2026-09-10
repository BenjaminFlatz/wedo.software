import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface NodeUserData {
  initialY: number;
  phase: number;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000022);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const nodes: THREE.Mesh[] = [];
    const nodeCount = 50;
    const geometry = new THREE.SphereGeometry(0.1, 32, 32);
    const material = new THREE.MeshPhongMaterial({ color: 0x00ffff, shininess: 100 });

    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(geometry, material);
      node.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      );
      const userData: NodeUserData = {
        initialY: node.position.y,
        phase: Math.random() * Math.PI * 2,
      };
      node.userData = userData;
      scene.add(node);
      nodes.push(node);
    }

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xaaaaaa, transparent: true, opacity: 0.5 });
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.6) {
          const points = [nodes[i].position, nodes[j].position];
          const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
          const line = new THREE.Line(lineGeometry, lineMaterial);
          scene.add(line);
        }
      }
    }

    const starCount = 200;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 100;
      starPositions[i + 1] = (Math.random() - 0.5) * 100;
      starPositions[i + 2] = (Math.random() - 0.5) * 100;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    camera.position.z = 25;

    let lastTime = 0;
    let smoothedMorphFactor = 0;
    let animationFrameId = 0;

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      scene.rotation.y += 0.0005 * delta * 60;
      scene.rotation.x += 0.0002 * delta * 60;

      const targetMorphFactor = scrollYRef.current / window.innerHeight;
      smoothedMorphFactor += (targetMorphFactor - smoothedMorphFactor) * 0.1;

      nodes.forEach((node) => {
        const { initialY, phase } = node.userData as NodeUserData;
        const oscillation = Math.sin(time * 0.0005 + phase) * 1 * (1 + smoothedMorphFactor);
        node.position.y = initialY + oscillation;

        const targetScale = 1 + smoothedMorphFactor * 0.3;
        node.scale.setScalar(node.scale.x + (targetScale - node.scale.x) * 0.1);
      });

      stars.rotation.y += 0.0001 * delta * 60;

      renderer.render(scene, camera);
    };
    animate(0);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <div className="container mx-auto text-center px-6 animate-fade-in z-10 text-white">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Lernen Sie Software-Entwicklung mit WeDo
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Tutorials, Videos und Lerninhalte zu IT-Consulting, KI, Web Scraping und Python – praxisnah und
          verständlich erklärt.
        </p>
        <a
          href="#topics"
          className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
        >
          Jetzt durchstarten
        </a>
      </div>
    </section>
  );
}
