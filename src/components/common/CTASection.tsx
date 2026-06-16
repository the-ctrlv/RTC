import { ArrowRight } from "lucide-react";
import { useContactModal } from "@/contexts/ContactModalContext";
import { useTranslation } from "react-i18next";

export const CTASection = ({ option }: { option?: number }) => {
  const { openModal } = useContactModal();
  const { t } = useTranslation();

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-14">
        <div onClick={openModal} className="cursor-pointer">
          <div className="max-w-6xl mx-auto inline">
            <div className="h-full bg-brand-lime rounded-[40px] p-6 lg:p-12 flex flex-col lg:items-start gap-y-[11px] justify-between">
              <span
                className={`text-[30px] lg:text-[36px] font-bold text-gray-900 leading-tight mb-20 lg:mb-0`}
              >
                {option === 2 ? (
                  <>
                    {t("cta.readyLine1")} <br /> {t("cta.readyLine2")}
                  </>
                ) : (
                  <>
                    {t("cta.discussLine1")} <br /> {t("cta.discussLine2")}
                  </>
                )}
              </span>
              <div className="flex justify-end w-full">
                <button
                  aria-label={t("aria.contactForm")}
                  className="h-20 w-20 lg:w-[58px] lg:h-[58px] rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors flex-shrink-0 ml-6"
                >
                  <ArrowRight className="text-white w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
