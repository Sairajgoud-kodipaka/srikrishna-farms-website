
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Shop", path: "/shop" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-cream sticky top-0 z-40 shadow-sm">
      <nav className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="h-12 w-12 mr-3 bg-green-dark rounded-full flex items-center justify-center">
              <span className="text-cream font-merriweather font-bold text-xl">SK</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-green-dark font-merriweather font-bold text-xl">
                Sri Krishna <span className="text-terracotta">Dairy Farms</span>
              </h1>
              <p className="text-xs text-green-light">Organic Dairy Products from Telangana</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-opensans text-green-dark hover:text-terracotta transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/cart" className="relative">
              <ShoppingCart className="text-green-dark hover:text-terracotta transition-colors" size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-terracotta text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-green-dark p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-opensans text-green-dark hover:text-terracotta py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/cart" 
                className="font-opensans text-green-dark hover:text-terracotta py-2 transition-colors flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingCart size={18} className="mr-2" />
                Cart
                {cartCount > 0 && (
                  <span className="ml-2 bg-terracotta text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
