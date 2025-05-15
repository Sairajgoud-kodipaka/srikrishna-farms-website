
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-dark text-cream pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-merriweather font-bold mb-4 text-cream">
              Sri Krishna Dairy Farms
            </h3>
            <p className="mb-4 text-sm">
              100% authentic organic dairy products from our farm in Telangana, India. 
              Embracing local farming traditions and sustainable practices since 1985.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Instagram" className="text-cream hover:text-mustard">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-cream hover:text-mustard">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="text-cream hover:text-mustard">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-merriweather font-bold mb-4 text-cream">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-mustard transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-mustard transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-mustard transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-mustard transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-mustard transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-merriweather font-bold mb-4 text-cream">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="hover:text-mustard transition-colors">Farm Fresh Milk</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-mustard transition-colors">Ghee</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-mustard transition-colors">Paneer</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-mustard transition-colors">Butter</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-mustard transition-colors">Curd</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-merriweather font-bold mb-4 text-cream">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Sri Krishna Dairy Farms, Godavarikhani, Telangana - 505209, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>info@srikrishnadairy.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-green-light py-6 px-4 rounded-lg mb-8">
          <div className="md:flex items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-merriweather font-bold text-white">Subscribe to Our Newsletter</h4>
              <p className="text-sm text-white">Get updates on new products and farm stories</p>
            </div>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="py-2 px-4 rounded-l-md w-full focus:outline-none text-green-dark"
              />
              <button type="submit" className="bg-mustard hover:bg-amber-600 py-2 px-4 rounded-r-md text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-light pt-6 text-sm text-center">
          <p>© {currentYear} Sri Krishna Dairy Farms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
