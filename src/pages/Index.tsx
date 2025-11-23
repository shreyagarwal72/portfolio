import { motion } from 'framer-motion';
import { Star, TrendingUp, Users, Play } from 'lucide-react';
import Hero from '@/components/Hero';
import VideoShowreel from '@/components/VideoShowreel';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import clientNecrovia from '@/assets/client-necrovia.png';
import clientIfYouKnow from '@/assets/client-ifyouknow.png';

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
      <SEOHead
        title="Vanshu Aggarwal - Professional Video Editor | Gaming Montages & YouTube Content"
        description="Expert video editing services for gaming montages, YouTube content, music videos, and tutorials. Transform your raw footage into engaging content with professional editing, color grading, and effects."
        keywords="video editor, gaming montage editor, YouTube video editing, content creator, Adobe Premiere Pro, After Effects, music video editing, tutorial video editing"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Vanshu Aggarwal Video Editing Services",
          "description": "Professional video editing services specializing in gaming content and YouTube videos",
          "provider": {
            "@type": "Person",
            "name": "Vanshu Aggarwal",
            "jobTitle": "Video Editor",
          },
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Video Editing Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Gaming Montage Editing"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "YouTube Content Editing"
                }
              }
            ]
          }
        }}
      />
      <Hero />
      
      {/* Video Showreel */}
      <VideoShowreel />
      
      {/* Achievements Section */}
      <section className="py-20 card-gradient backdrop-blur-sm">
...
      </section>

      {/* Client Logos Section */}
      <section className="py-20">
...
      </section>

      {/* Testimonials Section */}
      <section className="py-20 card-gradient backdrop-blur-sm">
...
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default Index;
