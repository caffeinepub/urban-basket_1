import { BackToTop } from "../components/BackToTop";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PageTransition } from "../components/PageTransition";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const sections = [
  {
    title: "Information We Collect",
    content:
      "When you place an order through WhatsApp, we collect your name, phone number, delivery address, and order details. This information is used solely to process and deliver your order.",
  },
  {
    title: "How We Use Your Information",
    content:
      "Your personal information is used to confirm and fulfil your orders, communicate delivery updates, and improve our service. We do not sell or share your data with third parties.",
  },
  {
    title: "Data Security",
    content:
      "We take reasonable steps to protect your personal information from unauthorised access or disclosure. All communications are handled over encrypted channels.",
  },
  {
    title: "Cookies",
    content:
      "Our website may use basic cookies to enhance your browsing experience. No personally identifiable information is stored in cookies. You may disable cookies in your browser settings.",
  },
  {
    title: "Third-Party Services",
    content:
      "We use WhatsApp (Meta) to facilitate order communication. By using our ordering service, you also agree to WhatsApp's privacy policy and terms of service.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of our services constitutes acceptance of the revised policy.",
  },
  {
    title: "Contact Us",
    content:
      "If you have questions about this Privacy Policy, please reach out to us via WhatsApp or email. We're happy to address any concerns.",
  },
];

export function PrivacyPage() {
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
                    Privacy Policy
                  </h1>
                  <p className="text-muted-foreground text-sm">
                    Last updated: January 2025
                  </p>
                  <p className="text-muted-foreground mt-3 leading-relaxed">
                    At Urban Basket, we value your privacy and are committed to
                    protecting your personal information. This policy explains
                    how we collect, use, and safeguard your data.
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
