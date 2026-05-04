import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './Intro.css';

interface IntroProps {
  onEnter: () => void;
}

const TITLE_WORDS = ['Vanshu', 'Agarwal'];
const SUBTITLE = 'Crafting Cinematic Stories — Video Editor • Creator • Developer';

const Intro = ({ onEnter }: IntroProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visibleWords, setVisibleWords] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  // Animated particle/grid scene on canvas (works everywhere)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      hue: Math.random() > 0.5 ? 270 : 320,
    }));

    const pointer = { x: canvas.width / 2, y: canvas.height / 2 };
    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX * dpr;
      pointer.y = e.clientY * dpr;
    };
    window.addEventListener('pointermove', onMove);

    let t = 0;
    const render = () => {
      t += 0.005;
      ctx.fillStyle = 'rgba(8, 6, 18, 0.35)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grid
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.07)';
      ctx.lineWidth = 1;
      const gap = 60 * dpr;
      const offset = (t * 20) % gap;
      for (let x = -offset; x < canvas.width; x += gap) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = -offset; y < canvas.height; y += gap) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // Scan line
      const scanY = (Math.sin(t * 1.2) * 0.5 + 0.5) * canvas.height;
      const grad = ctx.createLinearGradient(0, scanY - 80 * dpr, 0, scanY + 80 * dpr);
      grad.addColorStop(0, 'rgba(139, 92, 246, 0)');
      grad.addColorStop(0.5, 'rgba(244, 114, 182, 0.18)');
      grad.addColorStop(1, 'rgba(139, 92, 246, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, scanY - 80 * dpr, canvas.width, 160 * dpr);

      // Particles
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        const dx = p.x - pointer.x, dy = p.y - pointer.y;
        const dist = Math.hypot(dx, dy);
        const glow = Math.max(0, 1 - dist / (200 * dpr));
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 90%, ${60 + glow * 30}%, ${0.4 + glow * 0.6})`;
        ctx.arc(p.x, p.y, p.r * (1 + glow * 2), 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  // Sequence text reveals
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    TITLE_WORDS.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleWords(i + 1), 400 + i * 350));
    });
    timers.push(setTimeout(() => setSubtitleVisible(true), 400 + TITLE_WORDS.length * 350 + 200));
    timers.push(setTimeout(() => setCtaVisible(true), 400 + TITLE_WORDS.length * 350 + 700));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="intro-futuristic">
      <canvas ref={canvasRef} className="intro-canvas" />

      <div className="intro-vignette" />

      <nav className="intro-nav-mini">
        <span className="intro-logo">VA</span>
        <span className="intro-meta">PORTFOLIO • 2026</span>
      </nav>

      <div className="intro-content">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="intro-eyebrow"
        >
          <span className="dot" /> Welcome
        </motion.div>

        <h1 className="intro-title">
          {TITLE_WORDS.map((word, i) => (
            <span
              key={word}
              className={`intro-word ${i < visibleWords ? 'in' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {word}
            </span>
          ))}
        </h1>

        <p className={`intro-subtitle ${subtitleVisible ? 'in' : ''}`}>{SUBTITLE}</p>

        <div className={`intro-actions ${ctaVisible ? 'in' : ''}`}>
          <button className="intro-cta" onClick={onEnter}>
            <span>Enter Portfolio</span>
            <span className="intro-cta-glow" />
          </button>
          <button className="intro-skip" onClick={onEnter}>Skip intro →</button>
        </div>
      </div>

      <button className="intro-scroll-hint" onClick={onEnter} aria-label="Enter">
        <span>Scroll to explore</span>
        <ChevronDown size={18} />
      </button>

      <div className="intro-corner intro-corner-tl" />
      <div className="intro-corner intro-corner-tr" />
      <div className="intro-corner intro-corner-bl" />
      <div className="intro-corner intro-corner-br" />
    </div>
  );
};

export default Intro;
