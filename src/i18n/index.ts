import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import zh from "./locales/zh.json";
import ru from "./locales/ru.json";
import ka from "./locales/ka.json";
import tr from "./locales/tr.json";

const SUPPORTED_LANGS = ["en", "zh", "ru", "ka", "tr"] as const;

const normalizeLang = (lng: string) => {
  const base = lng.split("-")[0];
  return SUPPORTED_LANGS.includes(base as (typeof SUPPORTED_LANGS)[number]) ? base : "en";
};

const updateDocumentLang = (lng: string) => {
  document.documentElement.lang = normalizeLang(lng);
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh },
      ru: { translation: ru },
      ka: { translation: ka },
      tr: { translation: tr },
    },
    fallbackLng: "en",
    supportedLngs: [...SUPPORTED_LANGS],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

updateDocumentLang(i18n.resolvedLanguage ?? "en");
i18n.on("languageChanged", updateDocumentLang);

export default i18n;
