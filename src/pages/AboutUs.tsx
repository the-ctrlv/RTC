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
import { useTranslation, Trans } from "react-i18next";
import { ABOUT_GALLERY_IDS, useProjects } from "@/lib/projects";

const AboutUs = () => {
  const { t } = useTranslation();
  const companyName = t("common.companyName");
  const stats = [
    { value: t("aboutPage.stat1Value"), label: t("aboutPage.stat1Label") },
    { value: t("aboutPage.stat2Value"), label: t("aboutPage.stat2Label") },
    { value: t("aboutPage.stat3Value"), label: t("aboutPage.stat3Label") },
    { value: t("aboutPage.stat4Value"), label: t("aboutPage.stat4Label") },
  ];

  const principles = [
    {
      title: t("aboutPage.missionTitle"),
      description: t("aboutPage.missionDesc"),
      icon: missonIcon,
    },
    {
      title: t("aboutPage.visionTitle"),
      description: t("aboutPage.visionDesc"),
      icon: purposeIcon,
    },
    {
      title: t("aboutPage.purposeTitle"),
      description: t("aboutPage.purposeDesc"),
      icon: visionIcon,
    },
  ];

  const certifications = (t("aboutPage.certifications", { returnObjects: true }) as string[]) ?? [];

  const projects = useProjects(ABOUT_GALLERY_IDS).map((project) => ({
    image: project.galleryImage ?? project.image,
    title: project.title,
    id: project.id,
  }));

  return (
    <div className="min-h-screen">
      <SEO
        title={t("seo.aboutTitle")}
        description={t("seo.aboutDesc")}
        keywords={t("seo.aboutKeywords")}
      />
      {/* Hero Section */}
      <section className="relative bg-cover bg-[position:15%] lg:bg-center bg-[url('/about-us/hero.jpg')]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-end lg:items-center pb-20 lg:pb-0 min-h-[40vh] lg:min-h-[70vh]">
          {/* <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between h-full gap-8"> */}
          <div className="max-w-2xl text-start lg:-translate-y-[30px]">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight text-start">
              <Trans
                i18nKey="aboutPage.heroTitle"
                values={{ companyName }}
                components={{
                  br: <br />,
                  ltr: <span dir="ltr" className="inline-block" />,
                }}
              />
            </h1>
          </div>
          <div className="absolute bottom-[7vh] end-0 flex flex-col items-end rtl:items-start">
            <div className="xl:flex items-center gap-2 mb-6 hidden">
              <span className="text-white text-base font-medium">
                {t("aboutPage.companyDetails")}
              </span>
              <img
                src="/about-us/arrow_down_right.svg"
                alt="Decorative arrow icon"
                className="w-5 rtl:-scale-x-100"
              />
            </div>

            <div className="xl:flex flex-col sm:flex-row gap-4 hidden">
              {/* Business Hours Card */}
              <div className="backdrop-blur-xl rounded-[40px] p-6 border border-white bg-black/10 w-[260px] shrink-0">
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
                <div className="text-white text-[16px] mb-2">{t("aboutPage.businessHours")}</div>
                <div className="text-white font-semibold text-lg leading-snug">
                  {t("aboutPage.businessHoursValue")}
                </div>
              </div>

              {/* Location Card */}
              <div className="backdrop-blur-xl rounded-[40px] p-6 border border-white bg-black/10 w-[260px] shrink-0">
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
                <div className="text-white text-[16px] mb-2">{t("aboutPage.location")}</div>
                <div className="text-white font-semibold text-lg leading-snug" dir="ltr">
                  {t("aboutPage.locationValue")}
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
                {t("aboutPage.aboutLabel")}
              </h2>
              <div className="max-w-[872px]">
                <p className="text-[#292929] text-[16px] lg:text-[24px] font-semibold leading-relaxed whitespace-pre-line">
                  {t("aboutPage.aboutText", { companyName })}
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
              <div className="rounded-3xl overflow-hidden w-full aspect-[16/10]">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/l1QbdfqiElU?controls=0&rel=0&playsinline=1&cc_load_policy=0&modestbranding=1&showinfo=0&iv_load_policy=3&enablejsapi=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Principles Section - Dark */}
      <section className="py-[80px] lg:py-[140px] bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-14">
          <h2 className="text-[#a5b715] font-bold mb-6 uppercase text-[16px] tracking-wider">
            {t("aboutPage.approachLabel")}
          </h2>
          <div className="flex flex-col gap-6 lg:grid lg:gap-16 lg:grid-cols-2">
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-0 lg:mb-16">
              {t("aboutPage.approachTitle")}
            </h3>
            <p className="text-white text-[18px]">{t("aboutPage.approachDescription")}</p>
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
                <h4 className="text-xl font-bold text-white mb-4">{principle.title}</h4>
                <p className="text-white leading-relaxed font-normal">{principle.description}</p>
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
                {t("aboutPage.safetyLabel")}
              </h2>
              <h3 className="text-[34px] lg:text-6xl font-bold text-gray-900 mb-6">
                {t("aboutPage.safetyTitle")}
              </h3>
              <p className="text-gray-700 leading-relaxed text-[18px]">
                {t("aboutPage.safetyDescription")}
              </p>
            </div>

            <div className="bg-white px-6 py-7 lg:px-10 lg:py-11 rounded-3xl">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                {t("serviceDetail.whatSetsUsApart")}
              </h4>

              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {/* FIXED ICON WRAPPER */}
                    <span className="flex-shrink-0 w-4 h-4 mt-1">
                      <img src="/green_check.svg" alt="Checkmark icon" />
                    </span>

                    {/* TEXT */}
                    <span className="text-[#404040] leading-snug font-medium">{cert}</span>
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
          {t("aboutPage.workLabel")}
        </h2>
        <h3 className="text-[34px] lg:text-[48px] font-bold text-white text-center mb-12 lg:mb-16">
          {t("aboutPage.workTitle")}
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
              bulletActiveClass: "swiper-pagination-bullet-active !bg-brand-lime",
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
                  slide.style.transition = "transform 0.3s ease, opacity 0.5s ease";
                } else {
                  slide.style.transform = "scale(0.85)";
                  slide.style.opacity = "0.5";
                  slide.style.transition = "transform 0.3s ease, opacity 0.5s ease";
                }
              });
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="!w-[80vw] max-w-[320px]">
                <div className="relative overflow-hidden rounded-2xl aspect-[9/14]">
                  <img
                    src={project.image}
                    alt={t("aria.galleryProjectAlt", { title: project.title })}
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
              bulletActiveClass: "swiper-pagination-bullet-active !bg-brand-lime",
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
                  slide.style.transition = "transform 0.3s ease, opacity 0.5s ease";
                } else {
                  slide.style.transform = "scale(0.85)";
                  slide.style.opacity = "0.5";
                  slide.style.transition = "transform 0.3s ease, opacity 0.5s ease";
                }
              });
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="max-w-[720px]">
                <div className="relative overflow-hidden rounded-3xl aspect-[3/3] min-h-[450px]">
                  <img
                    src={project.image}
                    alt={t("aria.galleryProjectAlt", { title: project.title })}
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
