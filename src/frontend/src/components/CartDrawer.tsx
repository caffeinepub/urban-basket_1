import { MessageCircle, Minus, Plus, Trash2, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCart } from "../context/CartContext";
import { WHATSAPP_NUMBER } from "../data/products";

export function CartDrawer() {
  const {
    items,
    isOpen,
    setIsOpen,
    updateQuantity,
    removeFromCart,
    totalPrice,
    totalItems,
  } = useCart();

  const placeOrder = () => {
    if (items.length === 0) return;
    const lines = items
      .map(
        (i) =>
          `\u2022 ${i.product.name} x${i.quantity} - \u20b9${i.product.price * i.quantity}`,
      )
      .join("\n");
    const message = `Hi Urban Basket! I'd like to order:\n${lines}\nTotal: \u20b9${totalPrice}\nPlease confirm my order. Thank you!`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/30 z-50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            data-ocid="cart.modal"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-sm bg-card shadow-float z-50 flex flex-col"
            data-ocid="cart.dialog"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <h2 className="font-bold text-lg text-foreground">Your Cart</h2>
              <div className="flex items-center gap-3">
                {totalItems > 0 && (
                  <span className="text-xs text-muted-foreground">
                    {totalItems} item{totalItems !== 1 ? "s" : ""}
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
                  aria-label="Close cart"
                  data-ocid="cart.close_button"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <div
                  className="flex flex-col items-center justify-center h-full gap-4 text-center"
                  data-ocid="cart.empty_state"
                >
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Your cart is empty
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Add products to get started
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {items.map((item, idx) => (
                    <div
                      key={item.product.id}
                      className="flex gap-3 items-center bg-background rounded-xl p-3 border border-border"
                      data-ocid={`cart.item.${idx + 1}`}
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground truncate">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.product.unit}
                        </p>
                        <p className="text-sm font-bold text-foreground mt-0.5">
                          &#8377;{item.product.price * item.quantity}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                          aria-label="Remove"
                          data-ocid="cart.delete_button"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="w-6 h-6 flex items-center justify-center rounded-full bg-muted hover:bg-border transition-colors"
                            data-ocid="cart.button"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-5 text-center text-sm font-semibold text-foreground">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="w-6 h-6 flex items-center justify-center rounded-full bg-muted hover:bg-border transition-colors"
                            data-ocid="cart.button"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="px-5 py-4 border-t border-border bg-card">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">Total</span>
                  <span className="text-lg font-bold text-foreground">
                    &#8377;{totalPrice}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={placeOrder}
                  className="w-full flex items-center justify-center gap-2 bg-[oklch(0.52_0.18_145)] text-white py-3.5 rounded-full font-semibold text-sm hover:opacity-90 transition-all hover:scale-[1.02] active:scale-95 shadow-md"
                  data-ocid="cart.confirm_button"
                >
                  <MessageCircle className="w-4 h-4" />
                  Place Order on WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
