import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroWorkspace from '@/assets/hero-workspace.jpg';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroWorkspace})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              VANSHU
              <br />
              <span className="text-primary glow-effect">AGARWAL</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light tracking-wide">
              Video Editor & Creative Mind
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium glow-effect transition-smooth"
              asChild
            >
              <Link to="/cv">
                <Download className="mr-2" size={20} />
                Open CV
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/20 bg-white/10 hover:bg-white/20 text-white px-8 py-3 text-lg backdrop-blur-sm transition-smooth"
              asChild
            >
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="absolute bottom-8 left-8 hidden lg:flex flex-col space-y-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            className="text-white/70 hover:text-primary transition-colors duration-200"
            aria-label={social.label}
          >
            <social.icon size={24} />
          </a>
        ))}
        <div className="w-px h-16 bg-white/30 mx-auto mt-4" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;