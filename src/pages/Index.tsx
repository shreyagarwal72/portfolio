import { motion } from 'framer-motion';
import { Star, TrendingUp, Users, Play } from 'lucide-react';
import Hero from '@/components/Hero';
import VideoShowreel from '@/components/VideoShowreel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import clientNecrovia from '@/assets/client-necrovia.png';
import clientIfYouKnow from '@/assets/client-ifyouknow.png';

// Staggered animation variants for consistent entrance effects
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15
    }
  }
};

const cardHoverVariants = {
  rest: { 
    y: 0, 
    rotateX: 0, 
    rotateY: 0,
    scale: 1,
    boxShadow: '0 4px 20px -5px hsl(var(--primary) / 0.1)'
  },
  hover: { 
    y: -12, 
    rotateX: 5, 
    rotateY: -3,
    scale: 1.02,
    boxShadow: '0 20px 40px -10px hsl(var(--primary) / 0.25)',
    transition: {
      type: 'spring' as const,
      stiffness: 300,
      damping: 20
    }
  }
};

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
      <section className="py-16 md:py-20 card-gradient backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                Achievements & Milestones
              </span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">Celebrating growth and success</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="rest"
                whileHover="hover"
                style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              >
                <motion.div variants={cardHoverVariants}>
                  <Card className="text-center bg-background/50 backdrop-blur-sm border-primary/20 overflow-hidden">
                    <CardContent className="pt-6 pb-6">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                      >
                        <achievement.icon className="h-10 w-10 md:h-12 md:w-12 text-primary mx-auto mb-4" />
                      </motion.div>
                      <motion.h3 
                        className="text-3xl md:text-4xl font-bold text-primary mb-2"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                      >
                        {achievement.value}
                      </motion.h3>
                      <p className="text-base md:text-lg font-semibold mb-2">{achievement.label}</p>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                Trusted by Amazing Creators
              </span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">YouTube channels I've had the pleasure to work with</p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {clients.map((client, index) => (
              <motion.a
                key={index}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.08 }}
                className="group"
              >
                <motion.div 
                  className="card-gradient rounded-full p-4 backdrop-blur-sm border border-primary/20 shadow-glow"
                  whileHover={{ boxShadow: "0 0 50px hsl(var(--primary-glow) / 0.6)" }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={client.logo} 
                    alt={`${client.name} - YouTube channel logo`}
                    className="h-20 w-20 md:h-24 md:w-24 object-contain transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </motion.div>
                <motion.p 
                  className="text-center mt-3 font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300"
                >
                  {client.name}
                </motion.p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 card-gradient backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                Client Testimonials
              </span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">What clients say about working with me</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="rest"
                whileHover="hover"
                style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              >
                <motion.div variants={cardHoverVariants}>
                  <Card className="h-full bg-background/50 backdrop-blur-sm border-primary/20 overflow-hidden">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-3">
                        <CardTitle className="text-lg md:text-xl">{testimonial.name}</CardTitle>
                        <motion.div 
                          className="flex gap-1"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                        >
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, rotate: -180, scale: 0 }}
                              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + 0.3 + i * 0.05, type: "spring" }}
                            >
                              <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-500 text-yellow-500" />
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                      <Badge variant="secondary" className="w-fit">{testimonial.project}</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic">"{testimonial.text}"</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, type: "spring" }}
            className="card-gradient rounded-2xl md:rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm border border-primary/20 shadow-glow"
          >
            <motion.h2 
              className="text-2xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to Bring Your Vision to Life?
            </motion.h2>
            <motion.p 
              className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Let's collaborate on your next video project. From concept to final cut, I'll help you create content that engages and inspires.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl transition-all duration-300 shadow-glow"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -5px hsl(var(--primary) / 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/portfolio"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-background/50 hover:bg-background/70 text-foreground font-medium rounded-xl transition-all duration-300 border border-border"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
