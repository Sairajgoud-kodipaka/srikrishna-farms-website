
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedCounter = ({ target, title }: { target: number; title: string }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    const duration = 2000; // 2 seconds animation
    
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);
      
      // Easing function for smoother animation at the end
      const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);
      const easedProgress = easeOutQuart(progressRatio);
      
      const currentCount = Math.floor(easedProgress * target);
      setCount(currentCount);
      
      if (progressRatio < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(target); // Ensure we end at the exact target
      }
    };
    
    requestAnimationFrame(animateCount);
  }, [inView, target]);

  return (
    <div className="bg-white p-4 rounded-lg shadow text-center" ref={ref}>
      <span className="text-4xl font-bold text-terracotta block">{count}+</span>
      <span className="text-gray-700 text-sm">{title}</span>
    </div>
  );
};

const FarmStory = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 }
    }
  };

  return (
    <section className="py-16 bg-green-light bg-opacity-10" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            ref={imageRef}
            variants={imageVariants}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f"
              alt="Traditional farming at Sri Krishna Dairy Farm"
              className="rounded-lg shadow-xl"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            />
            <motion.div 
              className="absolute -bottom-8 -right-8 hidden md:block"
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={imageInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.8, x: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a"
                alt="Gir cows grazing"
                className="w-48 h-48 object-cover rounded-lg border-4 border-cream shadow-lg"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
          >
            <motion.h2 className="section-title" variants={textVariants}>Our Farm Story</motion.h2>
            <motion.p className="mb-4 text-gray-700" variants={textVariants}>
              Founded in 1985, Sri Krishna Dairy Farms began as a small family operation with just four indigenous Gir cows in the heart of rural Telangana.
            </motion.p>
            <motion.p className="mb-4 text-gray-700" variants={textVariants}>
              Guided by traditional farming wisdom passed down through generations, our farm has grown while staying true to our commitment to organic practices and the welfare of our animals.
            </motion.p>
            <motion.p className="mb-6 text-gray-700" variants={textVariants}>
              Today, our herd of over 100 Gir cows lives free-range on 50 acres of organic pastures, producing some of the finest A2 milk in the region, which we transform into authentic dairy products using time-honored methods.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <AnimatedCounter target={50} title="Acres of Organic Farm" />
              <AnimatedCounter target={100} title="Indigenous Gir Cows" />
              <AnimatedCounter target={12} title="Traditional Products" />
              <AnimatedCounter target={38} title="Years of Heritage" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FarmStory;
