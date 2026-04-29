import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const WhatsAppFab = () => (
  <motion.a
    href="https://wa.me/919876543210"
    target="_blank"
    rel="noreferrer"
    initial={{ scale: 0, rotate: -90 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ delay: 1, type: "spring", stiffness: 200 }}
    className="fixed bottom-6 right-6 z-40 group"
    aria-label="Chat on WhatsApp"
  >
    <span className="absolute inset-0 rounded-full bg-primary/50 blur-xl animate-pulse-glow" />
    <span className="relative grid place-items-center w-14 h-14 rounded-full bg-gradient-primary text-primary-foreground shadow-glow group-hover:scale-110 transition-transform">
      <MessageCircle size={24} />
    </span>
  </motion.a>
);
