
import { Link } from "react-router-dom";
import { Leaf, Droplet, Sun } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">About Sri Krishna Dairy Farms</h2>
            <p className="mb-4 text-gray-700">
              At Sri Krishna Dairy Farms, we believe in preserving the ancient wisdom of Indian dairy traditions while embracing sustainable farming practices. Our journey began in 1985 with a simple mission: to produce the purest dairy products while honoring our heritage.
            </p>
            <p className="mb-6 text-gray-700">
              Our farm is home to over 100 indigenous Gir cows, known for their distinctive hump and pendulous ears. These sacred animals are treated with utmost respect and care, allowed to graze freely on our organic pastures located in the serene countryside of Telangana.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-green-light p-2 rounded-full text-white">
                  <Leaf size={20} />
                </div>
                <div>
                  <h3 className="font-merriweather font-semibold text-green-dark">Organic Farming</h3>
                  <p className="text-gray-700 text-sm">We use no chemicals, pesticides or artificial fertilizers on our land or with our animals.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-green-light p-2 rounded-full text-white">
                  <Droplet size={20} />
                </div>
                <div>
                  <h3 className="font-merriweather font-semibold text-green-dark">Ethical Animal Care</h3>
                  <p className="text-gray-700 text-sm">Our cows are free-ranging, treated with love and respect according to ancient Indian traditions.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-green-light p-2 rounded-full text-white">
                  <Sun size={20} />
                </div>
                <div>
                  <h3 className="font-merriweather font-semibold text-green-dark">Traditional Methods</h3>
                  <p className="text-gray-700 text-sm">We use time-honored techniques to process our dairy products, preserving their natural nutritional value.</p>
                </div>
              </div>
            </div>

            <Link to="/about" className="btn-primary inline-block">
              Learn More About Us
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1469041797191-50ace28483c3"
              alt="Gir cows at Sri Krishna Dairy Farm"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2"
              alt="Traditional dairy processing"
              className="w-full h-auto rounded-lg shadow-md mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1596797038530-2c107229654b"
              alt="Organic farm landscape"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d"
              alt="Traditional dairy products"
              className="w-full h-auto rounded-lg shadow-md mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
