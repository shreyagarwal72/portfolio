import { useState } from 'react';
import { Github, Instagram, Youtube, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import RockPaperScissors from '@/components/RockPaperScissors';
import NewsletterSignup from '@/components/NewsletterSignup';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showGame, setShowGame] = useState(false);

  const socialLinks = [
    { icon: Github, href: "https://github.com/shreyagarwal72", label: "GitHub", hoverColor: "hover:bg-primary/20 hover:text-primary" },
    { icon: Instagram, href: "https://instagram.com/vanshu_ag_72", label: "Instagram", hoverColor: "hover:bg-pink-500/20 hover:text-pink-400" },
    { icon: Youtube, href: "https://www.youtube.com/@nextupstudioyt", label: "YouTube", hoverColor: "hover:bg-red-500/20 hover:text-red-400" },
    { icon: Linkedin, href: "https://in.linkedin.com/in/vanshu-agarwal-954262330", label: "LinkedIn", hoverColor: "hover:bg-blue-500/20 hover:text-blue-400" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-gradient-to-t from-card/50 to-background border-t border-border/50 backdrop-blur-sm" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <motion.div 
          className="flex flex-col items-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Brand */}
          <motion.div className="text-center" variants={itemVariants}>
            <motion.h3 
              className="text-2xl font-bold gradient-text-animate mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Vanshu Agarwal
            </motion.h3>
            <p className="text-muted-foreground max-w-md">
              Video Editor & Creative Mind. Crafting stories through gaming content, music production, and digital creativity.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.nav 
            className="flex items-center gap-4" 
            aria-label="Social media links"
            variants={itemVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.a 
                key={social.label}
                href={social.href}
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full bg-card/50 text-muted-foreground transition-all duration-300 ${social.hoverColor}`}
                aria-label={`Visit Vanshu Agarwal's ${social.label} profile`}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon size={20} aria-hidden="true" />
              </motion.a>
            ))}
          </motion.nav>

          {/* Newsletter Signup */}
          <motion.div variants={itemVariants} className="w-full pt-4 border-t border-border/50">
            <NewsletterSignup />
          </motion.div>

          {/* Quick Links */}
          <motion.nav 
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm" 
            aria-label="Footer navigation"
            variants={itemVariants}
          >
            <Link 
              to="/faq" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover-underline"
            >
              FAQ
            </Link>
            <Link 
              to="/process" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover-underline"
            >
              My Process
            </Link>
            <Link 
              to="/privacy-policy" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover-underline"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/contact" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover-underline"
            >
              Contact
            </Link>
          </motion.nav>

          {/* Copyright with Easter Egg */}
          <motion.div 
            className="pt-8 border-t border-border text-center text-muted-foreground text-sm w-full"
            variants={itemVariants}
          >
            <p>
              © <motion.button
                onClick={() => setShowGame(true)}
                className="cursor-pointer hover:text-primary transition-colors duration-300 font-medium"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Click for a surprise!"
              >
                {currentYear}
              </motion.button> Vanshu Agarwal. All rights reserved. Built with ❤️
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Easter Egg Game */}
      <RockPaperScissors isOpen={showGame} onClose={() => setShowGame(false)} />
    </footer>
  );
};

export default Footer;
