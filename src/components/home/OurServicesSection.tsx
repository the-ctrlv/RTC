import LocaleLink from "@/components/LocaleLink";
import { useTranslation } from "react-i18next";
import { useZhTypography } from "@/lib/i18nHelpers";

const OurServicesSection = () => {
  const { t } = useTranslation();
  const zh = useZhTypography();
  return (
    <section className="py-16 sm:py-20 lg:py-[150px] bg-[#f5f5f5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-14">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 lg:mb-20">
            <div className="flex flex-col lg:items-end lg:justify-between">
              {/* Left Column - Title */}
              <div>
                <span className="block text-[#c3d533] font-bold mb-4 uppercase text-base tracking-wider">
                  {t("ourServices.label")}
                </span>
                <div className="flex flex-col lg:items-start lg:flex-row w-full gap-7">
                  <h3 className="text-4xl sm:text-5xl lg:text-[48px] font-bold text-gray-900 leading-tight whitespace-nowrap">
                    {t("ourServices.title")}{" "}
                  </h3>
                  <div className="flex-grow relative mb-7 lg:mt-7 lg:mb-0">
                    <img
                      src="/home/decoration_line_wide.svg"
                      alt="Decorative line element"
                      className="inline-block"
                    />
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
                {t("ourServices.description")}
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
                <h4 className="text-2xl lg:text-[36px] font-bold text-gray-900 mb-6 lg:mb-[32px]">
                  {t("ourServices.industrialTitle")}
                </h4>

                <div className="space-y-5 lg:space-y-6 mb-8">
                  <div>
                    <h5
                      className={`font-bold mb-2 text-base lg:text-lg whitespace-nowrap ${zh.heading}`}
                    >
                      {t("ourServices.industrialItem1Title")}
                    </h5>
                    <p className="text-base max-w-lg font-medium">
                      {t("ourServices.industrialItem1Desc")}
                    </p>
                  </div>
                  <hr />
                  <div>
                    <h5 className="font-bold mb-2 text-base lg:text-lg">
                      {t("ourServices.industrialItem2Title")}
                    </h5>
                    <p className="text-base max-w-lg font-medium">
                      {t("ourServices.industrialItem2Desc")}
                    </p>
                  </div>
                  <hr />
                  <div>
                    <h5
                      className={`font-bold mb-2 text-base lg:text-lg whitespace-nowrap ${zh.heading}`}
                    >
                      {t("ourServices.industrialItem3Title")}
                    </h5>
                    <p className="text-base max-w-lg font-medium">
                      {t("ourServices.industrialItem3Desc")}
                    </p>
                  </div>
                </div>

                <LocaleLink to="/services/industrial-services">
                  <button className="w-full bg-[#d9f143] text-center hover:bg-[#d9f143]/90 text-gray-900 font-semibold py-4 px-6 rounded-md flex items-center gap-4 justify-center transition-colors group">
                    <span className="text-sm lg:text-lg font-semibold">
                      {t("ourServices.exploreIndustrial")}
                    </span>
                    <img
                      src="/home/arrow_diagonal.svg"
                      alt="Arrow Right"
                      className="w-3 h-3"
                    />
                  </button>
                </LocaleLink>
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
                <h4 className="text-2xl lg:text-[36px] font-bold text-gray-900 mb-6 lg:mb-[32px]">
                  {t("ourServices.buildingTitle")}
                </h4>

                <div className="space-y-5 lg:space-y-6 mb-8">
                  <div>
                    <h5 className="font-bold mb-2 text-base lg:text-lg">
                      {t("ourServices.buildingItem1Title")}
                    </h5>
                    <p className="text-base max-w-lg font-medium">
                      {t("ourServices.buildingItem1Desc")}
                    </p>
                  </div>
                  <hr />
                  <div>
                    <h5 className="font-bold mb-2 text-base lg:text-lg">
                      {t("ourServices.buildingItem2Title")}
                    </h5>
                    <p className="text-base max-w-lg font-medium">
                      {t("ourServices.buildingItem2Desc")}
                    </p>
                  </div>
                  <hr />
                  <div>
                    <h5 className="font-bold mb-2 text-base lg:text-lg">
                      {t("ourServices.buildingItem3Title")}
                    </h5>
                    <p className="text-base max-w-lg font-medium">
                      {t("ourServices.buildingItem3Desc")}
                    </p>
                  </div>
                </div>
                <LocaleLink to="/services/building-services">
                  <button className="w-full bg-[#d9f143] text-center hover:bg-[#d9f143]/90 text-gray-900 font-semibold py-4 px-6 rounded-md flex items-center gap-4 justify-center transition-colors group">
                    <span className="text-sm lg:text-lg  font-semibold">
                      {t("ourServices.exploreBuilding")}
                    </span>
                    <img
                      src="/home/arrow_diagonal.svg"
                      alt="Arrow icon"
                      className="w-3 h-3"
                    />
                  </button>
                </LocaleLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
