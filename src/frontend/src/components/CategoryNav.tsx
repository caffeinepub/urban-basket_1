import type { RefObject } from "react";
import { CATEGORIES } from "../data/products";

interface CategoryNavProps {
  activeCategoryId: string;
  sectionRefs: Record<string, RefObject<HTMLElement | null>>;
  onCategoryClick: (id: string) => void;
}

export function CategoryNav({
  activeCategoryId,
  sectionRefs,
  onCategoryClick,
}: CategoryNavProps) {
  const handleClick = (id: string) => {
    onCategoryClick(id);
    const ref = sectionRefs[id];
    if (ref?.current) {
      const offset = 80;
      const top =
        ref.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

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
                onClick={() => handleClick(cat.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? "bg-primary/10 border-primary/40 text-primary shadow-[0_0_0_2px_oklch(0.50_0.16_250_/_0.25),_0_2px_8px_rgba(47,111,206,0.15)] scale-[1.03]"
                    : "bg-card text-muted-foreground border-border hover:border-primary/30 hover:text-foreground hover:shadow-sm hover:scale-[1.01]"
                }`}
                data-ocid="categories.tab"
              >
                <span
                  className={`flex items-center justify-center w-7 h-7 rounded-lg text-base transition-all duration-200 ${
                    isActive ? "bg-primary/12" : "bg-muted"
                  }`}
                >
                  {cat.emoji}
                </span>
                <span>{cat.name}</span>
                <span
                  className={`ml-1 w-1.5 h-1.5 rounded-full bg-primary transition-all duration-200 ${
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
