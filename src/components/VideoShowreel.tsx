import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Card } from '@/components/ui/card';

const VideoShowreel = () => {
  return (
    <section className="py-20 bg-background/50">
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
              Featured Showreel
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">Watch my best work compiled</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="overflow-hidden hover-lift transition-premium border-primary/20">
            <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/videoseries?list=PLu5SFE7_zNMvVz4yQrKGC_xF-lF-kVfX0"
                title="Video Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
            </div>
          </Card>
          
          <div className="mt-6 text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              <Play className="h-4 w-4 text-primary" />
              Professional video editing showcase featuring gaming, music, and creative content
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowreel;
