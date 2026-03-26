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
    const containerRef = useRef<HTMLDivElement>(null);
    const observedRef = useRef(false);
    const productsLen = products.length;

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
              }, idx * 60);
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
        className="py-10 md:py-14"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{category.emoji}</span>
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                {category.name}
              </h2>
            </div>
            <span className="text-sm text-primary font-medium">
              {products.length} products
            </span>
          </div>

          <div
            ref={containerRef}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4"
          >
            {products.map((product, idx) => (
              <div
                key={product.id}
                className={`transition-all duration-500 ${
                  visibleItems[idx]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
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
