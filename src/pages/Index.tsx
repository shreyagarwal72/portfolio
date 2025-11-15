import { motion } from 'framer-motion';
import { Star, TrendingUp, Users, Play } from 'lucide-react';
import Hero from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import clientNecrovia from '@/assets/client-necrovia.png';
import clientIfYouKnow from '@/assets/client-ifyouknow.png';

const Index = () => {
  const testimonials = [
    {
      name: 'Pradeep Gupta',
      rating: 5,
      text: 'Exceptional video editing skills! Vanshu transformed our raw footage into engaging content that significantly boosted our channel engagement. Highly recommended!',
      project: 'Gaming Montage Series'
    },
    {
      name: 'Vishal Rathore',
      rating: 5,
      text: 'Professional, creative, and delivers on time. The attention to detail in color grading and transitions made our videos stand out. Will definitely work together again!',
      project: 'YouTube Channel Content'
    }
  ];

  const achievements = [
    {
      icon: Users,
      value: '500+',
      label: 'YouTube Subscribers',
      description: 'Growing community of engaged viewers'
    },
    {
      icon: Play,
      value: '50K+',
      label: 'Video Views',
      description: 'Reached on a single video'
    },
    {
      icon: TrendingUp,
      value: '15+',
      label: 'Projects Completed',
      description: 'Successful client collaborations'
    }
  ];

  const clients = [
    { name: 'Necrovia', logo: clientNecrovia, url: 'https://youtube.com/@Necrovia' },
    { name: 'If You Know You Know', logo: clientIfYouKnow, url: 'https://youtube.com/@ifyouknowknow' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      
      {/* Achievements Section */}
      <section className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                Achievements & Milestones
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover-glow transition-premium">
                  <CardContent className="pt-6">
                    <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-4xl font-bold text-primary mb-2">{achievement.value}</h3>
                    <p className="text-lg font-semibold mb-2">{achievement.label}</p>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                Trusted by Amazing Creators
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">YouTube channels I've had the pleasure to work with</p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {clients.map((client, index) => (
              <motion.a
                key={index}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="card-gradient rounded-full p-4 hover-scale transition-premium backdrop-blur-sm">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className="h-24 w-24 object-contain group-hover:scale-110 transition-smooth"
                  />
                </div>
                <p className="text-center mt-3 font-medium text-muted-foreground group-hover:text-primary transition-smooth">
                  {client.name}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                Client Testimonials
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">What clients say about working with me</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover-glow transition-premium">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <Badge variant="secondary">{testimonial.project}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-gradient rounded-2xl p-12 text-center backdrop-blur-sm"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Bring Your Vision to Life?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next video project. From concept to final cut, I'll help you create content that engages and inspires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-smooth shadow-glow hover-scale"
              >
                Book a Session
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-background/50 hover:bg-background/70 text-foreground font-medium rounded-lg transition-smooth border border-border hover-scale"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
