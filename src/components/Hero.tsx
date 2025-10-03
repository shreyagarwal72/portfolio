import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroWorkspace from '@/assets/hero-workspace.jpg';
import { useEffect } from 'react';

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
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroWorkspace})` }}
          role="img"
          aria-label="Creative workspace background with editing equipment"
        >
          <div className="absolute inset-0 hero-gradient opacity-80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Main Title */}
            <header className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                <span className="block bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent text-glow">VANSHU</span>
                <span className="block text-white">AGARWAL</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light tracking-wide" role="doc-subtitle">
                Video Editor & Creative Mind
              </p>
            </header>

            {/* CTA Buttons */}
            <nav className="flex flex-col sm:flex-row gap-4 justify-center items-center" aria-label="Main navigation actions">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium"
                asChild
              >
                <Link to="/cv" aria-label="Download or view Vanshu Agarwal's CV and resume">
                  <Download className="mr-2" size={20} aria-hidden="true" />
                  Open CV
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto border-white/20 bg-white/10 hover:bg-white/20 text-white px-8 py-3 text-lg backdrop-blur-sm"
                asChild
              >
                <Link to="/portfolio" aria-label="View Vanshu Agarwal's creative portfolio and projects">View Portfolio</Link>
              </Button>
            </nav>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;