import { useEffect } from "react";
import { business } from "../data/business";

interface PageMetaProps {
  title: string;
  description: string;
  path: string;
  schema?: Record<string, unknown>;
  ogImage?: string;
}

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
  return el;
}

export default function PageMeta({ title, description, path, schema, ogImage }: PageMetaProps) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const canonicalUrl = `${business.baseUrl}${path}`;
    const image = ogImage ?? business.ogImage;

    const descriptionTag = setMetaTag("name", "description", description);
    const ogTitleTag = setMetaTag("property", "og:title", title);
    const ogDescriptionTag = setMetaTag("property", "og:description", description);
    const ogUrlTag = setMetaTag("property", "og:url", canonicalUrl);
    const ogImageTag = setMetaTag("property", "og:image", image);
    const twitterTitleTag = setMetaTag("name", "twitter:title", title);
    const twitterDescriptionTag = setMetaTag("name", "twitter:description", description);

    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    let schemaScript: HTMLScriptElement | null = null;
    if (schema) {
      schemaScript = document.createElement("script");
      schemaScript.type = "application/ld+json";
      schemaScript.textContent = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
    }

    return () => {
      document.title = previousTitle;
      [descriptionTag, ogTitleTag, ogDescriptionTag, ogUrlTag, ogImageTag, twitterTitleTag, twitterDescriptionTag].forEach(
        (tag) => tag.remove(),
      );
      canonicalLink?.remove();
      schemaScript?.remove();
    };
  }, [title, description, path, schema, ogImage]);

  return null;
}
