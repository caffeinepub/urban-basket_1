import { useNavigate } from "@tanstack/react-router";
import { ChevronRight, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "../data/products";

export function Hero() {
  const navigate = useNavigate();
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Urban Basket! I'd like to browse your products and place an order.")}`;

  return (
    <section className="bg-background" id="shop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Fast Delivery &middot; Genuine Products
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              Your Daily Essentials,{" "}
              <span className="text-primary">Delivered via WhatsApp</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-md leading-relaxed">
              Browse our curated selection of quality packaged products. Add to
              cart and place your order instantly on WhatsApp &mdash; no apps,
              no hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-md"
                data-ocid="hero.primary_button"
              >
                <MessageCircle className="w-4 h-4" />
                Shop via WhatsApp
              </a>
              <button
                type="button"
                onClick={() => navigate({ to: "/categories" })}
                className="inline-flex items-center justify-center gap-2 bg-card text-foreground border border-border px-6 py-3 rounded-full font-semibold text-sm hover:bg-muted transition-all"
                data-ocid="hero.secondary_button"
              >
                Browse Products <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden">
            <img
              src="/assets/generated/hero-bg.dim_1200x600.jpg"
              alt="Urban Basket store"
              className="w-full h-56 sm:h-72 md:h-96 object-cover rounded-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-card">
              <p className="text-xs text-muted-foreground">Trusted by</p>
              <p className="text-sm font-bold text-foreground">
                2,000+ Happy Customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
