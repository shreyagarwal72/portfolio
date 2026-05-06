import { lazy, Suspense, useEffect, useState } from 'react';
import heroWorkspace from '@/assets/hero-workspace.jpg';
import heroWorkspaceLight from '@/assets/hero-workspace-light.jpg';
import { motion, AnimatePresence } from 'framer-motion';

const Floating3D = lazy(() => import('@/components/Floating3D').then(m => ({ default: m.Floating3D })));
import ElectricButton from '@/components/ElectricButton';
import CreepyButton from '@/components/CreepyButton';

const smoothEase: [number, number, number, number] = [0.25, 0.4, 0.25, 1];

const roles = ['Video Editor', 'Gamer', 'Musician', 'Creative Mind'];

const Hero = () => {
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % roles.length);
    }, 3000);

    // SEO
    document.title = 'Vanshu Agarwal - Video Editor, Gamer & Musician | Creative Portfolio';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional video editor and creative content creator specializing in gaming content, music production, and digital storytelling. View portfolio of original tracks, Minecraft projects, and creative videos.');
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "name": "Vanshu Agarwal - Creative Portfolio",
      "description": "Professional video editor, content creator, musician, and gamer",
      "mainEntity": {
        "@type": "Person",
        "name": "Vanshu Agarwal",
        "jobTitle": "Video Editor, Content Creator, Musician",
        "url": "https://vanshubhai.vercel.app",
        "sameAs": [
          "https://github.com/shreyagarwal72",
          "https://instagram.com/here_your_champion",
          "https://youtube.com/@nextupstudioyt"
        ],
        "knowsAbout": ["Video Editing", "Content Creation", "Music Production", "Gaming", "Web Development"]
      }
    });
    document.head.appendChild(script);

    return () => {
      observer.disconnect();
      clearInterval(interval);
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) document.head.removeChild(existingScript);
    };
  }, []);

  const nameChars = 'VANSHU'.split('');
  const lastNameChars = 'AGARWAL'.split('');

  return (
    <main role="main">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <Suspense fallback={null}>
          <motion.div
            className="absolute inset-0 opacity-20 pointer-events-none z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 2, ease: smoothEase }}
          >
            <Floating3D className="w-full h-full" />
          </motion.div>
        </Suspense>

        {/* Background Image — simple fade, no scale */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: smoothEase }}
          style={{ backgroundImage: `url(${isDark ? heroWorkspace : heroWorkspaceLight})` }}
          role="img"
          aria-label="Creative workspace background with editing equipment"
        >
          <div className="absolute inset-0 bg-background/85 dark:bg-background/80" />
        </motion.div>

        {/* Vignette overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-background via-background/70 to-transparent pointer-events-none" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/60 via-transparent to-background pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <motion.span
              className="eyebrow mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: smoothEase }}
            >
              Portfolio · 2026
            </motion.span>

            <h1 className="display-xl mt-5 text-foreground">
              <span className="block opacity-80 font-light tracking-tight" style={{ fontWeight: 300, fontSize: '0.45em' }}>
                {nameChars.map((char, i) => (
                  <motion.span
                    key={`first-${i}`}
                    className="inline-block"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.04, ease: smoothEase }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <span className="block">
                {lastNameChars.map((char, i) => (
                  <motion.span
                    key={`last-${i}`}
                    className="inline-block"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.55 + i * 0.04, ease: smoothEase }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>

            <div className="mt-6 h-8 sm:h-10 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  className="text-base sm:text-lg md:text-xl text-muted-foreground font-light tracking-[0.15em] uppercase absolute inset-x-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: smoothEase }}
                  role="doc-subtitle"
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.nav
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: smoothEase }}
              aria-label="Main navigation actions"
            >
              <a href="/cv" className="btn-pill">Resume</a>
              <a href="/portfolio" className="btn-pill-solid">Portfolio</a>
            </motion.nav>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1, ease: smoothEase }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center backdrop-blur-sm"
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <motion.div
              className="w-1.5 h-2.5 bg-primary rounded-full mt-2"
              animate={{ opacity: [0.4, 1, 0.4], y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default Hero;
