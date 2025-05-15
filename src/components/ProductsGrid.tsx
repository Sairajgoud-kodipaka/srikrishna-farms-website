
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  category: string;
}

const ProductsGrid = () => {
  const allProducts: Product[] = [
    {
      id: "1",
      name: "Farm Fresh A2 Milk",
      description: "Pure, unprocessed milk from our indigenous Gir cows, rich in nutrients and natural goodness.",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
      price: "₹80/liter",
      category: "milk",
    },
    {
      id: "2",
      name: "Traditional Desi Ghee",
      description: "Hand-churned ghee made using traditional methods, rich in aroma and nutritional benefits.",
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80",
      price: "₹800/kg",
      category: "ghee",
    },
    {
      id: "3",
      name: "Farm Fresh Paneer",
      description: "Soft, nutritious paneer made from our pure cow milk with no additives or preservatives.",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
      price: "₹350/500g",
      category: "cheese",
    },
    {
      id: "4",
      name: "Natural Set Curd",
      description: "Creamy, probiotic-rich curd set naturally without any artificial cultures or additives.",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
      price: "₹60/250g",
      category: "curd",
    },
    {
      id: "5",
      name: "Cultured Butter",
      description: "Creamy, flavorful butter made from cultured cream using traditional churning methods.",
      image: "https://images.unsplash.com/photo-1589985270958-ad4b0306cc2c",
      price: "₹300/500g",
      category: "butter",
    },
    {
      id: "6",
      name: "Buttermilk (Chaas)",
      description: "Refreshing, probiotic-rich buttermilk, perfect for hot summer days and digestion.",
      image: "https://images.unsplash.com/photo-1626078436898-7c7548a4353b",
      price: "₹40/liter",
      category: "buttermilk",
    },
    {
      id: "7",
      name: "Organic Whey Protein",
      description: "Natural whey protein derived from our A2 milk, perfect for fitness enthusiasts.",
      image: "https://images.unsplash.com/photo-1593095948071-474c00515795",
      price: "₹950/kg",
      category: "whey",
    },
    {
      id: "8",
      name: "Flavored Lassi",
      description: "Traditional yogurt drink in various flavors - mango, rose, and cardamom.",
      image: "https://images.unsplash.com/photo-1626474526795-3ad3f084861b",
      price: "₹70/500ml",
      category: "lassi",
    },
    {
      id: "9",
      name: "Khoya (Mawa)",
      description: "Concentrated milk solids made by traditional slow evaporation method.",
      image: "https://images.unsplash.com/photo-1618154476810-823913140c45",
      price: "₹400/500g",
      category: "khoya",
    },
  ];

  const [products, setProducts] = useState<Product[]>(allProducts);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "milk", name: "Milk" },
    { id: "ghee", name: "Ghee" },
    { id: "cheese", name: "Cheese & Paneer" },
    { id: "curd", name: "Curd & Yogurt" },
    { id: "butter", name: "Butter" },
  ];

  useEffect(() => {
    if (activeCategory === "all") {
      setProducts(allProducts);
    } else {
      const filtered = allProducts.filter(
        (product) => product.category === activeCategory
      );
      setProducts(filtered);
    }
  }, [activeCategory]);

  return (
    <section className="container mx-auto py-12">
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-full text-sm ${
              activeCategory === category.id
                ? "bg-green-dark text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="h-60 overflow-hidden">
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
              <p className="text-gray-600 text-sm mb-3">
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
    </section>
  );
};

export default ProductsGrid;
