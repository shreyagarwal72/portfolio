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

      {/* Mobile Floating Elements */}
      <div className="absolute inset-0 lg:hidden">
        <div className="absolute top-20 left-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-8 w-16 h-16 bg-accent/30 rounded-full blur-lg animate-bounce delay-300" />
        <div className="absolute bottom-32 left-8 w-12 h-12 bg-secondary/25 rounded-full blur-md animate-pulse delay-700" />
        <div className="absolute bottom-48 right-4 w-14 h-14 bg-primary/15 rounded-full blur-lg animate-bounce delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 lg:space-y-12">
          {/* Main Title */}
          <div className="space-y-4 lg:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight animate-fade-in">
              <span className="block animate-[slide-in-right_0.8s_ease-out]">VANSHU</span>
              <span className="block text-primary glow-effect animate-[slide-in-right_0.8s_ease-out_0.3s] animation-fill-mode-both">AGARWAL</span>
            </h1>
            <div className="relative">
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light tracking-wide animate-fade-in animation-delay-600">
                Video Editor & Creative Mind
              </p>
              {/* Mobile decorative line */}
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4 lg:hidden animate-[scale-in_0.8s_ease-out_0.8s] animation-fill-mode-both" />
            </div>
          </div>

          {/* Mobile Feature Cards */}
          <div className="lg:hidden grid grid-cols-2 gap-3 max-w-sm mx-auto animate-fade-in animation-delay-1000">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-primary text-xl mb-1">🎬</div>
              <p className="text-xs text-white font-medium">Video Editing</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-primary text-xl mb-1">✨</div>
              <p className="text-xs text-white font-medium">Creative Design</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-primary text-xl mb-1">🎮</div>
              <p className="text-xs text-white font-medium">Gaming Content</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-primary text-xl mb-1">🤖</div>
              <p className="text-xs text-white font-medium">AI Generation</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-1200">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium glow-effect transition-smooth hover:scale-105"
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
              className="w-full sm:w-auto border-white/20 bg-white/10 hover:bg-white/20 text-white px-8 py-3 text-lg backdrop-blur-sm transition-smooth hover:scale-105"
              asChild
            >
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Social Media Links - Desktop */}
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

      {/* Mobile Social Links */}
      <div className="absolute bottom-4 left-0 right-0 lg:hidden">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.slice(0, 4).map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 text-white/70 hover:text-primary hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label={social.label}
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
        {/* Mobile Scroll Indicator */}
        <div className="flex justify-center">
          <div className="animate-bounce">
            <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center bg-white/5 backdrop-blur-sm">
              <div className="w-0.5 h-2 bg-white/50 rounded-full mt-1.5 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Desktop */}
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