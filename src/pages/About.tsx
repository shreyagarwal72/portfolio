import { MapPin, Mail } from 'lucide-react';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = 'About Vanshu Agarwal - Video Editor, Gamer & Musician | Creative Journey';
  }, []);

  return (
    <main className="min-h-screen pt-20 pb-16" role="main">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            ABOUT <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent glow-effect">ME</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
            Video Editor, Gamer, and Musician passionate about storytelling through visual media and creative content.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <article className="space-y-8 animate-fade-in">
            <section className="space-y-6">
              <div className="card-gradient rounded-xl p-6 backdrop-blur-sm hover:scale-[1.02] transition-smooth">
                <h2 className="text-xl font-semibold text-white mb-4">My Journey</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    <span className="text-primary font-medium">Video Editor</span> with passion for storytelling through visual media. 
                    I specialize in post-production workflows for gaming content and creative projects.
                  </p>
                  
                  <p>
                    As a <span className="text-primary font-medium">Gamer</span> and <span className="text-primary font-medium">Musician</span>, 
                    I bring a unique creative perspective to my work. I love combining my gaming experiences with video editing 
                    to create engaging content that resonates with audiences.
                  </p>

                  <p>
                    Currently pursuing my education as a <span className="text-primary font-medium">Class 11 PCM Science student</span>, 
                    I balance my academic journey with my passion for creative content creation and digital storytelling.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Info */}
            <div className="card-gradient rounded-xl p-4 backdrop-blur-sm">
              <p className="text-primary text-lg font-medium flex items-center">
                <Mail className="mr-2" size={18} aria-hidden="true" />
                <a href="mailto:sanjayvansu1973@gmail.com" className="hover:underline">sanjayvansu1973@gmail.com</a>
              </p>
            </div>

            {/* Location */}
            <address className="card-gradient rounded-xl p-4 backdrop-blur-sm not-italic">
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin size={20} className="text-primary" aria-hidden="true" />
                  <span className="font-medium">Agra, Uttar Pradesh, India</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground ml-8">
                  <span className="text-sm">106/1 Balkeshwar Road</span>
                </div>
              </div>
            </address>
          </article>

          {/* Profile Image Section */}
          <aside className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl scale-105" aria-hidden="true"></div>
              
              {/* Main card */}
              <figure className="relative card-gradient rounded-2xl p-8 transition-smooth hover:scale-105 hover:shadow-2xl">
                <div className="aspect-[3/4] bg-muted rounded-xl overflow-hidden shadow-inner">
                  <img 
                    src="https://i.postimg.cc/d3xjhmn2/IMG-20250316-WA0005.jpg" 
                    alt="Professional portrait of Vanshu Agarwal, video editor and creative content creator"
                    className="w-full h-full object-cover hover:scale-110 transition-smooth"
                    loading="lazy"
                    width="400"
                    height="533"
                  />
                </div>
                
                {/* Name overlay */}
                <figcaption className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                    <h3 className="text-white font-bold text-lg">Vanshu Agarwal</h3>
                    <p className="text-primary text-sm">Creative Mind</p>
                  </div>
                </figcaption>
              </figure>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default About;