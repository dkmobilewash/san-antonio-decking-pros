import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import PageHero from "../components/PageHero";
import CtaSection from "../components/CtaSection";
import { business } from "../data/business";
import { serviceAreas } from "../data/serviceAreas";
import { useFadeUp } from "../hooks/useFadeUp";
import { localBusinessSchema } from "../lib/schema";

export default function ServiceAreasIndex() {
  const gridRef = useFadeUp<HTMLDivElement>();

  return (
    <>
      <PageMeta
        title={`Service Areas | ${business.name}`}
        description="San Antonio Decking Pros builds and repairs decks throughout the San Antonio metro, including Alamo Heights, Stone Oak, Boerne, New Braunfels, and more."
        path="/service-areas"
        schema={localBusinessSchema()}
      />
      <PageHero
        title="Service Areas"
        subtitle="We build and repair decks throughout the San Antonio metro. Find local details for your neighborhood below."
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Service Areas" }]}
      />

      <section className="section bg-white">
        <div className="container-page">
          <div
            ref={gridRef}
            className="fade-up grid gap-6"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
          >
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                to={`/service-areas/${area.slug}`}
                className="group block bg-white border-t-4 border-gold rounded-sm p-7 shadow-sm hover:bg-cream transition-colors"
              >
                <h3 className="text-navy">{area.name}</h3>
                <p className="mt-3 text-mid text-[15px]">{area.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-1 font-heading font-semibold uppercase text-sm tracking-wide text-gold group-hover:text-gold-lt">
                  View Area
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
