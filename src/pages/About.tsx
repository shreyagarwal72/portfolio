import { MapPin, Mail, Award, Trophy } from 'lucide-react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import SwipeableGallery from '@/components/SwipeableGallery';
import certificateAmarujala from '@/assets/certificate-amarujala.jpg';
import certificateGreenhat from '@/assets/certificate-greenhat.jpg';

const About = () => {
  useEffect(() => {
    // Set page title and meta tags for SEO
    document.title = 'About Vanshu Agarwal - Video Editor, Gamer & Musician | Creative Journey';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Vanshu Agarwal, a creative video editor, passionate gamer, and musician. Discover the journey of a Class 11 student balancing academics with creative content creation.');
    }
    
    // Add structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Vanshu Agarwal",
      "description": "Learn about Vanshu Agarwal's creative journey as a video editor, gamer, and musician",
      "mainEntity": {
        "@type": "Person",
        "name": "Vanshu Agarwal",
        "jobTitle": "Video Editor, Content Creator, Musician",
        "description": "Creative video editor specializing in gaming content and music production",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Agra",
          "addressRegion": "Uttar Pradesh",
          "addressCountry": "IN"
        },
        "email": "sanjayvansu1973@gmail.com",
        "telephone": "+91-9412104618"
      }
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen pt-20 pb-16" role="main">
      <SEOHead
        title="About Vanshu Aggarwal - Video Editor, Gamer & Musician | Creative Journey"
        description="Learn about Vanshu Aggarwal, a creative video editor, passionate gamer, and musician. Discover the journey of a Class 11 student balancing academics with creative content creation."
        keywords="about vanshu aggarwal, video editor biography, content creator story, gaming editor, music producer"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Vanshu Agarwal",
          "description": "Learn about Vanshu Agarwal's creative journey as a video editor, gamer, and musician",
          "mainEntity": {
            "@type": "Person",
            "name": "Vanshu Agarwal",
            "jobTitle": "Video Editor, Content Creator, Musician",
            "description": "Creative video editor specializing in gaming content and music production",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Agra",
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "IN"
            },
            "email": "sanjayvansu1973@gmail.com",
            "telephone": "+91-9412104618"
          }
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6">
            ABOUT <span className="text-primary">ME</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Video Editor, Gamer, and Musician passionate about storytelling through visual media and creative content.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content Section */}
          <div className="space-y-8">
            <motion.article
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="card-gradient rounded-xl p-6 backdrop-blur-sm hover-lift">
                <h2 className="text-xl font-semibold text-foreground mb-4">My Journey</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    <span className="text-primary font-medium">Video Editor</span> with passion for storytelling through visual media. 
                    I specialize in post-production workflows for gaming content and creative projects.
                  </p>
                  
                  <p>
                    As a <span className="text-primary font-medium">Gamer</span> and <span className="text-primary font-medium">Musician</span>, 
                    I bring a unique creative perspective to my work. I love combining my gaming experiences with video editing 
                    to create engaging content that resonates with audiences.
                  </p>

                  <p>
                    Currently pursuing my education as a <span className="text-primary font-medium">Class 11 PCM Science student</span>, 
                    I balance my academic journey with my passion for creative content creation and digital storytelling.
                  </p>
                </div>
              </div>
            </motion.article>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card-gradient rounded-xl p-4 backdrop-blur-sm hover-lift"
            >
              <p className="text-primary text-lg font-medium flex items-center">
                <Mail className="mr-2" size={18} aria-hidden="true" />
                <a href="mailto:sanjayvansu1973@gmail.com" className="hover:underline">sanjayvansu1973@gmail.com</a>
              </p>
            </motion.div>

            {/* Location */}
            <motion.address
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card-gradient rounded-xl p-4 backdrop-blur-sm not-italic hover-lift"
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin size={20} className="text-primary" aria-hidden="true" />
                  <span className="font-medium">Agra, Uttar Pradesh, India</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground ml-8">
                  <span className="text-sm">106/1 Balkeshwar Road</span>
                </div>
              </div>
            </motion.address>
          </div>

          {/* Profile Image Section */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl scale-105" aria-hidden="true"></div>
              
              {/* Main card */}
              <figure className="relative card-gradient rounded-2xl p-8 hover-lift">
                <div className="aspect-[3/4] bg-muted rounded-xl overflow-hidden shadow-inner">
                  <img 
                    src="https://i.postimg.cc/d3xjhmn2/IMG-20250316-WA0005.jpg" 
                    alt="Professional portrait of Vanshu Agarwal, video editor and creative content creator"
                    className="w-full h-full object-cover hover:scale-110 transition-smooth"
                    loading="lazy"
                    width="400"
                    height="533"
                  />
                </div>
                
                {/* Name overlay */}
                <figcaption className="absolute bottom-6 left-6 right-6">
                  <div className="glass-effect rounded-lg p-3">
                    <h3 className="text-foreground font-bold text-lg">Vanshu Agarwal</h3>
                    <p className="text-primary text-sm">Creative Mind</p>
                  </div>
                </figcaption>
              </figure>
            </div>
          </motion.aside>
        </div>

        {/* Awards & Certificates Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold text-foreground">
                Awards & <span className="text-primary">Certificates</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg">Recognition of skills and achievements</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <SwipeableGallery
              images={[
                {
                  src: certificateAmarujala,
                  alt: "Certificate from Amar Ujala - Excellence in Digital Content Creation",
                  title: "Amar Ujala Certificate - Digital Content Excellence"
                },
                {
                  src: certificateGreenhat,
                  alt: "Certificate from GreenHat - Video Editing Mastery",
                  title: "GreenHat Certificate - Video Editing"
                }
              ]}
            />

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card-gradient rounded-xl p-6 border border-primary/20"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Amar Ujala Recognition</h3>
                    <p className="text-sm text-muted-foreground">Recognized for excellence in digital content creation and video editing</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card-gradient rounded-xl p-6 border border-primary/20"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">GreenHat Certification</h3>
                    <p className="text-sm text-muted-foreground">Certified in advanced video editing techniques and post-production</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default About;