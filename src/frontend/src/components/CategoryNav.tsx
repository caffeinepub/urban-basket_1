import { motion } from "motion/react";
import { CATEGORIES } from "../data/products";

interface CategoryNavProps {
  activeCategoryId: string;
  onCategoryClick: (id: string) => void;
}

export function CategoryNav({
  activeCategoryId,
  onCategoryClick,
}: CategoryNavProps) {
  return (
    <div
      className="sticky top-16 z-40 bg-white/85 backdrop-blur-md border-b border-white/60"
      id="categories"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide py-3">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategoryId === cat.id;
            return (
              <button
                type="button"
                key={cat.id}
                onClick={() => onCategoryClick(cat.id)}
                className={`relative flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-medium transition-colors duration-200 border ${
                  isActive
                    ? "text-primary border-primary/40"
                    : "bg-card text-muted-foreground border-border hover:border-primary/30 hover:text-foreground"
                }`}
                data-ocid="categories.tab"
              >
                {isActive && (
                  <motion.span
                    layoutId="category-active-pill"
                    className="absolute inset-0 rounded-2xl bg-primary/10 border border-primary/30"
                    style={{
                      boxShadow:
                        "0 0 0 2px oklch(0.50 0.16 250 / 0.22), 0 2px 8px rgba(47,111,206,0.15)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 flex items-center justify-center w-7 h-7 rounded-lg text-base transition-all duration-200 ${
                    isActive ? "bg-primary/12" : "bg-muted"
                  }`}
                >
                  {cat.emoji}
                </span>
                <span className="relative z-10">{cat.name}</span>
                <span
                  className={`relative z-10 ml-1 w-1.5 h-1.5 rounded-full bg-primary transition-all duration-200 ${
                    isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
