import { BackToTop } from "../components/BackToTop";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PageTransition } from "../components/PageTransition";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing and using the Urban Basket website and ordering service, you agree to be bound by these Terms & Conditions. If you do not agree, please refrain from using our services.",
  },
  {
    title: "Use of Service",
    content:
      "Our website is intended to help you browse products and place orders via WhatsApp. You agree not to misuse the service, submit false orders, or engage in any activity that disrupts our operations.",
  },
  {
    title: "Orders & Payment",
    content:
      "All orders are placed through WhatsApp. Prices are in Indian Rupees (₹) and include applicable taxes. Payment terms are agreed upon at the time of order confirmation. Urban Basket reserves the right to cancel orders due to stock unavailability or pricing errors.",
  },
  {
    title: "Delivery",
    content:
      "We deliver within our serviceable area. Delivery timelines are estimates and may vary based on traffic, demand, and other factors. We are not liable for delays caused by circumstances beyond our control.",
  },
  {
    title: "Returns & Refunds",
    content:
      "We accept returns for damaged or incorrect items within 24 hours of delivery. Please contact us via WhatsApp with photos of the issue. Refunds are processed within 3–5 business days to the original payment method.",
  },
  {
    title: "Product Availability",
    content:
      "Product availability and pricing are subject to change without notice. We make every effort to keep our catalogue current, but cannot guarantee that all listed products are in stock at all times.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content on this website, including text, images, logos, and design, is the property of Urban Basket and is protected by applicable intellectual property laws. Reproduction without written permission is prohibited.",
  },
  {
    title: "Disclaimer",
    content:
      "Urban Basket makes no warranties regarding the completeness or accuracy of product information. Our liability in any event is limited to the value of the products ordered. We are not responsible for indirect or consequential damages.",
  },
  {
    title: "Governing Law",
    content:
      "These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra.",
  },
];

export function TermsPage() {
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
                <div className="mb-10">
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                    Terms &amp; Conditions
                  </h1>
                  <p className="text-muted-foreground text-sm">
                    Last updated: January 2025
                  </p>
                  <p className="text-muted-foreground mt-3 leading-relaxed">
                    Please read these Terms &amp; Conditions carefully before
                    using Urban Basket. By placing an order or using our
                    website, you agree to these terms.
                  </p>
                </div>

                <div className="space-y-8">
                  {sections.map((section) => (
                    <div
                      key={section.title}
                      className="border-l-2 border-primary/20 pl-5"
                    >
                      <h2 className="text-base font-semibold text-foreground mb-2">
                        {section.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
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
