
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-cream pattern-bg py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-merriweather font-bold text-green-dark mb-4">
              Pure & Organic <span className="text-terracotta">Dairy Products</span>
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              From our farm to your table - Authentic, traditional dairy products from our indigenous Gir cows, raised organically in the heart of Telangana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="btn-primary text-center group transition-all duration-300 transform hover:scale-105">
                Explore Products
              </Link>
              <Link to="/about" className="btn-outline text-center group transition-all duration-300">
                Our Story
              </Link>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="h-12 w-12 rounded-full bg-green-light flex items-center justify-center">
                  <span className="text-2xl text-white">🌿</span>
                </div>
                <span className="ml-2 text-sm font-medium">100% Organic</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="h-12 w-12 rounded-full bg-green-light flex items-center justify-center">
                  <span className="text-2xl text-white">🐄</span>
                </div>
                <span className="ml-2 text-sm font-medium">Indigenous Gir Cows</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="h-12 w-12 rounded-full bg-green-light flex items-center justify-center">
                  <span className="text-2xl text-white">🌱</span>
                </div>
                <span className="ml-2 text-sm font-medium">Eco-friendly</span>
              </motion.div>
            </div>
          </motion.div>
          
          <div className="order-1 md:order-2">
            <motion.div 
              className="relative"
              style={{ 
                y: scrollY * 0.1, // Parallax effect
                transition: "transform 0.1s cubic-bezier(0.33, 1, 0.68, 1)" 
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac" 
                alt="Gir cow at Sri Krishna Dairy Farm" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-terracotta text-white p-4 rounded-lg shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <p className="font-merriweather font-bold">Serving since</p>
                <p className="text-2xl font-merriweather font-bold">1985</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
