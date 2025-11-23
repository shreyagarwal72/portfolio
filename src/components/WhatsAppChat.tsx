import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+919412104618";
  const message = "Hi! I'm interested in your services.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* WhatsApp Button */}
      <motion.div
        className="fixed bottom-24 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-shadow group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white" />
          
          {/* Pulse effect */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        </motion.a>
        
        {/* Tooltip */}
        <motion.div
          className="absolute bottom-0 right-16 mb-3 px-4 py-2 bg-card border border-border rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          initial={false}
        >
          <p className="text-sm text-foreground font-medium">Chat with me on WhatsApp</p>
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-card border-r border-t border-border rotate-45" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default WhatsAppChat;
