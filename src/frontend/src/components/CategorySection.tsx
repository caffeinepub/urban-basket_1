import { AnimatePresence, motion } from "motion/react";
import { forwardRef } from "react";
import type { CategoryData } from "../data/products";
import { PRODUCTS } from "../data/products";
import { ProductCard } from "./ProductCard";

interface CategorySectionProps {
  category: CategoryData;
  index: number;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
  exit: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.15,
      ease: [0.4, 0, 1, 1] as [number, number, number, number],
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
  exit: { opacity: 0, transition: { duration: 0.12 } },
};

export const CategorySection = forwardRef<HTMLElement, CategorySectionProps>(
  ({ category }, ref) => {
    const products = PRODUCTS.filter((p) => p.categoryId === category.id);

    return (
      <section
        ref={ref}
        id={`section-${category.id}`}
        className="py-6 md:py-8 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="flex items-center justify-between mb-3"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/8 text-xl">
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
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 md:gap-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <AnimatePresence>
              {products.map((product, idx) => (
                <motion.div key={product.id} variants={itemVariants}>
                  <ProductCard product={product} index={idx} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    );
  },
);

CategorySection.displayName = "CategorySection";
