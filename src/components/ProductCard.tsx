
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  category: string;
}

const ProductCard = ({ id, name, description, image, price, category }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={`/products/${id}`} className="h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-merriweather font-semibold mb-2 text-green-dark">
          {name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 flex-grow">
          {description}
        </p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-terracotta font-bold">{price}</span>
          <div className="flex gap-2">
            <Link 
              to={`/products/${id}`}
              className="text-green-dark hover:text-green-light transition-colors"
            >
              Details
            </Link>
            <Button 
              onClick={handleAddToCart} 
              variant="outline"
              className="border-green-light text-green-dark hover:bg-green-light hover:text-white"
              size="sm"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
