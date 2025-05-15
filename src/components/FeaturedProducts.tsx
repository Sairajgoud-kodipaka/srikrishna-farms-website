
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  category: string;
}

const FeaturedProducts = () => {
  const products: Product[] = [
    {
      id: "1",
      name: "Farm Fresh A2 Milk",
      description: "Pure, unprocessed milk from our indigenous Gir cows, rich in nutrients and natural goodness.",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWlsa3xlbnwwfHwwfHx8MA%3D%3D",
      price: "₹80/liter",
      category: "milk",
    },
    {
      id: "2",
      name: "Traditional Desi Ghee",
      description: "Hand-churned ghee made using traditional methods, rich in aroma and nutritional benefits.",
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2hlZXxlbnwwfHwwfHx8MA%3D%3D",
      price: "₹800/kg",
      category: "ghee",
    },
    {
      id: "3",
      name: "Farm Fresh Paneer",
      description: "Soft, nutritious paneer made from our pure cow milk with no additives or preservatives.",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFuZWVyfGVufDB8fDB8fHww",
      price: "₹350/500g",
      category: "cheese",
    },
    {
      id: "4",
      name: "Natural Set Curd",
      description: "Creamy, probiotic-rich curd set naturally without any artificial cultures or additives.",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9ndXJ0fGVufDB8fDB8fHww",
      price: "₹60/250g",
      category: "curd",
    },
  ];

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Featured Products</h2>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Discover our range of pure, organic dairy products made with traditional methods
            from the milk of our indigenous Gir cows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-merriweather font-semibold mb-2 text-green-dark">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-terracotta font-bold">{product.price}</span>
                  <Link 
                    to={`/products/${product.id}`}
                    className="bg-green-light text-white py-1 px-3 rounded hover:bg-green-dark transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products" className="btn-primary inline-block">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
