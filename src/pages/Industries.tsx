import SEO from "@/components/SEO";
import LocaleLink from "@/components/LocaleLink";
import { useTranslation } from "react-i18next";

type IndustryItem = {
  title: string;
  description: string;
  solutions: string[];
};

const Industries = () => {
  const { t } = useTranslation();
  const icons = ["🏥", "🏦", "🛒", "🎓", "🏭", "🏢", "🏬", "🚚"];
  const items = t("industriesPage.items", {
    returnObjects: true,
  }) as IndustryItem[];
  const industries = items.map((item, idx) => ({
    ...item,
    icon: icons[idx] ?? "🏢",
  }));

  return (
    <div className="min-h-screen">
      <SEO
        title={t("seo.industriesTitle")}
        description={t("seo.industriesDesc")}
        keywords={t("seo.industriesKeywords")}
      />
      <section className="bg-blue-600 text-white py-16 h-full">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{t("industriesPage.title")}</h1>
          <p className="text-xl text-blue-100">{t("industriesPage.subtitle")}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 xl:px-14">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("industriesPage.expertiseTitle")}</h2>
            <p className="text-lg text-gray-700">{t("industriesPage.expertiseDesc")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start">
                  <div className="text-5xl mr-4">{industry.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{industry.title}</h3>
                    <p className="text-gray-600 mb-4">{industry.description}</p>
                    <div className="space-y-2">
                      <p className="font-semibold text-sm text-gray-800">
                        {t("industriesPage.keySolutions")}
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <span className="text-blue-600 mr-1">•</span>
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center xl:px-14">
          <h2 className="text-3xl font-bold mb-4">{t("industriesPage.ctaTitle")}</h2>
          <p className="text-lg text-gray-700 mb-8">{t("industriesPage.ctaDesc")}</p>
          <LocaleLink
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {t("common.contactUs")}
          </LocaleLink>
        </div>
      </section>
    </div>
  );
};

export default Industries;
