import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import PageHero from "../components/PageHero";
import CtaSection from "../components/CtaSection";
import { business } from "../data/business";
import { blogPosts } from "../data/blogPosts";
import { useFadeUp } from "../hooks/useFadeUp";
import { localBusinessSchema } from "../lib/schema";

function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndex() {
  const gridRef = useFadeUp<HTMLDivElement>();

  return (
    <>
      <PageMeta
        title={`Decking Tips & Guides | ${business.name} Blog`}
        description="Practical guides on deck materials, costs, maintenance, and permitting from San Antonio Decking Pros."
        path="/blog"
        schema={localBusinessSchema()}
      />
      <PageHero
        title="Decking Tips & Guides"
        subtitle="Real answers on materials, costs, maintenance, and permitting from a San Antonio deck builder."
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="section bg-white">
        <div className="container-page">
          <div
            ref={gridRef}
            className="fade-up grid gap-8"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
          >
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block bg-white border border-rule rounded-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-3 bg-gold" />
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs font-heading uppercase tracking-wide text-gold font-semibold">
                    <span>{post.tag}</span>
                    <span className="text-mid">&middot;</span>
                    <span className="text-mid font-body normal-case tracking-normal">{post.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-navy group-hover:text-gold transition-colors">{post.title}</h3>
                  <p className="mt-3 text-mid text-[15px]">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-sm">
                    <span className="text-mid">{formatDate(post.date)}</span>
                    <span className="font-heading font-semibold uppercase text-gold group-hover:text-gold-lt">
                      Read More &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
