import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
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

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50" 
      role="navigation" 
      aria-label="Main navigation"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Desktop Navigation - Full width top bar */}
      <div className="hidden lg:block">
        <div className="bg-background/80 backdrop-blur-xl border-b border-border/40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="select-none flex-shrink-0">
                <Link 
                  to="/" 
                  className="flex items-center gap-2 text-xl font-bold touch-manipulation" 
                  aria-label="Go to homepage"
                  onClick={handleLogoClick}
                  title="Click to replay intro"
                  draggable={false}
                >
                  <span className="text-2xl bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent tracking-tight font-black">
                    VA
                  </span>
                </Link>
              </motion.div>

              {/* Center Nav Links */}
              <div className="flex items-center gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      'relative px-3.5 py-2 text-[13px] font-medium uppercase tracking-[0.12em] transition-all duration-300 whitespace-nowrap',
                      'hover:text-primary',
                      isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                    )}
                    aria-current={isActive(item.path) ? 'page' : undefined}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeDesktopNav"
                        className="absolute left-3.5 right-3.5 -bottom-0.5 h-px bg-primary"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                ))}
              </div>

              {/* Right controls */}
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <motion.a 
                  href="tel:+919412104618"
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20"
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 25px hsl(var(--primary) / 0.35)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Phone size={14} />
                  <span>Let's Talk</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="mx-3 mt-3">
          <div className="relative bg-background/60 backdrop-blur-xl rounded-2xl border border-border/50 shadow-lg shadow-primary/5">
            <div className="relative px-4">
              <div className="flex items-center justify-between h-14">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="select-none flex-shrink-0">
                  <Link 
                    to="/" 
                    className="flex items-center gap-2 text-xl font-bold touch-manipulation" 
                    aria-label="Go to homepage"
                    onClick={handleLogoClick}
                    title="Click to replay intro"
                    draggable={false}
                  >
                    <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent font-black">
                      VA
                    </span>
                  </Link>
                </motion.div>

                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <motion.button
                    className="relative p-2.5 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                  >
                    <AnimatePresence mode="wait">
                      {isOpen ? (
                        <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                          <X size={20} className="text-foreground" />
                        </motion.div>
                      ) : (
                        <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                          <Menu size={20} className="text-foreground" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="mx-3 mt-2 bg-background/80 backdrop-blur-xl rounded-2xl border border-border/50 shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-4">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        className={cn(
                          'flex items-center justify-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300',
                          isActive(item.path) 
                            ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' 
                            : 'bg-muted/50 text-foreground hover:bg-muted'
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  className="flex items-center justify-between pt-4 border-t border-border/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <a 
                    href="tel:+919412104618" 
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone size={16} />
                    <span>9412104618</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
