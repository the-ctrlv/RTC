import { useParams, Navigate } from "react-router-dom";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  // Service data configuration
  const servicesData: Record<string, any> = {
    "industrial-services": {
      title: "Industrial Services",
      hero: {
        title: "Industrial Services",
        image:
          "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=1600",
      },
      whatIsWork: {
        title: "What is Work at Heights & Rope Access?",
        description:
          "Work at heights and rope access are specialized techniques used to safely access hard-to-reach areas on industrial sites, infrastructure, and buildings. Rope access allows technicians to reach elevated or confined spaces using ropes and harnesses—offering a safer, faster, and more cost-effective alternative to scaffolding or heavy equipment.",
        image:
          "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?q=80&w=800",
      },
      keyServices: {
        title: "Key Rope Access Services We Provide",
        services: [
          {
            title: "Facade Inspections & Maintenance",
            description:
              "Detailed visual and technical inspections of building exteriors to identify damage or wear.",
          },
          {
            title: "Concrete Repairs & Restoration",
            description:
              "Repair spalling, cracks, and structural damage using advanced materials and techniques.",
          },
          {
            title: "Waterproofing & Caulking",
            description:
              "Application of sealants and waterproofing membranes to prevent water infiltration.",
          },
          {
            title: "Glazing & Window Services",
            description:
              "Installation, repair, and replacement of glass panels and window systems.",
          },
          {
            title: "Coating & Painting",
            description:
              "Protective coatings and high-quality finishes for metal, concrete, and masonry surfaces.",
          },
          {
            title: "Structural Assessments",
            description:
              "Engineering-level inspections to evaluate the condition and safety of building components.",
          },
        ],
      },
      realConditions: {
        title: "Our Work in Real Conditions",
        images: [
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
          "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800",
          "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?q=80&w=800",
        ],
      },
      whyChoose: {
        title: "Why Choose Rope Tech Group for Rope Access?",
        reasons: [
          "IRATA-certified technicians",
          "Proven safety record",
          "Cost-effective solutions",
          "Minimal disruption",
          "Faster project completion",
          "Expertise across industries",
        ],
        cta: "Let's Discuss Your Project",
      },
      faq: {
        title: "Frequently Asked Questions",
        questions: [
          {
            question: "What is rope access?",
            answer:
              "Rope access is a method of working at height using ropes and specialized equipment, providing safe and efficient access to difficult-to-reach areas.",
          },
          {
            question: "Is rope access safe?",
            answer:
              "Yes, rope access is statistically one of the safest methods of working at height when performed by certified professionals following industry standards.",
          },
          {
            question: "What certifications do your technicians have?",
            answer:
              "All our technicians are IRATA-certified and undergo regular training to maintain the highest safety standards.",
          },
        ],
      },
    },
    "building-services": {
      title: "Building Services",
      hero: {
        title: "Building Services",
        image:
          "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?q=80&w=1600",
      },
      whatIsWork: {
        title: "What is Work at Heights & Rope Access?",
        description:
          "Building services encompass comprehensive maintenance and restoration solutions for residential, commercial, and industrial properties. Our rope access techniques enable safe and efficient work on building envelopes, facades, and structural components.",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
      },
      keyServices: {
        title: "Key Rope Access Services We Provide",
        services: [
          {
            title: "Building Envelope Solutions",
            description:
              "Comprehensive assessment and repair of building exteriors including walls, roofs, and foundations.",
          },
          {
            title: "Facade Cleaning & Restoration",
            description:
              "Professional cleaning and restoration services to maintain building aesthetics and integrity.",
          },
          {
            title: "Structural Repairs",
            description:
              "Expert repair of concrete, masonry, and steel structural elements.",
          },
          {
            title: "Window & Glazing Systems",
            description:
              "Installation and maintenance of modern window systems and glass facades.",
          },
          {
            title: "Waterproofing Solutions",
            description:
              "Advanced waterproofing systems to protect buildings from water damage.",
          },
          {
            title: "Preventive Maintenance",
            description:
              "Regular maintenance programs to extend building lifespan and prevent costly repairs.",
          },
        ],
      },
      realConditions: {
        title: "Our Work in Real Conditions",
        images: [
          "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?q=80&w=800",
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
          "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800",
        ],
      },
      whyChoose: {
        title: "Why Choose Rope Tech Group for Rope Access?",
        reasons: [
          "Certified building specialists",
          "Comprehensive service portfolio",
          "Quality workmanship guaranteed",
          "Timely project delivery",
          "Competitive pricing",
          "Full insurance coverage",
        ],
        cta: "Let's Discuss Your Project",
      },
      faq: {
        title: "Frequently Asked Questions",
        questions: [
          {
            question: "What types of buildings do you service?",
            answer:
              "We service all types of buildings including residential high-rises, commercial properties, and industrial facilities.",
          },
          {
            question: "How long does a typical project take?",
            answer:
              "Project duration varies based on scope and complexity. We provide detailed timelines during the consultation phase.",
          },
          {
            question: "Do you provide warranties on your work?",
            answer:
              "Yes, we provide comprehensive warranties on all our services. Specific terms depend on the type of work performed.",
          },
        ],
      },
    },
  };

  // If slug doesn't exist or is invalid, redirect to services page
  if (!slug || !servicesData[slug]) {
    return <Navigate to="/services" replace />;
  }

  const service = servicesData[slug];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-24 lg:py-32"
        style={{
          backgroundImage: `url('${service.hero.image}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            {service.hero.title}
          </h1>
          <img
            src="/decoration_line.svg"
            alt="Divider"
            className="h-[14px] w-auto"
          />
        </div>
      </section>

      {/* What is Work Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  {service.whatIsWork.title}
                </h2>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  {service.whatIsWork.description}
                </p>
              </div>
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5]">
                <img
                  src={service.whatIsWork.image}
                  alt="Work at heights"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Section - Dark */}
      <section className="py-16 lg:py-24 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 lg:mb-16 text-center">
              {service.keyServices.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {service.keyServices.services.map((item: any, index: number) => (
                <div
                  key={index}
                  className="bg-brand-dark-light rounded-2xl p-6 lg:p-8"
                >
                  <h3 className="text-xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Work in Real Conditions */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
              {service.realConditions.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {service.realConditions.images.map(
                (image: string, index: number) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-3xl aspect-[4/5]"
                  >
                    <img
                      src={image}
                      alt={`Project ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 lg:py-24 bg-brand-lime">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-12">
              {service.whyChoose.title}
            </h2>
            <ul className="grid md:grid-cols-2 gap-4 mb-12">
              {service.whyChoose.reasons.map(
                (reason: string, index: number) => (
                  <li key={index} className="flex items-center text-gray-900">
                    <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                    <span className="text-base lg:text-lg">{reason}</span>
                  </li>
                )
              )}
            </ul>
            <div className="flex items-center justify-between bg-gray-900 rounded-full p-2 pl-8 max-w-md">
              <span className="text-white font-bold text-lg">
                {service.whyChoose.cta}
              </span>
              <button className="w-12 h-12 rounded-full bg-brand-lime flex items-center justify-center hover:bg-white transition-colors">
                <ArrowRight className="text-gray-900 w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <div className="mb-8 lg:mb-0">
              <h3 className="text-brand-lime font-bold mb-3 uppercase text-sm tracking-wider">
                FAQ'S
              </h3>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 lg:mb-12">
                {service.faq.title}
              </h2>
            </div>

            {/* Questions - Single column on mobile, two columns on desktop */}
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:gap-20">
              {/* Empty div for desktop layout to push questions to right */}
              <div className="hidden lg:block"></div>

              {/* Questions */}
              <div className="space-y-4">
                {service.faq.questions.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 lg:px-8 py-5 lg:py-6 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                    >
                      <h3 className="text-base lg:text-lg font-bold text-gray-900 pr-4">
                        {item.question}
                      </h3>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center">
                        {openFaqIndex === index ? (
                          <Minus className="w-5 h-5 text-gray-900" />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-900" />
                        )}
                      </div>
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-6 lg:px-8 pb-5 lg:pb-6">
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
