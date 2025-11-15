import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import SearchDialog from '@/components/SearchDialog';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Skills', path: '/skills' },
    { label: 'Articles', path: '/articles' },
    { label: 'YouTube', path: '/youtube' },
    { label: 'Vanshu Bot', path: '/vanshu-bot' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-primary" aria-label="Vanshu Agarwal Home">
            VA
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    'nav-link transition-smooth hover:scale-105',
                    isActive(item.path) && 'active'
                  )}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Search and Contact Info */}
          <div className="hidden md:flex items-center space-x-4 text-sm text-muted-foreground" role="contentinfo">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchOpen(true)}
              className="hover:text-primary"
              aria-label="Search"
            >
              <Search size={18} />
            </Button>
            <Phone size={16} aria-hidden="true" />
            <a href="tel:+919412104618" className="hover:text-primary transition-smooth">9412104618</a>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            id="mobile-menu" 
            className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border animate-slide-in-right"
            role="menu"
          >
            <ul className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <li key={item.path} role="none">
                  <Link
                    to={item.path}
                    className={cn(
                      'block py-2 text-base nav-link transition-smooth hover:translate-x-2',
                      isActive(item.path) && 'active'
                    )}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive(item.path) ? 'page' : undefined}
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="flex items-center space-x-2 text-sm text-muted-foreground pt-4 border-t border-border" role="none">
                <Phone size={16} aria-hidden="true" />
                <a href="tel:+919412104618" className="hover:text-primary transition-smooth">9412104618</a>
              </li>
            </ul>
          </div>
        )}
      </div>
      
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </nav>
  );
};

export default Navigation;