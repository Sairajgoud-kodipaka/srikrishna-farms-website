
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, X } from "lucide-react";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-cream flex flex-col">
        <NavBar />
        
        <div className="flex-grow flex flex-col items-center justify-center py-16 px-4">
          <h1 className="text-3xl font-merriweather font-bold text-green-dark mb-4">Your Cart is Empty</h1>
          <p className="mb-8 text-gray-600 text-center max-w-md">
            Looks like you haven't added any products to your cart yet. Explore our shop to find pure, organic dairy products.
          </p>
          <Link to="/shop">
            <Button className="bg-green-dark hover:bg-green-light">
              Continue Shopping
            </Button>
          </Link>
        </div>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <NavBar />
      
      <div className="container mx-auto py-12 flex-grow">
        <h1 className="text-3xl font-merriweather font-bold text-green-dark mb-8">Your Cart</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cart.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-4"
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex items-center p-4">
                      <div className="w-20 h-20 rounded overflow-hidden mr-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="font-merriweather font-semibold text-green-dark">{item.name}</h3>
                        <p className="text-terracotta font-bold text-sm">{item.price}</p>
                      </div>
                      
                      <div className="flex items-center mr-4">
                        <Button 
                          variant="outline" 
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        
                        <span className="mx-2 w-6 text-center">{item.quantity}</span>
                        
                        <Button 
                          variant="outline" 
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            
            <div className="mt-8">
              <Link to="/shop">
                <Button variant="outline" className="text-green-dark">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-merriweather font-semibold mb-4 text-green-dark">Order Summary</h2>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span>₹{cartTotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping:</span>
                    <span>₹40</span>
                  </div>
                </div>
                
                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span className="text-terracotta">₹{cartTotal + 40}</span>
                  </div>
                </div>
                
                <Link to="/checkout">
                  <Button className="w-full bg-green-dark hover:bg-green-light">
                    Proceed to Checkout
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;
