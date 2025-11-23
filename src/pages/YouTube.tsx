import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import VideoPlayer from '@/components/VideoPlayer';

const YouTube = () => {
  const [subscriberCount, setSubscriberCount] = useState('Loading...');
  const [totalViews, setTotalViews] = useState('Loading...');

  useEffect(() => {
    // Set page title for SEO
    document.title = 'YouTube Highlights - Vanshu Agarwal | Music Videos & Creative Content';
    
    // Add structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "VideoGallery",
      "name": "Vanshu Agarwal YouTube Highlights",
      "description": "Featured YouTube videos including original rap songs, creative edits, and gaming content",
      "creator": {
        "@type": "Person",
        "name": "Vanshu Agarwal"
      }
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Fetch YouTube Channel Stats
    const fetchChannelStats = async () => {
      try {
        const apiKey = "AIzaSyCM7WK3KYdLFh2xPOFL8amaFxgVCg3etU4";
        const channelId = "UCFEyuiIys7KoiZkczq4erJw";
        
        const res = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`);
        const data = await res.json();
        
        if (data?.items?.length > 0) {
          const stats = data.items[0].statistics;
          setSubscriberCount(Number(stats.subscriberCount).toLocaleString());
          setTotalViews(Number(stats.viewCount).toLocaleString());
        } else {
          setSubscriberCount("Not found");
          setTotalViews("Not found");
        }
      } catch {
        setSubscriberCount("Error");
        setTotalViews("Error");
      }
    };

    fetchChannelStats();
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            YOUTUBE <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">HIGHLIGHTS</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
            Explore top YouTube content featuring original rap songs, creative edits, and engaging videos from Nextup Studio.
          </p>
        </div>

        {/* Channel Stats */}
        <section className="mb-8 p-6 bg-card border border-border rounded-lg card-gradient animate-fade-in hover-lift transition-smooth">
          <div className="space-y-2">
            <p className="text-lg font-medium text-foreground">
              Subscribers: <span className="text-primary font-bold">{subscriberCount}</span>
            </p>
            <p className="text-lg font-medium text-foreground">
              Total Views: <span className="text-primary font-bold">{totalViews}</span>
            </p>
          </div>
        </section>

        {/* Videos Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4 animate-fade-in hover-lift transition-smooth">
            <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-smooth">
              <VideoPlayer
                src="/videos/fire-within.mp4"
                poster="/images/fire-within-thumb.jpg"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">🔥 Fire Within</h3>
              <p className="text-muted-foreground">A powerful original rap track by Vanshu</p>
            </div>
          </div>

          <div className="space-y-4 animate-fade-in hover-lift transition-smooth" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-smooth">
              <VideoPlayer
                src="/videos/raat-ka-banda.mp4"
                poster="/images/raat-ka-banda-thumb.jpg"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">🎵 Raat Ka Banda</h3>
              <p className="text-muted-foreground">Cinematic visuals with strong vibes</p>
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg mb-6 text-muted-foreground">
            These are some of my top works. Stay tuned!
          </p>
          <Button 
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold"
            asChild
          >
            <a 
              href="https://www.youtube.com/@nextupstudioyt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <svg 
                className="w-6 h-6 mr-3" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default YouTube;