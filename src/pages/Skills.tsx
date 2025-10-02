import { useState, useEffect } from 'react';
import { 
  Monitor, 
  Palette, 
  Film, 
  Zap, 
  Globe, 
  Headphones, 
  Camera, 
  Gamepad2,
  GraduationCap,
  Briefcase,
  MapPin
} from 'lucide-react';

const Skills = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Set page title for SEO
    document.title = 'Skills & Expertise - Vanshu Agarwal | Video Editing & Creative Services';
    
    // Add structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Vanshu Agarwal Skills",
      "description": "Technical expertise and creative abilities in video editing and content creation",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Video Editing"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Music Production"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Content Creation"
        }
      ]
    });
    document.head.appendChild(script);
    
    const timer = setTimeout(() => setAnimationStarted(true), 500);
    return () => {
      document.head.removeChild(script);
      clearTimeout(timer);
    };
  }, []);

  const softwareSkills = [
    { name: 'Filmora', level: 95 },
    { name: 'After Effects', level: 90 },
    { name: 'AI Image Generation', level: 85 },
    { name: 'Shotcut', level: 88 },
    { name: 'Lightroom', level: 75 },
    { name: 'ChatGPT', level: 70 },
  ];

  const languages = [
    { name: 'Hindi', level: 100 },
    { name: 'English', level: 90 },
  ];

  const experiences = [
    {
      company: 'CONTENT CREATOR',
      role: 'Video Editor',
      period: '2020 - Present',
      description: 'Creating engaging video content and tutorials'
    },
    {
      company: 'GAMING ENTHUSIAST',
      role: 'Gamer',
      period: '2018 - Present',
      description: 'Passionate about gaming content and community building'
    },
    {
      company: 'CREATIVE ARTIST',
      role: 'Musician',
      period: '2019 - Present',
      description: 'Music production and composition for various projects'
    },
  ];

  const designSkills = [
    { name: 'Creativity', icon: Palette },
    { name: 'Color Theory', icon: Monitor },
    { name: 'Typography', icon: Film },
    { name: 'Composition', icon: Camera },
  ];

  const interests = [
    { name: 'Gaming', icon: Gamepad2 },
    { name: 'Music', icon: Headphones },
    { name: 'Photography', icon: Camera },
    { name: 'Travel', icon: Globe },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            MY <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">SKILLS</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
            A comprehensive overview of my technical expertise, creative abilities, and professional experience in content creation and digital media.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column */}
          <div className="space-y-8">
            
            {/* Software Skills */}
            <div className="card-gradient rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">SOFTWARE SKILLS</h3>
              <div className="space-y-4">
                {softwareSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{
                          width: animationStarted ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="card-gradient rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">LANGUAGES</h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={lang.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{lang.name}</span>
                      <span className="text-primary">{lang.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{
                          width: animationStarted ? `${lang.level}%` : '0%',
                          transitionDelay: `${(index + softwareSkills.length) * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Skills */}
            <div className="card-gradient rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">PERSONAL SKILLS</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>Creativity • Team Work • Organization</p>
                <p>Problem Solving • Attention to Detail</p>
                <p>Time Management • Communication</p>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="space-y-8">
            
            {/* Experience */}
            <div className="card-gradient rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">EXPERIENCE</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                    <div className="space-y-2">
                      <h4 className="text-primary font-medium text-sm">{exp.company}</h4>
                      <p className="text-white font-medium">{exp.role}</p>
                      <p className="text-muted-foreground text-sm">{exp.period}</p>
                      <p className="text-muted-foreground text-sm">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="card-gradient rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">EDUCATION</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <GraduationCap className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="text-white font-medium">Class 11 Student</h4>
                    <p className="text-muted-foreground text-sm">Stream PCM Science</p>
                    <p className="text-muted-foreground text-sm">2024 - Present</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            
            {/* What Can I Do */}
            <div className="card-gradient rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">WHAT CAN I DO?</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>• Video Editing & Post-Production</p>
                <p>• Motion Graphics & Animation</p>
                <p>• Color Grading & Correction</p>
                <p>• Audio Mixing & Sound Design</p>
                <p>• Visual Effects & Compositing</p>
                <p>• Content Strategy & Planning</p>
              </div>
            </div>

            {/* Design Skills */}
            <div className="card-gradient rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">DESIGN SKILLS</h3>
              <div className="grid grid-cols-2 gap-4">
                {designSkills.map((skill, index) => (
                  <div key={skill.name} className="text-center p-4 bg-muted/20 rounded-lg transition-smooth hover:bg-muted/30">
                    <skill.icon className="text-primary mx-auto mb-2" size={24} />
                    <p className="text-muted-foreground text-sm">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies & Interests */}
            <div className="card-gradient rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">HOBBIES & INTERESTS</h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div key={interest.name} className="text-center p-4 bg-muted/20 rounded-lg transition-smooth hover:bg-muted/30">
                    <interest.icon className="text-primary mx-auto mb-2" size={24} />
                    <p className="text-muted-foreground text-sm">{interest.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;