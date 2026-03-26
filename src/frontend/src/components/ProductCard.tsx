import { Plus } from "lucide-react";
import { useCart } from "../context/CartContext";
import type { ProductData } from "../data/products";

interface ProductCardProps {
  product: ProductData;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart, items } = useCart();
  const cartItem = items.find((i) => i.product.id === product.id);
  const savings = product.originalPrice - product.price;

  return (
    <div
      className="bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5 flex flex-col overflow-hidden group"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative bg-muted aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {cartItem && (
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cartItem.quantity}
          </div>
        )}
        {savings > 0 && (
          <div className="absolute top-2 left-2 bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
            Save &#8377;{savings}
          </div>
        )}
      </div>

      <div className="p-3 flex flex-col flex-1">
        <h3 className="font-semibold text-foreground text-sm leading-tight mb-0.5 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground mb-2">{product.unit}</p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground line-through leading-none mb-0.5">
              &#8377;{product.originalPrice}
            </span>
            <span className="text-base font-bold text-foreground leading-none">
              &#8377;{product.price}
            </span>
          </div>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="flex items-center gap-1 bg-secondary text-secondary-foreground border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all px-3 py-1.5 rounded-full text-xs font-semibold active:scale-95"
            data-ocid="product.button"
          >
            <Plus className="w-3 h-3" />
            {cartItem ? "Add More" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
