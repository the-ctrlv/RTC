import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import zh from "./locales/zh.json";
import ru from "./locales/ru.json";
import ka from "./locales/ka.json";
import tr from "./locales/tr.json";
import ar from "./locales/ar.json";
import {
  DEFAULT_LANG,
  getLangFromPath,
  isSupportedLang,
  SUPPORTED_LANGS,
  type SupportedLang,
} from "@/lib/localePath";

const RTL_LANGS = new Set<SupportedLang>(["ar"]);

const normalizeLang = (lng: string) => {
  const base = lng.split("-")[0];
  return isSupportedLang(base) ? base : DEFAULT_LANG;
};

const updateDocumentLang = (lng: string) => {
  const lang = normalizeLang(lng);
  document.documentElement.lang = lang;
  document.documentElement.dir = RTL_LANGS.has(lang) ? "rtl" : "ltr";
};

const pathLang =
  typeof window !== "undefined" ? getLangFromPath(window.location.pathname) : null;

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
      ar: { translation: ar },
    },
    lng: pathLang ?? undefined,
    fallbackLng: DEFAULT_LANG,
    supportedLngs: [...SUPPORTED_LANGS],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

updateDocumentLang(pathLang ?? i18n.resolvedLanguage ?? DEFAULT_LANG);
i18n.on("languageChanged", updateDocumentLang);

export default i18n;
