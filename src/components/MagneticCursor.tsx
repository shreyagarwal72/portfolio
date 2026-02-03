import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";

const MagneticCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const rafRef = useRef<number>();
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const checkTouch = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 1024;
      setIsTouchDevice(hasTouch || isSmallScreen);
    };
    
    checkTouch();
    window.addEventListener('resize', checkTouch);
    
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let isHovering = false;

    // Optimized rotation using CSS instead of GSAP for better performance
    cursor.style.animation = 'cursor-rotate 8s linear infinite';

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (!isVisible) setIsVisible(true);

      // Cancel previous frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      // Use RAF for smoother updates
      rafRef.current = requestAnimationFrame(() => {
        if (!isHovering) {
          gsap.to(cursor, {
            x: mousePos.current.x,
            y: mousePos.current.y,
            duration: 0.12,
            ease: "power2.out",
            overwrite: "auto"
          });
        }

        gsap.to(dot, {
          x: mousePos.current.x,
          y: mousePos.current.y,
          duration: 0.06,
          ease: "power2.out",
          overwrite: "auto"
        });
      });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      isHovering = true;
      cursor.style.animationPlayState = 'paused';

      gsap.to(cursor, {
        x: centerX,
        y: centerY,
        width: rect.width + 20,
        height: rect.height + 20,
        borderRadius: 12,
        duration: 0.35,
        ease: "elastic.out(1, 0.6)",
        overwrite: "auto"
      });

      gsap.to(dot, {
        scale: 0,
        duration: 0.15,
        overwrite: "auto"
      });
    };

    const handleMouseLeave = () => {
      isHovering = false;
      cursor.style.animationPlayState = 'running';

      gsap.to(cursor, {
        x: mousePos.current.x,
        y: mousePos.current.y,
        width: 30,
        height: 30,
        borderRadius: 0,
        duration: 0.35,
        ease: "elastic.out(1, 0.6)",
        overwrite: "auto"
      });

      gsap.to(dot, {
        scale: 1,
        duration: 0.15,
        overwrite: "auto"
      });
    };

    const handleMouseOut = () => {
      setIsVisible(false);
    };

    // Throttled mouse move handler
    let lastMove = 0;
    const throttledMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMove >= 8) { // ~120fps cap
        lastMove = now;
        handleMouseMove(e);
      }
    };

    document.addEventListener("mousemove", throttledMouseMove, { passive: true });
    document.addEventListener("mouseout", handleMouseOut);

    // Find and attach to magnetic elements
    const attachMagneticListeners = () => {
      const magneticElements = document.querySelectorAll("[data-magnetic]");
      magneticElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    attachMagneticListeners();

    // Re-attach on DOM changes with debounce
    let mutationTimeout: number;
    const observer = new MutationObserver(() => {
      clearTimeout(mutationTimeout);
      mutationTimeout = setTimeout(attachMagneticListeners, 100) as unknown as number;
    });
    observer.observe(document.body, { childList: true, subtree: true });

    document.body.classList.add("cursor-none");

    return () => {
      document.removeEventListener("mousemove", throttledMouseMove);
      document.removeEventListener("mouseout", handleMouseOut);
      document.body.classList.remove("cursor-none");
      observer.disconnect();
      clearTimeout(mutationTimeout);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      const magneticElements = document.querySelectorAll("[data-magnetic]");
      magneticElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isTouchDevice, isVisible]);

  if (isTouchDevice) return null;

  return (
    <>
      <style>{`
        @keyframes cursor-rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .cursor-none, .cursor-none * {
          cursor: none !important;
        }
      `}</style>
      <div
        ref={cursorRef}
        id="magnetic-cursor"
        className={`fixed pointer-events-none z-[9999] will-change-transform ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          width: 30,
          height: 30,
          transform: "translate(-50%, -50%)",
          transition: "opacity 0.2s ease",
          background: `
            linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) 8px, transparent 8px) top left,
            linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) 8px, transparent 8px) bottom left,
            linear-gradient(to bottom, hsl(var(--primary)) 0%, hsl(var(--primary)) 8px, transparent 8px) top left,
            linear-gradient(to bottom, hsl(var(--primary)) 0%, hsl(var(--primary)) 8px, transparent 8px) top right,
            linear-gradient(to left, hsl(var(--primary)) 0%, hsl(var(--primary)) 8px, transparent 8px) top right,
            linear-gradient(to left, hsl(var(--primary)) 0%, hsl(var(--primary)) 8px, transparent 8px) bottom right,
            linear-gradient(to top, hsl(var(--primary)) 0%, hsl(var(--primary)) 8px, transparent 8px) bottom left,
            linear-gradient(to top, hsl(var(--primary)) 0%, hsl(var(--primary)) 8px, transparent 8px) bottom right
          `,
          backgroundSize: "8px 2px, 8px 2px, 2px 8px, 2px 8px, 8px 2px, 8px 2px, 2px 8px, 2px 8px",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div
        ref={dotRef}
        id="magnetic-cursor-dot"
        className={`fixed pointer-events-none z-[9999] w-[7px] h-[7px] rounded-full will-change-transform ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: "translate(-50%, -50%)",
          transition: "opacity 0.2s ease",
          background: "hsl(var(--primary-glow))",
          boxShadow: "0 0 10px hsl(var(--primary) / 0.5)"
        }}
      />
    </>
  );
};

export default MagneticCursor;
