import { CTASection } from "@/components/common/CTASection";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const services = [
  {
    title: "Industrial Services",
    description:
      "We provide safe, compliant, and efficient access and maintenance solutions for industrial facilities, infrastructure, and complex environments — supporting critical operations and large-scale projects across Canada.",
    image: "/home/services.jpg",
    link: "/services/industrial-services",
  },
  {
    title: "Building Services",
    description:
      "We deliver comprehensive building envelope solutions focused on durability, weather protection, and long-term performance for residential, commercial, and institutional buildings — from low-rise to high-rise projects across Canada.",
    image: "/home/building-services.jpg",
    link: "/services/building-services",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen relative">
      <SEO
        title="Our Services"
        description="Comprehensive rope access services including industrial inspections, building maintenance, facade repairs, waterproofing, and specialized access solutions. IRATA-certified professionals serving Vancouver and Canada."
        keywords="rope access services, industrial inspections, building maintenance, facade repairs, waterproofing services, IRATA certified, Vancouver services"
      />
      {/* HERO */}
      <section className="relative bg-brand-dark text-white pt-32 pb-32 sm:pt-36 sm:pb-36 lg:pt-44 lg:pb-44">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Services
          </h1>
          <img
            src="decoration_line.svg"
            alt="Divider"
            className="h-[14px] w-auto"
          />
        </div>
      </section>

      {/* SERVICES CARDS */}
      <section className="relative z-10">
        <div
          className="
            container mx-auto px-4 sm:px-6 lg:px-8 xl:px-14
            -translate-y-20 sm:-translate-y-24 lg:-translate-y-24
          "
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col rounded-3xl overflow-hidden bg-white shadow-lg"
              >
                {/* Image */}
                <div
                  className="
                    bg-cover bg-center
                    min-h-[220px] sm:min-h-[260px] lg:min-h-[300px]
                  "
                  style={{ backgroundImage: `url(${service.image})` }}
                />

                {/* Content */}
                <div className="p-6 flex flex-col gap-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h2>

                  <p className="">{service.description}</p>

                  <Link to={service.link} className="mt-auto">
                    <span
                      className="
                        inline-flex items-center gap-3
                        px-4 py-2 rounded-md
                        bg-[#D9F043]/10
                        border border-[#D9F043]
                        text-gray-700 font-medium
                        hover:bg-[#D9F043]/20
                        transition-colors
                      "
                    >
                      <span>Learn More</span>
                      <img src="/home/arrow_diagonal.svg" alt="" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-[80px] lg:mt-[120px]">
            <CTASection />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
