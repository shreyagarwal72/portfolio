import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Floating3D } from '@/components/Floating3D';
import heroWorkspace from '@/assets/hero-workspace.jpg';
import { useEffect } from 'react';
import ElectricButton from '@/components/ElectricButton';

const Hero = () => {
  useEffect(() => {
    // Set page title and meta tags for SEO
    document.title = 'Vanshu Agarwal - Video Editor, Gamer & Musician | Creative Portfolio';
    
    // Add meta description for homepage
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional video editor and creative content creator specializing in gaming content, music production, and digital storytelling. View portfolio of original tracks, Minecraft projects, and creative videos.');
    }
    
    // Add structured data for homepage
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "name": "Vanshu Agarwal - Creative Portfolio",
      "description": "Professional video editor, content creator, musician, and gamer",
      "mainEntity": {
        "@type": "Person",
        "name": "Vanshu Agarwal",
        "jobTitle": "Video Editor, Content Creator, Musician",
        "url": "https://vanshubhai.vercel.app",
        "sameAs": [
          "https://github.com/shreyagarwal72",
          "https://instagram.com/vanshu_ag_72",
          "https://youtube.com/@nextupstudioyt"
        ],
        "knowsAbout": ["Video Editing", "Content Creation", "Music Production", "Gaming", "Web Development"]
      }
    });
    document.head.appendChild(script);
    
    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <main role="main">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background Animation */}
        <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
          <Floating3D className="w-full h-full" />
        </div>
        
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-slow z-0"
          style={{ 
            backgroundImage: `url(${heroWorkspace})`,
          }}
          role="img"
          aria-label="Creative workspace background with editing equipment"
        >
          <div className="absolute inset-0 hero-gradient opacity-80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            {/* Main Title */}
            <header className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight animate-scale-in">
                <span className="block bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent text-glow">VANSHU</span>
                <span className="block text-white">AGARWAL</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light tracking-wide animate-fade-in" role="doc-subtitle" style={{ animationDelay: '0.2s' }}>
                Video Editor & Creative Mind
              </p>
            </header>

            {/* CTA Buttons */}
            <nav className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" aria-label="Main navigation actions" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium hover-lift transition-smooth"
                asChild
              >
                <Link to="/cv" aria-label="Download or view Vanshu Agarwal's CV and resume">
                  <Download className="mr-2" size={20} aria-hidden="true" />
                  Open CV
                </Link>
              </Button>
              <ElectricButton to="/portfolio" text="View Portfolio" />
            </nav>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;