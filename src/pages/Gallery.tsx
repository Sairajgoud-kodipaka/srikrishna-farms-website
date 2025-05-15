
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-cream">
      <NavBar />

      {/* Hero Section */}
      <div className="relative py-24 bg-green-dark">
        <div className="absolute inset-0 opacity-20 pattern-bg"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-merriweather font-bold text-white mb-4">
            Our Gallery
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Experience the beauty of Sri Krishna Dairy Farms through our collection of images
          </p>
        </div>
      </div>

      {/* Gallery */}
      <GalleryGrid />

      {/* Call to Action */}
      <section className="py-12 bg-terracotta bg-opacity-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-merriweather font-bold mb-4 text-green-dark">
            Visit Our Farm
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Come experience the beauty of our farm in person. We offer guided tours where you can meet our Gir cows, 
            learn about our sustainable practices, and taste our fresh products directly from the source.
          </p>
          <a href="/contact" className="btn-primary">
            Schedule a Visit
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
