import { useNavigate } from "@tanstack/react-router";
import { ChevronRight, MessageCircle, Star } from "lucide-react";
import { motion } from "motion/react";
import { WHATSAPP_NUMBER } from "../data/products";

export function Hero() {
  const navigate = useNavigate();
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Urban Basket! I'd like to browse your products and place an order.")}`;

  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-slate-900">
      {/* Background image with Ken Burns effect */}
      <img
        src="/assets/generated/hero-bg.dim_1200x600.jpg"
        alt="Urban Basket store"
        className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
        style={{ willChange: "transform" }}
      />

      {/* Dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-slate-900/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pb-16 md:pb-24 pt-24 w-full">
        {/* Eyebrow badge */}
        <motion.div
          className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <span>⚡</span>
          <span>Fast Delivery · Genuine Products</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Your Daily Essentials,
          <br />
          <span className="bg-gradient-to-r from-blue-200 to-white/90 bg-clip-text text-transparent">
            Delivered via WhatsApp
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-base md:text-lg text-white/70 max-w-md mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.32,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Browse our curated selection of quality packaged products. Add to cart
          and place your order instantly on WhatsApp — no apps, no hassle.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.42,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-semibold shadow-hero-cta cta-glow"
            data-ocid="hero.primary_button"
            whileHover={{
              scale: 1.06,
              boxShadow:
                "0 8px 32px rgba(47,111,206,0.50), 0 0 0 3px rgba(255,255,255,0.15)",
            }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
          >
            <MessageCircle className="w-4 h-4" />
            Shop via WhatsApp
          </motion.a>
          <motion.button
            type="button"
            onClick={() =>
              navigate({ to: "/categories", search: { category: undefined } })
            }
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white px-7 py-3.5 rounded-full font-semibold"
            data-ocid="hero.secondary_button"
            whileHover={{
              scale: 1.04,
              backgroundColor: "rgba(255,255,255,0.18)",
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
          >
            Browse Products <ChevronRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>

      {/* Trust badge — bottom right, desktop only */}
      <div className="absolute bottom-8 right-8 glass-card rounded-2xl px-5 py-3 hidden md:block">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          <div>
            <p className="text-xs text-slate-500">Trusted by</p>
            <p className="text-sm font-bold text-slate-800">
              2,000+ Happy Customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
