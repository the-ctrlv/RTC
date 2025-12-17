const Projects = () => {
  const projects = [
    {
      title: "Enterprise Resource Planning System",
      client: "Global Manufacturing Corp",
      industry: "Manufacturing",
      description: "Comprehensive ERP solution integrating inventory, production, and supply chain management for a Fortune 500 company.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      results: ["40% increase in operational efficiency", "Real-time inventory tracking", "Reduced production downtime by 30%"],
      image: "🏭"
    },
    {
      title: "Telemedicine Platform",
      client: "Healthcare Partners Inc",
      industry: "Healthcare",
      description: "HIPAA-compliant telemedicine platform enabling virtual consultations, prescription management, and patient records.",
      technologies: ["React Native", "Python", "MongoDB", "WebRTC"],
      results: ["200,000+ virtual consultations", "98% patient satisfaction", "Expanded healthcare access to rural areas"],
      image: "🏥"
    },
    {
      title: "E-Commerce Marketplace",
      client: "Retail Innovations Ltd",
      industry: "E-Commerce",
      description: "Multi-vendor marketplace with advanced search, real-time inventory, and integrated payment processing.",
      technologies: ["Next.js", "Express", "Redis", "Stripe"],
      results: ["$50M+ in annual transactions", "5,000+ active vendors", "Mobile-first responsive design"],
      image: "🛒"
    },
    {
      title: "Financial Trading Platform",
      client: "FinTech Solutions",
      industry: "Finance",
      description: "High-frequency trading platform with real-time market data, portfolio management, and risk analytics.",
      technologies: ["Angular", "Java", "Kafka", "Kubernetes"],
      results: ["Sub-millisecond latency", "99.99% uptime", "Processing 100,000+ trades daily"],
      image: "📈"
    },
    {
      title: "Learning Management System",
      client: "EduTech University",
      industry: "Education",
      description: "Comprehensive LMS with virtual classrooms, assignments, grading, and student analytics.",
      technologies: ["Vue.js", "Django", "MySQL", "Zoom API"],
      results: ["50,000+ students enrolled", "Interactive virtual classrooms", "Automated grading system"],
      image: "🎓"
    },
    {
      title: "Smart Logistics Platform",
      client: "TransGlobal Shipping",
      industry: "Logistics",
      description: "IoT-enabled logistics platform with route optimization, fleet management, and real-time tracking.",
      technologies: ["React", "Go", "InfluxDB", "Google Maps API"],
      results: ["25% reduction in fuel costs", "Real-time shipment tracking", "Optimized delivery routes"],
      image: "🚚"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-blue-100">Successful solutions that drive real business results</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-700">
              Explore some of our recent projects and the impact we've made for our clients
              across various industries.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center p-8">
                    <div className="text-8xl">{project.image}</div>
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold">{project.client}</span> • {project.industry}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{project.description}</p>

                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-800 mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-800 mb-2">Key Results:</p>
                      <ul className="space-y-1">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <span className="text-green-600 mr-2 mt-0.5">✓</span>
                            {result}
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
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Let's discuss how we can help bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
