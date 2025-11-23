import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: 'What video editing services do you offer?',
      answer: 'I offer comprehensive video editing services including gaming montages, YouTube content editing, music videos, tutorials, color grading, motion graphics, and audio enhancement. Each project is tailored to your specific needs and brand identity.',
    },
    {
      question: 'What is your typical turnaround time?',
      answer: 'Turnaround time varies based on project complexity. Simple edits typically take 2-3 days, while more complex projects with motion graphics and advanced effects may take 5-7 days. Rush delivery options are available for urgent projects.',
    },
    {
      question: 'What software and tools do you use?',
      answer: 'I primarily use Adobe Premiere Pro, After Effects, DaVinci Resolve for color grading, and Audacity for audio editing. I stay updated with the latest industry-standard tools to deliver professional results.',
    },
    {
      question: 'Do you provide revisions?',
      answer: 'Yes! I offer 2 rounds of revisions included in the standard package to ensure you\'re completely satisfied with the final result. Additional revisions can be discussed if needed.',
    },
    {
      question: 'What file formats do you accept and deliver?',
      answer: 'I accept most common video formats including MP4, MOV, AVI, and RAW footage. Final deliverables are typically in MP4 (H.264) or as per your specific requirements. I can also deliver in multiple formats optimized for different platforms.',
    },
    {
      question: 'How much do your services cost?',
      answer: 'Pricing depends on project scope, complexity, and timeline. Contact me with your project details for a custom quote. I offer competitive rates and package deals for ongoing work.',
    },
    {
      question: 'Can you work with my brand guidelines?',
      answer: 'Absolutely! I specialize in creating content that aligns with your brand identity. Share your brand guidelines, style preferences, and reference materials, and I\'ll ensure the final product reflects your vision.',
    },
    {
      question: 'Do you offer ongoing content creation partnerships?',
      answer: 'Yes! I work with several creators and businesses on a recurring basis. Monthly retainer packages are available for regular content needs, offering priority scheduling and discounted rates.',
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="faq">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about my video editing services and workflow
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card-gradient rounded-2xl p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-xl overflow-hidden bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:text-primary transition-colors">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="https://wa.me/918368368193"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            Get in touch via WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
