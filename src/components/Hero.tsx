import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroWorkspace from '@/assets/hero-workspace.jpg';

const Hero = () => {
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              <span className="block">VANSHU</span>
              <span className="block text-primary glow-effect">AGARWAL</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
              Video Editor & Creative Mind
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium"
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
              className="w-full sm:w-auto border-white/20 bg-white/10 hover:bg-white/20 text-white px-8 py-3 text-lg backdrop-blur-sm"
              asChild
            >
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;