import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Video, Sparkles, CheckCircle2, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProcessWorkflow = () => {
  useEffect(() => {
    document.title = 'My Process & Workflow | Vanshu Agarwal - Professional Video Editing Process';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover Vanshu Agarwal\'s streamlined video editing process from initial consultation to final delivery. Learn about professional workflows, tools, and collaborative approach to creative projects.');
    }
    
    // Add structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Video Editing Process & Workflow",
      "description": "Professional video editing workflow from consultation to delivery",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Initial Consultation",
          "text": "Discuss project requirements, vision, goals, and timeline"
        },
        {
          "@type": "HowToStep",
          "name": "Planning & Scripting",
          "text": "Create detailed plan with storyboards and scripts"
        },
        {
          "@type": "HowToStep",
          "name": "Editing & Production",
          "text": "Professional editing with effects, transitions, and color grading"
        },
        {
          "@type": "HowToStep",
          "name": "Review & Refinement",
          "text": "Client review and feedback implementation"
        },
        {
          "@type": "HowToStep",
          "name": "Final Delivery",
          "text": "Deliver optimized final video in preferred format"
        },
        {
          "@type": "HowToStep",
          "name": "Ongoing Support",
          "text": "Post-delivery support and future collaboration"
        }
      ]
    });
    document.head.appendChild(script);
    
    window.scrollTo(0, 0);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const steps = [
    {
      icon: MessageSquare,
      title: 'Initial Consultation',
      description: 'We discuss your project requirements, vision, goals, and timeline to ensure we\'re aligned from the start.',
      color: 'text-blue-500'
    },
    {
      icon: FileText,
      title: 'Planning & Scripting',
      description: 'I create a detailed plan, including storyboards, shot lists, and scripts to guide the editing process.',
      color: 'text-purple-500'
    },
    {
      icon: Video,
      title: 'Editing & Production',
      description: 'Using professional tools, I edit your footage with precision, adding effects, transitions, and color grading.',
      color: 'text-pink-500'
    },
    {
      icon: Sparkles,
      title: 'Review & Refinement',
      description: 'You review the initial edit and provide feedback. I make revisions to perfect the final product.',
      color: 'text-orange-500'
    },
    {
      icon: CheckCircle2,
      title: 'Final Delivery',
      description: 'Once approved, I deliver the final video in your preferred format, optimized for your platform.',
      color: 'text-green-500'
    },
    {
      icon: Users,
      title: 'Ongoing Support',
      description: 'I provide post-delivery support and am available for future projects or adjustments as needed.',
      color: 'text-cyan-500'
    }
  ];

  return (
    <main className="min-h-screen pt-20 pb-16" role="main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              My Process & Workflow
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A streamlined, collaborative approach to bring your creative vision to life with professional video editing.
          </p>
        </motion.div>

        {/* Process Steps - Timeline */}
        <div className="relative mb-16">
          {/* Vertical Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 transform -translate-x-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, rotateX: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15
                }}
                className="relative"
              >
                {/* Step Number Badge */}
                <motion.div 
                  className="absolute -top-3 -left-3 z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-glow"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.15 + 0.2, type: 'spring', stiffness: 200 }}
                >
                  {index + 1}
                </motion.div>

                {/* Connector Line to next card - horizontal on mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block lg:hidden absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
                )}

                <Card className="h-full hover-glow transition-premium relative overflow-hidden group hover:scale-[1.02] hover:-translate-y-1">
                  <div className="absolute top-0 right-0 text-8xl font-bold text-muted/5 group-hover:text-muted/10 transition-smooth">
                    {index + 1}
                  </div>
                  <CardHeader className="pt-8">
                    <motion.div 
                      className={`${step.color} mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <step.icon className="h-12 w-12" />
                    </motion.div>
                    <CardTitle className="text-2xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools & Software */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card-gradient rounded-xl p-8 backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Tools & Software I Use</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Filmora', category: 'Video Editing' },
              { name: 'Capcut', category: 'Color Grading' },
              { name: 'Motion Ninja', category: 'Motion Graphics' },
              { name: 'Audacity', category: 'Audio Editing' },
            ].map((tool, index) => (
              <div key={index} className="text-center p-4 bg-background/50 rounded-lg hover-scale transition-premium">
                <h3 className="font-semibold text-foreground mb-1">{tool.name}</h3>
                <p className="text-sm text-muted-foreground">{tool.category}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's collaborate to create stunning video content that engages your audience and achieves your goals.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-smooth shadow-glow hover-scale"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </main>
  );
};

export default ProcessWorkflow;
