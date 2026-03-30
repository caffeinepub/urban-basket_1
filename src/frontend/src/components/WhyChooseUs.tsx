import { MessageCircle, ShieldCheck, Tag, Truck } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const TRUST_POINTS = [
  {
    icon: Truck,
    title: "Fast Local Delivery",
    desc: "Get your essentials delivered quickly to your doorstep.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Products",
    desc: "100% authentic, branded products — no substitutes ever.",
  },
  {
    icon: MessageCircle,
    title: "Easy WhatsApp Ordering",
    desc: "Browse, add to cart, and order in under a minute on WhatsApp.",
  },
  {
    icon: Tag,
    title: "Best Prices",
    desc: "Competitive pricing on all categories. No hidden charges.",
  },
];

export function WhyChooseUs() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="py-14 md:py-20 bg-card" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Why Choose Urban Basket?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            We make daily shopping simple, reliable, and fast.
          </p>
        </div>
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
        >
          {TRUST_POINTS.map((point, idx) => (
            <div
              key={point.title}
              className={`bg-background rounded-2xl p-6 border border-border shadow-glass transition-all duration-500 hover:-translate-y-1 hover:shadow-card-elevated cursor-default ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="w-10 h-10 bg-primary/8 rounded-xl flex items-center justify-center mb-4">
                <point.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
