import { useTranslation } from "react-i18next";

/** Slightly tighter typography for Chinese within existing blocks (font-size / line-height only). */
export const useZhTypography = () => {
  const { i18n } = useTranslation();
  const isZh = i18n.resolvedLanguage?.startsWith("zh") ?? false;

  return {
    isZh,
    /** Nav / header links */
    nav: isZh ? "text-[13px] leading-snug" : "",
    /** Fixed-width CTA buttons */
    callBtn: isZh ? "text-sm leading-tight" : "",
    /** Section headings in tight containers */
    heading: isZh ? "text-[0.92em] leading-snug" : "",
    /** Body copy in cards */
    body: isZh ? "text-[0.9em] leading-snug" : "",
    /** Small labels / stats */
    label: isZh ? "text-[0.85em] leading-snug" : "",
  };
};

export const NAV_PATHS = [
  { path: "/", key: "nav.home" },
  { path: "/about", key: "nav.about" },
  { path: "/services", key: "nav.services" },
  { path: "/careers", key: "nav.careers" },
  { path: "/projects", key: "nav.projects" },
  { path: "/contact", key: "nav.contact" },
] as const;

export const FOOTER_PATHS = [
  { path: "/", key: "nav.home" },
  { path: "/about", key: "footer.aboutUs" },
  { path: "/services", key: "nav.services" },
  { path: "/careers", key: "nav.careers" },
  { path: "/projects", key: "nav.projects" },
  { path: "/contact", key: "nav.contact" },
] as const;
