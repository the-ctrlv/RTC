import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  location: string;
  services: string[];
  image: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Cardero",
      location: "Vancouver, British Columbia",
      services: ["Rope Access", "Special Application"],
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
    },
    {
      title: "Cardero",
      location: "Vancouver, British Columbia",
      services: ["Rope Access", "Special Application"],
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800",
    },
    {
      title: "Cardero",
      location: "Vancouver, British Columbia",
      services: ["Rope Access", "Special Application"],
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800",
    },
    {
      title: "Keltic Place",
      location: "West, Point, Vancouver",
      services: ["Rope Access", "Special Application"],
      image:
        "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?q=80&w=800",
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl font-bold text-white">Latest Projects</h2>
            <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <div className="flex gap-2">
                  {project.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs"
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
            <Button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-6 text-lg">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
