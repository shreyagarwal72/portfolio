import { useState } from 'react';
import { Play, ExternalLink, Calendar, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Corporate Brand Campaign',
      category: 'commercial',
      year: '2024',
      client: 'Tech Innovations Inc.',
      description: 'Complete video production for product launch campaign including interviews, product demos and motion graphics.',
      thumbnail: '/placeholder-video-1.jpg',
      duration: '2:45',
      views: '25.4K'
    },
    {
      id: 2,
      title: 'Documentary: Urban Stories',
      category: 'documentary',
      year: '2023',
      client: 'Independent Film',
      description: 'Feature-length documentary exploring urban culture through personal narratives and cinematic storytelling.',
      thumbnail: '/placeholder-video-2.jpg',
      duration: '45:12',
      views: '108K'
    },
    {
      id: 3,
      title: 'Social Media Content Series',
      category: 'social',
      year: '2024',
      client: 'Fashion Brand',
      description: 'Weekly content series featuring dynamic editing, transitions, and brand-focused storytelling for Instagram and TikTok.',
      thumbnail: '/placeholder-video-3.jpg',
      duration: '0:30',
      views: '85.2K'
    },
    {
      id: 4,
      title: 'Music Video Production',
      category: 'music',
      year: '2023',
      client: 'Rising Artist',
      description: 'Creative music video with complex choreography, lighting design, and post-production visual effects.',
      thumbnail: '/placeholder-video-4.jpg',
      duration: '3:22',
      views: '156K'
    },
    {
      id: 5,
      title: 'Event Highlight Reel',
      category: 'commercial',
      year: '2024',
      client: 'Event Management Co.',
      description: 'High-energy event recap showcasing key moments, speakers, and attendee experiences through dynamic editing.',
      thumbnail: '/placeholder-video-5.jpg',
      duration: '4:15',
      views: '42.8K'
    },
    {
      id: 6,
      title: 'Product Demo Series',
      category: 'commercial',
      year: '2024',
      client: 'Software Company',
      description: 'Educational video series demonstrating software features with screen recordings and animated explanations.',
      thumbnail: '/placeholder-video-6.jpg',
      duration: '8:30',
      views: '73.1K'
    },
    {
      id: 7,
      title: 'Raat Ka Banda',
      category: 'music',
      year: '2025',
      client: 'Nextup Studio',
      description: 'A Nextup Studio Original – Raat Ka Banda captures late-night vibes with lo-fi beats, raw lyrics, and the grind of every sleepless soul.',
      thumbnail: 'https://img.youtube.com/vi/xftcj39h-QY/hqdefault.jpg',
      duration: '3:28',
      views: ''
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'documentary', label: 'Documentary' },
    { id: 'social', label: 'Social Media' },
    { id: 'music', label: 'Music Videos' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            PORTFOLIO
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my music, gaming, and editing projects from Nextup Studio.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 transition-smooth ${
                activeFilter === category.id 
                  ? 'bg-primary text-primary-foreground glow-effect' 
                  : 'border-border hover:border-primary hover:text-primary'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="card-gradient rounded-2xl overflow-hidden transition-smooth hover:scale-105 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/30 transition-colors">
                      <Play className="text-primary" size={24} />
                    </div>
                    <p className="text-muted-foreground text-sm">{project.duration}</p>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button size="sm" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm" asChild>
                    <a href="https://youtu.be/xftcj39h-QY" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      View Project
                    </a>
                  </Button>
                </div>

                {/* Stats */}
                <div className="absolute top-4 right-4 flex items-center space-x-2 text-white text-sm bg-black/30 backdrop-blur-sm rounded px-2 py-1">
                  <Eye size={14} />
                  <span>{project.views}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-primary font-medium">{project.client}</span>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar size={14} className="mr-1" />
                    {project.year}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">
                    {project.category}
                  </span>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-gradient rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground mb-6">
              Let's collaborate to bring your vision to life through compelling video content.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;