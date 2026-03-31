import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BackToTop } from "../components/BackToTop";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PageTransition } from "../components/PageTransition";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const FAQS = [
  {
    q: "How do I place an order?",
    a: 'Ordering is simple — browse products on our Categories page, add items to your cart, then click "Order on WhatsApp". This opens WhatsApp with a pre-filled message listing your selected products. Just send it and we\'ll confirm your order.',
  },
  {
    q: "What areas do you deliver to?",
    a: "We currently deliver within Mumbai and select surrounding areas. During order confirmation on WhatsApp, we'll verify if your pin code is serviceable. We're expanding coverage regularly — check back if we're not yet in your area.",
  },
  {
    q: "How long does delivery take?",
    a: "Standard delivery takes 2–4 hours for orders placed before 6pm. Orders placed after 6pm are typically delivered the following morning by 11am. We'll keep you updated via WhatsApp.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash on delivery, UPI (PhonePe, GPay, Paytm), and bank transfer. Payment details will be shared during order confirmation on WhatsApp. We do not accept credit/debit cards at this time.",
  },
  {
    q: "Can I return or exchange a product?",
    a: "Yes. If you receive a damaged, expired, or incorrect product, please contact us via WhatsApp within 24 hours of delivery with a photo. We'll arrange a replacement or refund within 3–5 business days.",
  },
  {
    q: "What if a product is out of stock?",
    a: "We try to keep our catalogue up to date, but occasionally items may be unavailable. We'll notify you during order confirmation and suggest alternatives where possible.",
  },
  {
    q: "Is there a minimum order value?",
    a: "There is no minimum order value. However, orders below ₹200 may incur a small delivery fee of ₹20. This fee is waived for orders above ₹200.",
  },
  {
    q: "How do I track my order?",
    a: "Order tracking is done via WhatsApp. Once your order is confirmed and dispatched, we'll send you a message with the estimated delivery time. You can always reply to check your order status.",
  },
];

export function FAQPage() {
  const { ref: heroRef, isVisible: heroVisible } = useIntersectionObserver();

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <section className="py-16 md:py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <div
                ref={heroRef}
                style={{
                  transition:
                    "opacity 700ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.22,1,0.36,1)",
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(28px)",
                }}
              >
                <div className="text-center mb-12">
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Frequently Asked Questions
                  </h1>
                  <p className="text-muted-foreground leading-relaxed">
                    Can't find your answer here? Reach us directly on WhatsApp —
                    we typically respond within minutes.
                  </p>
                </div>

                <Accordion type="single" collapsible className="space-y-2">
                  {FAQS.map((faq) => (
                    <AccordionItem
                      key={faq.q}
                      value={faq.q}
                      className="bg-card border border-border rounded-xl px-5 data-[state=open]:border-primary/30 transition-all"
                    >
                      <AccordionTrigger className="text-sm font-medium text-foreground hover:text-primary py-4 hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </PageTransition>
  );
}
