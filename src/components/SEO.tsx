import { useEffect } from "react";
import {
  DEFAULT_LANG,
  localizedPath,
  SITE_URL,
  SUPPORTED_LANGS,
  useLocale,
} from "@/lib/localePath";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

const SEO_DATA_ATTR = "data-seo-managed";

const upsertLink = (rel: string, attrs: Record<string, string>) => {
  const selectorKey = attrs.hreflang ?? attrs.href ?? rel;
  let tag = document.querySelector(`link[${SEO_DATA_ATTR}="${selectorKey}"]`);

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute(SEO_DATA_ATTR, selectorKey);
    document.head.appendChild(tag);
  }

  tag.setAttribute("rel", rel);
  Object.entries(attrs).forEach(([key, value]) => tag!.setAttribute(key, value));
};

const removeManagedLinks = (rel: string) => {
  document.querySelectorAll(`link[${SEO_DATA_ATTR}][rel="${rel}"]`).forEach((el) => el.remove());
};

/**
 * SEO component for managing document head metadata
 * Use this on each page to set unique title, description, and Open Graph tags
 */
const SEO = ({ title, description, keywords, ogImage, ogUrl }: SEOProps) => {
  const { lang, path } = useLocale();
  const canonical = ogUrl ?? `${SITE_URL}${localizedPath(lang, path)}`;

  useEffect(() => {
    document.title = `${title} | Rope Tech Group`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      } else {
        const meta = document.createElement("meta");
        meta.name = "keywords";
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }

    const setOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute("content", content);
      } else {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        tag.setAttribute("content", content);
        document.head.appendChild(tag);
      }
    };

    setOGTag("og:title", `${title} | Rope Tech Group`);
    setOGTag("og:description", description);
    setOGTag("og:url", canonical);
    setOGTag("og:type", "website");
    setOGTag("og:locale", lang);
    if (ogImage) setOGTag("og:image", ogImage);

    const setTwitterTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (tag) {
        tag.setAttribute("content", content);
      } else {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        tag.setAttribute("content", content);
        document.head.appendChild(tag);
      }
    };

    setTwitterTag("twitter:card", "summary_large_image");
    setTwitterTag("twitter:title", `${title} | Rope Tech Group`);
    setTwitterTag("twitter:description", description);
    if (ogImage) setTwitterTag("twitter:image", ogImage);

    removeManagedLinks("alternate");
    removeManagedLinks("canonical");

    SUPPORTED_LANGS.forEach((locale) => {
      upsertLink("alternate", {
        hreflang: locale,
        href: `${SITE_URL}${localizedPath(locale, path)}`,
      });
    });

    upsertLink("alternate", {
      hreflang: "x-default",
      href: `${SITE_URL}${localizedPath(DEFAULT_LANG, path)}`,
    });

    upsertLink("canonical", {
      href: canonical,
    });
  }, [title, description, keywords, ogImage, canonical, lang, path]);

  return null;
};

export default SEO;
