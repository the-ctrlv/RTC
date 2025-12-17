import { useRef } from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Button } from "@/components/ui/button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface Project {
  title: string;
  location: string;
  address: string;
  services: string[];
  image: string;
}

const ProjectsSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const projects: Project[] = [
    {
      title: "Cardero",
      location: "Cardero St, Vancouver",
      address: "1550 Alberni St",
      services: ["Rope Access Glazing", "Sealant Applications"],
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
    },
    {
      title: "Jim Pattison Toyota",
      location: "Jim Pattison Toyota Downtown",
      address: "1200 Burrard St",
      services: ["Rope Access Glazing"],
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800",
    },
    {
      title: "400 West Georgia",
      location: "400 West Georgia, Vancouver",
      address: "Downtown Vancouver",
      services: ["Glass Installation", "Rope Access System"],
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800",
    },
    {
      title: "Keltic Place",
      location: "Keltic Place, Richmond",
      address: "8388 No. 3 Road",
      services: ["Storefront Installation", "Sealant Applications"],
      image:
        "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?q=80&w=800",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#2D2D2D]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 lg:mb-16">
          <h3 className="text-brand-lime font-bold mb-3 uppercase text-xs sm:text-sm tracking-wider">
            OUR WORK
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Industrial Services
          </h2>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-brand-lime rounded-full flex-shrink-0"></div>
            <div className="flex-1 h-px bg-brand-lime max-w-md"></div>
          </div>
        </div>

        {/* Mobile Swiper - visible on small screens */}
        <div className="lg:hidden mb-10">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-white/50",
              bulletActiveClass:
                "swiper-pagination-bullet-active !bg-brand-lime",
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="projects-swiper pb-12"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="group relative overflow-hidden rounded-3xl cursor-pointer bg-gray-800">
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  </div>

                  {/* Location Badge */}
                  <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-sm px-4 py-3 rounded-xl flex items-start gap-3 max-w-[calc(100%-3rem)]">
                    <MapPin className="w-5 h-5 text-brand-lime flex-shrink-0 mt-0.5" />
                    <div className="text-white">
                      <div className="font-semibold text-base">
                        {project.location}
                      </div>
                      <div className="text-gray-300 text-sm">
                        {project.address}
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <div className="flex flex-wrap gap-2.5">
                      {project.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid - visible on large screens */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer bg-gray-800"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              </div>

              {/* Location Badge */}
              <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg flex items-start gap-2 max-w-[calc(100%-3rem)]">
                <MapPin className="w-4 h-4 text-brand-lime flex-shrink-0 mt-0.5" />
                <div className="text-white text-sm">
                  <div className="font-semibold">{project.location}</div>
                  <div className="text-gray-300">{project.address}</div>
                </div>
              </div>

              {/* Project Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/projects">
            <Button className="bg-brand-lime hover:bg-brand-lime/90 text-gray-900 font-semibold px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
