import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, Globe } from "lucide-react";

const LANGUAGES = [
  { code: "en", labelKey: "language.en" },
  { code: "zh", labelKey: "language.zh" },
] as const;

type LanguageSwitcherProps = {
  variant?: "desktop" | "mobile";
};

const LanguageSwitcher = ({ variant = "desktop" }: LanguageSwitcherProps) => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentCode = i18n.resolvedLanguage?.startsWith("zh") ? "zh" : "en";
  const currentLang = LANGUAGES.find((l) => l.code === currentCode)!;

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
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

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  if (variant === "mobile") {
    return (
      <div className="flex items-center justify-center gap-4 mb-8">
        {LANGUAGES.map((lang, index) => (
          <span key={lang.code} className="flex items-center gap-4">
            {index > 0 && <span className="text-gray-600">|</span>}
            <button
              type="button"
              onClick={() => changeLanguage(lang.code)}
              className={`text-lg font-semibold transition-colors hover:text-[#c3d533] ${
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
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={t("language.label")}
        aria-expanded={open}
        className="flex items-center gap-1.5 text-white hover:text-[#c3d533] transition-colors text-sm font-medium px-2 py-1"
      >
        <Globe className="w-4 h-4 shrink-0" />
        <span>{t(currentLang.labelKey)}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul className="absolute right-0 top-full mt-2 min-w-[88px] rounded-md border border-white/20 bg-[#343434] py-1 shadow-lg z-[1001]">
          {LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                onClick={() => changeLanguage(lang.code)}
                className={`block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-white/10 ${
                  currentCode === lang.code
                    ? "text-[#D9F043] font-semibold"
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
