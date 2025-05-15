
import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    // Reset submission message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="container mx-auto py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="section-title">Contact Us</h2>
          <p className="text-gray-700 mb-8">
            We'd love to hear from you! Whether you have questions about our products, farm visits, or would like to place a bulk order, please don't hesitate to reach out.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="mt-1 mr-4 bg-green-dark p-3 rounded-full text-white">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-merriweather font-semibold text-green-dark">Our Location</h3>
                <p className="text-gray-700">
                  Sri Krishna Dairy Farms,<br />
                  Godavarikhani, Telangana - 505209,<br />
                  India
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mt-1 mr-4 bg-green-dark p-3 rounded-full text-white">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-merriweather font-semibold text-green-dark">Phone</h3>
                <p className="text-gray-700">+91 98765 43210</p>
                <p className="text-gray-700">+91 91234 56789</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mt-1 mr-4 bg-green-dark p-3 rounded-full text-white">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-merriweather font-semibold text-green-dark">Email</h3>
                <p className="text-gray-700">info@srikrishnadairy.com</p>
                <p className="text-gray-700">orders@srikrishnadairy.com</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-8">
            <h3 className="font-merriweather font-semibold text-xl mb-4 text-green-dark">Farm Visit Hours</h3>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="font-semibold">Monday - Friday</p>
                <p className="text-gray-700">9:00 AM - 5:00 PM</p>
              </div>
              <div>
                <p className="font-semibold">Saturday</p>
                <p className="text-gray-700">9:00 AM - 1:00 PM</p>
              </div>
              <div>
                <p className="font-semibold">Sunday</p>
                <p className="text-gray-700">Closed</p>
              </div>
              <div>
                <p className="font-semibold">Farm Tours</p>
                <p className="text-gray-700">By Appointment Only</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-merriweather font-bold text-xl mb-4 text-green-dark">Send Us a Message</h3>
            
            {submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                Thank you for your message! We will get back to you soon.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-light focus:border-green-light"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-light focus:border-green-light"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-light focus:border-green-light"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-light focus:border-green-light"
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Bulk Order">Bulk Order</option>
                      <option value="Farm Visit">Farm Visit</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-light focus:border-green-light"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-lg overflow-hidden h-96 shadow-lg">
        <iframe
          title="Sri Krishna Dairy Farms Location"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60901.92956944197!2d79.42843989638271!3d18.096839735208344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccad6d4657bd7b%3A0xc40e29a10f0401af!2sGodavarikhani%2C%20Telangana!5e0!3m2!1sen!2sin!4v1653298050134!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactForm;
