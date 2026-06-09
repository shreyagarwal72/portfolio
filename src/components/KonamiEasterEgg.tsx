import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'sonner';

// Konami code: ↑ ↑ ↓ ↓ ← → ← → B A
const KONAMI = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a',
];

const SECRET_WORD = 'surf';

const KonamiEasterEgg = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const keys = useRef<string[]>([]);
  const buffer = useRef<string>('');

  useEffect(() => {
    if (location.pathname === '/play/subway-surfers') return;

    const trigger = () => {
      toast.success('🎮 Easter egg unlocked! Loading Subway Surfers...', {
        duration: 2000,
      });
      setTimeout(() => navigate('/play/subway-surfers'), 600);
    };

    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target && /input|textarea/i.test(target.tagName)) return;

      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;

      // Konami sequence
      keys.current.push(key);
      if (keys.current.length > KONAMI.length) keys.current.shift();
      if (keys.current.join(',') === KONAMI.join(',')) {
        keys.current = [];
        trigger();
        return;
      }

      // Secret word "surf"
      if (key.length === 1) {
        buffer.current = (buffer.current + key).slice(-SECRET_WORD.length);
        if (buffer.current === SECRET_WORD) {
          buffer.current = '';
          trigger();
        }
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [navigate, location.pathname]);

  return null;
};

export default KonamiEasterEgg;
