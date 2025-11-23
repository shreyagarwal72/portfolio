import { MessageCircle } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const WhatsAppChat = () => {
  const phoneNumber = "+919412104618";
  const message = "Hi! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="fixed bottom-20 right-6 md:bottom-24 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 300, damping: 25 }}
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-2xl relative group cursor-pointer"
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        aria-label="Chat on WhatsApp"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
        </motion.div>
        
        {/* Multiple pulse rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-10" style={{ animationDelay: '0.5s' }} />
        
        {/* Glow effect */}
        <span className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(37,211,102,0.5)]" />
      </motion.a>
      
      {/* Tooltip with animation */}
      <motion.div
        className="absolute bottom-0 right-20 mb-4 opacity-0 group-hover:opacity-100 pointer-events-none"
        initial={{ x: 10, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="px-4 py-2 bg-card border border-border rounded-lg shadow-xl whitespace-nowrap backdrop-blur-md">
          <p className="text-sm text-foreground font-medium">Chat on WhatsApp</p>
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-card border-r border-t border-border rotate-45" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppChat;
