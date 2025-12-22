import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { Button } from "../ui/button";

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
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
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

      <div className="relative cursor-pointer user-select-none px-[16px]">
        <Swiper
          modules={[Pagination]}
          pagination={{
            type: "bullets",
            clickable: true,
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
          <div
            className="hidden md:block
              absolute
              inset-x-0
              top-1/2
              -translate-y-1/2
              z-10
              pointer-events-none"
          >
            <div className="flex justify-between px-2">
              <Button
                variant={"rounded"}
                className="flex justify-center items-center float-start w-16 h-16"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <img src="/home/arrow.svg" alt="Arrow Left" className="w-4 h-4 rotate-180" />
              </Button>
              <Button
                variant={"rounded"}
                className="flex justify-center items-center float-end w-16 h-16 rounded-full"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <img src="/home/arrow.svg" alt="Arrow Right" className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
