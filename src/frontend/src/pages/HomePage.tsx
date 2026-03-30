import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CTABanner } from "../components/CTABanner";
import { CartDrawer } from "../components/CartDrawer";
import { FloatingCart } from "../components/FloatingCart";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { PageTransition } from "../components/PageTransition";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { CATEGORIES, PRODUCTS } from "../data/products";

export function HomePage() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate({ to: "/categories", hash: `section-${categoryId}` });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />

          {/* Category Preview — compact */}
          <section className="relative overflow-hidden py-8 md:py-10 bg-muted/30">
            {/* Blob shapes */}
            <div className="absolute top-[-80px] left-[-60px] w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-blob pointer-events-none" />
            <div
              className="absolute bottom-[-60px] right-[-40px] w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-blob pointer-events-none"
              style={{ animationDelay: "6s" }}
            />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-5">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Shop by Category
                </h2>
                <p className="text-muted-foreground text-sm">
                  Browse our carefully curated selection of everyday essentials
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
                {CATEGORIES.map((cat) => {
                  const count = PRODUCTS.filter(
                    (p) => p.categoryId === cat.id,
                  ).length;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategoryClick(cat.id)}
                      className="glass-card rounded-2xl p-4 md:p-5 flex flex-col items-start gap-2 hover:shadow-glass hover:shadow-[0_4px_20px_rgba(47,111,206,0.12)] hover:border-primary/30 transition-all duration-200 hover:-translate-y-0.5 text-left group"
                      data-ocid="categories.button"
                    >
                      <span className="text-2xl md:text-3xl">{cat.emoji}</span>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground text-sm leading-tight">
                          {cat.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {count} products
                        </p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          <WhyChooseUs />
          <CTABanner />
        </main>
        <Footer />
        <FloatingCart />
        <FloatingWhatsApp />
        <CartDrawer />
      </div>
    </PageTransition>
  );
}
