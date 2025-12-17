import { Link } from "react-router-dom";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { useState } from "react";

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Certified Rope Access",
      description:
        "Our IRATA-certified technicians provide safe and efficient rope access solutions for buildings of all heights. We specialize in maintenance, inspections, and installations using advanced rope access techniques.",
    },
    {
      title: "Work at Heights & Rope Access",
      description:
        "Professional rope access services for high-rise buildings, bridges, and hard-to-reach structures. Our team ensures safety and efficiency in every project with certified equipment and trained professionals.",
    },
    {
      title: "Engineered Hoisting Systems",
      description:
        "Custom-designed hoisting systems for complex industrial applications. We provide engineering, installation, and maintenance of specialized lifting equipment tailored to your project requirements.",
    },
    {
      title: "Bridge Maintenance",
      description:
        "Comprehensive bridge inspection, maintenance, and repair services. Our rope access techniques allow us to reach challenging areas safely and efficiently, minimizing traffic disruption.",
    },
    {
      title: "Rock Scaling & Stabilization",
      description:
        "Expert geological hazard mitigation services including rock scaling, slope stabilization, and rockfall protection. We ensure the safety of roads, railways, and infrastructure near unstable terrain.",
    },
    {
      title: "Maintenance Shutdowns (TAR)",
      description:
        "Turnaround maintenance services for industrial facilities. Our team provides efficient shutdown support, including inspection, cleaning, and maintenance to minimize downtime and ensure operational readiness.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="mb-8">
            <h3 className="text-brand-lime font-bold mb-3 uppercase text-xs tracking-wider">
              OUR SERVICES
            </h3>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Industrial Services
            </h2>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-brand-lime rounded-full flex-shrink-0"></div>
              <div className="flex-1 h-px bg-brand-lime"></div>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">
              Our team provides specialized industrial services that ensure
              safety, reliability, and long-term performance. We deliver
              professional maintenance, inspection, and repair solutions — even
              in hard-to-access areas.
            </p>
          </div>

          <div className="space-y-3 mb-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden transition-all ${
                  openIndex === index
                    ? "bg-gray-100"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div
                  className="flex items-center justify-between p-4 cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-semibold text-sm text-gray-900 pr-3">
                    {service.title}
                  </span>
                  <div className="w-8 h-8 rounded-full border-2 border-gray-900 flex items-center justify-center flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-gray-900" />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-900" />
                    )}
                  </div>
                </div>
                {openIndex === index && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <button className="text-gray-900 font-semibold text-sm underline">
                      Learn more
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <Link to="/services">
            <div className="bg-brand-lime hover:bg-brand-lime/90 p-6 rounded-2xl flex items-center justify-between cursor-pointer transition-all group relative overflow-hidden">
              <span className="text-gray-900 font-bold text-lg pr-4">
                Explore Our Full Range of Services
              </span>
              <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                <ArrowRight className="w-6 h-6 text-brand-lime" />
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-brand-lime font-bold mb-3 uppercase text-sm tracking-wider">
              OUR SERVICES
            </h3>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Industrial Services
            </h2>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 bg-brand-lime rounded-full flex-shrink-0"></div>
              <div className="flex-1 h-px bg-brand-lime max-w-md"></div>
            </div>
            <p className="text-gray-700 leading-relaxed text-base">
              Our team provides specialized industrial services that ensure
              safety, reliability, and long-term performance. We deliver
              professional maintenance, inspection, and repair solutions — even
              in hard-to-access areas.
            </p>
          </div>

          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden transition-all ${
                  openIndex === index
                    ? "bg-gray-100"
                    : "bg-white border border-gray-300 hover:border-brand-lime"
                }`}
              >
                <div
                  className="flex items-center justify-between p-5 cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-semibold text-base text-gray-900">
                    {service.title}
                  </span>
                  <div className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-gray-900" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-900" />
                    )}
                  </div>
                </div>
                {openIndex === index && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <button className="text-gray-900 font-semibold text-sm underline">
                      Learn more
                    </button>
                  </div>
                )}
              </div>
            ))}

            <Link to="/services">
              <div className="bg-brand-lime hover:bg-brand-lime/90 p-6 rounded-2xl flex items-center justify-between cursor-pointer transition-all group mt-8">
                <span className="text-gray-900 font-bold text-lg">
                  Explore Our Full Range of Services
                </span>
                <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <ArrowRight className="w-6 h-6 text-brand-lime" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
