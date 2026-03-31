import { MessageCircle, ShieldCheck, Tag, Truck } from "lucide-react";
import { motion } from "motion/react";

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

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export function WhyChooseUs() {
  return (
    <section className="py-14 md:py-20 bg-card" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Why Choose Urban Basket?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            We make daily shopping simple, reliable, and fast.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {TRUST_POINTS.map((point, idx) => (
            <motion.div
              key={point.title}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{
                y: -6,
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-background rounded-2xl p-6 border border-border shadow-glass cursor-default"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
