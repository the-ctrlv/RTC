import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import zh from "./locales/zh.json";

const updateDocumentLang = (lng: string) => {
  document.documentElement.lang = lng.startsWith("zh") ? "zh" : "en";
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, zh: { translation: zh } },
    fallbackLng: "en",
    supportedLngs: ["en", "zh"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

updateDocumentLang(i18n.resolvedLanguage ?? "en");
i18n.on("languageChanged", updateDocumentLang);

export default i18n;
