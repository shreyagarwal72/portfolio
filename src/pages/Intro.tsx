import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { Play, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react';
import './Intro.css';

// Import AI-generated slide images
import introSlide1 from '@/assets/intro-slide-1.jpg';
import introSlide2 from '@/assets/intro-slide-2.jpg';
import introSlide3 from '@/assets/intro-slide-3.jpg';
import introSlide4 from '@/assets/intro-slide-4.jpg';
import introSlide5 from '@/assets/intro-slide-5.jpg';
import introSlide6 from '@/assets/intro-slide-6.jpg';

interface IntroProps {
  onEnter: () => void;
  onSkip: () => void;
}

const data = [
  {
    place: 'Creative Professional',
    title: 'VANSHU',
    title2: 'AGARWAL',
    description: 'A passionate video editor and content creator from India, specializing in cinematic edits, music production, and web development. Let me bring your vision to life with creativity and precision.',
    image: introSlide1
  },
  {
    place: 'Professional Services',
    title: 'VIDEO',
    title2: 'EDITING',
    description: 'Transform your raw footage into stunning visual stories. From YouTube videos to cinematic shorts, I deliver professional edits with seamless transitions, color grading, and sound design.',
    image: introSlide2
  },
  {
    place: 'Creative Portfolio',
    title: 'FEATURED',
    title2: 'PROJECTS',
    description: 'Explore my collection of work including gaming content, music videos, promotional material, and web development projects. Each project is crafted with attention to detail and creative excellence.',
    image: introSlide3
  },
  {
    place: 'Technical Expertise',
    title: 'SKILLS &',
    title2: 'TOOLS',
    description: 'Proficient in Adobe Premiere Pro, After Effects, DaVinci Resolve, and modern web technologies like React and TypeScript. Always learning and adapting to new creative tools.',
    image: introSlide4
  },
  {
    place: 'Client Success',
    title: 'TRUSTED',
    title2: 'REVIEWS',
    description: '"Exceptional quality and attention to detail. Vanshu transformed our content beyond expectations." - Working with amazing creators and businesses to deliver outstanding results.',
    image: introSlide5
  },
  {
    place: 'Get In Touch',
    title: 'LETS',
    title2: 'CONNECT',
    description: 'Ready to start your next project? Whether you need video editing, content creation, or web development, I\'m here to help bring your ideas to reality. Let\'s create something amazing together.',
    image: introSlide6
  },
];

const Intro = ({ onEnter, onSkip }: IntroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const orderRef = useRef([0, 1, 2, 3, 4, 5]);
  const detailsEvenRef = useRef(true);
  const loopIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isInitializedRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const transitionRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<number>(0);
  
  // Sound effect URLs (royalty-free whoosh sounds)
  const whooshSound = 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3';
  const enterSound = 'https://assets.mixkit.co/active_storage/sfx/1111/1111-preview.mp3';
  
  const playWhoosh = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {});
    }
  }, []);
  
  const handleEnterWithTransition = useCallback(() => {
    // Play enter sound
    const enterAudio = new Audio(enterSound);
    enterAudio.volume = 0.4;
    enterAudio.play().catch(() => {});
    
    // Animate transition
    if (transitionRef.current) {
      gsap.to(transitionRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {
          onEnter();
        }
      });
    } else {
      onEnter();
    }
  }, [onEnter]);
  
  const handleSkipWithTransition = useCallback(() => {
    if (transitionRef.current) {
      gsap.to(transitionRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.inOut',
        onComplete: () => {
          onSkip();
        }
      });
    } else {
      onSkip();
    }
  }, [onSkip]);

  const getCard = (index: number) => `#card${index}`;
  const getCardContent = (index: number) => `#card-content-${index}`;
  const getSliderItem = (index: number) => `#slide-item-${index}`;

  const step = useCallback(() => {
    return new Promise<void>((resolve) => {
      const order = orderRef.current;
      order.push(order.shift()!);
      detailsEvenRef.current = !detailsEvenRef.current;
      
      playWhoosh();

      const detailsActive = detailsEvenRef.current ? "#details-even" : "#details-odd";
      const detailsInactive = detailsEvenRef.current ? "#details-odd" : "#details-even";

      const { innerHeight: height, innerWidth: width } = window;
      const offsetTop = height - 430;
      const offsetLeft = width - 830;
      const cardWidth = 200;
      const cardHeight = 300;
      const gap = 40;
      const numberSize = 50;
      const ease = "sine.inOut";

      const activeTextEl = document.querySelector(`${detailsActive} .place-box .text`);
      const activeTitle1El = document.querySelector(`${detailsActive} .title-1`);
      const activeTitle2El = document.querySelector(`${detailsActive} .title-2`);
      const activeDescEl = document.querySelector(`${detailsActive} .desc`);

      if (activeTextEl) activeTextEl.textContent = data[order[0]].place;
      if (activeTitle1El) activeTitle1El.textContent = data[order[0]].title;
      if (activeTitle2El) activeTitle2El.textContent = data[order[0]].title2;
      if (activeDescEl) activeDescEl.textContent = data[order[0]].description;

      gsap.set(detailsActive, { zIndex: 22 });
      gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });
      gsap.to(`${detailsActive} .text`, { y: 0, delay: 0.1, duration: 0.7, ease });
      gsap.to(`${detailsActive} .title-1`, { y: 0, delay: 0.15, duration: 0.7, ease });
      gsap.to(`${detailsActive} .title-2`, { y: 0, delay: 0.15, duration: 0.7, ease });
      gsap.to(`${detailsActive} .desc`, { y: 0, delay: 0.3, duration: 0.4, ease });
      gsap.to(`${detailsActive} .cta`, { y: 0, delay: 0.35, duration: 0.4, onComplete: resolve, ease });
      gsap.set(detailsInactive, { zIndex: 12 });

      const [active, ...rest] = order;
      const prv = rest[rest.length - 1];

      gsap.set(getCard(prv), { zIndex: 10 });
      gsap.set(getCard(active), { zIndex: 20 });
      gsap.to(getCard(prv), { scale: 1.5, ease });

      gsap.to(getCardContent(active), { y: offsetTop + cardHeight - 10, opacity: 0, duration: 0.3, ease });
      gsap.to(getSliderItem(active), { x: 0, ease });
      gsap.to(getSliderItem(prv), { x: -numberSize, ease });
      gsap.to(".progress-sub-foreground", { width: 500 * (1 / order.length) * (active + 1), ease });

      gsap.to(getCard(active), {
        x: 0,
        y: 0,
        ease,
        width: window.innerWidth,
        height: window.innerHeight,
        borderRadius: 0,
        onComplete: () => {
          const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
          gsap.set(getCard(prv), {
            x: xNew,
            y: offsetTop,
            width: cardWidth,
            height: cardHeight,
            zIndex: 30,
            borderRadius: 10,
            scale: 1,
          });

          gsap.set(getCardContent(prv), {
            x: xNew,
            y: offsetTop + cardHeight - 100,
            opacity: 1,
            zIndex: 40,
          });
          gsap.set(getSliderItem(prv), { x: rest.length * numberSize });

          gsap.set(detailsInactive, { opacity: 0 });
          gsap.set(`${detailsInactive} .text`, { y: 100 });
          gsap.set(`${detailsInactive} .title-1`, { y: 100 });
          gsap.set(`${detailsInactive} .title-2`, { y: 100 });
          gsap.set(`${detailsInactive} .desc`, { y: 50 });
          gsap.set(`${detailsInactive} .cta`, { y: 60 });
        },
      });

      rest.forEach((i, index) => {
        if (i !== prv) {
          const xNew = offsetLeft + index * (cardWidth + gap);
          gsap.set(getCard(i), { zIndex: 30 });
          gsap.to(getCard(i), {
            x: xNew,
            y: offsetTop,
            width: cardWidth,
            height: cardHeight,
            ease,
            delay: 0.1 * (index + 1),
          });

          gsap.to(getCardContent(i), {
            x: xNew,
            y: offsetTop + cardHeight - 100,
            opacity: 1,
            zIndex: 40,
            ease,
            delay: 0.1 * (index + 1),
          });
          gsap.to(getSliderItem(i), { x: (index + 1) * numberSize, ease });
        }
      });
    });
  }, [playWhoosh]);

  const loop = useCallback(async () => {
    await gsap.to(".indicator", { x: 0, duration: 2 });
    await gsap.to(".indicator", { x: window.innerWidth, duration: 0.8, delay: 0.3 });
    gsap.set(".indicator", { x: -window.innerWidth });
    await step();
  }, [step]);

  const init = useCallback(() => {
    if (isInitializedRef.current) return;
    isInitializedRef.current = true;

    const order = orderRef.current;
    const [active, ...rest] = order;
    const detailsActive = detailsEvenRef.current ? "#details-even" : "#details-odd";
    const detailsInactive = detailsEvenRef.current ? "#details-odd" : "#details-even";
    const { innerHeight: height, innerWidth: width } = window;
    const offsetTop = height - 430;
    const offsetLeft = width - 830;
    const cardWidth = 200;
    const cardHeight = 300;
    const gap = 40;
    const numberSize = 50;
    const ease = "sine.inOut";

    gsap.set("#pagination", {
      top: offsetTop + 330,
      left: offsetLeft,
      y: 200,
      opacity: 0,
      zIndex: 60,
    });
    gsap.set(".intro-nav", { y: -200, opacity: 0 });
    gsap.set(".intro-actions", { y: 100, opacity: 0 });

    gsap.set(getCard(active), {
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    });
    gsap.set(getCardContent(active), { x: 0, y: 0, opacity: 0 });
    gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 });
    gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
    gsap.set(`${detailsInactive} .text`, { y: 100 });
    gsap.set(`${detailsInactive} .title-1`, { y: 100 });
    gsap.set(`${detailsInactive} .title-2`, { y: 100 });
    gsap.set(`${detailsInactive} .desc`, { y: 50 });
    gsap.set(`${detailsInactive} .cta`, { y: 60 });

    gsap.set(".progress-sub-foreground", {
      width: 500 * (1 / order.length) * (active + 1),
    });

    rest.forEach((i, index) => {
      gsap.set(getCard(i), {
        x: offsetLeft + 400 + index * (cardWidth + gap),
        y: offsetTop,
        width: cardWidth,
        height: cardHeight,
        zIndex: 30,
        borderRadius: 10,
      });
      gsap.set(getCardContent(i), {
        x: offsetLeft + 400 + index * (cardWidth + gap),
        zIndex: 40,
        y: offsetTop + cardHeight - 100,
      });
      gsap.set(getSliderItem(i), { x: (index + 1) * numberSize });
    });

    gsap.set(".indicator", { x: -window.innerWidth });

    const startDelay = 0.6;

    gsap.to(".cover", {
      x: width + 400,
      delay: 0.5,
      ease,
      onComplete: () => {
        setTimeout(() => {
          const runLoop = async () => {
            await loop();
            runLoop();
          };
          runLoop();
        }, 500);
      },
    });

    rest.forEach((i, index) => {
      gsap.to(getCard(i), {
        x: offsetLeft + index * (cardWidth + gap),
        zIndex: 30,
        ease,
        delay: startDelay,
      });
      gsap.to(getCardContent(i), {
        x: offsetLeft + index * (cardWidth + gap),
        zIndex: 40,
        ease,
        delay: startDelay,
      });
    });

    gsap.to("#pagination", { y: 0, opacity: 1, ease, delay: startDelay });
    gsap.to(".intro-nav", { y: 0, opacity: 1, ease, delay: startDelay });
    gsap.to(".intro-actions", { y: 0, opacity: 1, ease, delay: startDelay + 0.3 });
    gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay });
  }, [loop]);

  useEffect(() => {
    // Create audio element for sound effects
    audioRef.current = new Audio(whooshSound);
    audioRef.current.preload = 'auto';

    // Load images first, then initialize
    const loadImages = async () => {
      const promises = data.map(({ image }) => {
        return new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = reject;
          img.src = image;
        });
      });
      
      try {
        await Promise.all(promises);
        init();
      } catch (error) {
        console.error("One or more images failed to load", error);
        init(); // Initialize anyway
      }
    };

    // Touch support for mobile
    const handleTouchStart = (e: TouchEvent) => {
      touchStartRef.current = e.touches[0].clientX;
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      const touchEnd = e.changedTouches[0].clientX;
      const diff = touchStartRef.current - touchEnd;
      
      // Swipe left to go next
      if (diff > 50) {
        step();
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('touchstart', handleTouchStart, { passive: true });
      container.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    loadImages();

    return () => {
      if (loopIntervalRef.current) {
        clearInterval(loopIntervalRef.current);
      }
      gsap.killTweensOf("*");
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [init, step]);

  return (
    <div className="intro-page" ref={containerRef}>
      {/* Audio preload */}
      <audio src={whooshSound} preload="auto" style={{ display: 'none' }} />
      
      {/* Progress Indicator */}
      <div className="indicator"></div>

      {/* Navigation */}
      <nav className="intro-nav">
        <div>
          <span className="logo-text">VA</span>
        </div>
        <div>
          <span style={{ opacity: 0.7 }}>Vanshu Agarwal</span>
        </div>
      </nav>

      {/* Cards Container */}
      <div id="demo">
        {data.map((item, index) => (
          <div 
            key={`card-${index}`}
            className="card" 
            id={`card${index}`} 
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
        ))}
        {data.map((item, index) => (
          <div key={`content-${index}`} className="card-content" id={`card-content-${index}`}>
            <div className="content-start"></div>
            <div className="content-place">{item.place}</div>
            <div className="content-title-1">{item.title}</div>
            <div className="content-title-2">{item.title2}</div>
          </div>
        ))}
      </div>

      {/* Details Even */}
      <div className="details" id="details-even">
        <div className="place-box">
          <div className="text">{data[0].place}</div>
        </div>
        <div className="title-box-1"><div className="title-1">{data[0].title}</div></div>
        <div className="title-box-2"><div className="title-2">{data[0].title2}</div></div>
        <div className="desc">{data[0].description}</div>
        <div className="cta">
          <button className="bookmark">
            <Bookmark size={20} />
          </button>
          <button className="discover" onClick={handleEnterWithTransition}>Explore Portfolio</button>
        </div>
      </div>

      {/* Details Odd */}
      <div className="details" id="details-odd">
        <div className="place-box">
          <div className="text">{data[0].place}</div>
        </div>
        <div className="title-box-1"><div className="title-1">{data[0].title}</div></div>
        <div className="title-box-2"><div className="title-2">{data[0].title2}</div></div>
        <div className="desc">{data[0].description}</div>
        <div className="cta">
          <button className="bookmark">
            <Bookmark size={20} />
          </button>
          <button className="discover" onClick={handleEnterWithTransition}>Explore Portfolio</button>
        </div>
      </div>

      {/* Pagination */}
      <div className="pagination" id="pagination">
        <div className="arrow arrow-left">
          <ChevronLeft />
        </div>
        <div className="arrow arrow-right" onClick={() => step()}>
          <ChevronRight />
        </div>
        <div className="progress-sub-container">
          <div className="progress-sub-background">
            <div className="progress-sub-foreground"></div>
          </div>
        </div>
        <div className="slide-numbers" id="slide-numbers">
          {data.map((_, index) => (
            <div key={index} className="item" id={`slide-item-${index}`}>{index + 1}</div>
          ))}
        </div>
      </div>

      {/* Enter/Skip Actions */}
      <div className="intro-actions">
        <button className="enter-btn" onClick={handleEnterWithTransition}>
          <Play size={16} style={{ marginRight: 8, display: 'inline' }} />
          Enter Website
        </button>
        <button className="skip-btn" onClick={handleSkipWithTransition}>
          Skip Intro
        </button>
      </div>

      {/* Mobile swipe hint */}
      <div className="mobile-swipe-hint">
        <ChevronLeft size={16} />
        <span>Swipe to explore</span>
        <ChevronRight size={16} />
      </div>

      {/* Cover */}
      <div className="cover"></div>
      
      {/* Page Transition Overlay */}
      <div className="page-transition-overlay" ref={transitionRef}></div>
    </div>
  );
};

export default Intro;
