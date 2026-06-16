import { Navigate } from "react-router-dom";
import { resolvePreferredLang } from "@/lib/localePath";

const RootRedirect = () => {
  const lang = resolvePreferredLang();
  return <Navigate to={`/${lang}`} replace />;
};

export default RootRedirect;
