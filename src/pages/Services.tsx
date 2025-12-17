const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies for optimal performance and user experience.",
      icon: "💻",
      features: ["Responsive Design", "Modern Frameworks", "API Integration", "Performance Optimization"]
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      icon: "📱",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to power your business.",
      icon: "☁️",
      features: ["AWS", "Azure", "Google Cloud", "Cloud Migration"]
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user engagement and satisfaction.",
      icon: "🎨",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    },
    {
      title: "Consulting",
      description: "Expert technology consulting to help you make informed decisions and achieve your goals.",
      icon: "🎯",
      features: ["Technology Strategy", "Digital Transformation", "Process Optimization", "Technical Audits"]
    },
    {
      title: "Support & Maintenance",
      description: "Ongoing support and maintenance to keep your systems running smoothly.",
      icon: "🛠️",
      features: ["24/7 Support", "Bug Fixes", "Updates", "Monitoring"]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100">Comprehensive solutions tailored to your needs</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="text-blue-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-gray-700 mb-8">
            We can create a tailored solution specifically for your business needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
