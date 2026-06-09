import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const SubwaySurfers = () => {
  useEffect(() => {
    document.title = '🥚 Secret Arcade — Subway Surfers';
  }, []);

  return (
    <div className="fixed inset-0 z-[200] bg-black flex flex-col">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-primary/20 via-background/80 to-accent/20 backdrop-blur-md border-b border-primary/20"
      >
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} /> Exit
        </Link>
        <span className="text-xs font-semibold tracking-widest bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          🥚 SECRET ARCADE • SUBWAY SURFERS
        </span>
        <span className="text-xs text-muted-foreground hidden sm:block">Konami code unlocked</span>
      </motion.div>
      <motion.iframe
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        src="/games/subway-surfers/index.html"
        title="Subway Surfers"
        className="flex-1 w-full border-0"
        allow="fullscreen; autoplay; gamepad; accelerometer; gyroscope"
      />
    </div>
  );
};

export default SubwaySurfers;
