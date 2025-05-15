
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import FarmStory from "@/components/FarmStory";
import Testimonial from "@/components/Testimonial";
import AboutSection from "@/components/AboutSection";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen bg-cream"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <NavBar />
      <Hero />
      <FeaturedProducts />
      <FarmStory />
      <AboutSection />
      <Testimonial />
      <Footer />
    </motion.div>
  );
};

export default Index;
