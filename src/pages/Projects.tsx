import { CTASection } from "@/components/common/CTASection";
import SEO from "@/components/SEO";

const Projects = () => {
  const projects = [
    {
      title: "Cardero",
      location: "620 Cardero St,Vancouver,BC",
      subtitle: "1550 Alberni St",
      image: "/projects/cardero.jpeg",
      tags: ["Rope Access Glazing", "Sealant Application"],
    },
    {
      title: "Jim Pattison Toyota",
      location: "Jim Pattison Toyota Downtown",
      subtitle: "1290 Burrard St",
      image: "/projects/jim.jpeg",
      tags: ["Rope Access Glazing"],
    },
    {
      title: "400 West Georgia",
      location: "400 West Georgia, Vancouver",
      subtitle: "Downtown Vancouver",
      image: "/projects/400.jpeg",
      tags: ["Sealant Application", "Rope Access Glazing"],
    },
    {
      title: "Keltic Place",
      location: "Keltic Place, Richmond",
      subtitle: "6388 No. 3 Road",
      image: "/projects/keltic.jpeg",
      tags: ["Sunshade Installation", "Sealant Application"],
    },
    {
      title: "Park Towers",
      location: "Minoru Boulevard, Richmond",
      subtitle: "6080 Minoru Blvd",
      image: "/projects/park.jpeg",
      tags: [
        "Water Ingress Investigations",
        "Concrete Repairs",
        "Painting",
        "Liquid Membrane Replacement",
      ],
    },
    {
      title: "Business Center, Langley",
      location: "Langley Twp, BC",
      subtitle: "6000 88 Ave W",
      image: "/projects/business.jpeg",
      tags: [
        "Water Ingress Investigations",
        "Parking Installation",
        "Sealant replacement",
        "Fish Tank Installation",
      ],
    },
    {
      title: "Bayshore Gardens",
      location: "1710 Bayshore Drive, Vancouver",
      subtitle: "Bayshore Gardens",
      image: "/projects/bayshore.jpeg",
      tags: ["Rope Access Glass Replacement"],
    },
    {
      title: "401 W Georgia Street",
      location: "401 W Georgia Street, Vancouver",
      subtitle: "Canada Place Area",
      image: "/projects/401.jpeg",
      tags: ["Rope Access Glass Replacement"],
    },
    {
      title: "The Grande",
      location: "The Grande, Port Moody",
      subtitle: "300 Morrissey Road",
      image: "/projects/grande.jpeg",
      tags: ["Rope Access Glass Replacement", "Sealant Application"],
    },
    {
      title: "River Green",
      location: "River Green, Richmond",
      subtitle: "5177 Bridgehouse Way",
      image: "/projects/river.jpeg",
      tags: ["Glass Replacement", "Sealant Application"],
    },
    {
      title: "Four Seasons Resort",
      location: "Four Seasons Resort, Whistler",
      subtitle: "4591 Blackcomb Way",
      image: "/projects/four.jpeg",
      tags: ["Heat Tape Cable Installation"],
    },
    {
      title: "Soleil",
      location: "Soleil, White Rock",
      subtitle: "1588 Johnston Road",
      image: "/projects/soleil.jpeg",
      tags: ["Rope Access Membrane Application"],
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Our Projects"
        description="View our portfolio of completed rope access projects across Vancouver and Canada. From high-rise buildings to industrial facilities - see our expertise in action."
        keywords="rope access projects, Vancouver projects, building maintenance portfolio, industrial access work, completed projects, case studies"
      />
      {/* Hero Section */}
      <section className="bg-brand-dark text-white pt-[130px] pb-[50px] sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-14">
          <h1 className="text-[36px] lg:text-[64px] font-bold mb-4">
            Our Projects
          </h1>
          <img
            src="/decoration_line.svg"
            alt="Decorative divider"
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
                          {project.subtitle}
                        </div>
                      </div>
                    </div>

                    {/* Project info */}
                    <div className="bg-brand-dark-light p-6 px-6 lg:px-10">
                      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                        {project.title}
                      </h2>

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
