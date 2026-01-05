import ContactSection from "@/components/home/ContactSection";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SEO from "@/components/SEO";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import missonIcon from "../../public/about-us/mission.svg";
import purposeIcon from "../../public/about-us/purpose.svg";
import visionIcon from "../../public/about-us/vision.svg";
import { CTASection } from "@/components/common/CTASection";

const AboutUs = () => {
  const stats = [
    { value: "95%", label: "SUCCESSFUL PROJECTS" },
    { value: "500+", label: "Completed Jobs" },
    { value: "15+", label: "YEARS EXPERIENCE" },
    { value: "100%", label: "SAFETY FOCUS" },
  ];

  const principles = [
    {
      title: "Mission",
      description:
        "To deliver precise, reliable rope access solutions that solve complex challenges efficiently.",
      icon: missonIcon,
    },
    {
      title: "Vision",
      description:
        "To be a trusted long-term partner for high-rise and industrial maintenance projects.",
      icon: purposeIcon,
    },
    {
      title: "Purpose",
      description:
        "To help clients extend the life of their assets through smart, well-executed access solutions.",
      icon: visionIcon,
    },
  ];

  const certifications = [
    "IRATA-certified rope access technicians",
    "Regular safety and skills training",
    "Full equipment inspection, logging, and maintenance",
    "Site-specific risk assessments and rescue planning",
    "Compliance with regional workplace and industry regulations",
  ];

  const projects = [
    {
      image: "/slider/building/1.jpg",
      title: "Cardero",
    },
    {
      image: "/slider/building/2.jpg",
      title: "Jim Pattison Toyota",
    },
    {
      image: "/slider/building/3.jpg",
      title: "400 West Georgia",
    },
    {
      image: "/slider/building/4.jpg",
      title: "Keltic Place",
    },
    {
      image: "/slider/building/5.jpg",
      title: "Park Towers",
    },
    {
      image: "/slider/building/6.jpg",
      title: "Business Center, Langley",
    },
    {
      image: "/slider/building/7.jpg",
      title: "Bayshore Gardens",
    },
    {
      image: "/slider/building/8.jpg",
      title: "401 W Georgia Street",
    },
    {
      image: "/slider/building/9.jpg",
      title: "The Grande",
    },
    {
      image: "/slider/building/10.jpg",
      title: "River Green",
    },
    {
      image: "/slider/building/11.jpg",
      title: "Four Seasons Resort",
    },
    {
      image: "/slider/building/12.jpg",
      title: "Soleil",
    },
    {
      image: "/slider/building/13.jpg",
      title: "The Erickson",
    },
    {
      image: "/slider/building/14.jpg",
      title: "The Douglas",
    },
    {
      image: "/slider/building/15.jpg",
      title: "Woodwards",
    },
    {
      image: "/slider/building/16.jpg",
      title: "Vancouver House",
    },
    {
      image: "/slider/industrial/1.jpg",
      title: "LNG Canada",
    },
    {
      image: "/slider/industrial/2.jpg",
      title: "Teck Resources",
    },
    {
      image: "/slider/industrial/3.jpg",
      title: "Woodfibre LNG",
    },
    {
      image: "/slider/industrial/4.jpg",
      title: "Imperial Oil",
    },
    {
      image: "/slider/industrial/5.jpg",
      title: "Suncor Energy",
    },
    {
      image: "/slider/industrial/6.jpg",
      title: "Syncrude Canada",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="About Us"
        description="Learn about Rope Tech Group - Vancouver's trusted rope access specialists. Expert team, safety-first approach, and proven track record in industrial and building services across Canada."
        keywords="about Rope Tech Group, rope access company, Vancouver specialists, IRATA team, industrial access experts, safety record"
      />
      {/* Hero Section */}
      <section className="relative bg-cover bg-[position:15%] lg:bg-center bg-[url('/about-us/hero.jpg')]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-end lg:items-center pb-20 lg:pb-0 min-h-[40vh] lg:min-h-[70vh]">
          {/* <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between h-full gap-8"> */}
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              About
              <br />
              Rope Tech Group
            </h1>
          </div>
          <div className="absolute bottom-[7vh] right-0">
            <div className="xl:flex items-center gap-2 mb-6 hidden">
              <span className="text-white text-base font-medium">
                Company Details
              </span>
              <img
                src="/about-us/arrow_down_right.svg"
                alt="Decorative arrow icon"
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
                <div className="text-white text-[16px] mb-2">
                  Business Hours
                </div>
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
                <div className="text-white text-[16px] mb-2">Location</div>
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
      <div className="bg-[url('/about-us/map.jpg')] bg-cover bg-no-repeat py-[80px] lg:py-[140px]">
        {/* About Content Section */}
        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex justify-between w-full flex-col xl:flex-row">
              <h2 className="text-[#a5b715] font-bold mb-[24px] lg:mb-0 uppercase text-[16px] tracking-wider">
                ABOUT US
              </h2>
              <div className="max-w-[872px]">
                <p className="text-[#292929] text-[16px] lg:text-[24px] font-semibold leading-relaxed">
                  Since 2013, Rope Tech Group has provided professional rope
                  access and high-rise maintenance services across British
                  Columbia. Based in Vancouver, we work on residential,
                  commercial, industrial, and infrastructure projects.
                  <br />
                  <br />
                  Our certified technicians specialize in façade maintenance,
                  concrete repairs, waterproofing, glazing, inspections, bridge
                  work, industrial facilities, rock scaling, and support
                  services for the oil and gas sector.
                </p>
                <img
                  src="/home/decoration_line_wide.svg"
                  alt="Decorative line element"
                  className="my-[32px] lg:my-[54px] block"
                />

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 p-4 pt-0">
                  {stats.map((stat, index) => (
                    <div key={index} className="self-center">
                      <div className="text-[44px] font-semibold text-gray-900 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-[16px] font-semibold uppercase tracking-wide max-w-[100px]">
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
        <section className="mt-[80px] lg:mt-[120px]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-14">
            <div className="mx-auto">
              <video
                src="https://pkdu5dfj3jz0ripz.public.blob.vercel-storage.com/about.mp4"
                controls
                loop
                playsInline
                className="rounded-3xl w-full object-cover aspect-[16/10]"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Principles Section - Dark */}
      <section className="py-[80px] lg:py-[140px] bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-14">
          <h2 className="text-[#a5b715] font-bold mb-6 uppercase text-[16px] tracking-wider">
            OUR APPROACH
          </h2>
          <div className="flex flex-col gap-6 lg:grid lg:gap-16 lg:grid-cols-2">
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-0 lg:mb-16">
              The Principles
              <br />
              Behind Our Work
            </h3>
            <p className="text-white text-[18px]">
              We focus on safety, efficiency, and minimal disruption, using
              proven rope access techniques to deliver reliable results at
              height and in hard-to-reach locations.
            </p>
          </div>
          <img
            src="/home/decoration_line_wide.svg"
            alt="Decorative line element"
            className="block lg:hidden my-14"
          />

          <div className="grid lg:grid-cols-3 gap-[8px]">
            {principles.map((principle, index) => (
              <div key={index} className="bg-brand-dark-light rounded-2xl p-8">
                <div className="w-12 h-12 rounded-full bg-brand-lime flex items-center justify-center mb-14">
                  <img src={principle.icon} alt={`${principle.title} icon`} />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">
                  {principle.title}
                </h4>
                <p className="text-white leading-relaxed font-normal">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
          <img
            src="/home/decoration_line_wide.svg"
            alt="Decorative line element"
            className="hidden lg:block my-14"
          />
        </div>
      </section>

      {/* Safety & Certifications Section */}
      <section className="py-[80px] lg:py-[140px] bg-[#f5f5f5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-14">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#a5b715] font-bold mb-3 uppercase text-[16px] tracking-wider">
                OUR SAFETY STANDARDS
              </h2>
              <h3 className="text-[34px] lg:text-6xl font-bold text-gray-900 mb-6">
                Safety &<br />
                Certifications
              </h3>
              <p className="text-gray-700 leading-relaxed text-[18px]">
                Safety is the foundation of every project we take on. Our team
                works in accordance with internationally recognized rope access
                standards and follows established safety procedures on every
                site.
              </p>
            </div>

            <div className="bg-white px-6 py-7 lg:px-10 lg:py-11 rounded-3xl">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                What sets us apart:
              </h4>

              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {/* FIXED ICON WRAPPER */}
                    <span className="flex-shrink-0 w-4 h-4 mt-1">
                      <img src="/green_check.svg" alt="Checkmark icon" />
                    </span>

                    {/* TEXT */}
                    <span className="text-[#404040] leading-snug font-medium">
                      {cert}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-[60px] lg:mt-[80px]">
          <CTASection />
        </div>
      </section>

      {/* Our Work Section - Dark */}
      <section className="py-[80px] lg:py-[140px] bg-brand-dark relative overflow-hidden">
        <h2 className="text-[#a5b715] font-bold mb-3 uppercase text-[16px] tracking-wider text-center">
          OUR WORK
        </h2>
        <h3 className="text-[34px] lg:text-[48px] font-bold text-white text-center mb-12 lg:mb-16">
          Our Work in Real Conditions
        </h3>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView="auto"
            centeredSlides
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-white/40",
              bulletActiveClass:
                "swiper-pagination-bullet-active !bg-brand-lime",
            }}
            onSlideChange={(swiper) => {
              const slides = swiper.slides;
              slides.forEach((slide, index) => {
                if (index === swiper.activeIndex) {
                  slide.style.transform = "scale(1)";
                  slide.style.opacity = "1";
                } else {
                  slide.style.transform = "scale(0.85)";
                  slide.style.opacity = "0.8";
                }
              });
            }}
            onInit={(swiper) => {
              const slides = swiper.slides;
              slides.forEach((slide, index) => {
                if (index === swiper.activeIndex) {
                  slide.style.transform = "scale(1)";
                  slide.style.opacity = "1";
                  slide.style.transition =
                    "transform 0.3s ease, opacity 0.5s ease";
                } else {
                  slide.style.transform = "scale(0.85)";
                  slide.style.opacity = "0.5";
                  slide.style.transition =
                    "transform 0.3s ease, opacity 0.5s ease";
                }
              });
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="!w-[80vw] max-w-[320px]">
                <div className="relative overflow-hidden rounded-2xl aspect-[9/14]">
                  <img
                    src={project.image}
                    alt={`${project.title} - completed rope access project showcasing our work`}
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
            slidesPerView={3}
            centeredSlides
            initialSlide={1}
            spaceBetween={0}
            navigation={{
              nextEl: ".our-work-next",
              prevEl: ".our-work-prev",
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-white/40",
              bulletActiveClass:
                "swiper-pagination-bullet-active !bg-brand-lime",
            }}
            onSlideChange={(swiper) => {
              const slides = swiper.slides;
              slides.forEach((slide, index) => {
                if (index === swiper.activeIndex) {
                  slide.style.transform = "scale(1)";
                  slide.style.opacity = "1";
                } else {
                  slide.style.transform = "scale(0.85)";
                  slide.style.opacity = "0.8";
                }
              });
            }}
            onInit={(swiper) => {
              const slides = swiper.slides;
              slides.forEach((slide, index) => {
                if (index === swiper.activeIndex) {
                  slide.style.transform = "scale(1)";
                  slide.style.opacity = "1";
                  slide.style.transition =
                    "transform 0.3s ease, opacity 0.5s ease";
                } else {
                  slide.style.transform = "scale(0.85)";
                  slide.style.opacity = "0.5";
                  slide.style.transition =
                    "transform 0.3s ease, opacity 0.5s ease";
                }
              });
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="max-w-[720px]">
                <div className="relative overflow-hidden rounded-3xl aspect-[3/3] min-h-[450px]">
                  <img
                    src={project.image}
                    alt={`${project.title} - completed rope access project showcasing our work`}
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
              aria-label="Next slide"
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
