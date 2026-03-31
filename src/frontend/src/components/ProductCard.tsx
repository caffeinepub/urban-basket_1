import { Minus, Plus } from "lucide-react";
import { motion } from "motion/react";
import { useCart } from "../context/CartContext";
import type { ProductData } from "../data/products";

interface ProductCardProps {
  product: ProductData;
  index: number;
}

const TAG_CONFIG = {
  "best-seller": {
    label: "Best Seller",
    className: "bg-amber-50 text-amber-700 border border-amber-200",
  },
  trending: {
    label: "Trending",
    className: "bg-indigo-50 text-indigo-600 border border-indigo-200",
  },
  "low-stock": {
    label: "Only few left",
    className: "bg-rose-50 text-rose-600 border border-rose-200",
  },
};

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, updateQuantity, items } = useCart();
  const cartItem = items.find((i) => i.product.id === product.id);
  const savings = product.originalPrice - product.price;
  const tagConfig = product.tag ? TAG_CONFIG[product.tag] : null;

  return (
    <motion.div
      className="glass-card rounded-2xl flex flex-col overflow-hidden group cursor-default"
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow:
          "0 20px 60px rgba(47,111,206,0.20), 0 8px 24px rgba(0,0,0,0.12)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      style={{
        boxShadow: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)",
      }}
    >
      <div className="relative bg-muted aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Savings badge — top left */}
        {savings > 0 && (
          <div className="absolute top-2 left-2 bg-primary text-white text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wide">
            Save ₹{savings}
          </div>
        )}

        {/* Product tag — bottom left */}
        {tagConfig && (
          <div
            className={`absolute bottom-2 left-2 text-[10px] font-semibold px-2 py-0.5 rounded-full ${tagConfig.className}`}
          >
            {tagConfig.label}
          </div>
        )}
      </div>

      <div className="p-3 flex flex-col flex-1">
        <h3 className="font-semibold text-foreground text-sm leading-tight mb-0.5 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground mb-2">{product.unit}</p>
        <div className="flex items-center justify-between mt-auto gap-2">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground line-through leading-none mb-0.5">
              ₹{product.originalPrice}
            </span>
            <span className="text-base font-bold text-foreground leading-none">
              ₹{product.price}
            </span>
          </div>

          {/* Button / Stepper — always visible */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            {cartItem ? (
              <div
                className="flex items-center gap-1 bg-secondary border border-border rounded-full px-1 py-1 text-xs font-semibold"
                data-ocid="product.panel"
              >
                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(product.id, cartItem.quantity - 1)
                  }
                  className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-muted active:scale-95 transition-all"
                  data-ocid="product.secondary_button"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="min-w-[1.25rem] text-center">
                  {cartItem.quantity}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(product.id, cartItem.quantity + 1)
                  }
                  className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-primary hover:text-primary-foreground active:scale-95 transition-all"
                  data-ocid="product.primary_button"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => addToCart(product)}
                className="flex items-center gap-1 bg-primary/8 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-[0_4px_20px_rgba(47,111,206,0.35)] transition-all duration-200 ease-out px-3 py-1.5 rounded-full text-xs font-semibold active:scale-95"
                data-ocid="product.button"
              >
                <Plus className="w-3 h-3" />
                Add
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
