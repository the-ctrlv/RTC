import PageHero from "@/components/common/PageHero";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const collectBullets = (t("privacy.collectBullets", { returnObjects: true }) as string[]) ?? [];
  const useBullets = (t("privacy.useBullets", { returnObjects: true }) as string[]) ?? [];

  return (
    <div className="min-h-screen">
      <SEO
        title={t("seo.privacyTitle")}
        description={t("seo.privacyDesc")}
        keywords={t("seo.privacyKeywords")}
      />
      <PageHero title={t("privacy.title")} />

      <section className="py-12 lg:py-16 bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-600 mb-6">{t("privacy.lastUpdated")}</p>

          <div className="prose text-[16px] text-gray-700 [&>h2]:text-[24px] [&>h2]:font-semibold [&>h2]:text-gray-900 [&>h2]:mt-6 [&>h2]:mb-2 [&>p]:mb-4 [&>ul]:mt-2">
            <p>{t("privacy.intro1")}</p>
            <p>{t("privacy.intro2")}</p>

            <h2>{t("privacy.collectTitle")}</h2>
            <p className="text-[18px] font-semibold mb-2">{t("privacy.collectIntro")}</p>
            <ul className="list-disc list-inside marker:text-[#a5b715] space-y-2">
              {collectBullets.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h2>{t("privacy.useTitle")}</h2>
            <p className="text-[18px] font-semibold mb-2">{t("privacy.useIntro")}</p>
            <ul className="list-disc list-inside marker:text-[#a5b715] space-y-2">
              {useBullets.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h2>{t("privacy.logTitle")}</h2>
            <p>{t("privacy.logText")}</p>

            <h2>{t("privacy.cookiesTitle")}</h2>
            <p>{t("privacy.cookiesText")}</p>

            <h2>{t("privacy.thirdPartyTitle")}</h2>
            <p>{t("privacy.thirdPartyText")}</p>

            <h2>{t("privacy.securityTitle")}</h2>
            <p>{t("privacy.securityText")}</p>

            <h2>{t("privacy.externalTitle")}</h2>
            <p>{t("privacy.externalText")}</p>

            <h2>{t("privacy.childrenTitle")}</h2>
            <p>{t("privacy.childrenText")}</p>

            <h2>{t("privacy.legalTitle")}</h2>
            <p>{t("privacy.legalText")}</p>

            <h2>{t("privacy.changesTitle")}</h2>
            <p>{t("privacy.changesText")}</p>

            <h2>{t("privacy.contactTitle")}</h2>
            <p>{t("privacy.contactText")}</p>
            <p>
              {t("privacy.contactCompany")}
              <br />
              {t("privacy.contactEmail")}
              <br />
              {t("privacy.contactWebsite")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
