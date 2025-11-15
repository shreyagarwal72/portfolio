import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle2, Mail, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const Booking = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    document.title = 'Book a Session | Vanshu Agarwal';
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'video-editing',
      title: 'Video Editing',
      duration: '2-5 days',
      price: 'Starting from ₹2,000',
      description: 'Professional video editing for gaming content, vlogs, and creative projects.',
      features: ['Color Grading', 'Transitions & Effects', 'Audio Mixing', 'Custom Graphics']
    },
    {
      id: 'short-form',
      title: 'Short-Form Content',
      duration: '1-2 days',
      price: 'Starting from ₹1,000',
      description: 'Quick turnaround for YouTube Shorts, Instagram Reels, and TikTok videos.',
      features: ['Fast Delivery', 'Trending Formats', 'Optimized for Social', 'Captions & Subtitles']
    },
    {
      id: 'consultation',
      title: 'Creative Consultation',
      duration: '1 hour',
      price: '₹500',
      description: 'One-on-one consultation to discuss your project and creative vision.',
      features: ['Project Planning', 'Creative Direction', 'Technical Advice', 'Workflow Optimization']
    }
  ];

  const availability = [
    { day: 'Monday - Friday', time: '4:00 PM - 8:00 PM IST', status: 'Available' },
    { day: 'Saturday - Sunday', time: '10:00 AM - 6:00 PM IST', status: 'Available' },
    { day: 'Holidays', time: 'By Appointment', status: 'Limited' }
  ];

  const handleBooking = () => {
    if (!selectedService) {
      toast.error('Please select a service');
      return;
    }
    
    const subject = `Booking Request: ${services.find(s => s.id === selectedService)?.title}`;
    const body = `Hi Vanshu,\n\nI would like to book your ${services.find(s => s.id === selectedService)?.title} service.\n\n${selectedDate ? `Preferred Date: ${selectedDate}\n\n` : ''}Please let me know your availability.\n\nBest regards`;
    
    window.location.href = `mailto:sanjayvansu1973@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    toast.success('Opening email client...');
  };

  return (
    <main className="min-h-screen pt-20 pb-16" role="main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Book a Session
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose a service and let's create something amazing together!
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className={`h-full hover-glow transition-premium cursor-pointer ${
                  selectedService === service.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    {selectedService === service.id && (
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {service.duration}
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-primary mt-2">{service.price}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <Card className="card-gradient backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                My Availability
              </CardTitle>
              <CardDescription>Typical availability - flexible scheduling available</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {availability.map((slot, index) => (
                  <div key={index} className="bg-background/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{slot.day}</h3>
                      <Badge variant={slot.status === 'Available' ? 'default' : 'secondary'}>
                        {slot.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {slot.time}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Date Selection & Booking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card-gradient rounded-xl p-8 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Complete Your Booking</h2>
          
          <div className="max-w-md mx-auto space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Preferred Date (Optional)</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
              />
            </div>

            <Button
              onClick={handleBooking}
              className="w-full py-6 text-lg shadow-glow hover-scale"
              size="lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Booking Request
            </Button>

            <div className="text-center space-y-2 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">Or contact me directly:</p>
              <div className="flex flex-col items-center gap-2">
                <a href="tel:+919412104618" className="flex items-center gap-2 text-primary hover:underline">
                  <Phone className="h-4 w-4" />
                  +91-9412104618
                </a>
                <a href="mailto:sanjayvansu1973@gmail.com" className="flex items-center gap-2 text-primary hover:underline">
                  <Mail className="h-4 w-4" />
                  sanjayvansu1973@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Booking;
