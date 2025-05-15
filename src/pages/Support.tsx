import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Phone, Mail, MessageCircle, Clock } from 'lucide-react';

const Support = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // In a real app, this would send the support request to a backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-cream">
        <NavBar />
        <div className="container mx-auto py-16 text-center">
          <h1 className="text-3xl font-merriweather font-bold text-green-dark mb-4">
            Please Log In
          </h1>
          <p className="text-green-dark">
            You need to be logged in to access customer support.
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <NavBar />
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-merriweather font-bold text-green-dark mb-8">
            Customer Support
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-green-dark mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-green-dark" size={20} />
                  <div>
                    <p className="font-medium text-green-dark">Phone Support</p>
                    <p className="text-gray-600">+91 (800) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-green-dark" size={20} />
                  <div>
                    <p className="font-medium text-green-dark">Email Support</p>
                    <p className="text-gray-600">support@srikrishnadairy.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="text-green-dark" size={20} />
                  <div>
                    <p className="font-medium text-green-dark">Live Chat</p>
                    <p className="text-gray-600">Available on WhatsApp</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-green-dark" size={20} />
                  <div>
                    <p className="font-medium text-green-dark">Business Hours</p>
                    <p className="text-gray-600">Mon-Sat: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-green-dark mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label 
                    htmlFor="subject" 
                    className="block text-sm font-medium text-green-dark mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border-green-light focus:ring-green-dark"
                    placeholder="What can we help you with?"
                  />
                </div>
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-green-dark mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border-green-light focus:ring-green-dark min-h-[150px]"
                    placeholder="Please describe your issue in detail"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-green-dark hover:bg-green-light"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-green-dark mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-green-dark mb-2">
                  What are your delivery timings?
                </h3>
                <p className="text-gray-600">
                  We deliver fresh dairy products between 6:00 AM and 8:00 AM every morning.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-green-dark mb-2">
                  How do I modify my subscription?
                </h3>
                <p className="text-gray-600">
                  You can modify your subscription from your account dashboard under the 'Subscriptions' tab.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-green-dark mb-2">
                  What is your return policy?
                </h3>
                <p className="text-gray-600">
                  If you're not satisfied with our products, please contact us within 24 hours of delivery for a replacement or refund.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support; 