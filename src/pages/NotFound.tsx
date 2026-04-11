import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = '404 - Page Not Found | Vanshu Agarwal';
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Page not found. Return to Vanshu Agarwal\'s portfolio homepage.');
    }
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden" role="main">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Animated GIF Background */}
          <motion.div 
            className="w-full max-w-2xl h-[400px] bg-center bg-no-repeat bg-contain relative"
            style={{
              backgroundImage: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.h1 
              className="text-[80px] md:text-[100px] font-black text-center bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent leading-none pt-8"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              404
            </motion.h1>
          </motion.div>

          {/* Content Box */}
          <motion.div 
            className="-mt-12 relative z-10"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Look like you're lost
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              The page you are looking for is not available!
            </p>
            <motion.a 
              href="/" 
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-primary/25"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px hsl(var(--primary) / 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Go to Home
            </motion.a>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
