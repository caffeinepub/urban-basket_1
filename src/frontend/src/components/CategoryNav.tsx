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
      className="sticky top-16 z-40 bg-card/95 backdrop-blur-sm border-b border-border"
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
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? "bg-primary/10 border-primary/40 text-primary shadow-md scale-[1.03]"
                    : "bg-card text-muted-foreground border-border hover:border-primary/30 hover:text-foreground hover:shadow-sm hover:scale-[1.01]"
                }`}
                data-ocid="categories.tab"
              >
                <span
                  className={`flex items-center justify-center w-7 h-7 rounded-lg text-base transition-colors ${
                    isActive ? "bg-primary/12" : "bg-muted"
                  }`}
                >
                  {cat.emoji}
                </span>
                <span>{cat.name}</span>
                {isActive && (
                  <span className="ml-1 w-1.5 h-1.5 rounded-full bg-primary" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
