import { Lock, RefreshCw, ShieldCheck, Truck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CTABanner } from "../components/CTABanner";
import { CartDrawer } from "../components/CartDrawer";
import { CategoryNav } from "../components/CategoryNav";
import { CategorySection } from "../components/CategorySection";
import { FloatingCart } from "../components/FloatingCart";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { CATEGORIES } from "../data/products";

const TRUST_ITEMS = [
  { icon: Truck, label: "Fast Delivery" },
  { icon: ShieldCheck, label: "100% Genuine" },
  { icon: RefreshCw, label: "Easy Returns" },
  { icon: Lock, label: "Secure Payments" },
];

export function CategoriesPage() {
  const [activeCategoryId, setActiveCategoryId] = useState(CATEGORIES[0].id);

  const sectionRefs = useRef<
    Record<string, React.RefObject<HTMLElement | null>>
  >(Object.fromEntries(CATEGORIES.map((c) => [c.id, { current: null }])));

  // Hash-based scroll on mount
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  // IntersectionObserver to track active category
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    for (const cat of CATEGORIES) {
      const el = sectionRefs.current[cat.id]?.current;
      if (!el) continue;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveCategoryId(cat.id);
          }
        },
        { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    }

    return () => {
      for (const o of observers) o.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Page header — compact */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 pb-1 mt-2 animate-fade-slide-up">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Browse Categories
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Quality packaged essentials, delivered to your door
          </p>
        </div>

        {/* Trust bar — tight */}
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
          sectionRefs={sectionRefs.current}
          onCategoryClick={setActiveCategoryId}
        />
        <div className="bg-background">
          {CATEGORIES.map((cat) => (
            <CategorySection
              key={cat.id}
              category={cat}
              ref={(el) => {
                if (sectionRefs.current[cat.id]) {
                  sectionRefs.current[cat.id].current = el;
                }
              }}
            />
          ))}
        </div>
        <CTABanner />
      </main>
      <Footer />
      <FloatingCart />
      <FloatingWhatsApp />
      <CartDrawer />
    </div>
  );
}
