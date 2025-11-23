import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const scale = useSpring(0, {
    stiffness: 300,
    damping: 30
  });

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
        scale.set(1);
      } else {
        setIsVisible(false);
        scale.set(0);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [scale]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="fixed bottom-8 right-8 z-40 rounded-full w-14 h-14 bg-primary text-primary-foreground shadow-lg hover-glow group"
          style={{ scale }}
          aria-label="Back to top"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut"
            }}
          >
            <ArrowUp className="h-6 w-6 mx-auto" />
          </motion.div>
          
          {/* Glow ring */}
          <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
