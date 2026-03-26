import { ShoppingCart } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCart } from "../context/CartContext";

export function FloatingCart() {
  const { totalItems, totalPrice, setIsOpen } = useCart();

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-4 sm:right-6 z-40 flex items-center gap-2.5 bg-primary text-primary-foreground pl-4 pr-5 py-3 rounded-full shadow-float hover:opacity-90 transition-opacity active:scale-95"
          data-ocid="cart.open_modal_button"
        >
          <ShoppingCart className="w-4 h-4" />
          <div className="flex flex-col items-start leading-tight">
            <span className="text-xs font-medium opacity-90">
              View Cart ({totalItems})
            </span>
            <span className="text-sm font-bold">₹{totalPrice}</span>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
