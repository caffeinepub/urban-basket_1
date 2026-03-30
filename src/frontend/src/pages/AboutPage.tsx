import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PageTransition } from "../components/PageTransition";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export function AboutPage() {
  const { ref: introRef, isVisible: introVisible } = useIntersectionObserver();
  const { ref: cardsRef, isVisible: cardsVisible } = useIntersectionObserver();

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <section className="py-16 md:py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              {/* Intro — scroll reveal */}
              <div
                ref={introRef}
                style={{
                  transition:
                    "opacity 700ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.22,1,0.36,1)",
                  opacity: introVisible ? 1 : 0,
                  transform: introVisible
                    ? "translateY(0)"
                    : "translateY(28px)",
                }}
              >
                <div className="text-center mb-10">
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    About Urban Basket
                  </h1>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    We're your neighbourhood general store, reimagined for the
                    modern era.
                  </p>
                </div>

                <div className="prose prose-sm max-w-none space-y-5 text-muted-foreground leading-relaxed mb-12">
                  <p>
                    Urban Basket was born out of a simple idea: what if getting
                    your everyday essentials was as easy as sending a message?
                    We started as a small neighbourhood store in Mumbai, serving
                    families who wanted quality packaged goods without the
                    hassle of long queues or unreliable delivery apps.
                  </p>
                  <p>
                    Today, we're proud to serve over 2,000 happy customers
                    across the city. Our mission is straightforward — bring you
                    the best packaged grocery staples, snacks, beverages,
                    personal care, and household items, all at honest prices,
                    delivered right to your door via WhatsApp.
                  </p>
                  <p>
                    Every product in our catalogue is handpicked for quality and
                    value. We only stock brands you know and trust, and we keep
                    our prices sharp so you never have to worry about
                    overpaying. When you order from Urban Basket, you're not
                    just buying groceries — you're supporting a local business
                    that genuinely cares about your experience.
                  </p>
                </div>
              </div>

              {/* Cards — scroll reveal with stagger */}
              <div ref={cardsRef} className="grid grid-cols-3 gap-4 md:gap-6">
                {[
                  {
                    icon: "✅",
                    title: "Quality",
                    desc: "Only trusted, genuine packaged brands in our store.",
                  },
                  {
                    icon: "⚡",
                    title: "Speed",
                    desc: "Fast WhatsApp-based ordering with quick delivery.",
                  },
                  {
                    icon: "🤝",
                    title: "Trust",
                    desc: "Transparent pricing, no hidden charges, ever.",
                  },
                ].map((item, idx) => (
                  <div
                    key={item.title}
                    className="bg-card border border-border rounded-2xl p-4 md:p-5 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-card-elevated"
                    style={{
                      transitionDelay: `${idx * 100}ms`,
                      opacity: cardsVisible ? 1 : 0,
                      transform: cardsVisible
                        ? "translateY(0)"
                        : "translateY(24px)",
                      transition: `opacity 600ms cubic-bezier(0.22,1,0.36,1) ${idx * 100}ms, transform 600ms cubic-bezier(0.22,1,0.36,1) ${idx * 100}ms`,
                    }}
                  >
                    <span className="text-2xl block mb-2">{item.icon}</span>
                    <p className="font-semibold text-foreground text-sm mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
