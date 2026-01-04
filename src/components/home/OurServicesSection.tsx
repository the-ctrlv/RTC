import { Link } from "react-router-dom";

const OurServicesSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-[150px] bg-[#f5f5f5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-14">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 lg:mb-20">
            <div className="flex flex-col lg:items-end lg:justify-between">
              {/* Left Column - Title */}
              <div>
                <h3 className="text-[#c3d533] font-bold mb-4 uppercase text-base tracking-wider">
                  SERVICES
                </h3>
                <div className="flex flex-col lg:items-start lg:flex-row w-full gap-7">
                  <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-bold text-gray-900 leading-tight whitespace-nowrap">
                    Our Services{" "}
                  </h2>
                  <div className="flex-grow relative mb-7 lg:mt-7 lg:mb-0">
                    <img
                      src="/home/decoration_line_wide.svg"
                      alt="Divider"
                      className="inline-block"
                    />
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
                Our team provides specialized industrial services that ensure
                safety, reliability, and long-term performance. We deliver
                professional maintenance, inspection, and repair solutions —
                even in hard-to-access areas.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 justify-center items-stretch w-full">
              <div
                className="
                  w-full
                  relative overflow-hidden
                  bg-[url('/home/services.jpg')]
                  bg-cover bg-center
                  rounded-[40px]
                  min-h-[240px] lg:min-h-0
                  order-1 lg:order-2
                "
              />
              <div className="p-7 lg:p-10 lg:py-12 bg-white rounded-[40px] order-2 lg:order-1">
                <h3 className="text-2xl lg:text-[36px] font-bold text-gray-900 mb-6 lg:mb-[32px]">
                  Industrial Services
                </h3>

                <div className="space-y-5 lg:space-y-6 mb-8">
                  <div>
                    <h4 className="font-bold mb-2 text-base lg:text-lg whitespace-nowrap">
                      Access, Safety & Fall Protection
                    </h4>
                    <p className="text-base max-w-lg font-medium">
                      Engineered access, fall protection, and confined space
                      solutions for industrial environments.
                    </p>
                  </div>
                  <hr />
                  <div>
                    <h4 className="font-bold mb-2 text-base lg:text-lg">
                      Inspections, Maintenance & Reliability
                    </h4>
                    <p className="text-base max-w-lg font-medium">
                      Inspections, maintenance, and repair services supporting
                      long-term asset performance.
                    </p>
                  </div>
                  <hr />
                  <div>
                    <h4 className="font-bold mb-2 text-base lg:text-lg whitespace-nowrap">
                      Specialized & High-Risk Operations
                    </h4>
                    <p className="text-base max-w-lg font-medium">
                      Shutdowns, emergency response, rescue operations, and
                      complex lifting tasks.
                    </p>
                  </div>
                </div>

                <Link to="/services/industrial-services">
                  <button className="w-full bg-[#d9f143] text-center hover:bg-[#d9f143]/90 text-gray-900 font-semibold py-4 px-6 rounded-md flex items-center gap-4 justify-center transition-colors group">
                    <span className="text-sm lg:text-lg font-semibold">
                      Explore Industrial Services
                    </span>
                    <img
                      src="/home/arrow_diagonal.svg"
                      alt="Arrow Right"
                      className="w-3 h-3"
                    />
                  </button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 justify-center items-stretch w-full">
              <div
                className="
                  w-full
                  relative overflow-hidden
                  bg-[url('/home/building-services.jpg')]
                  bg-cover bg-center
                  rounded-[40px]
                  min-h-[240px] lg:min-h-0
                "
              />
              <div className="p-7 lg:p-10 bg-white rounded-[40px]">
                <h3 className="text-2xl lg:text-[36px] font-bold text-gray-900 mb-6 lg:mb-[32px]">
                  Building Services
                </h3>

                <div className="space-y-5 lg:space-y-6 mb-8">
                  <div>
                    <h4 className="font-bold mb-2 text-base lg:text-lg">
                      Access, Safety & Fall Protection
                    </h4>
                    <p className="text-base max-w-lg font-medium">
                      Safe access systems and fall protection solutions for
                      residential and commercial buildings.
                    </p>
                  </div>
                  <hr />
                  <div>
                    <h4 className="font-bold mb-2 text-base lg:text-lg">
                      Envelope Inspections & Maintenance
                    </h4>
                    <p className="text-base max-w-lg font-medium">
                      Façade inspections, maintenance, and repair services to
                      extend building lifespan.
                    </p>
                  </div>
                  <hr />
                  <div>
                    <h4 className="font-bold mb-2 text-base lg:text-lg">
                      Envelope Restoration & Repairs
                    </h4>
                    <p className="text-base max-w-lg font-medium">
                      Concrete repairs, waterproofing, glazing, and exterior
                      envelope improvements.
                    </p>
                  </div>
                </div>
                <Link to="/services/industrial-services">
                  <button className="w-full bg-[#d9f143] text-center hover:bg-[#d9f143]/90 text-gray-900 font-semibold py-4 px-6 rounded-md flex items-center gap-4 justify-center transition-colors group">
                    <span className="text-sm lg:text-lg  font-semibold">
                      Explore Building Services
                    </span>
                    <img
                      src="/home/arrow_diagonal.svg"
                      alt="Arrow Right"
                      className="w-3 h-3"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
