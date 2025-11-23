import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import SearchDialog from '@/components/SearchDialog';
import ThemeToggle from '@/components/ThemeToggle';

const ScrollNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Hide on scroll down, show on scroll up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    // Add backdrop blur and shadow when scrolled
    setScrolled(latest > 20);
  });

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

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg" 
          : "bg-background/90 backdrop-blur-md border-b border-border"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex items-center justify-between h-16"
          animate={{ height: scrolled ? "56px" : "64px" }}
          transition={{ duration: 0.2 }}
        >
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-primary" aria-label="Vanshu Agarwal Home">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              VA
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="relative"
                  aria-current={isActive(item.path) ? 'page' : undefined}
                >
                  <motion.span
                    className={cn(
                      'nav-link',
                      isActive(item.path) && 'active'
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Search, Theme Toggle and Contact Info - Desktop */}
          <div className="hidden md:flex items-center space-x-4 text-sm text-muted-foreground" role="contentinfo">
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSearchOpen(true)}
                className="hover:text-primary"
                aria-label="Search"
              >
                <Search size={18} />
              </Button>
            </motion.div>
            <Phone size={16} aria-hidden="true" />
            <motion.a 
              href="tel:+919412104618" 
              className="hover:text-primary transition-smooth"
              whileHover={{ scale: 1.05 }}
            >
              9412104618
            </motion.a>
          </div>
          
          {/* Mobile - Theme Toggle and Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
              </Button>
            </motion.div>
          </div>

        </motion.div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
            role="menu"
          >
            <ul className="px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 24,
                    delay: index * 0.05
                  }}
                  role="none"
                >
                  <Link
                    to={item.path}
                    className={cn(
                      'block py-2 text-base nav-link',
                      isActive(item.path) && 'active'
                    )}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive(item.path) ? 'page' : undefined}
                    role="menuitem"
                  >
                    <motion.span
                      whileHover={{ x: 8 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="flex items-center space-x-2 text-sm text-muted-foreground pt-4 border-t border-border"
                role="none"
              >
                <Phone size={16} aria-hidden="true" />
                <a href="tel:+919412104618" className="hover:text-primary transition-smooth">9412104618</a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </div>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </motion.nav>
  );
};

export default ScrollNavigation;
