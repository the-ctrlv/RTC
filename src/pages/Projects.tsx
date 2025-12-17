import { MapPin, ArrowRight } from "lucide-react";

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
      tags: ["Rope Ingress/Egress/Access", "Parkade Coating Repair", "Facade Replacement", "Fire Tank Installation"],
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
      <section className="bg-[#2D2D2D] text-white pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
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
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group cursor-pointer bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-start gap-2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                        <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-bold">{project.title}</div>
                          <div className="text-xs opacity-90">
                            {project.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-brand-lime rounded-3xl p-8 lg:p-12 flex items-center justify-between">
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
                Ready to Discuss
                <br className="hidden sm:block" />
                Your Project?
              </h2>
              <button className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors flex-shrink-0 ml-6">
                <ArrowRight className="text-white w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
