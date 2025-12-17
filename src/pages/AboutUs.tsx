const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-100">Learn more about our company and values</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              RTC was founded with a vision to transform businesses through innovative
              technology solutions. With years of experience and a dedicated team of
              professionals, we have successfully delivered numerous projects across
              various industries.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our commitment to excellence and customer satisfaction has made us a
              trusted partner for businesses looking to leverage technology for growth
              and success.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Constantly pushing boundaries with creative solutions
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                Honest and transparent in all our dealings
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                Committed to delivering the highest quality
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                Your success is our top priority
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-lg text-gray-700">
              Our team consists of experienced professionals who are passionate about
              technology and dedicated to delivering exceptional results. We bring
              together diverse skills and expertise to tackle any challenge.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
