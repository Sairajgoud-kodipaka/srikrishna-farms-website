
const FarmStory = () => {
  return (
    <section className="py-16 bg-green-light bg-opacity-10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f"
              alt="Traditional farming at Sri Krishna Dairy Farm"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-8 -right-8 hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a"
                alt="Gir cows grazing"
                className="w-48 h-48 object-cover rounded-lg border-4 border-cream shadow-lg"
              />
            </div>
          </div>

          <div>
            <h2 className="section-title">Our Farm Story</h2>
            <p className="mb-4 text-gray-700">
              Founded in 1985, Sri Krishna Dairy Farms began as a small family operation with just four indigenous Gir cows in the heart of rural Telangana.
            </p>
            <p className="mb-4 text-gray-700">
              Guided by traditional farming wisdom passed down through generations, our farm has grown while staying true to our commitment to organic practices and the welfare of our animals.
            </p>
            <p className="mb-6 text-gray-700">
              Today, our herd of over 100 Gir cows lives free-range on 50 acres of organic pastures, producing some of the finest A2 milk in the region, which we transform into authentic dairy products using time-honored methods.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <span className="text-4xl font-bold text-terracotta block">50+</span>
                <span className="text-gray-700 text-sm">Acres of Organic Farm</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <span className="text-4xl font-bold text-terracotta block">100+</span>
                <span className="text-gray-700 text-sm">Indigenous Gir Cows</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <span className="text-4xl font-bold text-terracotta block">12+</span>
                <span className="text-gray-700 text-sm">Traditional Products</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <span className="text-4xl font-bold text-terracotta block">38</span>
                <span className="text-gray-700 text-sm">Years of Heritage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmStory;
