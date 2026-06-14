import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, Globe } from "lucide-react";

const LANGUAGES = [
  { code: "en", labelKey: "language.en" },
  { code: "zh", labelKey: "language.zh" },
  { code: "ru", labelKey: "language.ru" },
  { code: "ka", labelKey: "language.ka" },
  { code: "tr", labelKey: "language.tr" },
  { code: "ar", labelKey: "language.ar" },
] as const;

type LanguageCode = (typeof LANGUAGES)[number]["code"];

type LanguageSwitcherProps = {
  variant?: "desktop" | "mobile";
};

const resolveLanguageCode = (lng?: string): LanguageCode => {
  const base = lng?.split("-")[0] ?? "en";
  return LANGUAGES.some((lang) => lang.code === base) ? (base as LanguageCode) : "en";
};

const LanguageSwitcher = ({ variant = "desktop" }: LanguageSwitcherProps) => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentCode = resolveLanguageCode(i18n.resolvedLanguage);
  const currentLang = LANGUAGES.find((l) => l.code === currentCode)!;

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const changeLanguage = (code: LanguageCode) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  if (variant === "mobile") {
    return (
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mb-8 px-2">
        {LANGUAGES.map((lang, index) => (
          <span key={lang.code} className="flex items-center gap-3">
            {index > 0 && <span className="text-gray-600">|</span>}
            <button
              type="button"
              onClick={() => changeLanguage(lang.code)}
              className={`text-base font-semibold transition-colors hover:text-[#c3d533] ${
                currentCode === lang.code ? "text-[#c3d533]" : "text-white"
              }`}
            >
              {t(lang.labelKey)}
            </button>
          </span>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={t("language.label")}
        aria-expanded={open}
        className="flex w-full min-w-[4.5rem] items-center justify-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:text-[#c3d533]"
      >
        <Globe className="h-4 w-4 shrink-0" />
        <span className="min-w-[2ch]">{t(currentLang.labelKey)}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul className="absolute inset-x-0 top-full z-[1001] mt-1 border border-white/20 bg-[#343434] shadow-lg">
          {LANGUAGES.map((lang) => (
            <li key={lang.code} className="border-t border-white/10 first:border-t-0">
              <button
                type="button"
                onClick={() => changeLanguage(lang.code)}
                className={`block w-full px-3 py-2 text-center text-sm transition-colors hover:bg-white/10 ${
                  currentCode === lang.code
                    ? "bg-white/5 font-semibold text-[#D9F043]"
                    : "text-white"
                }`}
              >
                {t(lang.labelKey)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
