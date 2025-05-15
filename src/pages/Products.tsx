
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ProductsGrid from "@/components/ProductsGrid";

const Products = () => {
  return (
    <div className="min-h-screen bg-cream">
      <NavBar />

      {/* Hero Section */}
      <div className="relative py-24 bg-green-dark">
        <div className="absolute inset-0 opacity-20 pattern-bg"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-merriweather font-bold text-white mb-4">
            Our Products
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Pure, organic dairy products made the traditional way from our indigenous Gir cows
          </p>
        </div>
      </div>

      {/* Product Benefits */}
      <section className="py-12 bg-cream">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-title">Why Choose Our Products?</h2>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
              Our dairy products come from the milk of indigenous Gir cows, known for their superior A2 milk quality and processed using traditional methods that preserve natural goodness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-merriweather text-xl font-semibold mb-3 text-green-dark">A2 Milk Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="h-5 w-5 mr-2 text-green-light">✓</span>
                  Easier digestion compared to regular milk
                </li>
                <li className="flex items-center">
                  <span className="h-5 w-5 mr-2 text-green-light">✓</span>
                  Rich in essential nutrients and minerals
                </li>
                <li className="flex items-center">
                  <span className="h-5 w-5 mr-2 text-green-light">✓</span>
                  Supports better immune function
                </li>
                <li className="flex items-center">
                  <span className="h-5 w-5 mr-2 text-green-light">✓</span>
                  Natural probiotic properties
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-merriweather text-xl font-semibold mb-3 text-green-dark">Traditional Processing</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="h-5 w-5 mr-2 text-green-light">✓</span>
                  Hand-churned for better texture and flavor
                </li>
                <li className="flex items-center">
                  <span className="h-5 w-5 mr-2 text-green-light">✓</span>
                  No artificial additives or preservatives
                </li>
                <li className="flex items-center">
                  <span className="h-5 w-5 mr-2 text-green-light">✓</span>
                  Traditional clay and wooden utensils used
                </li>
                <li className="flex items-center">
                  <span className="h-5 w-5 mr-2 text-green-light">✓</span>
                  Small-batch production for quality control
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-merriweather text-xl font-semibold mb-3 text-green-dark">Sustainable Packaging</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="h-5 w-5 mr-2 text-green-light">✓</span>
                  Eco-friendly biodegradable packaging
                </li>
                <li className="flex items-center">
                  <span className="h-5 w-5 mr-2 text-green-light">✓</span>
                  Traditional clay pots for select products
                </li>
                <li className="flex items-center">
                  <span className="h-5 w-5 mr-2 text-green-light">✓</span>
                  Returnable glass bottle program
                </li>
                <li className="flex items-center">
                  <span className="h-5 w-5 mr-2 text-green-light">✓</span>
                  Zero plastic initiative
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <ProductsGrid />

      {/* Ordering Information */}
      <section className="py-12 bg-terracotta bg-opacity-10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-title">How to Order</h2>
              <p className="mb-4 text-gray-700">
                We offer multiple ways to purchase our products to ensure they reach you fresh and in their best condition.
              </p>
              <div className="space-y-4 mt-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-merriweather font-semibold text-green-dark mb-2">Direct from Farm</h3>
                  <p className="text-gray-700 text-sm">
                    Visit our farm shop open daily from 7am - 7pm to purchase products directly and meet our team.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-merriweather font-semibold text-green-dark mb-2">Home Delivery</h3>
                  <p className="text-gray-700 text-sm">
                    Subscribe to our daily, weekly or monthly delivery services for fresh products at your doorstep.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-merriweather font-semibold text-green-dark mb-2">Online Shop</h3>
                  <p className="text-gray-700 text-sm">
                    Order through our website for delivery within Telangana with special packaging to maintain freshness.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-merriweather font-semibold text-green-dark mb-2">Partner Stores</h3>
                  <p className="text-gray-700 text-sm">
                    Find our products at select organic stores and markets throughout Telangana and Andhra Pradesh.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576856497337-4f2be24683da" 
                alt="Traditional dairy products packaging" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
