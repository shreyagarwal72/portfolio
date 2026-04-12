import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = '404 - Page Not Found | Vanshu Agarwal';
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-white relative overflow-hidden" role="main">
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
              className="text-[80px] md:text-[100px] font-black text-center text-[#523f80] leading-none pt-8"
              style={{ fontFamily: "'Arvo', serif" }}
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
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3" style={{ fontFamily: "'Arvo', serif" }}>
              Look like you're lost
            </h3>
            <p className="text-gray-500 text-lg mb-8">
              The page you are looking for is not available!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/" 
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#39ac31] hover:bg-[#2d8a27] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
              >
                <Home size={18} />
                Go to Home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
