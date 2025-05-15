
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-cream pattern-bg py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-merriweather font-bold text-green-dark mb-4">
              Pure & Organic <span className="text-terracotta">Dairy Products</span>
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              From our farm to your table - Authentic, traditional dairy products from our indigenous Gir cows, raised organically in the heart of Telangana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="btn-primary text-center">
                Explore Products
              </Link>
              <Link to="/about" className="btn-outline text-center">
                Our Story
              </Link>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-green-light flex items-center justify-center">
                  <span className="text-2xl text-white">🌿</span>
                </div>
                <span className="ml-2 text-sm font-medium">100% Organic</span>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-green-light flex items-center justify-center">
                  <span className="text-2xl text-white">🐄</span>
                </div>
                <span className="ml-2 text-sm font-medium">Indigenous Gir Cows</span>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-green-light flex items-center justify-center">
                  <span className="text-2xl text-white">🌱</span>
                </div>
                <span className="ml-2 text-sm font-medium">Eco-friendly</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac" 
                alt="Gir cow at Sri Krishna Dairy Farm" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-terracotta text-white p-4 rounded-lg shadow-lg">
                <p className="font-merriweather font-bold">Serving since</p>
                <p className="text-2xl font-merriweather font-bold">1985</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
