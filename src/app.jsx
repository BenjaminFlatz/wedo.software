    const { useState, useEffect, useRef } = React;

    const NAV_LINKS = [
      { href: '#expertise', label: 'Expertise' },
      { href: '#tech-stack', label: 'Tech Stack' },
      { href: '#projects', label: 'Projects' },
      { href: '#contact', label: 'Contact' },
    ];

    const Navbar = () => {
      const [open, setOpen] = useState(false);
      return (
        <nav className="glass-panel fixed w-full z-30 py-4 px-6">
          <div className="container mx-auto flex justify-between items-center">
            <a href="#top" className="flex items-center space-x-3">
              <img src="logo.svg" alt="wedo-software.com logo" className="h-9 w-9" />
              <span className="text-xl font-bold text-white tracking-tight">wedo-software<span className="text-cyan-400">.com</span></span>
            </a>
            <div className="hidden md:flex items-center space-x-8 text-gray-300">
              {NAV_LINKS.map(link => (
                <a key={link.href} href={link.href} className="hover:text-cyan-400 transition">{link.label}</a>
              ))}
              <a href="#contact" className="cta-primary text-[#05060a] font-semibold px-5 py-2 rounded-full transition">Start a Project</a>
            </div>
            <button
              className="md:hidden text-gray-200 text-2xl"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
          {open && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 px-2 text-gray-300">
              {NAV_LINKS.map(link => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="hover:text-cyan-400 transition">{link.label}</a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="cta-primary text-[#05060a] font-semibold px-5 py-2 rounded-full text-center transition">Start a Project</a>
            </div>
          )}
        </nav>
      );
    };

    /*
     * Hero background: a glowing "core system" made of an interactive network of
     * orbiting nodes, pulse-lit connections and travelling data packets. Built with
     * plain Three.js primitives (no post-processing dependency) so the glow effect
     * comes purely from additive-blended radial sprites - fast, dependency-free and
     * built to leave a strong first impression.
     */
    const NetworkHero = () => {
      const canvasRef = useRef(null);

      useEffect(() => {
        if (!canvasRef.current || typeof THREE === 'undefined') {
          console.error('Three.js not loaded or canvas ref missing');
          return;
        }

        const canvas = canvasRef.current;
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x05060a, 0.028);

        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 26);

        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Radial-gradient sprite texture used for every glowing point (core, nodes, pulses, stars)
        const makeGlowTexture = (hexColor) => {
          const size = 128;
          const canvasEl = document.createElement('canvas');
          canvasEl.width = size;
          canvasEl.height = size;
          const ctx = canvasEl.getContext('2d');
          const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
          gradient.addColorStop(0, hexColor);
          gradient.addColorStop(0.4, hexColor);
          gradient.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, size, size);
          const texture = new THREE.CanvasTexture(canvasEl);
          return texture;
        };

        const cyanGlow = makeGlowTexture('rgba(34,211,238,1)');
        const blueGlow = makeGlowTexture('rgba(59,130,246,1)');
        const whiteGlow = makeGlowTexture('rgba(255,255,255,1)');

        // Starfield for depth
        const starCount = 500;
        const starGeometry = new THREE.BufferGeometry();
        const starPositions = new Float32Array(starCount * 3);
        for (let i = 0; i < starCount * 3; i += 3) {
          starPositions[i] = (Math.random() - 0.5) * 140;
          starPositions[i + 1] = (Math.random() - 0.5) * 140;
          starPositions[i + 2] = (Math.random() - 0.5) * 140 - 30;
        }
        starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
        const starMaterial = new THREE.PointsMaterial({
          size: 0.5,
          map: whiteGlow,
          transparent: true,
          opacity: 0.5,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        });
        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        // Glowing wireframe "core" - the system at the centre of it all
        const coreGeometry = new THREE.IcosahedronGeometry(3.2, 1);
        const coreMaterial = new THREE.MeshBasicMaterial({ color: 0x22d3ee, wireframe: true, transparent: true, opacity: 0.55 });
        const core = new THREE.Mesh(coreGeometry, coreMaterial);
        scene.add(core);

        const coreGlowSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: cyanGlow, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false }));
        coreGlowSprite.scale.set(14, 14, 1);
        scene.add(coreGlowSprite);

        // Orbiting nodes representing services / integrations
        const nodeCount = 26;
        const nodes = [];
        const nodeGroup = new THREE.Group();
        for (let i = 0; i < nodeCount; i++) {
          const radius = 7 + Math.random() * 8;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos((Math.random() * 2) - 1);
          const isBlue = i % 3 === 0;
          const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
            map: isBlue ? blueGlow : cyanGlow,
            transparent: true,
            opacity: 0.9,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
          }));
          const scale = 0.6 + Math.random() * 0.9;
          sprite.scale.set(scale, scale, 1);
          sprite.userData = {
            radius,
            theta,
            phi,
            speed: 0.05 + Math.random() * 0.08,
            bob: Math.random() * Math.PI * 2,
          };
          nodeGroup.add(sprite);
          nodes.push(sprite);
        }
        scene.add(nodeGroup);

        // Connections from the core to a subset of nodes, drawn as thin glowing lines
        const linkMaterial = new THREE.LineBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.18 });
        const links = [];
        nodes.forEach((node, i) => {
          if (i % 2 === 0) {
            const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), node.position.clone()]);
            const line = new THREE.Line(geometry, linkMaterial);
            scene.add(line);
            links.push({ line, node });
          }
        });

        // Data packets travelling along the links - the "wow" detail
        const pulses = links.map(({ node }) => ({
          sprite: (() => {
            const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: whiteGlow, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false }));
            s.scale.set(0.45, 0.45, 1);
            scene.add(s);
            return s;
          })(),
          node,
          progress: Math.random(),
          speed: 0.15 + Math.random() * 0.25,
        }));

        // Mouse parallax
        const mouse = { x: 0, y: 0 };
        const handleMouseMove = (e) => {
          mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
          mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
        };
        window.addEventListener('mousemove', handleMouseMove);

        let animationFrame;
        let smoothedScroll = 0;
        const clock = new THREE.Clock();

        const animate = () => {
          animationFrame = requestAnimationFrame(animate);
          const elapsed = clock.getElapsedTime();

          const targetScroll = Math.min(window.scrollY / (window.innerHeight || 1), 1.4);
          smoothedScroll += (targetScroll - smoothedScroll) * 0.06;

          core.rotation.y += 0.0025;
          core.rotation.x += 0.0012;
          const corePulse = 1 + Math.sin(elapsed * 1.2) * 0.05;
          core.scale.setScalar(corePulse * (1 + smoothedScroll * 0.2));
          coreGlowSprite.material.opacity = 0.4 + Math.sin(elapsed * 1.5) * 0.15;

          nodeGroup.rotation.y += 0.0009;
          nodes.forEach((node) => {
            const { radius, theta, phi, speed, bob } = node.userData;
            const angle = theta + elapsed * speed * 0.2;
            node.position.set(
              radius * Math.sin(phi) * Math.cos(angle),
              radius * Math.cos(phi) + Math.sin(elapsed * 0.6 + bob) * 0.6,
              radius * Math.sin(phi) * Math.sin(angle)
            );
          });

          links.forEach(({ line, node }) => {
            const positions = line.geometry.attributes.position.array;
            positions[3] = node.position.x;
            positions[4] = node.position.y;
            positions[5] = node.position.z;
            line.geometry.attributes.position.needsUpdate = true;
          });

          pulses.forEach((pulse) => {
            pulse.progress += pulse.speed * 0.01;
            if (pulse.progress > 1) pulse.progress = 0;
            pulse.sprite.position.lerpVectors(new THREE.Vector3(0, 0, 0), pulse.node.position, pulse.progress);
            pulse.sprite.material.opacity = 0.9 * (1 - Math.abs(pulse.progress - 0.5) * 1.2);
          });

          stars.rotation.y += 0.00015;

          // Gentle camera parallax that follows the cursor and scroll depth
          camera.position.x += (mouse.x * 3 - camera.position.x) * 0.03;
          camera.position.y += (-mouse.y * 2 - camera.position.y) * 0.03;
          camera.position.z = 26 - smoothedScroll * 6;
          camera.lookAt(0, 0, 0);

          renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
          cancelAnimationFrame(animationFrame);
          window.removeEventListener('resize', handleResize);
          window.removeEventListener('mousemove', handleMouseMove);
          renderer.dispose();
        };
      }, []);

      return (
        <section id="top" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#05060a]">
          <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#05060a] pointer-events-none"></div>
          <div className="container mx-auto text-center px-6 animate-fade-in z-10 relative">
            <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-6 font-semibold">Software Engineering &amp; System Architecture</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white glow-text">
              Resilient Systems. Scalable Software. Seamless Integration.
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-300">
              I design and build robust system architectures, automated workflows and full-stack products &mdash; helping businesses ship reliable software faster, from Dornbirn, Austria to the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projects" className="cta-primary text-[#05060a] font-semibold px-8 py-3 rounded-full transition">View My Work</a>
              <a href="#contact" className="glass-panel text-white font-semibold px-8 py-3 rounded-full hover:border-cyan-400 transition">Get In Touch</a>
            </div>
          </div>
        </section>
      );
    };

    const ExpertiseCard = ({ title, description, icon, tags }) => (
      <div className="glass-card p-8 rounded-2xl animate-slide-up">
        <div className="text-cyan-400 text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="badge-chip text-xs px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    );

    const Expertise = () => (
      <section id="expertise" className="py-24 section-glow">
        <div className="container mx-auto px-6">
          <p className="text-center text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold mb-3">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-16">What I Bring To Your Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ExpertiseCard
              icon="💻"
              title="Full-Stack Development"
              description="End-to-end product development across modern back-end and front-end stacks, built for performance and maintainability."
              tags={["C#", "Python", "React", "TypeScript"]}
            />
            <ExpertiseCard
              icon="🧠"
              title="System Architecture &amp; Automation"
              description="Designing resilient architectures and intelligent automated workflows, from data pipelines to AI-driven agents."
              tags={["Crawlee", "LangGraph", "LangChain"]}
            />
            <ExpertiseCard
              icon="🚀"
              title="Technical Project Leadership"
              description="Guiding cross-functional teams with hands-on Scrum Master experience, keeping delivery agile, transparent and on track."
              tags={["Scrum Master", "Agile", "Team Leadership"]}
            />
          </div>
        </div>
      </section>
    );

    const TECH_STACK = [
      { name: 'Python', icon: '🐍' },
      { name: 'C# / .NET', icon: '🧩' },
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'SQL', icon: '🗄️' },
      { name: 'DevOps', icon: '⚙️' },
    ];

    const TechStack = () => (
      <section id="tech-stack" className="py-24">
        <div className="container mx-auto px-6">
          <p className="text-center text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold mb-3">Tech Stack &amp; Background</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-16">Tools I Rely On</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-16">
            {TECH_STACK.map(tech => (
              <div key={tech.name} className="glass-card rounded-xl py-6 px-3 text-center">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="text-sm text-gray-300 font-medium">{tech.name}</div>
              </div>
            ))}
          </div>
          <div className="glass-panel rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-300 leading-relaxed">
              Based in <span className="text-cyan-400 font-semibold">Dornbirn, Austria</span>, I bring enterprise-grade experience from roles at
              <span className="text-white font-semibold"> Hypo Vorarlberg Bank</span> and <span className="text-white font-semibold">Künz GmbH</span>,
              combining banking-grade reliability with industrial engineering rigor to deliver software that holds up under real-world demands.
            </p>
          </div>
        </div>
      </section>
    );

    const ProjectCard = ({ title, description, tags, href, cta }) => (
      <div className="glass-card p-8 rounded-2xl flex flex-col animate-slide-up">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-6 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map(tag => (
            <span key={tag} className="badge-chip text-xs px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center cta-primary text-[#05060a] font-semibold px-6 py-2.5 rounded-full transition"
        >
          {cta} &rarr;
        </a>
      </div>
    );

    const Projects = () => (
      <section id="projects" className="py-24 section-glow">
        <div className="container mx-auto px-6">
          <p className="text-center text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-16">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard
              title="LightGBM Financial Prediction App"
              description="A machine-learning powered application that uses LightGBM to generate financial predictions, deployed as a live production service."
              tags={["Python", "LightGBM", "Machine Learning"]}
              href="https://wedo-finance-prediction.up.railway.app/"
              cta="View Live App"
            />
            <ProjectCard
              title="Apify Web Scrapers"
              description="Production-grade web scrapers built and published on the Apify platform for automated data extraction at scale, such as this menu scraper."
              tags={["Crawlee", "Web Scraping", "Automation"]}
              href="https://apify.com/wedo_software/wedo-scrape-menu"
              cta="View On Apify"
            />
            <ProjectCard
              title="E-Commerce &amp; ERP Setup"
              description="End-to-end e-commerce store setup and ERP integration, powering online sales for Pilzkraft with a reliable, streamlined storefront."
              tags={["E-Commerce", "ERP", "Integration"]}
              href="https://shop.pilzkraft.com/"
              cta="Visit Shop"
            />
          </div>
        </div>
      </section>
    );

    const openChatwoot = () => {
      if (typeof window !== 'undefined' && window.$chatwoot) {
        window.$chatwoot.toggle('open');
      }
    };

    const Contact = () => {
      return (
        <section id="contact" className="py-24">
          <div className="container mx-auto px-6">
            <p className="text-center text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold mb-3">Contact</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-6">Let's Build Something Reliable</h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Have a project in mind or need help architecting your next system? Start a conversation and I'll get back to you as soon as possible.
            </p>
            <div className="max-w-lg mx-auto glass-card p-8 rounded-2xl text-center space-y-6">
              <p className="text-gray-300">
                Use the live chat to reach out directly, or email me at{' '}
                <a href="mailto:info@wedo-software.com" className="text-cyan-400 hover:text-cyan-300 transition">info@wedo-software.com</a>.
              </p>
              <button
                type="button"
                onClick={openChatwoot}
                className="w-full cta-primary text-[#05060a] p-4 rounded-lg font-semibold transition"
              >
                Start a Chat
              </button>
            </div>
          </div>
        </section>
      );
    };

    const App = () => (
      <div>
        <Navbar />
        <NetworkHero />
        <Expertise />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
