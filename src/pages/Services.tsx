import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Industrial Services",
      description:
        "We provide safe, compliant, and efficient access and maintenance solutions for industrial facilities on infrastructure projects across British Columbia. Supporting petrochemical, power generation, manufacturing, and specialized industries with safe access and maintenance solutions that keep your operations running.",
      image:
        "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800",
      link: "/services/industrial-services",
    },
    {
      title: "Building Services",
      description:
        "We deliver comprehensive building envelope solutions focused on concrete, coatings, waterproofing, and structural maintenance for residential, commercial, and industrial properties. Supporting the safe operation and longevity of high-rise and complex structures throughout British Columbia.",
      image:
        "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?q=80&w=800",
      link: "/services/building-services",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-dark text-white pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Services
          </h1>
          <img
            src="/decoration_line.svg"
            alt="Divider"
            className="h-[14px] w-auto"
          />
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8 max-w-md mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white">
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5] mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-gray-900 font-semibold hover:text-brand-lime transition-colors"
                >
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block max-w-7xl mx-auto space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "direction-rtl" : ""
                }`}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="relative overflow-hidden rounded-3xl aspect-[4/5]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                        {service.title}
                      </h2>
                      <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>
                      <a
                        href={service.link}
                        className="inline-flex items-center text-gray-900 font-semibold text-lg hover:text-brand-lime transition-colors"
                      >
                        Learn more
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                        {service.title}
                      </h2>
                      <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>
                      <Link
                        to={service.link}
                        className="inline-flex items-center text-gray-900 font-semibold text-lg hover:text-brand-lime transition-colors"
                      >
                        Learn more
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </div>
                    <div className="relative overflow-hidden rounded-3xl aspect-[4/5]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-brand-lime rounded-3xl p-8 lg:p-12 flex items-center justify-between">
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
                Ready to Discuss
                <br className="hidden sm:block" />
                Your Project?
              </h2>
              <button className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors flex-shrink-0 ml-6">
                <ArrowRight className="text-white w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
