
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import FarmStory from "@/components/FarmStory";
import Testimonial from "@/components/Testimonial";
import AboutSection from "@/components/AboutSection";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <NavBar />
      <Hero />
      <FeaturedProducts />
      <FarmStory />
      <AboutSection />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Index;
