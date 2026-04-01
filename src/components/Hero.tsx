import { lazy, Suspense, useEffect, useState, useRef } from 'react';
import heroWorkspace from '@/assets/hero-workspace.jpg';
import heroWorkspaceLight from '@/assets/hero-workspace-light.jpg';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';

const Hero3DScene = lazy(() => import('@/components/Hero3DScene'));
import ElectricButton from '@/components/ElectricButton';
import CreepyButton from '@/components/CreepyButton';
import GlowingCircles from '@/components/GlowingCircles';

const roles = ['Video Editor', 'Gamer', 'Musician', 'Creative Mind'];

const Hero = () => {
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));
  const [roleIndex, setRoleIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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
      metaDescription.setAttribute('content', 'Professional video editor and creative content creator specializing in gaming content, music production, and digital storytelling.');
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
          "https://instagram.com/vanshu_ag_72",
          "https://youtube.com/@nextupstudioyt"
        ],
        "knowsAbout": ["Video Editing", "Content Creation", "Music Production", "Gaming"]
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

  // GSAP split-text animation
  useEffect(() => {
    if (!nameRef.current) return;

    const lines = nameRef.current.querySelectorAll('.hero-line');
    gsap.fromTo(
      lines,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
        delay: 0.3,
      }
    );

    // Subtitle
    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.8 }
      );
    }

    // CTA
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 1.2 }
      );
    }
  }, []);

  return (
    <main role="main">
      <GlowingCircles />
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <Suspense fallback={null}>
          <motion.div
            className="absolute inset-0 opacity-25 pointer-events-none z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ duration: 2 }}
          >
            <Hero3DScene className="w-full h-full" />
          </motion.div>
        </Suspense>

        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{ backgroundImage: `url(${isDark ? heroWorkspace : heroWorkspaceLight})` }}
          role="img"
          aria-label="Creative workspace background"
        >
          <div className="absolute inset-0 bg-background/85 dark:bg-background/80" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <header className="space-y-4">
              {/* "Hello! I'm" subtitle */}
              <p
                ref={subtitleRef}
                className="text-base sm:text-lg md:text-xl text-muted-foreground font-light italic tracking-wide opacity-0"
              >
                Hello! I'm
              </p>

              {/* GSAP split-line name reveal */}
              <div ref={nameRef}>
                <h1 style={{ fontSize: 'calc(4vw + 25px)', lineHeight: 1.1 }} className="font-bold tracking-tight">
                  <div className="overflow-hidden">
                    <span className="hero-line block bg-gradient-to-r from-primary via-primary/80 to-primary-foreground bg-clip-text text-transparent opacity-0">
                      VANSHU
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <span className="hero-line block text-foreground opacity-0">
                      AGARWAL
                    </span>
                  </div>
                </h1>
              </div>

              {/* Rotating subtitle */}
              <div className="h-8 sm:h-10 md:h-12 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={roleIndex}
                    className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light tracking-wide absolute inset-x-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                    role="doc-subtitle"
                  >
                    {roles[roleIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </header>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0 opacity-0"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                <CreepyButton to="/cv">Open CV</CreepyButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                <ElectricButton to="/portfolio" text="View Portfolio" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
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
