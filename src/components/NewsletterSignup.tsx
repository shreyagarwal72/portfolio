import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Loader2, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email: email.toLowerCase().trim() }]);

      if (error) {
        if (error.code === '23505') {
          // Unique constraint violation - email already exists
          toast({
            title: "Already subscribed!",
            description: "This email is already on our newsletter list.",
          });
        } else {
          throw error;
        }
      } else {
        setIsSuccess(true);
        setEmail('');
        toast({
          title: "🎉 Subscribed!",
          description: "Thanks for subscribing! You'll receive updates soon.",
        });
        
        // Reset success state after 3 seconds
        setTimeout(() => setIsSuccess(false), 3000);
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-md mx-auto"
    >
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center justify-center gap-2">
          <Mail className="h-5 w-5 text-primary" />
          Stay Updated
        </h4>
        <p className="text-sm text-muted-foreground">
          Get notified about new projects, tutorials, and creative content.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-1">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting || isSuccess}
            className="bg-muted/50 border-border focus:border-primary pr-4"
          />
        </div>
        <Button 
          type="submit" 
          disabled={isSubmitting || isSuccess}
          className="min-w-[100px] transition-all duration-300"
        >
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : isSuccess ? (
            <CheckCircle2 className="h-4 w-4" />
          ) : (
            <>
              Subscribe
              <ArrowRight className="ml-1 h-4 w-4" />
            </>
          )}
        </Button>
      </form>

      <p className="text-xs text-muted-foreground text-center mt-3">
        No spam, unsubscribe anytime. Your email is safe with me.
      </p>
    </motion.div>
  );
};

export default NewsletterSignup;
