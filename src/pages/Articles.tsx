import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    document.title = 'Articles & Insights | Vanshu Agarwal';
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Video Editing', 'Gaming', 'Music Production', 'Tutorials'];

  const articles: Article[] = [
    {
      id: '1',
      title: '5 Essential Video Editing Tips for Beginners',
      description: 'Learn the fundamental techniques that will elevate your video editing skills and help you create professional-looking content.',
      category: 'Video Editing',
      date: '2024-03-15',
      readTime: '5 min read',
      image: '/placeholder.svg'
    },
    {
      id: '2',
      title: 'Creating Cinematic Gaming Content',
      description: 'Discover how to capture and edit gaming footage to create engaging, cinematic videos that keep viewers hooked.',
      category: 'Gaming',
      date: '2024-03-10',
      readTime: '7 min read',
      image: '/placeholder.svg'
    },
    {
      id: '3',
      title: 'Music Production for Video Content',
      description: 'A guide to selecting and creating the perfect soundtrack for your video projects, enhancing emotional impact.',
      category: 'Music Production',
      date: '2024-03-05',
      readTime: '6 min read',
      image: '/placeholder.svg'
    },
    {
      id: '4',
      title: 'Color Grading Masterclass',
      description: 'Master the art of color grading to give your videos a professional, polished look that stands out.',
      category: 'Tutorials',
      date: '2024-02-28',
      readTime: '10 min read',
      image: '/placeholder.svg'
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
          className="text-center mb-12"
        >
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
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className="cursor-pointer px-4 py-2 hover-scale transition-premium"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover-glow transition-premium cursor-pointer group">
                <div className="aspect-video overflow-hidden rounded-t-lg bg-muted">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                </div>
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
                  <CardDescription className="mb-4">
                    {article.description}
                  </CardDescription>
                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-smooth">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
