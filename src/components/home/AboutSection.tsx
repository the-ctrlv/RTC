const AboutSection = () => {
  const stats = [
    { value: "95%", label: "SUCCESSFUL PROJECTS DELIVERED NATIONWIDE" },
    { value: "500+", label: "SUCCESSFUL PROJECTS ACROSS CANADA" },
  ];

  return (
    <section className="py-20 lg:py-24 xl:py-[120px] bg-white">
      <div className="container mx-auto px-4 sm:px-6 xl:px-14">
        {/* Mobile Layout */}
        <div className="lg:hidden max-w-md mx-auto">
          {/* Header */}
          <span className="block text-[#c3d533] font-bold mb-4 uppercase text-base tracking-wider">
            ABOUT US
          </span>
          <h3 className="text-3xl font-bold mb-8 text-gray-900 leading-tight">
            Delivering Safe & Certified Rope <br /> Access Solutions
          </h3>
          <p className="lg:hidden block text-gray-700 mb-10 leading-relaxed text-lg">
            Rope Tech Group provides safe and efficient high-rise, industrial,
            and infrastructure services across Canada. Our IRATA-certified
            technicians use advanced rope access methods to reach complex areas
            with minimal disruption. We focus on reliability, safety standards,
            and professional execution to support projects of any scale and
            complexity.
          </p>
          {/* Image */}
          <div className="mb-8">
            <img
              src="/home/about_us.jpg"
              alt="IRATA-certified rope access technician performing high-rise maintenance work"
              className="rounded-3xl w-full object-cover aspect-[3/4]"
            />
          </div>
          {/* Description */}
          <p className="lg:block hidden text-gray-700 mb-10 leading-relaxed text-base">
            Rope Tech Group provides safe and efficient high-rise, industrial,
            and infrastructure services across Canada. Our IRATA-certified
            technicians use advanced rope access methods to reach complex areas
            with minimal disruption. We focus on reliability, safety standards,
            and professional execution to support projects of any scale and
            complexity.
          </p>
          <div className="grid grid-cols-2 gap-8 mb-6">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold text-[#c3d533] mb-2">
                  {stat.value}
                </div>
                <p className="text-xs text-gray-900 font-bold uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex gap-12 items-center max-w-7xl mx-auto">
          {/* Image */}
          <img
            src="/home/about_us.jpg"
            alt="IRATA-certified rope access technician performing high-rise maintenance work"
            className="rounded-3xl max-w-[510px] w-full"
          />

          {/* Content */}
          <div className="py-10 flex flex-col justify-between">
            <h3 className="text-[#c3d533] font-bold uppercase text-base tracking-wider mb-3">
              ABOUT US
            </h3>
            <h2 className="text-3xl lg:text-[54px] font-bold mb-5 text-gray-900 leading-tight">
              Delivering Safe & Certified Rope Access Solutions
            </h2>
            <p className="text-gray-700 mb-5 leading-relaxed text-lg">
              Rope Tech Group provides safe and efficient high-rise, industrial,
              and infrastructure services across Canada. Our IRATA-certified
              technicians use advanced rope access methods to reach complex
              areas with minimal disruption. We focus on reliability, safety
              standards, and professional execution to support projects of any
              scale and complexity.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-[64px] font-semibold text-[#c3d533] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-base text-gray-900 font-bold uppercase tracking-wide max-w-[240px]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
