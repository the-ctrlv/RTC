import { useLocation, useParams } from "react-router-dom";

export const SUPPORTED_LANGS = ["en", "zh", "ru", "ka", "tr", "ar"] as const;
export type SupportedLang = (typeof SUPPORTED_LANGS)[number];
export const DEFAULT_LANG: SupportedLang = "en";
export const SITE_URL = "https://ropetechgroup.com";

export function isSupportedLang(lang?: string | null): lang is SupportedLang {
  return !!lang && SUPPORTED_LANGS.includes(lang as SupportedLang);
}

export function getLangFromPath(pathname: string): SupportedLang | null {
  const segment = pathname.split("/").filter(Boolean)[0];
  return isSupportedLang(segment) ? segment : null;
}

export function pathWithoutLocale(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isSupportedLang(segments[0])) {
    const rest = segments.slice(1);
    return rest.length === 0 ? "/" : `/${rest.join("/")}`;
  }
  return pathname || "/";
}

export function localizedPath(lang: string, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return `/${lang}`;
  return `/${lang}${normalized}`;
}

export function resolvePreferredLang(): SupportedLang {
  try {
    const stored = localStorage.getItem("i18nextLng");
    const fromStorage = stored?.split("-")[0];
    if (isSupportedLang(fromStorage)) return fromStorage;
  } catch {
    // localStorage may be unavailable
  }

  const fromNavigator = navigator.language?.split("-")[0];
  if (isSupportedLang(fromNavigator)) return fromNavigator;

  return DEFAULT_LANG;
}

export function isNavPathActive(pathname: string, itemPath: string): boolean {
  const basePath = pathWithoutLocale(pathname);
  if (itemPath === "/") return basePath === "/";
  return basePath === itemPath || basePath.startsWith(`${itemPath}/`);
}

export function useLocale() {
  const { lang: paramLang } = useParams<{ lang: string }>();
  const location = useLocation();
  const lang = isSupportedLang(paramLang) ? paramLang : DEFAULT_LANG;
  const path = pathWithoutLocale(location.pathname);

  return { lang, path, pathname: location.pathname };
}
