import { Minus, Plus } from "lucide-react";
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

export function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart, updateQuantity, items } = useCart();
  const cartItem = items.find((i) => i.product.id === product.id);
  const savings = product.originalPrice - product.price;
  const tagConfig = product.tag ? TAG_CONFIG[product.tag] : null;

  return (
    <div
      className="bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.025] flex flex-col overflow-hidden group cursor-default"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative bg-muted aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />

        {/* Savings badge — top left */}
        {savings > 0 && (
          <div className="absolute top-2 left-2 bg-slate-800 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wide">
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

          {/* Button / Stepper — Mobile: always show. Desktop: slide up on hover */}
          <div className="md:opacity-0 md:translate-y-3 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:transition-all md:duration-200">
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
                className="flex items-center gap-1 bg-secondary text-secondary-foreground border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all px-3 py-1.5 rounded-full text-xs font-semibold active:scale-95"
                data-ocid="product.button"
              >
                <Plus className="w-3 h-3" />
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
