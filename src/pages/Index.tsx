import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Play, Instagram } from 'lucide-react';
import Hero from '@/components/Hero';
import { Card, CardContent } from '@/components/ui/card';
import TiltCard from '@/components/TiltCard';
import AnimatedCounter from '@/components/AnimatedCounter';

const VideoShowreel = lazy(() => import('@/components/VideoShowreel'));
const FloatingParticles = lazy(() => import('@/components/FloatingParticles'));
const clientNecrovia = new URL('@/assets/client-necrovia.png', import.meta.url).href;
const clientIfYouKnow = new URL('@/assets/client-ifyouknow.png', import.meta.url).href;

const smoothEase: [number, number, number, number] = [0.25, 0.4, 0.25, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween' as const,
      ease: smoothEase,
      duration: 0.8
    }
  }
};

const Index = () => {
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
    },
    {
      icon: Instagram,
      value: '3000+',
      label: 'Instagram Followers',
      description: 'Active creative community'
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
      <Suspense fallback={<div className="py-20" />}>
        <VideoShowreel />
      </Suspense>
      
      {/* Achievements Section */}
      <section className="py-16 md:py-20 card-gradient backdrop-blur-sm relative overflow-hidden">
        <Suspense fallback={null}>
          <div className="absolute inset-0 opacity-30">
            <FloatingParticles count={30} color="#8b5cf6" className="w-full h-full" />
          </div>
        </Suspense>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="text-center mb-10 md:mb-12"
          >
            <span className="eyebrow mb-4">Milestones</span>
            <h2 className="display-lg mt-4 mb-4 text-foreground">
              Achievements
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">Celebrating growth and success</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <TiltCard>
                  <Card className="text-center bg-background/50 backdrop-blur-sm border-primary/20 overflow-hidden">
                    <CardContent className="pt-6 pb-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2, duration: 0.6, ease: smoothEase }}
                      >
                        <achievement.icon className="h-8 w-8 md:h-10 md:w-10 text-primary mx-auto mb-3" />
                      </motion.div>
                      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-1">
                        <AnimatedCounter value={achievement.value} />
                      </h3>
                      <p className="text-sm md:text-base font-semibold mb-1">{achievement.label}</p>
                      <p className="text-xs text-muted-foreground hidden md:block">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: smoothEase }}
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
            className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {clients.map((client, index) => (
              <motion.a
                key={index}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group flex flex-col items-center"
              >
                <TiltCard>
                  <motion.div 
                    className="card-gradient rounded-full p-4 backdrop-blur-sm border border-primary/20 shadow-glow"
                    whileHover={{ boxShadow: "0 0 40px hsl(var(--primary-glow) / 0.4)" }}
                    transition={{ duration: 0.4, ease: smoothEase }}
                  >
                    <img 
                      src={client.logo} 
                      alt={`${client.name} - YouTube channel logo`}
                      className="h-20 w-20 md:h-24 md:w-24 object-contain transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </motion.div>
                </TiltCard>
                <p className="text-center mt-3 font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300 text-sm md:text-base whitespace-nowrap">
                  {client.name}
                </p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <Suspense fallback={null}>
          <div className="absolute inset-0 opacity-20">
            <FloatingParticles count={20} color="#06b6d4" className="w-full h-full" />
          </div>
        </Suspense>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="card-gradient rounded-2xl md:rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm border border-primary/20 shadow-glow"
          >
            <motion.h2 
              className="text-2xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: smoothEase }}
            >
              Ready to Bring Your Vision to Life?
            </motion.h2>
            <motion.p 
              className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8, ease: smoothEase }}
            >
              Let's collaborate on your next video project. From concept to final cut, I'll help you create content that engages and inspires.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8, ease: smoothEase }}
            >
              <motion.a
                href="/contact"
                className="btn-pill-solid"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/portfolio"
                className="btn-pill"
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
