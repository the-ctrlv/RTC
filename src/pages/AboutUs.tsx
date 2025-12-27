import ContactSection from "@/components/home/ContactSection";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import missonIcon from "../../public/about-us/mission.svg";
import purposeIcon from "../../public/about-us/purpose.svg";
import visionIcon from "../../public/about-us/vision.svg";
import { CTASection } from "@/components/common/CTASection";

const AboutUs = () => {
  const stats = [
    { value: "95%", label: "SUCCESSFUL RATE" },
    { value: "500+", label: "CLIENTS SERVED" },
    { value: "15+", label: "YEARS EXPERIENCE" },
    { value: "24/7", label: "EXPERT SUPPORT" },
  ];

  const principles = [
    {
      title: "Mission",
      description:
        "To deliver safe, efficient, and cost-effective rope access solutions across Canada.",
      icon: missonIcon,
    },
    {
      title: "Vision",
      description:
        "To be the most trusted name in rope access and high-rise services across Canada.",
      icon: purposeIcon,
    },
    {
      title: "Purpose",
      description: "We exist to protect and preserve buildings through innovative access methods.",
      icon: visionIcon,
    },
  ];

  const certifications = [
    "IRATA-certified rope access technicians",
    "Fully safety-trained and certified",
    "All workers are WSIB-covered",
    "Fully compliant with IRATA standards and best practices",
    "Full insurance coverage for all projects",
    "Compliance with regional legislation and industry standards",
  ];

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
      title: "High-Rise Facade Inspection",
    },
    {
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800",
      title: "Building Maintenance",
    },
    {
      image: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?q=80&w=800",
      title: "Glass Replacement",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-[position:15%] lg:bg-center bg-[url('/about-us/hero.jpg')]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-end lg:items-center pb-20 lg:pb-0 min-h-[80vh]">
          {/* <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between h-full gap-8"> */}
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-7xl font-bold text-white leading-tight">
              About
              <br />
              Rope Tech Group
            </h1>
          </div>
          <div className="absolute bottom-[7vh] right-0">
            <div className="xl:flex items-center gap-2 mb-6 hidden">
              <span className="text-white text-base font-medium">Company Details</span>
              <img
                src="/about-us/arrow_down_right.svg"
                alt="Company Details Icon"
                className="w-5"
              />
            </div>

            <div className="xl:flex flex-col sm:flex-row gap-4 hidden">
              {/* Business Hours Card */}
              <div className="backdrop-blur-xl rounded-[40px] p-6 border border-white bg-black/10 min-w-[260px]">
                <div className="w-12 h-12 rounded-full bg-brand-lime flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-brand-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" strokeWidth={2} />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6l4 2"
                    />
                  </svg>
                </div>
                <div className="text-white text-sm mb-2">Business Hours</div>
                <div className="text-white font-semibold text-lg">
                  Mon–Fri,
                  <br />
                  8:00 AM – 6:00 PM
                </div>
              </div>

              {/* Location Card */}
              <div className="backdrop-blur-xl rounded-[40px] p-6 border border-white bg-black/10 min-w-[260px]">
                <div className="w-12 h-12 rounded-full bg-brand-lime flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-brand-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="text-white text-sm mb-2">Location</div>
                <div className="text-white font-semibold text-lg">
                  1428 W 8th Ave,
                  <br />
                  Vancouver, BC V6H 1E1
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[url('/about-us/map.jpg')] bg-cover bg-no-repeat">
        {/* About Content Section */}
        <section className="py-16 lg:py-24 pb-10 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex justify-between w-full flex-col xl:flex-row">
              <h3 className="text-[#a5b715] font-bold mb-4 uppercase text-sm tracking-wider">
                ABOUT US
              </h3>
              <div className="max-w-[856px]">
                <p className="text-gray-700 text-base lg:text-[32px] font-semibold leading-relaxed mb-0 lg:mb-12">
                  Rope Tech Group provides safe and efficient high-rise, industrial, and
                  infrastructure services across British Columbia. Our IRATA-certified technicians
                  use advanced rope access methods to reach complex areas with minimal disruption.
                </p>
                <img src="/home/decoration_line_wide.svg" className="my-7 lg:my-14 block" />

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 p-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="self-center">
                      <div className="text-3xl lg:text-[44px] font-semibold text-gray-900 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-base font-semibold uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Large Image Section */}
        <section className="py-4 pb-14 lg:py-12 lg:pb-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <img
                src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=1200"
                alt="Rope access technician at work"
                className="rounded-3xl w-full object-cover aspect-[16/10]"
              />
            </div>
          </div>
        </section>
      </div>
      {/* Principles Section - Dark */}
      <section className="py-16 lg:py-24 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-[#a5b715] font-bold mb-6 uppercase text-sm tracking-wider">
            OUR APPROACH
          </h3>
          <div className="flex flex-col gap-6 lg:grid lg:gap-16 lg:grid-cols-2">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-0 lg:mb-16">
              The Principles
              <br />
              Behind Our Work
            </h2>
            <p className="text-white text-xl">
              We focus on delivering precise, reliable results in complex environments-through
              communication, strong planning, and execution you can trust.
            </p>
          </div>
          <img src="/home/decoration_line_wide.svg" className="block lg:hidden my-14" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {principles.map((principle, index) => (
              <div key={index} className="bg-brand-dark-light rounded-2xl p-8">
                <div className="w-12 h-12 rounded-full bg-brand-lime flex items-center justify-center mb-6">
                  <img src={principle.icon} alt={principle.title} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{principle.title}</h3>
                <p className="text-gray-300 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
          <img src="/home/decoration_line_wide.svg" className="hidden lg:block my-14" />
        </div>
      </section>

      {/* Safety & Certifications Section */}
      <section className="py-16 lg:py-24 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-[#a5b715] font-bold mb-3 uppercase text-sm tracking-wider">
                OUR SAFETY STANDARDS
              </h3>
              <h2 className="text-3xl lg:text-6xl font-bold text-gray-900 mb-6">
                Safety &<br />
                Certifications
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Safety is our top priority. Every team member is IRATA-certified and undergoes
                ongoing training to stay ahead of industry standards. We follow strict safety
                protocols on every job, ensuring safety at every step.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">What sets us apart:</h3>

              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {/* FIXED ICON WRAPPER */}
                    <span className="flex-shrink-0 w-4 h-4 mt-1">
                      <img src="/green_check.svg" alt="check" />
                    </span>

                    {/* TEXT */}
                    <span className="text-gray-700 leading-snug">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-[80px] lg:mt-[120px]">
          <CTASection />
        </div>
      </section>

      {/* Our Work Section - Dark */}
      <section className="py-16 lg:py-24 bg-brand-dark relative overflow-hidden">
        <h3 className="text-[#a5b715] font-bold mb-3 uppercase text-sm tracking-wider text-center">
          OUR WORK
        </h3>
        <h2 className="text-3xl lg:text-5xl font-bold text-white text-center mb-12 lg:mb-16">
          Our Work in Real Conditions
        </h2>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView="auto"
            centeredSlides
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-white/40",
              bulletActiveClass: "swiper-pagination-bullet-active !bg-brand-lime",
            }}
            className="!pb-12"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="!w-[80vw] max-w-[320px]">
                <div className="relative overflow-hidden rounded-2xl aspect-[9/14]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:block relative">
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
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="!w-[60vw] max-w-[720px]">
                <div className="relative overflow-hidden rounded-3xl aspect-[16/9]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
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
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default AboutUs;
