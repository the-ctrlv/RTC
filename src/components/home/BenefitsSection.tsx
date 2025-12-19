import { CheckCircle2, Star, BarChart3 } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "expertise.svg",
      title: "Expertise",
      description:
        "Our certified rope access and confined space specialists deliver innovative and tailored solutions for complex industrial environments.",
    },
    {
      icon: "quality.svg",
      title: "Quality",
      description:
        "We maintain the highest safety and performance standards, delivering reliable results backed by award-winning expertise.",
    },
    {
      icon: "bar.svg",
      title: "Cost-effectiveness",
      description:
        "We can lower project costs by over 50% compared to traditional techniques without compromising quality or safety.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-brand-dark min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-16">
            {/* Left Column - Title */}
            <div>
              <h3 className="text-brand-lime font-bold mb-5 uppercase text-xs sm:text-sm tracking-wider">
                WHY CHOOSE US
              </h3>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Key Benefits of Working With Us
              </h2>
            </div>

            {/* Right Column - Description */}
            <div className="flex items-center">
              <p className="text-white text-base sm:text-lg leading-relaxed">
                We focus on delivering precise, reliable results in complex
                environments—through clear communication, strong planning, and
                execution you can trust.
              </p>
            </div>
            <img
              src="/home/decoration_line.svg"
              alt="Divider"
              className="h-[18px] w-auto lg:hidden"
            />
          </div>

          {/* Benefits Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-brand-dark-light rounded-2xl p-7 hover:bg-brand-dark-lighter transition-colors"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-lime rounded-full flex items-center justify-center mb-14">
                    <img
                      src={`/home/${Icon}`}
                      alt={benefit.title}
                      className="w-7 h-7"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-white text-sm sm:text-base leading-relaxed">
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
