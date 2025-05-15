
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FloatingElement = ({ children, delay = 0, x = 0, y = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 0.2,
        y: [y, y - 10, y],
        x: [x, x + 5, x]
      }}
      transition={{
        duration: 4,
        delay: delay,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      className="absolute pointer-events-none select-none text-3xl z-0"
    >
      {children}
    </motion.div>
  );
};

const Testimonial = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6,
      }
    }
  };

  return (
    <section className="py-16 bg-terracotta bg-opacity-10 relative overflow-hidden" ref={ref}>
      {/* Floating elements as background decoration */}
      <FloatingElement delay={0} x={100} y={50}>🍃</FloatingElement>
      <FloatingElement delay={1} x={300} y={150}>💧</FloatingElement>
      <FloatingElement delay={0.5} x={700} y={80}>🍃</FloatingElement>
      <FloatingElement delay={1.5} x={900} y={120}>💧</FloatingElement>
      <FloatingElement delay={0.7} x={500} y={200}>🍃</FloatingElement>
      <FloatingElement delay={2} x={200} y={250}>💧</FloatingElement>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What Our Customers Say</h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            variants={itemVariants}
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 }
            }}
          >
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-green-light flex items-center justify-center text-white font-bold">
                RS
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">Rajesh Sharma</h4>
                <p className="text-sm text-gray-600">Hyderabad</p>
              </div>
            </div>
            <motion.div 
              className="mb-4 text-amber-400"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              ★★★★★
            </motion.div>
            <p className="text-gray-700">
              "The milk and ghee from Sri Krishna Dairy Farms remind me of my childhood in our village. Pure, fresh and so flavorful! You can truly taste the difference of organic farming."
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            variants={itemVariants}
            whileHover={{ 
              y: -5, 
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 }
            }}
          >
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-green-light flex items-center justify-center text-white font-bold">
                AP
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">Anita Patel</h4>
                <p className="text-sm text-gray-600">Warangal</p>
              </div>
            </div>
            <motion.div 
              className="mb-4 text-amber-400"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 }}
            >
              ★★★★★
            </motion.div>
            <p className="text-gray-700">
              "I switched to Sri Krishna's A2 milk for my family after learning about its health benefits. My children's health has noticeably improved, and we love the taste of all their products!"
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            variants={itemVariants}
            whileHover={{ 
              y: -5, 
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 }
            }}
          >
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-green-light flex items-center justify-center text-white font-bold">
                VR
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">Venkat Reddy</h4>
                <p className="text-sm text-gray-600">Karimnagar</p>
              </div>
            </div>
            <motion.div 
              className="mb-4 text-amber-400"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              ★★★★★
            </motion.div>
            <p className="text-gray-700">
              "Their commitment to traditional farming methods and animal welfare is evident in the quality of their products. The paneer and curd are simply outstanding - no additives, just pure goodness."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
