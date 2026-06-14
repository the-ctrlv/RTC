import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://formspree.io/f/mdaeonze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _replyto: data.email,
          _subject: `Contact Form Submission from ${data.name}`,
        }),
      });

      if (response.ok) {
        // Отправляем событие в Google Tag Manager
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "form_submission",
          form_name: "contact_form",
          form_location: "contact_page",
        });

        alert(t("form.successMessage"));
        reset();
      } else {
        alert(t("form.errorMessage"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert(t("form.errorSending"));
    }
  };

  return (
    <div className="bg-white p-7 sm:p-8 lg:p-10 rounded-[40px] order-1 lg:order-2">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
        {t("form.fillOutForm")}
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
            placeholder={t("form.messagePlaceholder")}
            rows={4}
            className="bg-white placeholder:font-semibold placeholder:text-[#9D9D9D] w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all resize-none"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-brand-lime hover:bg-brand-lime/90 text-gray-900 font-bold py-6 text-base"
        >
          {t("common.send")}
        </Button>
      </form>
    </div>
  );
};
