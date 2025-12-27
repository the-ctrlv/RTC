import { CTASection } from "@/components/common/CTASection";

const Projects = () => {
  const projects = [
    {
      title: "Cardero",
      location: "1500 Cardero St, Vancouver, BC",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
      tags: ["Rope Access Building", "Glazed Application"],
    },
    {
      title: "Jim Pattison Toyota",
      location: "Jim Pattison Toyota Downtown, Vancouver, BC",
      image: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?q=80&w=800",
      tags: ["Rope Access Building"],
    },
    {
      title: "400 West Georgia",
      location: "400 West Georgia, Vancouver, BC",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800",
      tags: ["Glazed Replacement", "Rope Access Building"],
    },
    {
      title: "Keltic Place",
      location: "1889 Alberni St, Vancouver, BC",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800",
      tags: ["Concrete Replacement", "Glazed Application"],
    },
    {
      title: "Park Towers",
      location: "Minoru Boulevard, Richmond, BC",
      image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=800",
      tags: ["Water Damage Remediation", "Concrete Repairs", "Painting", "Membrane Replacement"],
    },
    {
      title: "Business Center, Langley",
      location: "Langley Way, BC, Langley, BC",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
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
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
      tags: ["Rope Access High-Rise Inspection"],
    },
    {
      title: "401 W Georgia Street",
      location: "401 W Georgia St, Vancouver, BC",
      image: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?q=80&w=800",
      tags: ["Rope Access Deep Clean, High-Rise Facade"],
    },
    {
      title: "The Grande",
      location: "The Grande, Coal Harbour, North Matheson Tkwy, Vancouver, BC",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800",
      tags: ["Rope Access Inspection", "Window Application"],
    },
    {
      title: "River Green",
      location: "River Green, Richmond, BC, 5077 Boundary Way",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800",
      tags: ["Glass Replacement", "Window Application"],
    },
    {
      title: "Four Seasons Resort",
      location: "Four Seasons Resort, Whistler, BC, 4591 Blackcomb Way",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800",
      tags: ["High Peak Gutter Instalation"],
    },
    {
      title: "Soleil",
      location: "5455 11th Street, Delta, BC",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=800",
      tags: ["Rope Access Membrane Application"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-dark text-white pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Our Projects</h1>
          <img src="/decoration_line.svg" alt="Divider" className="h-[14px] w-auto" />
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-12 lg:pt-0 pt-0 bg-[#2d2d2d]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-12">
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
                      <img src="/map_pin.svg" alt="Map Pin" className="w-6 h-auto" />
                      <div>
                        <div className="font-semibold text-base leading-tight">
                          {project.location}
                        </div>
                        <div className="text-white text-sm mt-0.5">{project.location}</div>
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
