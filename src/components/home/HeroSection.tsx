import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const expertiseCards = [
    {
      title: "Our Services",
      description: "Experts in rope access maintenance for high-rise and hard-to-reach structures.",
      link: "/services",
    },
    {
      title: "Our Projects",
      description: "Explore our completed rope access and building maintenance projects.",
      link: "/projects",
    },
  ];

  return (
    <section className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/home-bg-mob.jpg')] lg:bg-[url('/home-bg.jpg')]">
      {/* Overlay for better text readability on mobile */}
      <div className="absolute inset-0 bg-black/30 lg:bg-black/20"></div>

      {/* Content */}
      <div className="relative container justify-center items-start lg:justify-start mx-auto px-4 sm:px-6 flex flex-col min-h-screen gap-6 sm:gap-8 lg:gap-10 pt-32 sm:pt-[20vh] pb-12">
        {/* Location Badge */}
        <div>
          <div className="inline-flex items-center gap-2 border border-white/80 rounded-full px-4 py-2.5 text-white backdrop-blur-md bg-white/10">
            <img src="/map_pin.svg" alt="Location" className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-xs sm:text-sm font-medium">Based in Vancouver, BC</span>
          </div>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">
          Accessing <br className="lg:hidden" /> the Impossible.
          <br />
          Safely. Efficiently.
        </h1>

        {/* Contact Button - Mobile Only */}
        <div className="lg:hidden mt-2">
          <Link to="/contact">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#c3d533] hover:bg-[#c3d533]/90 text-gray-900 font-semibold px-10 py-6 text-base rounded-sm"
            >
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Expertise Cards - Desktop Only */}
        <div className="hidden lg:block mt-auto">
          <h2 className="text-white text-2xl font-bold mb-8">Checkout Our Expertise</h2>

          <div className="flex gap-6 w-full">
            {expertiseCards.map((card, index) => (
              <Link key={index} to={card.link}>
                <div className="group relative backdrop-blur-lg py-8 px-7 rounded-xl cursor-pointer text-white overflow-hidden w-[343px] h-[172px] bg-white/10 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="absolute bg-[#c3d533] h-full w-2 left-0 top-0 z-10" />
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-white text-xl font-semibold">{card.title}</h3>
                    <div className="w-10 h-10 bg-[#c3d533] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-5 h-5 text-black" />
                    </div>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">{card.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
