import { Navigate, useLocation } from "react-router-dom";
import { localizedPath, pathWithoutLocale, resolvePreferredLang } from "@/lib/localePath";

const LegacyRedirect = () => {
  const { pathname, search, hash } = useLocation();
  const lang = resolvePreferredLang();
  const path = pathWithoutLocale(pathname);
  const target = `${localizedPath(lang, path)}${search}${hash}`;

  return <Navigate to={target} replace />;
};

export default LegacyRedirect;
