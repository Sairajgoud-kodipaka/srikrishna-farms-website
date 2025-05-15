
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-cream">
      <NavBar />

      {/* Hero Section */}
      <div className="relative py-24 bg-green-dark">
        <div className="absolute inset-0 opacity-20 pattern-bg"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-merriweather font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with questions, feedback, or to schedule a farm visit
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Contact;
