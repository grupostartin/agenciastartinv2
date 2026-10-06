"use client";

import { useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { MessageCircle } from "lucide-react";
import { WhatsappLink } from "@/components/ui/whatsapp-link";

/** RF04 — Botão flutuante de WhatsApp, visível após o hero. */
export function FloatingWhatsapp() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const pastHero = latest > window.innerHeight * 0.85;
    const nearEnd = latest + window.innerHeight > document.documentElement.scrollHeight - 200;
    setVisible(pastHero && !nearEnd);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50"
        >
          <WhatsappLink
            id="floating-whatsapp"
            source="floating"
            aria-label="Falar no WhatsApp"
            className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white text-black rounded-full border border-black/10 transition-transform duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 rounded-full border border-white animate-ping opacity-30" />
            <MessageCircle className="w-6 h-6" />
          </WhatsappLink>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
