import { Link, useLocation } from "@tanstack/react-router";
import { Menu, MessageCircle, ShoppingBasket, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Categories", to: "/categories" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20place%20an%20order%20from%20Urban%20Basket`;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-slate-200/80 shadow-sm"
          : "bg-white/80 backdrop-blur-md border-slate-200/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 flex-shrink-0"
          data-ocid="header.link"
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <ShoppingBasket className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground tracking-tight">
            Urban <span className="text-primary">Basket</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`relative text-sm font-medium transition-colors pb-1.5 group ${
                  isActive
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-ocid="header.link"
              >
                <motion.span
                  className="relative"
                  whileHover={{ y: -0.5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {item.label}
                </motion.span>
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full origin-center"
                  initial={{ scaleX: isActive ? 1 : 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-all duration-200 ${
                    isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right: WhatsApp CTA + Cart + Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Desktop WhatsApp CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-3 py-1.5 rounded-lg transition-colors cta-glow"
            data-ocid="header.primary_button"
          >
            <MessageCircle className="w-4 h-4" />
            Order on WhatsApp
          </a>

          <motion.button
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative flex items-center justify-center w-9 h-9 rounded-full hover:bg-muted transition-colors"
            aria-label="Open cart"
            data-ocid="header.button"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <ShoppingBasket className="w-5 h-5 text-foreground" />
            {totalItems > 0 && (
              <motion.span
                className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center leading-none min-w-[18px] min-h-[18px] px-1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                {totalItems}
              </motion.span>
            )}
          </motion.button>

          <button
            type="button"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-muted transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="header.toggle"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden bg-card border-t border-border px-4 flex flex-col gap-1 overflow-hidden"
          >
            <div className="py-3 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={`text-sm font-medium py-2 px-3 rounded-xl transition-colors ${
                      isActive
                        ? "bg-primary/8 text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setMenuOpen(false)}
                    data-ocid="header.link"
                  >
                    {item.label}
                  </Link>
                );
              })}
              {/* Mobile WhatsApp CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition-colors mt-1 mb-3 cta-glow"
                onClick={() => setMenuOpen(false)}
                data-ocid="header.primary_button"
              >
                <MessageCircle className="w-4 h-4" />
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
