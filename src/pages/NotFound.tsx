import LocaleLink from "@/components/LocaleLink";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center relative overflow-hidden">
      <SEO
        title={t("seo.notFoundTitle")}
        description={t("seo.notFoundDesc")}
        keywords={t("seo.notFoundKeywords")}
      />
      {/* Large 404 Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <h1 className="text-[200px] sm:text-[300px] lg:text-[600px] font-bold text-white leading-none select-none">
          404
        </h1>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
          {t("notFound.oops")}
        </h2>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          {t("notFound.title")}
        </h3>
        <p className="text-md sm:text-xl text-gray-300 mb-12 max-w-md mx-auto">
          {t("notFound.description")}
        </p>
        <LocaleLink to="/">
          <Button
            size="lg"
            className="bg-[#c3d533] hover:bg-[#c3d533]/90 text-black font-semibold px-10 py-6 text-lg"
          >
            {t("common.backHome")}
          </Button>
        </LocaleLink>
      </div>
    </div>
  );
};

export default NotFound;
