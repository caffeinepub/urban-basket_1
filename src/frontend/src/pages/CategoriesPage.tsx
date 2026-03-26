import { useEffect, useRef, useState } from "react";
import { CTABanner } from "../components/CTABanner";
import { CartDrawer } from "../components/CartDrawer";
import { CategoryNav } from "../components/CategoryNav";
import { CategorySection } from "../components/CategorySection";
import { FloatingCart } from "../components/FloatingCart";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { CATEGORIES } from "../data/products";

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-2">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Browse Categories
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Quality packaged essentials, delivered to your door
          </p>
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
      <CartDrawer />
    </div>
  );
}
