import profilePhoto from '../assets/profile-photo.jpg';
import { MapPin, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-background to-background/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-block">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-2">
                  ABOUT <span className="text-primary glow-effect">ME</span>
                </h1>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
              </div>
              <div className="card-gradient rounded-xl p-4 backdrop-blur-sm">
                <p className="text-primary text-lg font-medium flex items-center">
                  <Mail className="mr-2" size={18} />
                  sanjayvansu1973@gmail.com
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card-gradient rounded-xl p-6 backdrop-blur-sm hover:scale-[1.02] transition-smooth">
                <h3 className="text-xl font-semibold text-white mb-4">My Journey</h3>
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
            </div>

            {/* Location */}
            <div className="card-gradient rounded-xl p-4 backdrop-blur-sm">
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin size={20} className="text-primary" />
                  <span className="font-medium">Agra, Uttar Pradesh</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground ml-8">
                  <span className="text-sm">106/1 Balkeshwar Road</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl scale-105"></div>
              
              {/* Main card */}
              <div className="relative card-gradient rounded-2xl p-8 transition-smooth hover:scale-105 hover:shadow-2xl">
                <div className="aspect-[3/4] bg-muted rounded-xl overflow-hidden shadow-inner">
                  <img 
                    src={profilePhoto} 
                    alt="Vanshu Agarwal - Video Editor, Gamer & Musician"
                    className="w-full h-full object-cover hover:scale-110 transition-smooth"
                    loading="lazy"
                  />
                </div>
                
                {/* Name overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                    <h3 className="text-white font-bold text-lg">Vanshu Agarwal</h3>
                    <p className="text-primary text-sm">Creative Mind</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;