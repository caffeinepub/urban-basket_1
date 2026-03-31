import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { WHATSAPP_NUMBER } from "../data/products";

export function CTABanner() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Urban Basket! I'd like to place an order.")}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-700 via-primary to-indigo-700 py-14 md:py-20">
      {/* Radial glow center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08)_0%,_transparent_65%)]" />
      {/* Decorative blur circle — top right */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      {/* Decorative blur circle — bottom left */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-indigo-400/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Ready to Order? It&apos;s Just One Message Away.
        </motion.h2>
        <motion.p
          className="text-primary-foreground/80 mb-8 text-base md:text-lg"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Chat with us on WhatsApp and we&apos;ll handle the rest. Fast, simple,
          reliable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-card text-primary px-8 py-4 rounded-full font-bold text-base shadow-float cta-glow"
            data-ocid="cta.primary_button"
            whileHover={{
              scale: 1.06,
              boxShadow:
                "0 8px 32px rgba(47,111,206,0.35), 0 0 0 3px rgba(255,255,255,0.3)",
            }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
          >
            <MessageCircle className="w-5 h-5" />
            Order on WhatsApp Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
