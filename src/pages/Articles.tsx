import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import articleVideoEditing from '@/assets/article-video-editing.jpg';
import articleGaming from '@/assets/article-gaming.jpg';
import articleMusic from '@/assets/article-music.jpg';
import articleTutorials from '@/assets/article-tutorials.jpg';

interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  url: string;
}

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    document.title = 'Articles & Insights | Vanshu Agarwal - Video Editing, Gaming & Music Production Tips';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore expert tips, tutorials, and insights on video editing, gaming content creation, and music production. Learn from Vanshu Agarwal\'s creative journey and professional experience.');
    }
    
    // Add structured data for articles
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Articles & Insights",
      "description": "Tips, tutorials, and insights on video editing, gaming, and music production",
      "url": "https://vanshubhai.vercel.app/articles",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "Article",
            "position": 1,
            "headline": "5 Essential Video Editing Tips for Beginners",
            "author": {
              "@type": "Person",
              "name": "Vanshu Agarwal"
            }
          }
        ]
      }
    });
    document.head.appendChild(script);
    
    window.scrollTo(0, 0);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const categories = ['All', 'Video Editing', 'Gaming', 'Music Production', 'Tutorials'];

  const articles: Article[] = [
    {
      id: '1',
      title: '5 Essential Video Editing Tips for Beginners',
      description: 'Learn the fundamental techniques that will elevate your video editing skills and help you create professional-looking content. Master transitions, pacing, and storytelling.',
      category: 'Video Editing',
      date: '2024-11-10',
      readTime: '5 min read',
      image: articleVideoEditing,
      url: 'https://medium.com/honest-creative/5-beginner-video-editing-tips-to-create-view-worthy-content-362efd0dab7c'
    },
    {
      id: '2',
      title: 'Creating Cinematic Gaming Content',
      description: 'Discover how to capture and edit gaming footage to create engaging, cinematic videos that keep viewers hooked. Learn camera angles and post-production tricks.',
      category: 'Gaming',
      date: '2024-11-08',
      readTime: '7 min read',
      image: articleGaming,
      url: 'https://www.youtube.com/@nextupstudioyt'
    },
    {
      id: '3',
      title: 'Music Production for Video Content',
      description: 'A comprehensive guide to selecting and creating the perfect soundtrack for your video projects, enhancing emotional impact and viewer engagement.',
      category: 'Music Production',
      date: '2024-11-05',
      readTime: '6 min read',
      image: articleMusic,
      url: 'https://www.youtube.com/@nextupstudioyt'
    },
    {
      id: '4',
      title: 'Color Grading Masterclass',
      description: 'Master the art of color grading to give your videos a professional, polished look that stands out. Learn about color theory, LUTs, and advanced techniques.',
      category: 'Tutorials',
      date: '2024-11-01',
      readTime: '10 min read',
      image: articleTutorials,
      url: 'https://www.youtube.com/@nextupstudioyt'
    },
    {
      id: '5',
      title: 'Advanced Transitions & Effects',
      description: 'Take your editing to the next level with advanced transition techniques and creative effects that will make your content stand out from the crowd.',
      category: 'Video Editing',
      date: '2024-10-28',
      readTime: '8 min read',
      image: articleVideoEditing,
      url: 'https://www.youtube.com/@nextupstudioyt'
    },
    {
      id: '6',
      title: 'Gaming Content Strategy Guide',
      description: 'Build a successful gaming channel with proven strategies for content planning, audience engagement, and consistent growth in the competitive gaming space.',
      category: 'Gaming',
      date: '2024-10-25',
      readTime: '9 min read',
      image: articleGaming,
      url: 'https://www.youtube.com/@nextupstudioyt'
    },
    {
      id: '7',
      title: 'Audio Mixing Fundamentals',
      description: 'Perfect your audio mixing skills with professional techniques for balancing levels, EQ, compression, and creating clear, impactful soundscapes.',
      category: 'Music Production',
      date: '2024-10-20',
      readTime: '7 min read',
      image: articleMusic,
      url: 'https://www.youtube.com/@nextupstudioyt'
    },
    {
      id: '8',
      title: 'Workflow Optimization Tips',
      description: 'Streamline your editing workflow with productivity tips, keyboard shortcuts, and organization strategies that professional editors use daily.',
      category: 'Tutorials',
      date: '2024-10-15',
      readTime: '6 min read',
      image: articleTutorials,
      url: 'https://www.youtube.com/@nextupstudioyt'
    },
    {
      id: '9',
      title: 'Motion Graphics Basics',
      description: 'Get started with motion graphics and animation to add professional polish to your videos. Learn keyframes, ease curves, and creative techniques.',
      category: 'Video Editing',
      date: '2024-10-10',
      readTime: '12 min read',
      image: articleVideoEditing,
      url: 'https://www.youtube.com/@nextupstudioyt'
    }
  ];

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <main className="min-h-screen pt-20 pb-16" role="main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-4"
          >
            <Tag className="h-12 w-12 text-primary mx-auto mb-4" />
          </motion.div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Articles & Insights
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tips, tutorials, and insights from my creative journey in video editing, gaming, and music production.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <Badge
                variant={selectedCategory === category ? 'default' : 'outline'}
                className="cursor-pointer px-4 py-2 hover-scale transition-premium"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
              className="block"
            >
              <Card className="h-full hover-glow transition-premium cursor-pointer group overflow-hidden">
                <motion.div 
                  className="aspect-video overflow-hidden bg-muted relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img 
                    src={article.image} 
                    alt={`${article.title} - Article cover image`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </motion.div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {article.category}
                  </Badge>
                  <CardTitle className="group-hover:text-primary transition-smooth">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3">
                    {article.description}
                  </CardDescription>
                  <motion.div 
                    className="flex items-center text-primary font-medium"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>

        {/* Coming Soon Message */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No articles found in this category. Check back soon for new content!
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Articles;
