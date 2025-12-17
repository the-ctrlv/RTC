import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Hear From Our Clients
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-12 rounded-lg shadow-lg relative">
            <div className="text-6xl text-gray-300 absolute top-8 left-8">
              "
            </div>
            <div className="text-6xl text-gray-300 absolute bottom-8 right-8">
              "
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10">
              Working with Rope Tech Group has been an absolute pleasure! From
              the initial consultation to project completion, their team
              demonstrated exceptional professionalism and expertise. The rope
              access solutions they provided were not only cost-effective but
              also completed ahead of schedule. I highly recommend RTC for any
              building maintenance needs!
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="font-bold">John Anderson</div>
                  <div className="text-sm text-gray-600">Project Manager</div>
                </div>
              </div>
              <div className="font-bold text-xl">BENZIBOA</div>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
