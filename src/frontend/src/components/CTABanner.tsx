import { MessageCircle } from "lucide-react";
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
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
          Ready to Order? It&apos;s Just One Message Away.
        </h2>
        <p className="text-primary-foreground/80 mb-8 text-base md:text-lg">
          Chat with us on WhatsApp and we&apos;ll handle the rest. Fast, simple,
          reliable.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-card text-primary px-8 py-4 rounded-full font-bold text-base hover:scale-105 hover:shadow-glow-blue active:scale-95 transition-all shadow-float"
          data-ocid="cta.primary_button"
        >
          <MessageCircle className="w-5 h-5" />
          Order on WhatsApp Now
        </a>
      </div>
    </section>
  );
}
