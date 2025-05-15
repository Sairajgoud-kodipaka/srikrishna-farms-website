
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CartIcon from "@/components/CartIcon";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  price: string;
  category: string;
  benefits: string[];
  ingredients: string[];
  nutritionalInfo: {
    calories: string;
    protein: string;
    fat: string;
    carbs: string;
    calcium: string;
  };
}

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  // This would normally come from an API or database
  const product: Product = {
    id: id || "1",
    name: "Farm Fresh A2 Milk",
    description: "Pure, unprocessed milk from our indigenous Gir cows, rich in nutrients and natural goodness.",
    longDescription: "Our A2 milk comes exclusively from indigenous Gir cows that graze freely on our organic pastures. Unlike regular commercial milk, A2 milk contains only the A2 type of beta-casein protein, which is easier to digest and may be suitable for people with mild milk sensitivities. Our milk is minimally processed to preserve its natural nutritional profile, resulting in a creamier taste and richer texture. Each bottle is filled with milk from cows that are treated with respect, care, and allowed to live according to their natural rhythms.",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
    price: "₹80/liter",
    category: "milk",
    benefits: [
      "Easier to digest than regular milk",
      "Rich in essential nutrients and minerals",
      "Contains natural probiotics",
      "No artificial additives or preservatives",
      "Supports local, ethical farming practices"
    ],
    ingredients: ["100% Pure A2 Milk from Indigenous Gir Cows"],
    nutritionalInfo: {
      calories: "67 kcal per 100ml",
      protein: "3.5g per 100ml",
      fat: "4.2g per 100ml",
      carbs: "5.0g per 100ml",
      calcium: "125mg per 100ml"
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
    }
    
    toast({
      title: "Added to cart",
      description: `${quantity} ${quantity === 1 ? 'item' : 'items'} of ${product.name} added to your cart.`,
    });
  };

  // Similar products would come from an API or database
  const similarProducts = [
    {
      id: "2",
      name: "Traditional Desi Ghee",
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80",
      price: "₹800/kg",
    },
    {
      id: "3",
      name: "Farm Fresh Paneer",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
      price: "₹350/500g",
    },
    {
      id: "4",
      name: "Natural Set Curd",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
      price: "₹60/250g",
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <NavBar />

      <div className="container mx-auto py-12">
        <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="text-gray-700 hover:text-terracotta">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-500">/</span>
                <Link to="/products" className="text-gray-700 hover:text-terracotta">
                  Products
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-500">/</span>
                <span className="text-gray-500">{product.name}</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-merriweather font-bold text-green-dark mb-2">
              {product.name}
            </h1>
            <div className="flex items-center mb-4">
              <div className="text-amber-400">★★★★★</div>
              <span className="ml-2 text-sm text-gray-600">(24 reviews)</span>
            </div>
            <p className="text-terracotta text-xl font-bold mb-4">{product.price}</p>
            <div className="mb-6">
              <p className="text-gray-700 mb-4">{product.longDescription}</p>
            </div>

            <div className="mb-6">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center">
                <button
                  className="bg-gray-200 px-3 py-1 rounded-l"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 text-center border-y border-gray-200 py-1"
                />
                <button
                  className="bg-gray-200 px-3 py-1 rounded-r"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                className="btn-primary flex-1"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <Link to="/cart" className="btn-outline flex-1 text-center">
                View Cart
              </Link>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-merriweather font-semibold mb-2">Product Details:</h3>
              <ul className="text-gray-700 space-y-1">
                <li><strong>Category:</strong> {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</li>
                <li><strong>Origin:</strong> Sri Krishna Dairy Farms, Telangana</li>
                <li><strong>Storage:</strong> Refrigerate at 4°C or below</li>
                <li><strong>Shelf Life:</strong> 3-4 days when refrigerated properly</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-merriweather font-bold mb-4 text-green-dark">Benefits</h2>
            <ul className="space-y-2">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="text-green-light mr-2">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-merriweather font-bold mb-4 text-green-dark">Ingredients</h2>
            <ul className="space-y-2">
              {product.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="text-green-light mr-2">•</span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-merriweather font-bold mb-4 text-green-dark">Nutritional Info</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Calories:</strong> {product.nutritionalInfo.calories}</p>
              <p><strong>Protein:</strong> {product.nutritionalInfo.protein}</p>
              <p><strong>Fat:</strong> {product.nutritionalInfo.fat}</p>
              <p><strong>Carbohydrates:</strong> {product.nutritionalInfo.carbs}</p>
              <p><strong>Calcium:</strong> {product.nutritionalInfo.calcium}</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="section-title mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {similarProducts.map((product) => (
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
        </div>
      </div>

      <CartIcon />
      <Footer />
    </div>
  );
};

export default ProductDetail;
