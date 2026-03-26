import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBasket, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Categories", to: "/categories" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
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
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors [&.active]:text-foreground [&.active]:font-semibold"
              data-ocid="header.link"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Cart + Mobile Menu */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative flex items-center justify-center w-9 h-9 rounded-full hover:bg-muted transition-colors"
            aria-label="Open cart"
            data-ocid="header.button"
          >
            <ShoppingBasket className="w-5 h-5 text-foreground" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center leading-none min-w-[18px] min-h-[18px] px-1">
                {totalItems}
              </span>
            )}
          </button>

          <button
            type="button"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-muted transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="header.toggle"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 py-4 flex flex-col gap-3">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-sm font-medium text-muted-foreground hover:text-foreground py-1 [&.active]:text-foreground [&.active]:font-semibold"
              onClick={() => setMenuOpen(false)}
              data-ocid="header.link"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
