import { forwardRef, useEffect, useRef, useState } from "react";
import type { CategoryData } from "../data/products";
import { PRODUCTS } from "../data/products";
import { ProductCard } from "./ProductCard";

interface CategorySectionProps {
  category: CategoryData;
}

export const CategorySection = forwardRef<HTMLElement, CategorySectionProps>(
  ({ category }, ref) => {
    const products = PRODUCTS.filter((p) => p.categoryId === category.id);
    const [visibleItems, setVisibleItems] = useState<boolean[]>(
      new Array(products.length).fill(false) as boolean[],
    );
    const [headerVisible, setHeaderVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const observedRef = useRef(false);
    const headerObservedRef = useRef(false);
    const productsLen = products.length;

    // Animate header on scroll into view
    useEffect(() => {
      const el = headerRef.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !headerObservedRef.current) {
            headerObservedRef.current = true;
            setHeaderVisible(true);
            observer.unobserve(el);
          }
        },
        { threshold: 0.3 },
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, []);

    // Animate product cards on scroll into view — stagger 80ms
    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !observedRef.current) {
            observedRef.current = true;
            for (let i = 0; i < productsLen; i++) {
              const idx = i;
              setTimeout(() => {
                setVisibleItems((prev) => {
                  const next = [...prev];
                  next[idx] = true;
                  return next;
                });
              }, idx * 80);
            }
            observer.unobserve(el);
          }
        },
        { threshold: 0.05 },
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, [productsLen]);

    return (
      <section
        ref={ref}
        id={`section-${category.id}`}
        className="py-6 md:py-8 border-b border-border/50 last:border-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section header — compact, expressive entrance */}
          <div
            ref={headerRef}
            className="flex items-center justify-between mb-3"
            style={{
              transition:
                "opacity 600ms cubic-bezier(0.22,1,0.36,1), transform 600ms cubic-bezier(0.22,1,0.36,1)",
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-muted text-xl">
                {category.emoji}
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                  {category.name}
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {products.length} products available
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-flex items-center text-xs text-primary font-medium bg-primary/8 border border-primary/20 px-3 py-1 rounded-full">
              {products.length} items
            </span>
          </div>

          <div
            ref={containerRef}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 md:gap-3"
          >
            {products.map((product, idx) => (
              <div
                key={product.id}
                style={{
                  transition:
                    "opacity 600ms cubic-bezier(0.22,1,0.36,1), transform 600ms cubic-bezier(0.22,1,0.36,1)",
                  opacity: visibleItems[idx] ? 1 : 0,
                  transform: visibleItems[idx]
                    ? "translateY(0)"
                    : "translateY(32px)",
                }}
              >
                <ProductCard product={product} index={idx} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
);

CategorySection.displayName = "CategorySection";
