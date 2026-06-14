import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import { Button } from "../ui/button";
import { Pagination } from "swiper/modules";
import { CTASection } from "../common/CTASection";
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    id: 1,
    key: "t1",
    rating: 5,
    avatar: "/slider/miller.jpeg",
    sponsor: "/home/sponsor.svg",
  },
  {
    id: 2,
    key: "t2",
    rating: 5,
    avatar: null,
    sponsor: "/home/sponsor.svg",
  },
  {
    id: 3,
    key: "t3",
    rating: 4.5,
    avatar: "/slider/beck.jpeg",
    sponsor: "/home/sponsor.svg",
  },
  {
    id: 4,
    key: "t4",
    rating: 5,
    avatar: "/slider/popkov.jpeg",
    sponsor: "/home/sponsor.svg",
  },
  {
    id: 5,
    key: "t5",
    rating: 5,
    avatar: "/slider/lesik.jpeg",
    sponsor: "/home/sponsor.svg",
  },
  {
    id: 6,
    key: "t6",
    rating: 4.2,
    avatar: "/slider/sokolov.jpeg",
    sponsor: "/home/sponsor.svg",
  },
  {
    id: 7,
    key: "t7",
    rating: 5,
    avatar: "/slider/boyd.jpeg",
    sponsor: "/home/sponsor.svg",
  },
  {
    id: 8,
    key: "t8",
    rating: 4.5,
    avatar: "/slider/phillips.jpeg",
    sponsor: "/home/sponsor.svg",
  },
  {
    id: 9,
    key: "t9",
    rating: 5,
    avatar: "/slider/payette.jpeg",
    sponsor: "/home/sponsor.svg",
  },
];

const TestimonialsSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const { t } = useTranslation();

  return (
    <section className="py-16 lg:py-24 xl:py-[150px] bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-14">
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-[#c3d533] font-bold mb-3 uppercase text-base tracking-wider">
            {t("testimonials.label")}
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-20">
            {t("testimonials.title")}
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
          className="testimonials-swiper pb-14"
        >
          {testimonials.map((testimonial, idx) => {
            const author = t(`testimonials.${testimonial.key}Author`);
            const role = t(`testimonials.${testimonial.key}Role`);

            return (
              <SwiperSlide
                className="p-5 border border-black rounded-3xl"
                key={testimonial.id}
                onClick={() => swiperRef.current?.slideTo(idx)}
              >
                <div className="relative">
                  <img
                    src="/home/quotes.svg"
                    alt={t("aria.quoteMark")}
                    className="w-[32px] mb-10 block"
                  />

                  <p className="text-gray-900 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 lg:mb-12">
                    {t(`testimonials.${testimonial.key}`)}
                  </p>

                  <div className="w-full h-px bg-black mb-6" />

                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-auto-12 sm:w-14 sm:h-14 overflow-hidden flex-shrink-0 flex items-center justify-center">
                        {testimonial.avatar && (
                          <img
                            src={testimonial.avatar}
                            alt={author}
                            className="w-20 h-auto object-contain"
                          />
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-sm sm:text-base text-gray-900">
                          {author}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600">
                          {role}
                        </div>
                      </div>
                    </div>

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
            );
          })}
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
