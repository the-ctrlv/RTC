const Industries = () => {
  const industries = [
    {
      title: "Healthcare",
      description: "HIPAA-compliant solutions for hospitals, clinics, and healthcare providers to improve patient care and streamline operations.",
      icon: "🏥",
      solutions: ["Electronic Health Records", "Telemedicine Platforms", "Patient Portals", "Healthcare Analytics"]
    },
    {
      title: "Finance & Banking",
      description: "Secure and scalable financial technology solutions for banks, fintech companies, and financial institutions.",
      icon: "🏦",
      solutions: ["Mobile Banking", "Payment Gateways", "Trading Platforms", "Risk Management Systems"]
    },
    {
      title: "E-Commerce",
      description: "Robust e-commerce platforms and solutions to help businesses grow their online presence and sales.",
      icon: "🛒",
      solutions: ["Online Stores", "Inventory Management", "Payment Integration", "Customer Analytics"]
    },
    {
      title: "Education",
      description: "Innovative educational technology solutions for schools, universities, and online learning platforms.",
      icon: "🎓",
      solutions: ["Learning Management Systems", "Virtual Classrooms", "Student Portals", "Assessment Tools"]
    },
    {
      title: "Manufacturing",
      description: "Digital transformation solutions to optimize production, supply chain, and operations management.",
      icon: "🏭",
      solutions: ["IoT Integration", "Supply Chain Management", "Quality Control Systems", "Production Analytics"]
    },
    {
      title: "Real Estate",
      description: "Technology solutions for property management, real estate agents, and property developers.",
      icon: "🏢",
      solutions: ["Property Management Systems", "Virtual Tours", "CRM Solutions", "Listing Platforms"]
    },
    {
      title: "Retail",
      description: "Omnichannel retail solutions to enhance customer experience and operational efficiency.",
      icon: "🏬",
      solutions: ["POS Systems", "Inventory Tracking", "Customer Loyalty Programs", "Sales Analytics"]
    },
    {
      title: "Logistics & Transportation",
      description: "Smart logistics solutions for transportation companies, freight forwarders, and delivery services.",
      icon: "🚚",
      solutions: ["Fleet Management", "Route Optimization", "Tracking Systems", "Warehouse Management"]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-blue-600 text-white py-16 h-full">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl text-blue-100">Specialized solutions for diverse sectors</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industry Expertise</h2>
            <p className="text-lg text-gray-700">
              We bring deep industry knowledge and technical expertise to deliver solutions
              that address the unique challenges and requirements of each sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="text-5xl mr-4">{industry.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{industry.title}</h3>
                    <p className="text-gray-600 mb-4">{industry.description}</p>
                    <div className="space-y-2">
                      <p className="font-semibold text-sm text-gray-800">Key Solutions:</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <span className="text-blue-600 mr-1">•</span>
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Industry?</h2>
          <p className="text-lg text-gray-700 mb-8">
            We work with businesses across all sectors. Contact us to discuss your specific needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Industries;
