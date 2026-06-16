import PageHero from "@/components/common/PageHero";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";

const TermsAndConditions = () => {
  const { t } = useTranslation();
  const clientsBullets = (t("terms.clientsBullets", { returnObjects: true }) as string[]) ?? [];
  const finalPricingBullets =
    (t("terms.finalPricingBullets", { returnObjects: true }) as string[]) ?? [];

  return (
    <div className="min-h-screen">
      <SEO
        title={t("seo.termsTitle")}
        description={t("seo.termsDesc")}
        keywords={t("seo.termsKeywords")}
      />
      <PageHero title={t("terms.title")} />

      <section className="py-12 lg:py-16 bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg font-semibold mb-6">{t("terms.lastUpdated")}</p>

          <div className="prose text-base text-gray-700 [&>h2]:text-[24px] [&>h2]:font-semibold [&>h2]:text-gray-900 [&>h2]:my-6 [&>h2]:font-bold [&>p]:mb-4 [&>ul]:mt-2 [&>p]:font-light [&>p]:text-black">
            <p>{t("terms.intro1")}</p>
            <p>{t("terms.intro2")}</p>

            <h2>{t("terms.websiteUseTitle")}</h2>
            <p>{t("terms.websiteUseText")}</p>

            <h2>{t("terms.noAdviceTitle")}</h2>
            <p>{t("terms.noAdviceText")}</p>

            <h2>{t("terms.disclaimerTitle")}</h2>
            <p>{t("terms.disclaimerText")}</p>

            <p className="!text-[18px] !mt-5 !font-semibold mb-2">
              {t("terms.clientsResponsible")}
            </p>
            <ul className="list-disc list-inside marker:text-[#a5b715] space-y-2">
              {clientsBullets.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <p>{t("terms.suspendText")}</p>

            <h2>{t("terms.estimatesTitle")}</h2>
            <p>{t("terms.estimatesText")}</p>

            <p className="text-[18px] font-semibold mb-2">{t("terms.finalPricing")}</p>
            <ul className="list-disc list-inside marker:text-[#a5b715] space-y-2">
              {finalPricingBullets.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <p>{t("terms.bindingText")}</p>

            <h2>{t("terms.ipTitle")}</h2>
            <p>{t("terms.ipText")}</p>

            <h2>{t("terms.thirdPartyTitle")}</h2>
            <p>{t("terms.thirdPartyText")}</p>

            <h2>{t("terms.liabilityTitle")}</h2>
            <p>{t("terms.liabilityText")}</p>

            <h2>{t("terms.availabilityTitle")}</h2>
            <p>{t("terms.availabilityText")}</p>

            <h2>{t("terms.terminationTitle")}</h2>
            <p>{t("terms.terminationText")}</p>

            <h2>{t("terms.governingTitle")}</h2>
            <p>{t("terms.governingText")}</p>

            <h2>{t("terms.changesTitle")}</h2>
            <p>{t("terms.changesText")}</p>

            <h2>{t("terms.contactTitle")}</h2>
            <p>{t("terms.contactText")}</p>
            <p>
              <span className="!text-lg !font-medium">{t("terms.contactCompany")}</span>
              <br />
              {t("terms.contactEmail")}
              <br />
              {t("terms.contactWebsite")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
