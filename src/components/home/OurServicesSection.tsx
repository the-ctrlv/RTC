import { Link } from "react-router-dom";

const OurServicesSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 lg:mb-16">
            <div className="flex flex-col lg:items-end lg:justify-between">
              {/* Left Column - Title */}
              <div>
                <h3 className="text-brand-lime3 font-bold mb-4 uppercase text-sm tracking-wider">
                  SERVICES
                </h3>
                <div className="flex items-center w-full gap-7">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight whitespace-nowrap">
                    Our Services{" "}
                  </h2>
                  <div className="flex-grow relative">
                    <img
                      src="/home/decoration_line_wide.svg"
                      alt="Divider"
                      className="inline-block "
                    />
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-base leading-relaxed max-w-lg">
                Our team provides specialized industrial services that ensure
                safety, reliability, and long-term performance. We deliver
                professional maintenance, inspection, and repair solutions —
                even in hard-to-access areas.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-3">
            <div className="p-8 lg:p-10 bg-white rounded-[40px]">
              <h3 className="text-2xl lg:text-[32px] font-bold text-gray-900 mb-6 lg:mb-8">
                Industrial Services
              </h3>

              <div className="space-y-5 lg:space-y-6 mb-8">
                <div>
                  <h4 className="font-bold mb-2 text-lg">
                    Access, Safety & Fall Protection
                  </h4>
                  <p className="text-base max-w-lg font-medium">
                    Engineered access, fall protection, and confined space
                    solutions for industrial environments.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-2 text-lg">
                    Inspections, Maintenance & Reliability
                  </h4>
                  <p className="text-base max-w-lg font-medium">
                    Inspections, maintenance, and repair services supporting
                    long-term asset performance.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-2 text-lg">
                    Specialized & High-Risk Operations
                  </h4>
                  <p className="text-base max-w-lg font-medium">
                    Shutdowns, emergency response, rescue operations, and
                    complex lifting tasks.
                  </p>
                </div>
              </div>

              <Link to="/services/industrial-services">
                <button className="w-full bg-brand-lime text-center hover:bg-brand-lime/90 text-gray-900 font-semibold py-4 px-6 rounded-xl flex items-center gap-4 justify-center transition-colors group">
                  <span className="text-base">Explore Industrial Services</span>
                  <img
                    src="/home/arrow_diagonal.svg"
                    alt="Arrow Right"
                    className="w-2 h-2"
                  />
                </button>
              </Link>
            </div>
            <div className="relative overflow-hidden bg-[url('/home/services.jpg')] bg-cover bg-center rounded-[40px]" />
            <div className="relative overflow-hidden bg-[url('/home/services.jpg')] bg-cover bg-center rounded-[40px]" />
            <div className="p-8 lg:p-10 bg-white rounded-[40px]">
              <h3 className="text-2xl lg:text-[32px] font-bold text-gray-900 mb-6 lg:mb-8">
                Building Services
              </h3>

              <div className="space-y-5 lg:space-y-6 mb-8">
                <div>
                  <h4 className="font-bold mb-2 text-lg">
                    Access, Safety & Fall Protection
                  </h4>
                  <p className="text-base max-w-lg font-medium">
                    Engineered access, fall protection, and confined space
                    solutions for industrial environments.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-2 text-lg">
                    Inspections, Maintenance & Reliability
                  </h4>
                  <p className="text-base max-w-lg font-medium">
                    Inspections, maintenance, and repair services supporting
                    long-term asset performance.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-2 text-lg">
                    Specialized & High-Risk Operations
                  </h4>
                  <p className="text-base max-w-lg font-medium">
                    Shutdowns, emergency response, rescue operations, and
                    complex lifting tasks.
                  </p>
                </div>
              </div>

              <Link to="/services/industrial-services">
                <button className="w-full bg-brand-lime text-center hover:bg-brand-lime/90 text-gray-900 font-semibold py-4 px-6 rounded-xl flex items-center gap-4 justify-center transition-colors group">
                  <span className="text-base">Explore Industrial Services</span>
                  <img
                    src="/home/arrow_diagonal.svg"
                    alt="Arrow Right"
                    className="w-2 h-2"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
