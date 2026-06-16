import { Link, type LinkProps } from "react-router-dom";
import { DEFAULT_LANG, isSupportedLang, localizedPath, useLocale } from "@/lib/localePath";

type LocaleLinkProps = Omit<LinkProps, "to"> & {
  to: string;
};

const LocaleLink = ({ to, ...props }: LocaleLinkProps) => {
  const { lang } = useLocale();

  return <Link to={localizedPath(lang, to)} {...props} />;
};

/** For use outside of /:lang routes (redirects, guards). */
export function toLocalizedPath(lang: string | undefined, path: string): string {
  const resolvedLang = isSupportedLang(lang) ? lang : DEFAULT_LANG;
  return localizedPath(resolvedLang, path);
}

export default LocaleLink;
