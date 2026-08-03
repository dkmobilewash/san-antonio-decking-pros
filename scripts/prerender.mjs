// Post-build static prerendering.
//
// `vite build` (run before this script) produces a client-only dist/ with a
// single index.html that has an empty #root. This script uses Vite's SSR
// module runner to render every real route of the site with
// react-dom/server, then writes each route's fully-rendered HTML — along
// with its unique <title>, meta description, canonical link, Open Graph /
// Twitter tags, and JSON-LD — to dist/{route}/index.html. It also emits
// dist/404.html, dist/sitemap.xml, and dist/robots.txt from the same route
// list so nothing can drift out of sync.
import { createServer } from "vite";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function upsertTag(html, matcher, tag) {
  if (matcher.test(html)) {
    return html.replace(matcher, tag);
  }
  return html.replace("</head>", `  ${tag}\n  </head>`);
}

function injectPage(template, appHtml, headData, business) {
  let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  if (!headData) return html;

  const canonical = `${business.baseUrl}${headData.path}`;
  const image = headData.ogImage ?? business.ogImage;
  const robotsContent = headData.noindex ? "noindex, nofollow" : "index, follow";
  const title = escapeHtml(headData.title);
  const description = escapeHtml(headData.description);
  const ogType = headData.ogType ?? "website";

  html = upsertTag(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  html = upsertTag(
    html,
    /<meta\s+name="description"[\s\S]*?\/>/,
    `<meta name="description" content="${description}" />`,
  );
  html = upsertTag(
    html,
    /<meta\s+name="robots"[\s\S]*?\/>/,
    `<meta name="robots" content="${robotsContent}" />`,
  );
  html = upsertTag(
    html,
    /<link\s+rel="canonical"[\s\S]*?\/>/,
    `<link rel="canonical" href="${canonical}" />`,
  );
  html = upsertTag(
    html,
    /<meta\s+property="og:title"[\s\S]*?\/>/,
    `<meta property="og:title" content="${title}" />`,
  );
  html = upsertTag(
    html,
    /<meta\s+property="og:description"[\s\S]*?\/>/,
    `<meta property="og:description" content="${description}" />`,
  );
  html = upsertTag(
    html,
    /<meta\s+property="og:url"[\s\S]*?\/>/,
    `<meta property="og:url" content="${canonical}" />`,
  );
  html = upsertTag(
    html,
    /<meta\s+property="og:type"[\s\S]*?\/>/,
    `<meta property="og:type" content="${ogType}" />`,
  );
  html = upsertTag(
    html,
    /<meta\s+property="og:image"[\s\S]*?\/>/,
    `<meta property="og:image" content="${image}" />`,
  );
  html = upsertTag(
    html,
    /<meta\s+name="twitter:title"[\s\S]*?\/>/,
    `<meta name="twitter:title" content="${title}" />`,
  );
  html = upsertTag(
    html,
    /<meta\s+name="twitter:description"[\s\S]*?\/>/,
    `<meta name="twitter:description" content="${description}" />`,
  );
  html = upsertTag(
    html,
    /<meta\s+name="twitter:image"[\s\S]*?\/>/,
    `<meta name="twitter:image" content="${image}" />`,
  );

  if (headData.schema) {
    const schemaList = Array.isArray(headData.schema) ? headData.schema : [headData.schema];
    const scripts = schemaList
      .map((schemaObject) => `<script type="application/ld+json">${JSON.stringify(schemaObject)}</script>`)
      .join("\n  ");
    html = html.replace("</head>", `  ${scripts}\n  </head>`);
  }

  return html;
}

function buildSitemap(urls) {
  const urlEntries = urls
    .map((url) => `  <url>\n    <loc>${escapeHtml(url)}</loc>\n  </url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;
}

async function main() {
  const template = await fs.readFile(path.join(distDir, "index.html"), "utf-8");

  const vite = await createServer({
    root,
    server: { middlewareMode: true },
    appType: "custom",
  });

  try {
    const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");
    const { services } = await vite.ssrLoadModule("/src/data/services.ts");
    const { serviceAreas } = await vite.ssrLoadModule("/src/data/serviceAreas.ts");
    const { blogPosts } = await vite.ssrLoadModule("/src/data/blogPosts.ts");
    const { business } = await vite.ssrLoadModule("/src/data/business.ts");

    const routes = [
      "/",
      "/decking-services",
      ...services.map((service) => `/${service.slug}`),
      "/about-san-antonio-decking-pros",
      "/gallery",
      "/free-estimate-san-antonio",
      "/blog",
      ...blogPosts.map((post) => `/blog/${post.slug}`),
      "/service-areas",
      ...serviceAreas.map((area) => `/service-areas/${area.slug}`),
      ...services.flatMap((service) => serviceAreas.map((area) => `/${service.slug}/${area.slug}`)),
    ];

    const sitemapUrls = [];

    for (const routePath of routes) {
      const { html, headData } = await render(routePath);
      const pageHtml = injectPage(template, html, headData, business);
      const outPath =
        routePath === "/"
          ? path.join(distDir, "index.html")
          : path.join(distDir, routePath.slice(1), "index.html");
      await fs.mkdir(path.dirname(outPath), { recursive: true });
      await fs.writeFile(outPath, pageHtml);
      if (!headData?.noindex) {
        sitemapUrls.push(`${business.baseUrl}${routePath}`);
      }
    }

    // Vercel serves dist/404.html automatically for unmatched static paths.
    const { html: notFoundHtml, headData: notFoundHead } = await render("/__prerender_404__");
    const notFoundPageHtml = injectPage(template, notFoundHtml, notFoundHead, business);
    await fs.writeFile(path.join(distDir, "404.html"), notFoundPageHtml);

    await fs.writeFile(path.join(distDir, "sitemap.xml"), buildSitemap(sitemapUrls));

    const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: ${business.baseUrl}/sitemap.xml\n`;
    await fs.writeFile(path.join(distDir, "robots.txt"), robotsTxt);

    console.log(
      `Prerendered ${routes.length} routes + 404 page. sitemap.xml has ${sitemapUrls.length} URLs.`,
    );
  } finally {
    await vite.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
