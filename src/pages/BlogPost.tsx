import { Navigate, useParams } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import PageHero from "../components/PageHero";
import CtaSection from "../components/CtaSection";
import { business } from "../data/business";
import { getBlogPostBySlug, type BlogSection } from "../data/blogPosts";
import { useFadeUp } from "../hooks/useFadeUp";
import { blogPostingSchema } from "../lib/schema";

function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case "h2":
      return (
        <h2 key={index} className="text-navy mt-10 mb-4 text-2xl md:text-3xl">
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={index} className="text-navy mt-8 mb-3">
          {section.text}
        </h3>
      );
    case "p":
      return (
        <p key={index} className="text-charcoal text-[17px] mb-4">
          {section.text}
        </p>
      );
    case "ul":
      return (
        <ul key={index} className="mb-4 space-y-2 list-none">
          {section.items?.map((item) => (
            <li key={item} className="flex items-start gap-3 text-charcoal text-[17px]">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={index} className="mb-4 space-y-2 list-decimal list-inside marker:text-gold marker:font-semibold">
          {section.items?.map((item) => (
            <li key={item} className="text-charcoal text-[17px] pl-1">
              {item}
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <div key={index} className="my-6 bg-cream border-l-4 border-gold rounded-sm p-5">
          <p className="text-charcoal text-[16px] italic font-serif">{section.text}</p>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const contentRef = useFadeUp<HTMLDivElement>();

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <PageMeta
        title={`${post.title} | ${business.name} Blog`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        schema={blogPostingSchema(post)}
      />
      <PageHero
        title={post.title}
        subtitle={`${post.tag} · ${formatDate(post.date)} · ${post.readTime}`}
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <section className="section bg-white">
        <div className="container-page max-w-3xl">
          <div ref={contentRef} className="fade-up">
            {post.content.map((section, index) => renderSection(section, index))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
