
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const CartIcon = () => {
  const { cartCount } = useCart();

  return (
    <Link to="/cart">
      <motion.div 
        className="fixed bottom-8 right-8 z-50 bg-green-dark text-white p-3 rounded-full shadow-lg hover:bg-green-light transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        <div className="relative">
          <ShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-terracotta text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </motion.div>
    </Link>
  );
};

export default CartIcon;
