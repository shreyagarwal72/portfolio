import { Github, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 border-t border-border backdrop-blur-sm" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-primary">
              Vanshu Agarwal
            </Link>
            <p className="text-sm text-muted-foreground">
              Video Editor, Content Creator & Musician creating engaging digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="space-y-4" aria-label="Footer navigation">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Home</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-smooth">About</Link></li>
              <li><Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Portfolio</Link></li>
              <li><Link to="/skills" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Skills</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Contact</Link></li>
            </ul>
          </nav>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Video Editing</li>
              <li>Content Creation</li>
              <li>Music Production</li>
              <li>Gaming Content</li>
              <li>Digital Storytelling</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
                <a href="mailto:sanjayvansu1973@gmail.com" className="hover:text-primary transition-smooth break-all">
                  sanjayvansu1973@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary flex-shrink-0" aria-hidden="true" />
                <a href="tel:+919412104618" className="hover:text-primary transition-smooth">
                  +91-9412104618
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
                <span>Agra, Uttar Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Media */}
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
            <p className="text-sm text-muted-foreground">
              © {currentYear} Vanshu Agarwal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
