import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "../data/products";

export function CTABanner() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Urban Basket! I'd like to place an order.")}`;

  return (
    <section className="bg-primary py-14 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
          Ready to Order? It's Just One Message Away.
        </h2>
        <p className="text-primary-foreground/80 mb-8 text-base md:text-lg">
          Chat with us on WhatsApp and we'll handle the rest. Fast, simple,
          reliable.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-card text-primary px-8 py-4 rounded-full font-bold text-base hover:scale-105 active:scale-95 transition-transform shadow-float"
          data-ocid="cta.primary_button"
        >
          <MessageCircle className="w-5 h-5" />
          Order on WhatsApp Now
        </a>
      </div>
    </section>
  );
}
