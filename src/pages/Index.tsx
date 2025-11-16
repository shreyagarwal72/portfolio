import { motion } from 'framer-motion';
import { Star, TrendingUp, Users, Play } from 'lucide-react';
import Hero from '@/components/Hero';
import VideoShowreel from '@/components/VideoShowreel';
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
    { name: 'Neckrovia', logo: clientNecrovia, url: 'https://youtube.com/@neckrovia' },
    { name: 'If You Know You Know', logo: clientIfYouKnow, url: 'https://youtube.com/@ifyouknowknowyt' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      
      {/* Video Showreel */}
      <VideoShowreel />
      
      {/* Achievements Section */}
      <section className="py-20 card-gradient backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                Achievements & Milestones
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">Celebrating growth and success</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ delay: index * 0.15, duration: 0.3 }}
              >
                <Card className="text-center hover-glow transition-premium bg-background/50 backdrop-blur-sm border-primary/20">
                  <CardContent className="pt-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                    >
                      <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    </motion.div>
                    <motion.h3 
                      className="text-4xl font-bold text-primary mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                    >
                      {achievement.value}
                    </motion.h3>
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
            transition={{ duration: 0.6 }}
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
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ delay: index * 0.2, duration: 0.3 }}
                className="group"
              >
                <motion.div 
                  className="card-gradient rounded-full p-4 backdrop-blur-sm border border-primary/20 shadow-glow"
                  whileHover={{ boxShadow: "0 0 40px hsl(var(--primary-glow) / 0.6)" }}
                >
                  <img 
                    src={client.logo} 
                    alt={`${client.name} - YouTube channel logo`}
                    className="h-24 w-24 object-contain"
                    loading="lazy"
                  />
                </motion.div>
                <motion.p 
                  className="text-center mt-3 font-medium text-muted-foreground group-hover:text-primary transition-smooth"
                  whileHover={{ scale: 1.05 }}
                >
                  {client.name}
                </motion.p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 card-gradient backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
                whileHover={{ y: -5 }}
                transition={{ delay: index * 0.15, duration: 0.3 }}
              >
                <Card className="h-full hover-glow transition-premium bg-background/50 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                      <motion.div 
                        className="flex gap-1"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.2 }}
                      >
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, rotate: -180 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + 0.3 + i * 0.1 }}
                          >
                            <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                          </motion.div>
                        ))}
                      </motion.div>
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
            transition={{ duration: 0.6 }}
            className="card-gradient rounded-2xl p-12 text-center backdrop-blur-sm border border-primary/20 shadow-glow"
          >
            <motion.h2 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to Bring Your Vision to Life?
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Let's collaborate on your next video project. From concept to final cut, I'll help you create content that engages and inspires.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-smooth shadow-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Session
              </motion.a>
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-background/50 hover:bg-background/70 text-foreground font-medium rounded-lg transition-smooth border border-border"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
