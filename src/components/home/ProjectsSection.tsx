import { useRef } from "react";
import LocaleLink from "@/components/LocaleLink";
import { MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import {
  HOME_PROJECT_IDS,
  translateProjectTag,
  useProjects,
} from "@/lib/projects";

import "swiper/css";
import "swiper/css/pagination";

const ProjectsSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const { t } = useTranslation();
  const projects = useProjects(HOME_PROJECT_IDS);

  return (
    <section className="py-16 sm:py-20 lg:py-24 xl:py-[150px] bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-14">
        <div>
          <h3 className="text-[#D9F043] font-bold mb-4 uppercase text-base tracking-wider">
            {t("projectsSection.label")}
          </h3>
          <div className="flex flex-col items-start md:flex-row md:items-center w-full gap-7 relative mb-[70px]">
            <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-bold text-white leading-tight whitespace-nowrap">
              {t("projectsSection.title")}
            </h2>
            <div className="flex-grow relative">
              <img
                src="/home/decoration_line_wide.svg"
                alt={t("aria.decorativeLine")}
                className="block flex-grow"
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:grid lg:grid-cols-2 gap-3 mb-20">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-[40px] cursor-pointer aspect-square"
            >
              <img
                src={project.image}
                alt={t("aria.projectImageAlt", { title: project.title })}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 right-0">
                <div className="flex items-center gap-2.5 text-white backdrop-blur-md py-5 px-10 border-b border-brand-lime">
                  <img
                    src="/map_pin.svg"
                    alt={t("aria.locationIcon")}
                    className="w-6 h-auto text-[#c3d533]"
                  />
                  <div>
                    <div className="font-semibold text-base leading-tight">
                      {project.location}
                    </div>
                    <div className="text-white text-sm mt-0.5">
                      {project.subtitle}
                    </div>
                  </div>
                </div>
                <div className="bg-brand-dark-light p-6 px-10 pb-10">
                  <h4 className="text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-transparent rounded-full text-sm text-white border border-white/40"
                      >
                        {translateProjectTag(t, tag)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:hidden mb-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.15}
          centeredSlides
          className="projects-swiper pb-10"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div
                className="
                    group relative
                    min-h-[446px] max-h-[80vh]
                    rounded-3xl overflow-hidden cursor-pointer
                    bg-cover bg-center
                  "
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute bottom-0 left-0 right-0">
                  <div className="bg-black/20 backdrop-blur-md px-4 pt-4 pb-3 border-b border-brand-lime">
                    <div className="flex gap-2 text-white">
                      <MapPin className="w-4 h-4 text-[#c3d533] mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold text-sm">
                          {project.location}
                        </div>
                        <div className="text-gray-300 text-xs">
                          {project.subtitle}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-brand-dark-light p-4">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 max-h-[96px] overflow-hidden">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 text-xs text-white border border-white/40 rounded-full"
                        >
                          {translateProjectTag(t, tag)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="block text-center container px-4 sm:px-6 lg:px-8 xl:px-14 mx-auto">
        <LocaleLink to="/projects">
          <Button className="bg-brand-lime hover:bg-brand-lime/90 text-gray-900 lg:max-h-[50px] max-w-[200px] font-semibold px-8 sm:px-10 py-5 xl:py-6 sm:py-6 text-base sm:text-lg w-full sm:w-auto">
            {t("common.viewAllProjects")}
          </Button>
        </LocaleLink>
      </div>
    </section>
  );
};

export default ProjectsSection;
