import { useRef, useEffect } from 'react';
import { Instagram, Github, Linkedin, Link } from 'lucide-react';

interface SocialCard {
  icon: React.ReactNode;
  name: string;
  action: string;
  href: string;
  color: string;
}

const socialCards: SocialCard[] = [
  {
    icon: <Instagram className="w-16 h-16" />,
    name: 'Instagram',
    action: 'Follow me',
    href: 'https://www.instagram.com/vanshu_bhai_1973/',
    color: '348 80% 60%',
  },
  {
    icon: <Github className="w-16 h-16" />,
    name: 'Github',
    action: 'Follow me',
    href: 'https://github.com/vanshu778',
    color: '0 0% 100%',
  },
  {
    icon: <Linkedin className="w-16 h-16" />,
    name: 'LinkedIn',
    action: 'Connect',
    href: 'https://in.linkedin.com/in/vanshu-agarwal-954262330',
    color: '220 100% 50%',
  },
];

const SocialMediaCards = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardsContainer = cardsRef.current;
    if (!cardsContainer) return;

    const handleMouseMove = (e: MouseEvent) => {
      const cards = cardsContainer.querySelectorAll('.social-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    cardsContainer.addEventListener('mousemove', handleMouseMove);
    return () => cardsContainer.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={cardsRef}
      className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full social-cards-container"
    >
      {socialCards.map((card, index) => (
        <div
          key={card.name}
          className="social-card relative min-h-[280px] sm:min-h-[320px] rounded-xl overflow-hidden group"
          style={{ '--card-color': card.color } as React.CSSProperties}
        >
          {/* Border glow effect - desktop only */}
          <div className="absolute inset-0 rounded-xl bg-white/10 hidden md:block md:group-hover:bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),hsl(var(--card-color)/1),rgba(255,255,255,0.12)_40%)] transition-all duration-300" />
          
          {/* Ambient glow - desktop only */}
          <div className="absolute inset-0 rounded-xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(500px_circle_at_var(--mouse-x)_var(--mouse-y),hsl(var(--card-color)/0.35),transparent_40%)] z-10" />
          
          {/* Card content */}
          <div className="absolute inset-[1px] bg-[#131315] rounded-xl flex flex-col items-center justify-center gap-4 p-6">
            <div className="text-white/50">{card.icon}</div>
            <h3 className="text-xl font-semibold text-white">{card.name}</h3>
            <a
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all z-20 relative"
            >
              <Link className="w-4 h-4" />
              <span>{card.action}</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaCards;
