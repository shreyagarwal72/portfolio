import { useEffect } from 'react';
import { motion } from 'framer-motion';
import VideoPlayer from '@/components/VideoPlayer';

const VideoShowcase = () => {
  useEffect(() => {
    document.title = 'Video Showcase | Vanshu Agarwal - Professional Video Editing Work';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Watch my professional video editing work and creative projects. High-quality video production showcasing editing expertise, motion graphics, and storytelling.');
    }
  }, []);

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Video Showcase
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch my professional video editing work and creative projects
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Example Video 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card-gradient rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Featured Project 1</h2>
            <VideoPlayer
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
              className="rounded-lg overflow-hidden"
            />
            <p className="text-muted-foreground mt-4">
              Professional video editing with advanced color grading and motion graphics
            </p>
          </motion.div>

          {/* Example Video 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card-gradient rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Featured Project 2</h2>
            <VideoPlayer
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
              poster="https://download.blender.org/ED/cover.jpg"
              className="rounded-lg overflow-hidden"
            />
            <p className="text-muted-foreground mt-4">
              Creative storytelling with cinematic transitions and effects
            </p>
          </motion.div>
        </div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 card-gradient rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-primary mb-4">How to Use VideoPlayer Component</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>Replace the sample videos with your own by updating the <code className="text-primary bg-muted px-2 py-1 rounded">src</code> prop:</p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`<VideoPlayer
  src="path/to/your/video.mp4"
  poster="path/to/thumbnail.jpg"
  className="rounded-lg overflow-hidden"
/>`}
            </pre>
            <p className="text-sm">You can host videos on Lovable Cloud storage or use external URLs.</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default VideoShowcase;
