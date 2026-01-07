import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '@/components/ThemeToggle';

interface NavigationProps {
  onLogoClick?: () => void;
}

const Navigation = ({ onLogoClick }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Skills', path: '/skills' },
    { label: 'Articles', path: '/articles' },
    { label: 'Process', path: '/process' },
    { label: 'About', path: '/about' },
    { label: 'YouTube', path: '/youtube' },
    { label: 'Vanshu Bot', path: '/vanshu-bot' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogoClick = (e: React.MouseEvent) => {
    if (onLogoClick && location.pathname === '/') {
      e.preventDefault();
      onLogoClick();
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border" 
      role="navigation" 
      aria-label="Main navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              to="/" 
              className="text-xl font-bold text-primary btn-glow-pulse" 
              aria-label="Replay intro animation"
              onClick={handleLogoClick}
              title="Click to replay intro"
            >
              VA
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Link
                  to={item.path}
                  className={cn(
                    'nav-link transition-smooth hover-underline',
                    isActive(item.path) && 'active'
                  )}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Theme Toggle and Contact Info */}
          <motion.div 
            className="hidden md:flex items-center space-x-4 text-sm text-muted-foreground" 
            role="contentinfo"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <ThemeToggle />
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Phone size={16} aria-hidden="true" />
              <a href="tel:+919412104618" className="hover:text-primary transition-smooth">9412104618</a>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              id="mobile-menu" 
              className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border"
              role="menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <ul className="px-4 py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.path} 
                    role="none"
                    variants={menuItemVariants}
                    custom={index}
                  >
                    <Link
                      to={item.path}
                      className={cn(
                        'block py-2 text-base nav-link transition-smooth',
                        isActive(item.path) && 'active'
                      )}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive(item.path) ? 'page' : undefined}
                      role="menuitem"
                    >
                      <motion.span
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="inline-block"
                      >
                        {item.label}
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
                <motion.li 
                  className="flex items-center justify-between pt-4 border-t border-border" 
                  role="none"
                  variants={menuItemVariants}
                >
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Phone size={16} aria-hidden="true" />
                    <a href="tel:+919412104618" className="hover:text-primary transition-smooth">9412104618</a>
                  </div>
                  <ThemeToggle />
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;