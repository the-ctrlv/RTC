import { useTranslation } from "react-i18next";

/** Slightly tighter typography for non-English locales within existing blocks. */
export const useZhTypography = () => {
  const { i18n } = useTranslation();
  const lang = i18n.resolvedLanguage?.split("-")[0] ?? "en";
  const isCompact = lang !== "en";

  return {
    isZh: isCompact,
    /** Nav / header links */
    nav: isCompact ? "text-[13px] leading-snug" : "",
    /** Fixed-width CTA buttons */
    callBtn: isCompact ? "text-sm leading-tight" : "",
    /** Section headings in tight containers */
    heading: isCompact ? "text-[0.92em] leading-snug" : "",
    /** Body copy in cards */
    body: isCompact ? "text-[0.9em] leading-snug" : "",
    /** Small labels / stats */
    label: isCompact ? "text-[0.85em] leading-snug" : "",
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
