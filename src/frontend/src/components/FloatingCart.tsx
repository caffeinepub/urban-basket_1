import { ShoppingCart } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useCart } from "../context/CartContext";

export function FloatingCart() {
  const { totalItems, totalPrice, setIsOpen } = useCart();
  const [bouncing, setBouncing] = useState(false);
  const prevTotalRef = useRef(totalItems);

  useEffect(() => {
    if (totalItems > prevTotalRef.current) {
      setBouncing(true);
      const t = setTimeout(() => setBouncing(false), 400);
      return () => clearTimeout(t);
    }
    prevTotalRef.current = totalItems;
  }, [totalItems]);

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: bouncing ? [1, 1.15, 0.95, 1.05, 1] : 1,
            opacity: 1,
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={
            bouncing
              ? { duration: 0.4, times: [0, 0.25, 0.5, 0.75, 1] }
              : { type: "spring", damping: 20, stiffness: 300 }
          }
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-4 sm:right-6 z-40 flex items-center gap-2.5 bg-primary text-primary-foreground pl-4 pr-5 py-3 rounded-full shadow-lg hover:opacity-90 transition-opacity active:scale-95"
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
