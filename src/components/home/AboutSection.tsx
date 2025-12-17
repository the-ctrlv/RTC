const AboutSection = () => {
  const stats = [
    { value: "95%", label: "SUCCESSFUL DELIVERED NATIONWIDE" },
    { value: "500+", label: "SUCCESSFUL PROJECTS ACROSS CANADA" },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="lg:hidden max-w-md mx-auto">
          {/* Header */}
          <h3 className="text-brand-lime font-bold mb-4 uppercase text-sm tracking-wider">
            ABOUT US
          </h3>
          <h2 className="text-3xl font-bold mb-8 text-gray-900 leading-tight">
            Delivering Safe & Certified Rope Access Solutions
          </h2>

          {/* Image */}
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800"
              alt="Rope access worker"
              className="rounded-3xl w-full object-cover aspect-[3/4]"
            />
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-10 leading-relaxed text-base">
            Since 2013, Rope Tech Group has delivered expert rope access and
            high-rise maintenance services across Canada. Our certified team
            provides safe and efficient solutions for façades, concrete repairs,
            waterproofing, glazing, and inspections. We combine experience and
            innovation to help property owners protect their buildings with
            confidence.
          </p>

          {/* Stats */}
          <div className="space-y-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold text-brand-lime mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-900 font-bold uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800"
              alt="Rope access worker"
              className="rounded-3xl shadow-lg w-full object-cover aspect-square"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-brand-lime font-bold mb-3 uppercase text-sm tracking-wider">
              ABOUT US
            </h3>
            <h2 className="text-5xl font-bold mb-8 text-gray-900 leading-tight">
              Delivering Safe & Certified Rope Access Solutions
            </h2>
            <p className="text-gray-700 mb-12 leading-relaxed text-lg">
              Since 2013, Rope Tech Group has delivered expert rope access and
              high-rise maintenance services across Canada. Our certified team
              provides safe and efficient solutions for façades, concrete
              repairs, waterproofing, glazing, and inspections. We combine
              experience and innovation to help property owners protect their
              buildings with confidence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-6xl font-bold text-brand-lime mb-3">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-900 font-semibold uppercase tracking-wide">
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
