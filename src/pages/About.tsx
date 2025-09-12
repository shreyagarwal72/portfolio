import { MapPin, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-white">
                ABOUT
              </h1>
              <p className="text-primary text-lg">
                sanjayvansu1973@gmail.com
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Video Editor with over 5 years of experience specializing in post-production workflows for 
                commercial and creative projects.
              </p>
              
              <p>
                I bring stories to life through expert video editing, color grading, and motion graphics. 
                My experience spans across various industries including advertising, corporate communications, 
                and digital content creation. I work with cutting-edge tools and techniques to deliver 
                high-quality visual narratives that engage and inspire audiences.
              </p>

              <p>
                My greatest strength is transforming raw footage into compelling stories, whether for 
                social media campaigns, documentaries, or commercial advertisements. I thrive on 
                collaborative projects that push creative boundaries and challenge conventional 
                storytelling methods.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-3 text-muted-foreground">
              <MapPin size={20} className="text-primary" />
              <span>Agra,UttarPradesh</span>
            </div>

            <div className="flex items-center space-x-3 text-muted-foreground">
              <span className="text-sm">106/1 Balkeshwar Roas</span>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="relative">
            <div className="card-gradient rounded-2xl p-8 transition-smooth hover:scale-105">
              <div className="aspect-[3/4] bg-muted rounded-xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                    <div className="text-center space-y-4 text-muted-foreground">
                      <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                        <span className="text-3xl font-bold text-primary">VA</span>
                      </div>
                    <p className="text-sm">Profile Photo</p>
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