import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    text: "Our expertise in working-at-heights and confined space access solutions, as well as our specialization in the Infrastructure, Industrial, and Energy sectors, allows us to provide innovative solutions tailored to our clients' specific needs. Our expertise in working-at-heights and confined space access solutions, as well as our specialization in the Infrastructure, Industrial, and Energy sectors, allows us to provide innovative solutions tailored to our clients' specific needs.",
    author: "Salvatore Tirabassi",
    role: "CFO ProAnalytics",
    company: "BENZINGA",
    avatar: "/api/placeholder/64/64",
  },
  {
    id: 2,
    text: "Working with Rope Tech Group has been exceptional. Their professionalism and expertise in rope access solutions made our project seamless and cost-effective.",
    author: "John Anderson",
    role: "Project Manager",
    company: "BUILDCO",
    avatar: "/api/placeholder/64/64",
  },
  {
    id: 3,
    text: "The team at RTC provided innovative solutions for our building maintenance needs. Highly recommend their services for any high-rise projects.",
    author: "Sarah Mitchell",
    role: "Operations Director",
    company: "SKYTECH",
    avatar: "/api/placeholder/64/64",
  },
];

const TestimonialsSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h3 className="text-brand-lime font-bold mb-3 uppercase text-xs sm:text-sm tracking-wider">
            TESTIMONIALS
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Hear From Our Clients
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-gray-300",
              bulletActiveClass: "swiper-pagination-bullet-active !bg-gray-900",
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="testimonials-swiper pb-14"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white border-2 border-gray-900 rounded-3xl py-8 px-6 sm:py-10 sm:px-8 lg:py-12 lg:px-10 relative">
                  {/* Quote Icon */}
                  <div className="text-6xl sm:text-7xl lg:text-8xl text-gray-900 font-serif leading-none mb-6 sm:mb-8">
                    "
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-900 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 lg:mb-12">
                    {testimonial.text}
                  </p>

                  {/* Divider Line */}
                  <div className="w-full h-px bg-gray-300 mb-6 sm:mb-8"></div>

                  {/* Author Info */}
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
                      <div className="text-xs sm:text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
