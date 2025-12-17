import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  onClick?: () => void;
}

const CTASection = ({ title, onClick }: CTASectionProps) => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-brand-lime rounded-3xl p-8 lg:p-12 flex items-center justify-between">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
              {title}
            </h2>
            <button
              onClick={onClick}
              className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors flex-shrink-0 ml-6"
            >
              <ArrowRight className="text-white w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
