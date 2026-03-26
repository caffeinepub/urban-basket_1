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
      className="sticky top-16 z-40 bg-card border-b border-border"
      id="categories"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide py-3">
          {CATEGORIES.map((cat) => (
            <button
              type="button"
              key={cat.id}
              onClick={() => handleClick(cat.id)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                activeCategoryId === cat.id
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
              data-ocid="categories.tab"
            >
              <span>{cat.emoji}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
