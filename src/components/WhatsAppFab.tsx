import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const WhatsAppFab = () => (
  <motion.a
    href="https://wa.me/919876543210"
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="fixed bottom-6 right-6 z-40 group"
    aria-label="Chat on WhatsApp"
  >
    <span className="grid place-items-center w-13 h-13 w-[52px] h-[52px] rounded-full bg-gradient-primary text-primary-foreground shadow-glow-soft transition-transform group-hover:scale-105">
      <MessageCircle size={22} />
    </span>
  </motion.a>
);
