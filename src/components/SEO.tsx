import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

/**
 * SEO component for managing document head metadata
 * Use this on each page to set unique title, description, and Open Graph tags
 */
const SEO = ({ title, description, keywords, ogImage, ogUrl }: SEOProps) => {
  useEffect(() => {
    // Set title
    document.title = `${title} | Rope Tech Group`;

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Set keywords if provided
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

    // Set Open Graph tags
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
    if (ogImage) setOGTag("og:image", ogImage);
    if (ogUrl) setOGTag("og:url", ogUrl);
    setOGTag("og:type", "website");

    // Set Twitter Card tags
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
  }, [title, description, keywords, ogImage, ogUrl]);

  return null;
};

export default SEO;
