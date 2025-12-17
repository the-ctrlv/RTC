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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">Industrial Services</h2>
            <p className="text-gray-600 leading-relaxed">
              Our team specializes in industrial-grade services that bring
              unparalleled value and reliability to complex projects. We deliver
              safe, efficient, and cost-effective solutions tailored to your
              specific needs.
            </p>
          </div>
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg hover:border-lime-400 transition-colors overflow-hidden"
              >
                <div
                  className="flex items-center justify-between p-4 cursor-pointer group"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-medium">{service.title}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-lime-400 transition-colors flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400 group-hover:text-lime-400 transition-colors flex-shrink-0" />
                  )}
                </div>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-4">
                    {service.description}
                  </div>
                )}
              </div>
            ))}
            <Link to="/services">
              <div className="bg-lime-400 hover:bg-lime-500 p-6 rounded-lg flex items-center justify-between cursor-pointer transition-colors group mt-8">
                <span className="text-black font-semibold text-lg">
                  Explore Our Full Range of Services
                </span>
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-6 h-6 text-lime-400" />
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
