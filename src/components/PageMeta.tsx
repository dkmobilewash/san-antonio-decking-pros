import { useContext, useEffect } from "react";
import { business } from "../data/business";
import { HeadContext, type HeadData } from "./HeadContext";

interface PageMetaProps extends HeadData {}

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

export default function PageMeta({
  title,
  description,
  path,
  schema,
  ogImage,
  ogType = "website",
  noindex = false,
}: PageMetaProps) {
  const headCtx = useContext(HeadContext);
  if (headCtx) {
    // Server render pass: collect head data synchronously so entry-server
    // can inject it into the static HTML (useEffect never runs during SSR).
    headCtx.set({ title, description, path, schema, ogImage, ogType, noindex });
  }

  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const canonicalUrl = `${business.baseUrl}${path}`;
    const image = ogImage ?? business.ogImage;

    const descriptionTag = setMetaTag("name", "description", description);
    const robotsTag = setMetaTag(
      "name",
      "robots",
      noindex ? "noindex, nofollow" : "index, follow",
    );
    const ogTitleTag = setMetaTag("property", "og:title", title);
    const ogDescriptionTag = setMetaTag("property", "og:description", description);
    const ogUrlTag = setMetaTag("property", "og:url", canonicalUrl);
    const ogTypeTag = setMetaTag("property", "og:type", ogType);
    const ogImageTag = setMetaTag("property", "og:image", image);
    const twitterTitleTag = setMetaTag("name", "twitter:title", title);
    const twitterDescriptionTag = setMetaTag("name", "twitter:description", description);
    const twitterImageTag = setMetaTag("name", "twitter:image", image);

    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    const schemaList = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
    const schemaScripts = schemaList.map((schemaObject) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schemaObject);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      document.title = previousTitle;
      [
        descriptionTag,
        robotsTag,
        ogTitleTag,
        ogDescriptionTag,
        ogUrlTag,
        ogTypeTag,
        ogImageTag,
        twitterTitleTag,
        twitterDescriptionTag,
        twitterImageTag,
      ].forEach((tag) => tag.remove());
      canonicalLink?.remove();
      schemaScripts.forEach((script) => script.remove());
    };
  }, [title, description, path, schema, ogImage, ogType, noindex]);

  return null;
}
