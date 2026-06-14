import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  DEFAULT_LANG,
  isSupportedLang,
  localizedPath,
  pathWithoutLocale,
} from "@/lib/localePath";

const LocaleLayout = () => {
  const { lang } = useParams<{ lang: string }>();
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (isSupportedLang(lang) && i18n.resolvedLanguage !== lang) {
      void i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  if (!isSupportedLang(lang)) {
    const path = pathWithoutLocale(location.pathname);
    return <Navigate to={localizedPath(DEFAULT_LANG, path)} replace />;
  }

  return <Outlet />;
};

export default LocaleLayout;
