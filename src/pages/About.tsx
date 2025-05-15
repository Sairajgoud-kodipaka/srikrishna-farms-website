
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Leaf, Droplet, Sun, Tractor, Cow, Cheese } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Ramakrishna Reddy",
      role: "Founder & Farm Director",
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115",
      bio: "A third-generation farmer with 40+ years of experience in traditional dairy farming practices."
    },
    {
      name: "Lakshmi Devi",
      role: "Production Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      bio: "Master of traditional dairy product preparation with expertise in authentic Telangana recipes."
    },
    {
      name: "Venkat Rao",
      role: "Agricultural Expert",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      bio: "Agricultural scientist specializing in organic farming and sustainable agricultural practices."
    },
    {
      name: "Anjali Sharma",
      role: "Animal Welfare Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      bio: "Veterinarian dedicated to the health and wellbeing of our indigenous Gir cow herd."
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <NavBar />

      {/* Hero Section */}
      <div className="relative py-24 bg-green-dark">
        <div className="absolute inset-0 opacity-20 pattern-bg"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-merriweather font-bold text-white mb-4">
            Our Story
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Nurturing traditions, preserving heritage, and connecting people with pure dairy goodness since 1985
          </p>
        </div>
      </div>

      {/* Our Journey */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Journey</h2>
              <p className="mb-4 text-gray-700">
                Sri Krishna Dairy Farms began in 1985 when Ramakrishna Reddy, inspired by his father's legacy, started with just four indigenous Gir cows in the lush countryside of Telangana.
              </p>
              <p className="mb-4 text-gray-700">
                Guided by the principles of organic farming and animal welfare, our small family operation gradually expanded while staying true to traditional farming wisdom passed down through generations.
              </p>
              <p className="mb-4 text-gray-700">
                Despite pressures to industrialize, we've remained committed to our founding principles: respecting nature, caring for our animals, and producing pure, authentic dairy products using time-honored methods.
              </p>
              <p className="mb-4 text-gray-700">
                Today, our farm spans 50 acres with over 100 Gir cows, producing some of the finest A2 milk in the region. We're proud to preserve our cultural heritage while supporting sustainable agriculture and rural livelihoods.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a"
                alt="Gir cows at Sri Krishna Dairy Farm"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-8 -left-8 rounded-lg bg-white p-4 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-terracotta">1985</span>
                    <span className="text-xs text-gray-600">Founded</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-terracotta">50+</span>
                    <span className="text-xs text-gray-600">Acres</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-terracotta">100+</span>
                    <span className="text-xs text-gray-600">Gir Cows</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-green-light bg-opacity-10">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Our Mission & Values</h2>
            <p className="mt-6 text-gray-700">
              At Sri Krishna Dairy Farms, we are guided by a deep commitment to preserve traditional farming practices 
              while producing the purest dairy products for our community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-green-light rounded-full flex items-center justify-center text-white mb-4">
                <Cow size={28} />
              </div>
              <h3 className="text-xl font-merriweather font-semibold mb-2 text-green-dark">
                Animal Welfare
              </h3>
              <p className="text-gray-700">
                We treat our cows with utmost respect and care. They graze freely on organic pastures, are given names not numbers, and receive loving attention from our dedicated team.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-green-light rounded-full flex items-center justify-center text-white mb-4">
                <Leaf size={28} />
              </div>
              <h3 className="text-xl font-merriweather font-semibold mb-2 text-green-dark">
                Sustainable Practices
              </h3>
              <p className="text-gray-700">
                We implement regenerative agriculture methods, use solar energy, harvest rainwater, and maintain a zero-waste approach across all farm operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-green-light rounded-full flex items-center justify-center text-white mb-4">
                <Cheese size={28} />
              </div>
              <h3 className="text-xl font-merriweather font-semibold mb-2 text-green-dark">
                Traditional Methods
              </h3>
              <p className="text-gray-700">
                We preserve ancient dairy-making techniques that have been passed down through generations, ensuring authentic taste and nutritional integrity in all our products.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-green-light rounded-full flex items-center justify-center text-white mb-4">
                <Sun size={28} />
              </div>
              <h3 className="text-xl font-merriweather font-semibold mb-2 text-green-dark">
                Community Support
              </h3>
              <p className="text-gray-700">
                We empower local farmers, provide fair employment, and share our knowledge with the community to promote sustainable living and agricultural self-sufficiency.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-green-light rounded-full flex items-center justify-center text-white mb-4">
                <Tractor size={28} />
              </div>
              <h3 className="text-xl font-merriweather font-semibold mb-2 text-green-dark">
                Indigenous Preservation
              </h3>
              <p className="text-gray-700">
                We are dedicated to preserving the indigenous Gir cow breed, protecting this valuable genetic resource and its unparalleled milk quality for future generations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-green-light rounded-full flex items-center justify-center text-white mb-4">
                <Droplet size={28} />
              </div>
              <h3 className="text-xl font-merriweather font-semibold mb-2 text-green-dark">
                Product Purity
              </h3>
              <p className="text-gray-700">
                We never compromise on quality, using no additives, preservatives, or artificial ingredients in any of our products, ensuring you receive nature's goodness in its purest form.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
              The passionate individuals who nurture our farm, care for our cows, and craft our dairy products with love and dedication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-merriweather font-semibold text-lg text-green-dark">
                    {member.name}
                  </h3>
                  <p className="text-terracotta text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-terracotta bg-opacity-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-merriweather font-bold mb-4 text-green-dark">
            Experience Our Farm
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Visit Sri Krishna Dairy Farms to see our sustainable practices in action, meet our Gir cows, and taste our fresh products. Educational tours available by appointment.
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

export default About;
