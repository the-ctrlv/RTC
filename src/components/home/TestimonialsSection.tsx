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
    text: "Working with Rope Tech Group has been exceptional. Their professionalism and expertise in rope access solutions made our project seamless and cost-effective.",
    author: "Salvatore Tirabassi",
    role: "CFO ProAnalytics",
    company: "BENZINGA",
    avatar: "/home/avatar.png",
    sponsor: "/home/sponsor.svg",
  },
  {
    id: 2,
    text: "Working with Rope Tech Group has been exceptional. Their professionalism and expertise in rope access solutions made our project seamless and cost-effective.",
    author: "John Anderson",
    role: "Project Manager",
    company: "BUILDCO",
    avatar: "/home/avatar.png",
    sponsor: "/home/sponsor.svg",
  },
  {
    id: 3,
    text: "The team at RTC provided innovative solutions for our building maintenance needs. Highly recommend their services for any high-rise projects.",
    author: "Sarah Mitchell",
    role: "Operations Director",
    company: "SKYTECH",
    avatar: "/home/avatar.png",
    sponsor: "/home/sponsor.svg",
  },
  {
    id: 4,
    text: "The team at RTC provided innovative solutions for our building maintenance needs. Highly recommend their services for any high-rise projects.",
    author: "Sarah Mitchell",
    role: "Operations Director",
    company: "SKYTECH",
    avatar: "/home/avatar.png",
    sponsor: "/home/sponsor.svg",
  },
];

const TestimonialsSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h3 className="text-[#c3d533] font-bold mb-3 uppercase text-xs sm:text-sm tracking-wider">
            TESTIMONIALS
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-20">
            Hear From Our Clients
          </h2>
        </div>
      </div>

      <div className="cursor-pointer user-select-none px-[16px] py-6">
        <Swiper
          modules={[Pagination]}
          pagination={{
            type: "bullets",
            clickable: true,
            enabled: true,
          }}
          spaceBetween={20}
          centeredSlides
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
                slide.style.transform = "scale(0.65)";
                slide.style.opacity = "0.5";
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
                slide.style.transition = "transform 0.3s ease, opacity 0.5s ease";
                // slide.style.width = "100%";
              } else {
                slide.style.transform = "scale(0.85)";
                slide.style.opacity = "0.5";
                slide.style.transition = "transform 0.3s ease, opacity 0.5s ease";
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
                <img src="/home/quotes.svg" className="w-[22px] mb-10 block" />

                {/* Testimonial Text */}
                <p className="text-gray-900 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 lg:mb-12">
                  {testimonial.text}
                </p>

                {/* Divider Line */}
                <div className="w-full h-px bg-black mb-6" />

                {/* Author Info */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-sm sm:text-base text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>

                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.sponsor}
                      alt={testimonial.company}
                      className="h-4.5 w-auto hidden lg:block"
                    />
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
      <div className="pt-[80px] lg:pt-[120px] pb-[20px]">
        <CTASection />
      </div>
    </section>
  );
};

export default TestimonialsSection;
