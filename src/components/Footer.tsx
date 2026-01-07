import { Link } from 'react-router-dom';
import SocialMediaCards from './SocialMediaCards';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 border-t border-border backdrop-blur-sm" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Brand */}
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent mb-4">
              Vanshu Agarwal
            </h3>
            <p className="text-muted-foreground max-w-md">
              Video Editor & Creative Mind. Crafting stories through gaming content, music production, and digital creativity.
            </p>
          </div>

          {/* Social Media Cards */}
          <div className="w-full max-w-4xl">
            <SocialMediaCards />
          </div>

          {/* Quick Links */}
          <nav className="flex items-center gap-6 text-sm" aria-label="Footer navigation">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105">
              Contact
            </Link>
          </nav>

          {/* Copyright */}
          <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm w-full">
            <p>© {currentYear} Vanshu Agarwal. All rights reserved. Built with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
