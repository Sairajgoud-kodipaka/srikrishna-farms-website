
const Testimonial = () => {
  return (
    <section className="py-16 bg-terracotta bg-opacity-10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-green-light flex items-center justify-center text-white font-bold">
                RS
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">Rajesh Sharma</h4>
                <p className="text-sm text-gray-600">Hyderabad</p>
              </div>
            </div>
            <div className="mb-4 text-amber-400">
              ★★★★★
            </div>
            <p className="text-gray-700">
              "The milk and ghee from Sri Krishna Dairy Farms remind me of my childhood in our village. Pure, fresh and so flavorful! You can truly taste the difference of organic farming."
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-green-light flex items-center justify-center text-white font-bold">
                AP
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">Anita Patel</h4>
                <p className="text-sm text-gray-600">Warangal</p>
              </div>
            </div>
            <div className="mb-4 text-amber-400">
              ★★★★★
            </div>
            <p className="text-gray-700">
              "I switched to Sri Krishna's A2 milk for my family after learning about its health benefits. My children's health has noticeably improved, and we love the taste of all their products!"
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-green-light flex items-center justify-center text-white font-bold">
                VR
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">Venkat Reddy</h4>
                <p className="text-sm text-gray-600">Karimnagar</p>
              </div>
            </div>
            <div className="mb-4 text-amber-400">
              ★★★★★
            </div>
            <p className="text-gray-700">
              "Their commitment to traditional farming methods and animal welfare is evident in the quality of their products. The paneer and curd are simply outstanding - no additives, just pure goodness."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
