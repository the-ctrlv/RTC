import { CTASection } from "@/components/common/CTASection";

const Projects = () => {
  const projects = [
    {
      title: "Cardero",
      location: "1500 Cardero St, Vancouver, BC",
      image: "/projects/cardero.jpeg",
      tags: ["Rope Access Building", "Glazed Application"],
    },
    {
      title: "Jim Pattison Toyota",
      location: "Jim Pattison Toyota Downtown, Vancouver, BC",
      image: "/projects/jim.jpeg",
      tags: ["Rope Access Building"],
    },
    {
      title: "400 West Georgia",
      location: "400 West Georgia, Vancouver, BC",
      image: "/projects/400.jpeg",
      tags: ["Glazed Replacement", "Rope Access Building"],
    },
    {
      title: "Keltic Place",
      location: "1889 Alberni St, Vancouver, BC",
      image: "/projects/keltic.jpeg",
      tags: ["Concrete Replacement", "Glazed Application"],
    },
    {
      title: "Park Towers",
      location: "Minoru Boulevard, Richmond, BC",
      image: "/projects/park.jpeg",
      tags: [
        "Water Damage Remediation",
        "Concrete Repairs",
        "Painting",
        "Membrane Replacement",
      ],
    },
    {
      title: "Business Center, Langley",
      location: "Langley Way, BC, Langley, BC",
      image: "/projects/business.jpeg",
      tags: [
        "Rope Ingress/Egress/Access",
        "Parkade Coating Repair",
        "Facade Replacement",
        "Fire Tank Installation",
      ],
    },
    {
      title: "Bayshore Gardens",
      location: "1750 Bayshore Drive, Vancouver, BC",
      image: "/projects/bayshore.jpeg",
      tags: ["Rope Access High-Rise Inspection"],
    },
    {
      title: "401 W Georgia Street",
      location: "401 W Georgia St, Vancouver, BC",
      image: "/projects/401.jpeg",
      tags: ["Rope Access Deep Clean, High-Rise Facade"],
    },
    {
      title: "The Grande",
      location: "The Grande, Coal Harbour, North Matheson Tkwy, Vancouver, BC",
      image: "/projects/grande.jpeg",
      tags: ["Rope Access Inspection", "Window Application"],
    },
    {
      title: "River Green",
      location: "River Green, Richmond, BC, 5077 Boundary Way",
      image: "/projects/river.jpeg",
      tags: ["Glass Replacement", "Window Application"],
    },
    {
      title: "Four Seasons Resort",
      location: "Four Seasons Resort, Whistler, BC, 4591 Blackcomb Way",
      image: "/projects/four.jpeg",
      tags: ["High Peak Gutter Instalation"],
    },
    {
      title: "Soleil",
      location: "5455 11th Street, Delta, BC",
      image: "/projects/soleil.jpeg",
      tags: ["Rope Access Membrane Application"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-dark text-white pt-[130px] pb-[50px] sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-14">
          <h1 className="text-[36px] lg:text-[64px] font-bold mb-4">
            Our Projects
          </h1>
          <img
            src="/decoration_line.svg"
            alt="Divider"
            className="h-[14px] w-auto"
          />
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-12 lg:pt-0 pt-0 bg-[#2d2d2d]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-14">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[12px] mb-12">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[40px] cursor-pointer"
                >
                  {/* IMAGE */}
                  <div className="aspect-square w-full max-h-[177px] sm:max-h-[277px] lg:max-h-none">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-h-[inherit] lg:h-full w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* INFO */}
                  <div
                    className="
                lg:absolute lg:bottom-0 lg:left-0 lg:right-0
                static
              "
                  >
                    {/* Location */}
                    <div className="flex items-center gap-2.5 text-white backdrop-blur-md py-5 px-6 lg:px-10 border-b border-brand-lime bg-black/30">
                      <img
                        src="/map_pin.svg"
                        alt="Map Pin"
                        className="w-6 h-auto"
                      />
                      <div>
                        <div className="font-semibold text-base leading-tight">
                          {project.location}
                        </div>
                        <div className="text-white text-sm mt-0.5">
                          {project.location}
                        </div>
                      </div>
                    </div>

                    {/* Project info */}
                    <div className="bg-brand-dark-light p-6 px-6 lg:px-10">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                        {project.title}
                      </h3>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 rounded-full text-sm text-white border border-white/40"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f5f5] py-[80px] lg:py-[120px]">
        <CTASection />
      </section>
    </div>
  );
};

export default Projects;
