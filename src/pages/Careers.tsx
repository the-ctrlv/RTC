import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Careers = () => {
  const { t } = useTranslation();
  const companyName = t("common.companyName");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // eslint-disable-next-line no-console
    console.log("Form submitted:", data);
    alert(t("form.applicationSuccess"));
    reset();
  };

  return (
    <div className="min-h-screen mb-[-40vh] lg:mb-0">
      <SEO
        title={t("seo.careersTitle")}
        description={t("seo.careersDesc")}
        keywords={t("seo.careersKeywords")}
      />
      {/* Hero Section */}
      <section
        className="bg-brand-dark text-white pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-20 h-[70vh] lg:h-auto
      bg-[url('/join.jpg')] bg-cover bg-center relative
      "
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-14 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 lg:mb-10">
            {t("careersPage.title")}
          </h1>
          <img src="/decoration_line.svg" alt="Decorative divider" className="h-[14px] w-auto" />
        </div>
      </section>

      {/* Careers Content */}
      <section className="py-12 sm:py-16 lg:py-20 -translate-y-[50vh] lg:translate-y-0 lg:mb-[-20vh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-14">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mx-auto">
            {/* Career Information */}
            <div className="space-y-6 order-2 lg:order-1">
              <h4 className="text-lg font-bold">{t("careersPage.intro")}</h4>
              <p className="text-base font-medium text-[#292929] leading-relaxed">
                {t("careersPage.paragraph1")}
              </p>
              <p className="text-base font-medium text-[#292929] leading-relaxed">
                {t("careersPage.paragraph2", { companyName })}
              </p>
            </div>

            {/* Application Form */}
            <div className="bg-white p-7 sm:p-8 lg:p-10 rounded-[40px] order-1 lg:order-2 lg:-translate-y-[33vh] max-w-[562px] shadow-lg">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold mb-6 sm:mb-8">
                {t("careersPage.formTitle")}
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-base font-semibold text-gray-700 mb-2"
                  >
                    {t("form.yourName")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: t("form.nameRequired") })}
                    placeholder={t("form.namePlaceholder")}
                    className="bg-white placeholder:font-semibold placeholder:text-[#9D9D9D] w-full h-12 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-base font-semibold text-gray-700 mb-2"
                  >
                    {t("form.yourEmail")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", { required: t("form.emailRequired") })}
                    placeholder={t("form.emailPlaceholder")}
                    className="bg-white placeholder:font-semibold placeholder:text-[#9D9D9D] w-full h-12 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all rounded-[8px]"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div className="mb-10">
                  <label
                    htmlFor="message"
                    className="block text-base font-semibold text-gray-700 mb-2"
                  >
                    {t("form.message")}
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    placeholder={t("form.messagePlaceholderExperience")}
                    rows={4}
                    className="bg-white placeholder:font-semibold placeholder:text-[#9D9D9D] w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brand-lime hover:bg-brand-lime/90 text-gray-900 font-bold py-6 text-base"
                >
                  {t("common.applyNow")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
