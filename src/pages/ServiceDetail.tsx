/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, Navigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Accordion } from "@/components/ui/Accordion/Accordion";
import { AccordionItem } from "@/components/ui/Accordion/AccordionItem";
import { CTASection } from "@/components/common/CTASection";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const swiperRef = useRef<SwiperType | null>(null);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Service data configuration
  const servicesData: Record<string, any> = {
    "industrial-services": {
      title: "Industrial Services",
      hero: {
        title: "Industrial Services",
        image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=1600",
      },
      whatIsWork: {
        title: "What is Work at Heights & Rope Access?",
        description:
          "Work at heights and rope access are specialized techniques used to safely access hard-to-reach areas on industrial sites, infrastructure, and buildings. Rope access allows technicians to reach elevated or confined spaces using ropes and harnesses—offering a safer, faster, and more cost-effective alternative to scaffolding or heavy equipment.",
        image: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?q=80&w=800",
      },
      keyServices: {
        title: "Key Rope Access Services We Provide",
        services: [
          {
            title: "Access, Safety & Fall Protection",
            content:
              "Certified access and fall protection solutions for complex and high-risk industrial environments.",
            bullets: [
              "Engineered access platforms and certified fall protection systems",
              "Confined space entry services (work execution and safety standby)",
              "Safety netting, bird control, and debris containment systems",
              "Rockfall protection systems, mesh, and stabilization installations",
            ],
          },
          {
            title: "Inspections, Maintenance & Reliability",
            content:
              "Inspection, maintenance, and reliability services supporting long-term asset performance.",
            bullets: [
              "Structural inspections, testing, and condition assessments",
              "Mechanical and electrical inspections, repairs, and installations",
              "Equipment maintenance and reliability services",
              "Corrosion protection, surface preparation, and industrial coatings",
              "Thermal insulation, acoustic control, and heat-loss protection",
              "Sealing, waterproofing, and joint systems",
            ],
          },
          {
            title: "Specialized & High-Risk Operations",
            content:
              "Specialized rope access operations for shutdowns, emergency response, and heavy-duty industrial work.",
            bullets: [
              "Shutdowns and Turnarounds (TAR) support",
              "Emergency response and technical rope rescue",
              "Rigging, lifting, and load handling operations",
              "Structural steel repairs, on-site welding, and fabrication support",
              "Rock scaling, slope stabilization, and loose rock removal",
            ],
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
        description:
          "Rope Tech Group delivers safe, efficient, and compliant rope access solutions performed by highly trained IRATA technicians. We work with precision, provide consistent results, and tailor each project to the specific challenges of your site.",
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
        image: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?q=80&w=1600",
      },
      whatIsWork: {
        title: "What is Work at Heights & Rope Access?",
        description:
          "Building services encompass comprehensive maintenance and restoration solutions for residential, commercial, and industrial properties. Our rope access techniques enable safe and efficient work on building envelopes, facades, and structural components.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
      },
      keyServices: {
        title: "Key Rope Access Services We Provide",
        services: [
          {
            title: "Access, Safety & Fall Protection",
            content:
              "Safe access and fall protection systems supporting façade inspections, maintenance, and repair work on buildings of all heights.",
            bullets: [
              "Building envelope inspections, assessments, and condition reports",
              "Façade inspections and access support for engineers and consultants",
              "Engineering assistance, technical support, and constructability input",
              "Fall protection and permanent lifeline system installations",
              "Bird deterrent and debris netting systems",
            ],
          },
          {
            title: "Envelope Inspections & Maintenance",
            content:
              "Preventative inspections and maintenance to protect building envelopes and extend lifespan.",
            bullets: [
              "Water ingress investigations and leak diagnostics",
              "Sealant removal and replacement for windows, expansion joints, and control joints, including window system fish tank installation",
              "Planned preventative maintenance (PPM) for building envelopes",
              "Thermal and air barrier repairs and upgrades",
              "Heat trace system installation, inspection, and maintenance",
            ],
          },
          {
            title: "Envelope Restoration & Repairs",
            content:
              "Comprehensive façade repair and restoration solutions to improve performance, safety, and appearance.",
            bullets: [
              "Waterproofing systems for façades, podiums, balconies, and roofs",
              "Concrete repairs, crack injection, spall repairs, and restoration",
              "Protective coatings and elastomeric membrane applications",
              "Window, glazing, and curtain wall repairs and replacements",
              "Flashing installation and repairs at façade and roof interfaces",
              "Cladding system inspections, repairs, and installations",
              "Balcony repairs, traffic coatings, and guardrail systems",
              "Exterior insulation and finish system (EIFS) repairs",
              "Exterior painting, surface preparation, and façade cleaning",
            ],
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
        description:
          "Rope Tech Group delivers safe, efficient, and compliant rope access solutions performed by highly trained IRATA technicians. We work with precision, provide consistent results, and tailor each project to the specific challenges of your site.",
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="flex justify-center relative bg-cover bg-center pt-24 lg:pt-32 h-[32vh] lg:h-[80vh]"
        style={{
          backgroundImage: `url('${service.hero.image}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="pl-6 lg:p-0 container mx-auto sm:px-6 z-10 bottom-10 absolute lg:bottom-[40%]">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            {service.hero.title}
          </h1>
          <img
            src="/home/decoration_line.svg"
            alt="Divider"
            className="block lg:hidden h-[14px] w-auto"
          />
        </div>
      </section>

      {/* What is Work Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-20 items-start">
            <div className="flex flex-col gap-5">
              <span className="text-[#C3D534] font-bold uppercase">Service Overview</span>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                {service.whatIsWork.title}
              </h2>
              <div className="relative lg:hidden overflow-hidden rounded-3xl aspect-[4/5]">
                <img
                  src={service.whatIsWork.image}
                  alt="Work at heights"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                {service.whatIsWork.description}
              </p>
            </div>
            <div className="hidden lg:block overflow-hidden rounded-3xl aspect-[4/5]">
              <img
                src={service.whatIsWork.image}
                alt="Work at heights"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Section - Dark */}
      <section className="py-16 lg:py-32 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-20">
            <svg
              width="435"
              height="348"
              viewBox="0 0 435 348"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:inline absolute top-0 left-0 -translate-x-1/3 -translate-y-24"
            >
              <path
                d="M117.395 187.518C121.288 179.768 121.288 179.768 129.509 171.264C131.639 168.929 133.769 166.593 135.963 164.187C154.536 144.933 154.536 144.933 165.463 142.321C171.814 142.449 171.814 142.449 181.576 144.305C185.335 139.375 185.335 139.375 188.357 132.731C187.889 130.337 187.422 127.943 186.94 125.476C187.48 114.373 192.015 110.318 199.994 102.831C202.681 100.478 202.681 100.478 205.423 98.0771C207.232 96.4639 209.041 94.8506 210.905 93.1885C224.479 81.4644 235.778 72.9898 253.807 69.6653C272.601 77.7291 285.449 91.7639 299.424 106.223C301.716 108.502 304.008 110.78 306.369 113.127C308.537 115.355 310.705 117.583 312.939 119.878C314.907 121.887 316.876 123.896 318.904 125.965C324.381 133.906 324.691 138.787 324.296 148.339C318.381 172.895 303.753 189.68 283.433 204.818C273.177 208.422 265.965 208.977 254.96 209.195C253.812 218.128 252.819 226.952 252.244 235.939C245.444 243.694 245.444 243.694 236.419 252.172C233.494 254.98 230.569 257.788 227.556 260.682C216.736 268.822 210 272.379 196.47 273.648C188.205 269.304 183.027 265.641 176.225 259.56C173.019 256.786 173.019 256.786 169.749 253.955C162.615 247.633 155.673 241.148 148.746 234.606C146.35 232.425 143.955 230.243 141.487 227.995C127.961 215.225 119.371 206.301 117.395 187.518Z"
                fill="#252525"
              />
              <path
                d="M50.8633 283.4C63.8189 258.384 91.5821 236.856 112.427 218.123C114.455 217.58 116.484 217.036 118.574 216.477C127.622 225.2 136.611 233.981 145.59 242.774C148.168 245.259 150.747 247.744 153.403 250.304C155.84 252.701 158.276 255.097 160.786 257.567C164.181 260.872 164.181 260.872 167.646 264.244C172.526 270.313 172.526 270.313 171.892 280.239C164.914 289.18 156.526 296.876 148.421 304.821C146.239 307.041 144.057 309.26 141.809 311.547C129.28 323.944 118.91 333.156 101.743 338.06C81.0871 330.572 49.7011 306.64 50.8633 283.4ZM93.6126 307.718C98.9518 307.361 104.291 307.003 109.792 306.635C111.627 301.314 111.627 301.314 113.5 295.886C110.666 293.425 107.833 290.965 104.914 288.43C100.111 290.79 95.3087 293.15 90.3606 295.581C91.4338 299.587 92.5069 303.592 93.6126 307.718Z"
                fill="#252525"
              />
              <path
                d="M272.516 64.2458C274.869 51.2556 286.735 43.3156 296.061 34.5422C298.151 32.4625 300.241 30.3828 302.395 28.24C311.917 19.1537 318.365 13.3432 331.244 9.78193C341.387 10.8809 345.363 12.9337 352.968 19.4973C355.067 21.295 357.166 23.0926 359.33 24.9447C362.169 27.485 362.169 27.485 365.067 30.0767C368.95 33.1611 368.95 33.1611 372.912 36.3079C380.432 45.2517 382.496 52.5124 384.043 64.0168C377.415 78.9902 365.804 89.4639 354.136 100.689C352.264 102.555 350.393 104.421 348.465 106.344C346.649 108.102 344.834 109.861 342.964 111.673C341.32 113.274 339.677 114.875 337.984 116.524C333.146 119.931 333.146 119.931 323.113 119.368C313.939 112.364 306.03 103.97 297.871 95.8464C295.568 93.64 293.266 91.4335 290.894 89.1602C288.717 87.0122 286.541 84.8642 284.299 82.6511C282.3 80.6868 280.301 78.7225 278.242 76.6987C273.86 70.7758 273.86 70.7758 272.516 64.2458ZM326.284 69.7369C328.849 71.196 331.414 72.6551 334.057 74.1584C341.796 71.0428 341.796 71.0428 348.61 67.0067C346.255 62.272 343.899 57.5373 341.472 52.6591C336.669 55.0192 331.867 57.3792 326.919 59.8108C326.709 63.0864 326.5 66.362 326.284 69.7369Z"
                fill="#252525"
              />
            </svg>
            <div className="flex flex-col gap-8 items-start z-10">
              <span className="text-[#C3D534] font-bold uppercase">Our Services</span>
              <h2 className="text-3xl lg:text-5xl font-bold text-white">
                {service.keyServices.title}
              </h2>
              <img
                src="/home/decoration_line.svg"
                alt="Divider"
                className="block lg:hidden h-[14px] w-auto"
              />
              <Button className="hidden lg:flex items-center justify-between gap-[10px] bg-[#D9F043] hover:bg-[#D9F043] text-gray-800 rounded-md p-6">
                Discuss your project with us
                <img src="/home/arrow_diagonal.svg" alt="arrow_diagonal" />
              </Button>
            </div>
            <Accordion>
              {service.keyServices.services.map(
                (service: { title: string; content: string | undefined; bullets: string[] }) => {
                  return (
                    <AccordionItem
                      dark
                      title={service.title}
                      subtitle={service.content}
                      isOpen={openIndex === 0}
                      onToggle={() => toggle(0)}
                      key={service.title}
                    >
                      <ul className="list-none space-y-3 text-white">
                        {service.bullets.map((bullet: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="flex-shrink-0 w-4 h-4 mt-1">
                              <img src="/green_check.svg" alt="check" />
                            </span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </AccordionItem>
                  );
                },
              )}
            </Accordion>
            <Button className="flex lg:hidden bg-[#D9F043] hover:bg-[#D9F043] text-gray-800 rounded-md p-5">
              Discuss your project with us
              <img src="/home/arrow_diagonal.svg" alt="arrow_diagonal" />
            </Button>
          </div>
        </div>
      </section>

      {/* Our Work in Real Conditions */}
      <section className="py-16 lg:py-24 bg-white">
        <div>
          <div className="text-center">
            <span className="text-[#C3D534] font-bold uppercase">Our Work</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4 mb-12 text-center">
              {service.realConditions.title}
            </h2>
            <div className="lg:hidden mb-10">
              <Swiper
                modules={[Pagination]}
                pagination={{
                  type: "bullets",
                  clickable: true,
                }}
                spaceBetween={16}
                slidesPerView="auto"
                initialSlide={1}
                centeredSlides
                className="projects-swiper py-10"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
              >
                {service.realConditions.images.map((image: string, index: number) => (
                  <SwiperSlide key={index} className="max-w-[320px]">
                    <div key={index} className="relative overflow-hidden rounded-3xl aspect-[4/5]">
                      <img
                        src={image}
                        alt={`Project ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* DESKTOP */}
            <div className="hidden lg:block relative our-work-swiper">
              <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView="auto"
                centeredSlides
                initialSlide={1}
                spaceBetween={40}
                navigation={{
                  nextEl: ".our-work-next",
                  prevEl: ".our-work-prev",
                }}
                pagination={{
                  clickable: true,
                  bulletClass: "swiper-pagination-bullet !bg-white/40",
                  bulletActiveClass: "swiper-pagination-bullet-active !bg-brand-lime",
                }}
                className="!pb-12"
              >
                {service.realConditions.images.map((image: string, index: number) => (
                  <SwiperSlide key={index} className="!w-[60vw] max-w-[720px]">
                    <div className="relative overflow-hidden rounded-3xl aspect-[16/9]">
                      <img
                        src={image}
                        alt={`Project ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* NAVIGATION */}
              <div
                className="
                  absolute
                  top-[45%]
                  left-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  flex justify-between
                  w-full max-w-[840px]
                  px-6
                  pointer-events-none
                  z-10
                "
              >
                <button
                  className="
                    our-work-prev
                    pointer-events-auto
                    w-[60px] h-[60px]
                    rounded-full bg-white
                    flex items-center justify-center
                    hover:bg-gray-100 transition-colors
                    border-black
                    border-1
                  "
                >
                  <ArrowRight className="w-6 h-6 text-gray-900 rotate-180" />
                </button>

                <button
                  className="
                    our-work-next
                    pointer-events-auto
                    w-[60px] h-[60px]
                    rounded-full bg-white
                    flex items-center justify-center
                    hover:bg-gray-100 transition-colors
                    border-black
                    border-1
                  "
                >
                  <ArrowRight className="w-6 h-6 text-gray-900" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 lg:py-24 pb-0 lg:pb-24 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 justify-center items-center gap-10 lg:gap-16">
            <div className="flex flex-col gap-8 items-start">
              <span className="text-[#C3D534] font-bold uppercase">Why choose us</span>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                {service.whyChoose.title}
              </h2>
              <p>{service.whyChoose.description}</p>
            </div>
            <div className="!bg-white p-6 rounded-3xl w-full">
              <h3 className="text-xl font-bold text-gray-900 mb-6">What sets us apart:</h3>
              <ul className="space-y-4">
                {service.whyChoose.reasons.map((reason: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    {/* FIXED ICON WRAPPER */}
                    <span className="flex-shrink-0 w-4 h-4 mt-1">
                      <svg
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                      >
                        <path
                          d="M14.5833 1.25L5.41667 10.4167L1.25 6.25"
                          stroke="#C3D534"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    {/* TEXT */}
                    <span className="text-gray-700 leading-snug">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="py-[80px] lg:pb-0 lg:pt-[120px]">
          <CTASection />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 pb-[80px] lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between gap-5">
            {/* Title */}
            <div className="lg:max-w-md">
              <h3 className="text-[#a5b715] font-bold mb-3 uppercase text-sm tracking-wider">
                FAQ'S
              </h3>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 lg:mb-12">
                {service.faq.title}
              </h2>
            </div>

            {/* FAQ */}
            <Accordion>
              {service.faq.questions.map(
                (question: { question: string; answer: string }, idx: number) => (
                  <AccordionItem
                    key={idx}
                    title={question.question}
                    isOpen={openIndex === 0}
                    onToggle={() => toggle(0)}
                  >
                    <p className="text-gray-400">{question.answer}</p>
                  </AccordionItem>
                ),
              )}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
