import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { business } from "../data/business";

export default function NotFound() {
  return (
    <>
      <PageMeta
        title={`Page Not Found | ${business.name}`}
        description="The page you're looking for doesn't exist. Browse our decking services and service areas instead."
        path="/404"
        noindex
      />
      <section className="text-white page-hero-gradient">
        <div className="container-page py-24 text-center">
          <span className="inline-block font-heading uppercase tracking-[0.2em] text-xs md:text-sm text-gold-lt font-semibold">
            404 Error
          </span>
          <h1 className="mt-4 text-white">Page Not Found</h1>
          <p className="mt-6 max-w-xl mx-auto text-lg text-white/90">
            We couldn't find the page you were looking for. It may have been moved, or the link may
            be out of date.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link to="/" className="btn-primary">
              Back to Homepage
            </Link>
            <Link to="/decking-services" className="btn-secondary">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
