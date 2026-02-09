import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, Clock, FileType, RefreshCw, DollarSign, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  useEffect(() => {
    document.title = 'FAQ - Frequently Asked Questions | Vanshu Agarwal Video Editing';
    
    // Add structured data for FAQ
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What video editing services do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "I offer a comprehensive range of video editing services including YouTube video editing, social media content, music videos, gaming montages, corporate videos, color grading, motion graphics, and audio mixing."
          }
        },
        {
          "@type": "Question",
          "name": "What is your typical turnaround time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Turnaround time varies based on project complexity. Simple edits take 24-48 hours, standard projects take 3-5 days, and complex productions take 1-2 weeks."
          }
        },
        {
          "@type": "Question",
          "name": "What file formats do you accept?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "I accept all major video formats including MP4, MOV, AVI, MKV, and RAW footage from any camera."
          }
        },
        {
          "@type": "Question",
          "name": "How many revisions are included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All projects include 2 free revision rounds. Additional revisions are available at a reasonable rate."
          }
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

  const faqs = [
    {
      icon: HelpCircle,
      question: "What video editing services do you offer?",
      answer: "I offer a comprehensive range of video editing services including:\n\n• YouTube video editing & optimization\n• Social media content (Reels, TikTok, Shorts)\n• Music videos & lyric videos\n• Gaming montages & highlights\n• Corporate & promotional videos\n• Color grading & correction\n• Motion graphics & animations\n• Audio mixing & sound design"
    },
    {
      icon: Clock,
      question: "What is your typical turnaround time?",
      answer: "Turnaround time varies based on project complexity:\n\n• Simple edits (cuts, basic effects): 24-48 hours\n• Standard projects (full videos): 3-5 business days\n• Complex productions (VFX, animation): 1-2 weeks\n\nRush delivery is available for urgent projects at an additional fee. I always communicate realistic timelines before starting any project."
    },
    {
      icon: FileType,
      question: "What file formats do you accept and deliver?",
      answer: "I accept all major video formats:\n\n• Input: MP4, MOV, AVI, MKV, ProRes, RAW footage from any camera\n• Output: MP4 (H.264/H.265), MOV, or any format you need\n\nFor file sharing, you can use Google Drive, Dropbox, WeTransfer, or any cloud service. I'll provide download links for the final deliverables."
    },
    {
      icon: RefreshCw,
      question: "How many revisions are included?",
      answer: "All projects include 2 free revision rounds to ensure you're completely satisfied with the final result. I provide detailed previews at key stages so we stay aligned throughout the process.\n\nAdditional revisions beyond the initial two rounds are available at a reasonable rate, which we'll discuss upfront."
    },
    {
      icon: DollarSign,
      question: "What is your pricing structure?",
      answer: "Pricing depends on project scope and complexity. I offer:\n\n• Per-project rates for defined deliverables\n• Hourly rates for ongoing work\n• Package deals for regular content creators\n\nContact me with your project details for a free, no-obligation quote. I'm transparent about costs and there are never hidden fees."
    },
    {
      icon: Mail,
      question: "How do I get started?",
      answer: "Getting started is easy:\n\n1. Send me a message describing your project\n2. We'll have a brief consultation (free!)\n3. I'll provide a quote and timeline\n4. Once approved, share your footage\n5. I'll deliver an amazing video!\n\nReach out through the Contact page or email me directly. I typically respond within 24 hours."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <main className="min-h-screen pt-20 pb-16" role="main">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">Frequently Asked </span>
            <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about my video editing services, process, and pricing.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem 
                  value={`item-${index}`}
                  className="card-gradient rounded-xl border border-border/50 overflow-hidden hover-lift transition-smooth"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline group">
                    <div className="flex items-center gap-4 text-left">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-smooth">
                        <faq.icon className="h-5 w-5" />
                      </div>
                      <span className="text-lg font-medium text-foreground">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="pl-14 text-muted-foreground whitespace-pre-line leading-relaxed">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 card-gradient rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Still have questions?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Can't find what you're looking for? Feel free to reach out and I'll get back to you within 24 hours.
          </p>
          <Button asChild size="lg" className="shadow-glow">
            <Link to="/contact">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Link>
          </Button>
        </motion.div>
      </div>
    </main>
  );
};

export default FAQ;
