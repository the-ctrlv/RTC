import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <Link to="/contact">
          <div className="bg-lime-400 hover:bg-lime-500 p-12 rounded-lg flex items-center justify-between cursor-pointer transition-colors group max-w-4xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-black mb-2">
                Ready to Work With Us?
              </h2>
            </div>
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight className="w-8 h-8 text-lime-400" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
