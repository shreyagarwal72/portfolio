import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

interface IntroProps {
  onEnter: () => void;
  onSkip?: () => void;
}

const Intro = ({ onEnter }: IntroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0); // 0=loading, 1=name, 2=photo, 3=info, 4=enter
  const mountedRef = useRef(true);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    mountedRef.current = true;

    // Preload image
    const img = new Image();
    img.src = profilePhoto;
    img.onload = () => {
      if (!mountedRef.current) return;
      startSequence();
    };
    img.onerror = () => {
      if (!mountedRef.current) return;
      startSequence();
    };

    function startSequence() {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });
      tlRef.current = tl;

      // Phase 1: Name reveal
      tl.call(() => { if (mountedRef.current) setPhase(1); })
        .from('.intro-greeting', { y: 40, opacity: 0, duration: 0.8, delay: 0.3 })
        .from('.intro-name-first', { y: 80, opacity: 0, duration: 0.9, scale: 0.9 }, '-=0.3')
        .from('.intro-name-last', { y: 80, opacity: 0, duration: 0.9, scale: 0.9 }, '-=0.6')
        .from('.intro-tagline', { y: 30, opacity: 0, duration: 0.7 }, '-=0.3')
        .from('.intro-divider', { scaleX: 0, opacity: 0, duration: 0.8 }, '-=0.3')

      // Phase 2: Photo reveal with parallax
        .call(() => { if (mountedRef.current) setPhase(2); })
        .to('.intro-name-section', { y: -60, opacity: 0, duration: 0.6, ease: 'power2.in' }, '+=0.8')
        .from('.intro-photo-container', { scale: 0.7, opacity: 0, y: 100, duration: 1.2 }, '-=0.2')
        .from('.intro-photo-glow', { scale: 0, opacity: 0, duration: 1.0 }, '-=0.8')
        .from('.intro-photo-label', { y: 30, opacity: 0, duration: 0.6 }, '-=0.3')

      // Phase 3: Info section
        .call(() => { if (mountedRef.current) setPhase(3); })
        .to('.intro-photo-section', { y: -40, scale: 0.95, opacity: 0, duration: 0.6, ease: 'power2.in' }, '+=1.0')
        .from('.intro-info-card', { y: 80, opacity: 0, duration: 0.8 }, '-=0.2')
        .from('.intro-info-item', { y: 40, opacity: 0, duration: 0.5, stagger: 0.15 }, '-=0.3')
        .from('.intro-info-stats', { y: 30, opacity: 0, duration: 0.6 }, '-=0.1')

      // Phase 4: Enter site
        .call(() => { if (mountedRef.current) setPhase(4); })
        .from('.intro-enter-section', { y: 60, opacity: 0, duration: 0.8 }, '+=0.6')
        .from('.intro-enter-btn', { scale: 0.8, opacity: 0, duration: 0.7 }, '-=0.3')
        .from('.intro-enter-hint', { opacity: 0, duration: 0.5 }, '-=0.2');
    }

    return () => {
      mountedRef.current = false;
      if (tlRef.current) tlRef.current.kill();
      gsap.killTweensOf('*');
    };
  }, []);

  const handleEnter = () => {
    if (transitionRef.current) {
      gsap.to(transitionRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => onEnter(),
      });
    } else {
      onEnter();
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] overflow-hidden"
      style={{ background: 'hsl(var(--background))' }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="intro-particle absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `hsl(var(--primary) / ${Math.random() * 0.3 + 0.1})`,
              animation: `introFloat ${Math.random() * 8 + 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content layers - all absolutely positioned, centered */}
      <div className="relative w-full h-full flex items-center justify-center">

        {/* Phase 1: Name Introduction */}
        {phase >= 1 && (
          <div className="intro-name-section absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p className="intro-greeting text-sm sm:text-base tracking-[0.3em] uppercase text-muted-foreground font-medium mb-6 sm:mb-8">
              Welcome — I am
            </p>
            <h1 className="intro-name-first text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none"
                style={{ fontFamily: '"Oswald", sans-serif', color: 'hsl(var(--foreground))' }}>
              VANSHU
            </h1>
            <h1 className="intro-name-last text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none"
                style={{
                  fontFamily: '"Oswald", sans-serif',
                  background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.6))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
              AGARWAL
            </h1>
            <div className="intro-divider w-20 sm:w-32 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mt-6 sm:mt-8" />
            <p className="intro-tagline text-muted-foreground text-sm sm:text-lg mt-4 sm:mt-6 tracking-wide">
              Video Editor • Gamer • Musician
            </p>
          </div>
        )}

        {/* Phase 2: Photo Reveal */}
        {phase >= 2 && (
          <div className="intro-photo-section absolute inset-0 flex flex-col items-center justify-center px-6">
            <div className="intro-photo-container relative">
              <div className="intro-photo-glow absolute -inset-4 sm:-inset-6 rounded-full blur-2xl sm:blur-3xl"
                   style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.25), transparent 70%)' }} />
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
                <img
                  src={profilePhoto}
                  alt="Vanshu Agarwal"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            </div>
            <p className="intro-photo-label mt-6 sm:mt-8 text-lg sm:text-2xl font-bold text-foreground tracking-wide">
              Vanshu Agarwal
            </p>
            <p className="intro-photo-label text-sm sm:text-base text-primary font-medium mt-1">
              Creative Professional
            </p>
          </div>
        )}

        {/* Phase 3: Information */}
        {phase >= 3 && (
          <div className="intro-info-section absolute inset-0 flex items-center justify-center px-4 sm:px-6">
            <div className="intro-info-card w-full max-w-lg sm:max-w-xl rounded-3xl border border-border/50 p-6 sm:p-10"
                 style={{ background: 'hsl(var(--card) / 0.6)', backdropFilter: 'blur(20px)' }}>
              
              <h2 className="intro-info-item text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 text-center">
                What I Do
              </h2>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  { icon: '🎬', label: 'Video Editing & Post-Production', desc: 'Cinematic edits, color grading, VFX' },
                  { icon: '🎵', label: 'Music Production', desc: 'Original rap songs & beats' },
                  { icon: '🎮', label: 'Gaming Content', desc: 'Free Fire & Minecraft creator' },
                  { icon: '💻', label: 'Web Development', desc: 'React, TypeScript, modern web' },
                ].map((item, i) => (
                  <div key={i} className="intro-info-item flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl"
                       style={{ background: 'hsl(var(--muted) / 0.3)' }}>
                    <span className="text-xl sm:text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-sm sm:text-base font-semibold text-foreground">{item.label}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="intro-info-stats grid grid-cols-3 gap-3 sm:gap-4 text-center">
                {[
                  { value: '5+', label: 'Years' },
                  { value: '50+', label: 'Projects' },
                  { value: '500+', label: 'Subscribers' },
                ].map((stat, i) => (
                  <div key={i} className="p-2 sm:p-3 rounded-xl" style={{ background: 'hsl(var(--muted) / 0.2)' }}>
                    <p className="text-xl sm:text-2xl font-black text-primary">{stat.value}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Phase 4: Enter Site */}
        {phase >= 4 && (
          <div className="intro-enter-section absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p className="text-muted-foreground text-sm sm:text-lg mb-6 sm:mb-8 max-w-md">
              Ready to explore my creative world?
            </p>
            <button
              onClick={handleEnter}
              className="intro-enter-btn group relative flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-bold text-primary-foreground overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.8))',
                boxShadow: '0 8px 40px hsl(var(--primary) / 0.4)',
              }}
            >
              <span className="relative z-10">Enter Site</span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            <p className="intro-enter-hint text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6 animate-pulse">
              Click to continue
            </p>
          </div>
        )}
      </div>

      {/* Page Transition Overlay */}
      <div
        ref={transitionRef}
        className="fixed inset-0 z-[200] pointer-events-none opacity-0"
        style={{ background: 'hsl(var(--background))' }}
      />

      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&display=swap");
        
        @keyframes introFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-5px); }
          75% { transform: translateY(-30px) translateX(15px); }
        }
      `}</style>
    </div>
  );
};

export default Intro;
