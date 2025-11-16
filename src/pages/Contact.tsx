"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { toast } = useToast();

  useEffect(() => {
    // Set page title and meta for SEO
    document.title = 'Contact Vanshu Agarwal - Get in Touch for Video Editing & Creative Projects';
    
    // Add structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Vanshu Agarwal",
      "description": "Get in touch for video editing and creative projects"
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    emailjs
      .send(
        "service_0tz9fru",
        "template_16ds9rx",
        formData,
        "KRsxH4cZ_5RJ2EMJB"
      )
      .then(
        () => {
          toast({
            title: "✅ Message Sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          setFormData({ name: '', email: '', subject: '', message: '' });
          setErrors({});
        },
        (error) => {
          toast({
            title: "❌ Failed to send message",
            description: "Please try again later.",
            variant: "destructive",
          });
          console.error(error.text);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            GET IN <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">TOUCH</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
            Ready to bring your video project to life? Let's discuss your vision and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div className="card-gradient rounded-2xl p-8 hover-lift transition-smooth">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 hover:translate-x-2 transition-smooth">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-smooth">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Email</p>
                    <p className="text-white">sanjayvansu1973@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 hover:translate-x-2 transition-smooth">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-smooth">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Phone</p>
                    <p className="text-white">9412104618</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 hover:translate-x-2 transition-smooth">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-smooth">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Location</p>
                    <p className="text-white">Agra, India</p>
                    <p className="text-muted-foreground text-sm">106/1 Balkeshwar Road Agra</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="card-gradient rounded-2xl p-8 hover-lift transition-smooth">
              <h3 className="text-xl font-bold text-white mb-6">Services Offered</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>• Commercial Video Production</p>
                <p>• Corporate Content Creation</p>
                <p>• Social Media Video Editing</p>
                <p>• Provide Free content to Minecraft players</p>
                <p>• Color Grading & Post-Production</p>
                <p>• Youtuber</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-gradient rounded-2xl p-8 animate-fade-in hover-lift transition-smooth" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-muted/50 border-border focus:border-primary ${errors.name ? 'border-destructive' : ''}`}
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-muted/50 border-border focus:border-primary ${errors.email ? 'border-destructive' : ''}`}
                  />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`bg-muted/50 border-border focus:border-primary ${errors.subject ? 'border-destructive' : ''}`}
                />
                {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  Project Details *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`bg-muted/50 border-border focus:border-primary resize-none ${errors.message ? 'border-destructive' : ''}`}
                  placeholder="Tell me about your project, timeline, and vision..."
                />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-effect transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;