import { CheckCircle2, Star, BarChart3 } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: CheckCircle2,
      title: "Expertise",
      description:
        "Our certified rope access and confined space specialists deliver innovative and tailored solutions for complex industrial environments.",
    },
    {
      icon: Star,
      title: "Quality",
      description:
        "We maintain the highest safety and performance standards, delivering reliable results backed by award-winning expertise.",
    },
    {
      icon: BarChart3,
      title: "Cost-effectiveness",
      description:
        "We can lower project costs by over 50% compared to traditional techniques without compromising quality or safety.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-16">
            {/* Left Column - Title */}
            <div>
              <h3 className="text-brand-lime font-bold mb-3 uppercase text-xs sm:text-sm tracking-wider">
                WHY CHOOSE US
              </h3>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Key Benefits of Working With Us
              </h2>
            </div>

            {/* Right Column - Description */}
            <div className="flex items-center">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                We focus on delivering precise, reliable results in complex
                environments—through clear communication, strong planning, and
                execution you can trust.
              </p>
            </div>
          </div>

          {/* Benefits Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-brand-dark-light rounded-2xl p-8 lg:p-10 hover:bg-brand-dark-lighter transition-colors"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-lime rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-gray-900" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
