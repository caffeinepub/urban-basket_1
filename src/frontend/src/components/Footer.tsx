import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { MessageCircle, ShoppingBasket } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { WHATSAPP_NUMBER } from "../data/products";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "Categories", to: "/categories" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

const LEGAL_LINKS = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "FAQ / Help", to: "/faq" },
] as const;

function FooterLink({
  to,
  label,
  isActive,
}: {
  to: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <li>
      <Link
        to={to}
        className={`relative text-sm transition-colors group inline-block ${
          isActive
            ? "text-primary font-semibold"
            : "text-muted-foreground hover:text-foreground"
        }`}
        data-ocid="footer.link"
      >
        <span className="relative inline-block">
          {label}
          {!isActive && (
            <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          )}
        </span>
      </Link>
    </li>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  return (
    <footer className="bg-card">
      {/* Gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200/70 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <ShoppingBasket className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground text-base">
                Urban Basket
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Your neighbourhood general store, now online. Premium packaged
              products delivered to your door.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                data-ocid="footer.link"
              >
                <SiInstagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                data-ocid="footer.link"
              >
                <SiFacebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <FooterLink
                  key={link.label}
                  to={link.to}
                  label={link.label}
                  isActive={pathname === link.to}
                />
              ))}
            </ul>
          </div>

          {/* Column 3 — Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm tracking-wide uppercase">
              Legal
            </h4>
            <ul className="flex flex-col gap-2.5">
              {LEGAL_LINKS.map((link) => (
                <FooterLink
                  key={link.label}
                  to={link.to}
                  label={link.label}
                  isActive={pathname === link.to}
                />
              ))}
            </ul>
          </div>

          {/* Column 4 — Get in Touch */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm tracking-wide uppercase">
              Get in Touch
            </h4>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.link"
            >
              <Button className="bg-green-500 hover:bg-green-600 text-white w-full gap-2 mb-3">
                <MessageCircle className="w-4 h-4" />
                Order on WhatsApp
              </Button>
            </a>
            <p className="text-xs text-muted-foreground">Mon–Sun, 9am–9pm</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
            <p className="text-xs text-muted-foreground">
              © {year} Urban Basket. Built with ♥ using{" "}
              <a
                href={caffeineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors underline"
              >
                caffeine.ai
              </a>
            </p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <Link
                to="/privacy"
                className="hover:text-foreground transition-colors"
                data-ocid="footer.link"
              >
                Privacy Policy
              </Link>
              <span className="text-border">|</span>
              <Link
                to="/terms"
                className="hover:text-foreground transition-colors"
                data-ocid="footer.link"
              >
                Terms
              </Link>
              <span className="text-border">|</span>
              <Link
                to="/faq"
                className="hover:text-foreground transition-colors"
                data-ocid="footer.link"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
