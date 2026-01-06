import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import { Button } from "../ui/button";
import { Pagination } from "swiper/modules";
import { CTASection } from "../common/CTASection";

const testimonials = [
  {
    id: 1,
    text: "We have worked with this rope access team on multiple projects involving concrete repairs, coatings, membrane applications, and crack injection. Their crew consistently delivers high-quality workmanship and adapts well to complex site conditions. Reliable, knowledgeable, and safety focused — a great partner on challenging projects.",
    author: "Dan Miller",
    role: "Norsco Construction LTD",
    rating: 5,
    avatar: "/slider/miller.jpeg",
    sponsor: "/home/sponsor.svg",
    company: "Norsco Construction LTD",
  },
  {
    id: 2,
    text: "Very professional rope access company. The team worked safely, stayed on schedule, and delivered quality results.",
    author: "Steven Danzing",
    role: "Metalife LTD",
    rating: 5,
    avatar: null,
    sponsor: "/home/sponsor.svg",
    company: "Metalife LTD",
  },
  {
    id: 3,
    text: "We partnered with this company on several glass replacement projects where access was extremely limited. Their rope access technicians made complex installations possible without delays. Excellent coordination, strong safety practices, and great results.",
    author: "Merle Beck",
    role: "Action Glass Inc.",
    rating: 4.5,
    avatar: "/slider/beck.jpeg",
    sponsor: "/home/sponsor.svg",
    company: "Action Glass Inc.",
  },
  {
    id: 4,
    text: "We have collaborated on many high-rise glass replacement and installation projects across the Lower Mainland. Their rope access support allowed us to complete work in very hard-to-reach areas, including cladding assistance. Skilled technicians, smooth coordination, and professional execution every time.",
    author: "Sergii Popkov",
    role: "High Rise Glass LTD",
    rating: 5,
    avatar: "/slider/popkov.jpeg",
    sponsor: "/home/sponsor.svg",
    company: "High Rise Glass LTD",
  },
  {
    id: 5,
    text: "Professional rope access team. Work was completed safely, on time, and to a high standard.",
    author: "Dennis Lesik",
    role: "Siber Facade Group LTD",
    rating: 5,
    avatar: "/slider/lesik.jpeg",
    sponsor: "/home/sponsor.svg",
    company: "Siber Facade Group LTD",
  },
  {
    id: 6,
    text: "Strong rope access glazing support on multiple projects. Their technicians were experienced, efficient, and integrated well with our installation crews. A reliable partner for complex glazing work at height.",
    author: "Pavel Sokolov",
    role: "Altitude Installations LTD",
    rating: 4.2,
    avatar: "/slider/sokolov.jpeg",
    sponsor: "/home/sponsor.svg",
    company: "Altitude Installations LTD",
  },
  {
    id: 7,
    text: "We worked with this company on a large project involving the installation of a heat trace cable system on our building. The work was completed safely, professionally, and with minimal disruption to operations. Excellent planning, execution, and communication throughout the project.",
    author: "Darren Boyd",
    role: "Four Seasons Resort Whistler",
    rating: 5,
    avatar: "/slider/boyd.jpeg",
    sponsor: "/home/sponsor.svg",
    company: "Four Seasons Resort Whistler",
  },
  {
    id: 8,
    text: "We engaged this team for several industrial rope access and construction-related projects. Their ability to safely access difficult areas and deliver quality results made them a valuable contractor on our sites. Professional, responsive, and safety driven.",
    author: "Stan Phillips",
    role: "Pomerleau LTD",
    rating: 4.5,
    avatar: "/slider/phillips.jpeg",
    sponsor: "/home/sponsor.svg",
    company: "Pomerleau LTD",
  },
  {
    id: 9,
    text: "They assisted us with high-rise inspections, window system support, and water leak investigations. Their rope access approach allowed for thorough assessments without invasive methods. Clear reporting, strong technical knowledge, and professional service.",
    author: "James Payette",
    role: "Tribe Management Inc.",
    rating: 5,
    avatar: "/slider/payette.jpeg",
    sponsor: "/home/sponsor.svg",
    company: "Tribe Management Inc.",
  },
];

const TestimonialsSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-16 lg:py-24 xl:py-[150px] bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-14">
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-[#c3d533] font-bold mb-3 uppercase text-base tracking-wider">
            TESTIMONIALS
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-20">
            Hear From Our Clients
          </h3>
        </div>
      </div>

      <div className="cursor-pointer user-select-none py-6 lg:mb-10">
        <Swiper
          modules={[Pagination]}
          pagination={{
            type: "bullets",
            clickable: true,
            enabled: true,
          }}
          spaceBetween={0}
          centeredSlides
          slidesPerView={1.3}
          initialSlide={0}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            768: {
              slidesPerView: 1.5,
              initialSlide: 0,
            },
            1024: {
              slidesPerView: 2.5,
              initialSlide: 1,
              pagination: {
                type: "bullets",
                clickable: true,
                enabled: false,
              },
            },
          }}
          onSlideChange={(swiper) => {
            // Add active class animation
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
            // Initialize with active slide scaled
            const slides = swiper.slides;
            slides.forEach((slide, index) => {
              if (index === swiper.activeIndex) {
                slide.style.transform = "scale(1)";
                slide.style.opacity = "1";
                slide.style.transition =
                  "transform 0.3s ease, opacity 0.5s ease";
                // slide.style.width = "100%";
              } else {
                slide.style.transform = "scale(0.85)";
                slide.style.opacity = "0.5";
                slide.style.transition =
                  "transform 0.3s ease, opacity 0.5s ease";
              }
            });
          }}
          className="testimonials-swiper pb-14"
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide
              className="p-5 border border-black rounded-3xl"
              key={testimonial.id}
              onClick={() => swiperRef.current?.slideTo(idx)}
            >
              <div className="relative">
                {/* Quote Icon */}
                <img
                  src="/home/quotes.svg"
                  alt="Quote mark"
                  className="w-[32px] mb-10 block"
                />

                {/* Testimonial Text */}
                <p className="text-gray-900 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 lg:mb-12">
                  {testimonial.text}
                </p>

                {/* Divider Line */}
                <div className="w-full h-px bg-black mb-6" />

                {/* Author Info */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-auto-12 sm:w-14 sm:h-14 overflow-hidden flex-shrink-0 flex items-center justify-center">
                      {testimonial.avatar && (
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-20 h-auto object-contain"
                        />
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-sm sm:text-base text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex-shrink-0 flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const isFull = star <= testimonial.rating;
                      const isHalf =
                        star === Math.ceil(testimonial.rating) &&
                        testimonial.rating % 1 !== 0;

                      return (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-4 h-4 sm:w-5 sm:h-5"
                        >
                          <defs>
                            <linearGradient
                              id={`half-${testimonial.id}-${star}`}
                            >
                              <stop offset="50%" stopColor="#FCD34D" />
                              <stop offset="50%" stopColor="#E5E7EB" />
                            </linearGradient>
                          </defs>
                          <path
                            fill={
                              isFull
                                ? "#FCD34D"
                                : isHalf
                                  ? `url(#half-${testimonial.id}-${star})`
                                  : "#E5E7EB"
                            }
                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                          />
                        </svg>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="hidden lg:flex justify-between absolute z-20 w-full right-0 lg:w-[50%] top-[50%] lg:right-[25%]">
            <Button
              variant={"rounded"}
              className="flex justify-center items-center float-start w-16 h-16 bg-[#f5f5f5] border-black"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-arrow-right !w-6 !h-6 text-black rotate-180"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
            <Button
              variant={"rounded"}
              className="flex justify-center items-center float-start w-16 h-16 bg-[#f5f5f5] border-black"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-arrow-right !w-6 !h-6 text-black"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </div>
        </Swiper>
      </div>
      <div className="pt-[80px] lg:pt-[100px] pb-[20px] xl:px-14">
        <CTASection option={2} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
