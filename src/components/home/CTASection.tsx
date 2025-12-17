import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/contact">
          <div className="bg-brand-lime hover:bg-brand-lime/90 p-8 sm:p-10 lg:p-12 rounded-2xl flex items-center justify-between cursor-pointer transition-all group max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Ready to Work
                <br className="hidden sm:block" />
                With Us?
              </h2>
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gray-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 ml-4">
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-brand-lime" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
