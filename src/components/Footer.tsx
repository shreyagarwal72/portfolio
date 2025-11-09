import { Github, Instagram, Youtube } from 'lucide-react';

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

          {/* Social Links */}
          <nav className="flex items-center gap-4" aria-label="Social media links">
            <a 
              href="https://github.com/shreyagarwal72" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-smooth"
              aria-label="Visit Vanshu Agarwal's GitHub profile"
            >
              <Github size={20} aria-hidden="true" />
            </a>
            <a 
              href="https://instagram.com/vanshu_ag_72" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card/50 hover:bg-pink-500/20 text-muted-foreground hover:text-pink-400 transition-smooth"
              aria-label="Visit Vanshu Agarwal's Instagram profile"
            >
              <Instagram size={20} aria-hidden="true" />
            </a>
            <a 
              href="https://www.youtube.com/@nextupstudioyt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card/50 hover:bg-red-500/20 text-muted-foreground hover:text-red-400 transition-smooth"
              aria-label="Visit Vanshu Agarwal's YouTube channel"
            >
              <Youtube size={20} aria-hidden="true" />
            </a>
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
