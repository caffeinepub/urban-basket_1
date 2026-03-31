import { Link, useSearch } from "@tanstack/react-router";
import { Lock, RefreshCw, ShieldCheck, Truck } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { BackToTop } from "../components/BackToTop";
import { CTABanner } from "../components/CTABanner";
import { CartDrawer } from "../components/CartDrawer";
import { CategoryNav } from "../components/CategoryNav";
import { CategorySection } from "../components/CategorySection";
import { FloatingCart } from "../components/FloatingCart";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PageTransition } from "../components/PageTransition";
import { CATEGORIES } from "../data/products";

const TRUST_ITEMS = [
  { icon: Truck, label: "Fast Delivery" },
  { icon: ShieldCheck, label: "100% Genuine" },
  { icon: RefreshCw, label: "Easy Returns" },
  { icon: Lock, label: "Secure Payments" },
];

export function CategoriesPage() {
  const { category } = useSearch({ from: "/categories" });
  const [activeCategoryId, setActiveCategoryId] = useState(
    () => category || CATEGORIES[0].id,
  );

  // Sync with URL search param on mount
  useEffect(() => {
    if (category) setActiveCategoryId(category);
  }, [category]);

  const activeCategory =
    CATEGORIES.find((c) => c.id === activeCategoryId) ?? CATEGORIES[0];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Breadcrumb */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-3">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">Categories</span>
            </nav>
          </div>

          {/* Page header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-3 pb-1 animate-fade-slide-up">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Browse Categories
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Quality packaged essentials, delivered to your door
            </p>
          </div>

          {/* Trust bar */}
          <div className="bg-muted/30 border-y border-border/50 py-1.5 mt-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
                {TRUST_ITEMS.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground"
                  >
                    <Icon className="w-3.5 h-3.5 text-primary/60" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <CategoryNav
            activeCategoryId={activeCategoryId}
            onCategoryClick={setActiveCategoryId}
          />

          <div className="bg-background min-h-[400px]">
            <AnimatePresence mode="wait">
              <CategorySection
                key={activeCategoryId}
                category={activeCategory}
                index={0}
              />
            </AnimatePresence>
          </div>

          <CTABanner />
        </main>
        <Footer />
        <FloatingCart />
        <FloatingWhatsApp />
        <CartDrawer />
        <BackToTop />
      </div>
    </PageTransition>
  );
}
