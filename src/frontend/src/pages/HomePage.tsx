import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { BackToTop } from "../components/BackToTop";
import { CTABanner } from "../components/CTABanner";
import { CartDrawer } from "../components/CartDrawer";
import { FloatingCart } from "../components/FloatingCart";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { PageTransition } from "../components/PageTransition";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { CATEGORIES, PRODUCTS } from "../data/products";

const categoryGridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const categoryCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export function HomePage() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate({ to: "/categories", search: { category: categoryId } });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />

          {/* Category Preview — compact */}
          <section className="relative overflow-hidden py-8 md:py-10 bg-muted/30">
            {/* Blob shapes */}
            <div className="absolute top-[-80px] left-[-60px] w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-blob pointer-events-none" />
            <div
              className="absolute bottom-[-60px] right-[-40px] w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-blob pointer-events-none"
              style={{ animationDelay: "6s" }}
            />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
              <motion.div
                className="text-center mb-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Shop by Category
                </h2>
                <p className="text-muted-foreground text-sm">
                  Browse our carefully curated selection of everyday essentials
                </p>
              </motion.div>
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4"
                variants={categoryGridVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                {CATEGORIES.map((cat) => {
                  const count = PRODUCTS.filter(
                    (p) => p.categoryId === cat.id,
                  ).length;
                  return (
                    <motion.button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategoryClick(cat.id)}
                      className="glass-card rounded-2xl p-4 md:p-5 flex flex-col items-start gap-2 hover:border-primary/30 transition-colors duration-200 text-left group"
                      data-ocid="categories.button"
                      variants={categoryCardVariants}
                      whileHover={{
                        y: -4,
                        scale: 1.02,
                        boxShadow:
                          "0 8px 32px rgba(47,111,206,0.16), 0 2px 8px rgba(0,0,0,0.08)",
                      }}
                      whileTap={{ scale: 0.97 }}
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 22,
                      }}
                    >
                      <span className="text-2xl md:text-3xl">{cat.emoji}</span>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground text-sm leading-tight">
                          {cat.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {count} products
                        </p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                  );
                })}
              </motion.div>
            </div>
          </section>

          <WhyChooseUs />
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
