import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
}

export function useSEO({
  title,
  description,
  ogTitle,
  ogDescription,
  ogType = "website",
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(
        `meta[${attr}="${name}"]`,
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    setMeta("og:title", ogTitle ?? title, true);
    setMeta("og:description", ogDescription ?? description, true);
    setMeta("og:type", ogType, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", ogTitle ?? title);
    setMeta("twitter:description", ogDescription ?? description);
  }, [title, description, ogTitle, ogDescription, ogType]);
}
