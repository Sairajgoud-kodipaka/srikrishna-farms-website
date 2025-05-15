
import { Link } from "react-router-dom";
import { Leaf, Droplet, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: i * 0.2
      }
    })
  };

  return (
    <section className="py-16 bg-cream" ref={ref}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h2 className="section-title" variants={itemVariants}>About Sri Krishna Dairy Farms</motion.h2>
            <motion.p className="mb-4 text-gray-700" variants={itemVariants}>
              At Sri Krishna Dairy Farms, we believe in preserving the ancient wisdom of Indian dairy traditions while embracing sustainable farming practices. Our journey began in 1985 with a simple mission: to produce the purest dairy products while honoring our heritage.
            </motion.p>
            <motion.p className="mb-6 text-gray-700" variants={itemVariants}>
              Our farm is home to over 100 indigenous Gir cows, known for their distinctive hump and pendulous ears. These sacred animals are treated with utmost respect and care, allowed to graze freely on our organic pastures located in the serene countryside of Telangana.
            </motion.p>

            <motion.div 
              className="space-y-4 mb-8"
              variants={containerVariants}
            >
              <motion.div className="flex items-start" variants={itemVariants}>
                <motion.div 
                  className="mt-1 mr-4 bg-green-light p-2 rounded-full text-white"
                  whileHover={{ 
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <Leaf size={20} />
                </motion.div>
                <div>
                  <h3 className="font-merriweather font-semibold text-green-dark">Organic Farming</h3>
                  <p className="text-gray-700 text-sm">We use no chemicals, pesticides or artificial fertilizers on our land or with our animals.</p>
                </div>
              </motion.div>

              <motion.div className="flex items-start" variants={itemVariants}>
                <motion.div 
                  className="mt-1 mr-4 bg-green-light p-2 rounded-full text-white"
                  whileHover={{ 
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <Droplet size={20} />
                </motion.div>
                <div>
                  <h3 className="font-merriweather font-semibold text-green-dark">Ethical Animal Care</h3>
                  <p className="text-gray-700 text-sm">Our cows are free-ranging, treated with love and respect according to ancient Indian traditions.</p>
                </div>
              </motion.div>

              <motion.div className="flex items-start" variants={itemVariants}>
                <motion.div 
                  className="mt-1 mr-4 bg-green-light p-2 rounded-full text-white"
                  whileHover={{ 
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <Sun size={20} />
                </motion.div>
                <div>
                  <h3 className="font-merriweather font-semibold text-green-dark">Traditional Methods</h3>
                  <p className="text-gray-700 text-sm">We use time-honored techniques to process our dairy products, preserving their natural nutritional value.</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link to="/about" className="btn-primary inline-block hover:scale-105 transition-transform">
                Learn More About Us
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <motion.img
              custom={0}
              variants={imageVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              src="https://images.unsplash.com/photo-1469041797191-50ace28483c3"
              alt="Gir cows at Sri Krishna Dairy Farm"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <motion.img
              custom={1}
              variants={imageVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2"
              alt="Traditional dairy processing"
              className="w-full h-auto rounded-lg shadow-md mt-8"
            />
            <motion.img
              custom={2}
              variants={imageVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              src="https://images.unsplash.com/photo-1596797038530-2c107229654b"
              alt="Organic farm landscape"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <motion.img
              custom={3}
              variants={imageVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
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
