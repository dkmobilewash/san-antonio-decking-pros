import PageMeta from "../../components/PageMeta";
import PageHero from "../../components/PageHero";
import SectionEyebrow from "../../components/SectionEyebrow";
import ServiceCard from "../../components/ServiceCard";
import FaqAccordion from "../../components/FaqAccordion";
import CtaSection from "../../components/CtaSection";
import DeckImagePlaceholder from "../../components/DeckImagePlaceholder";
import { Link } from "react-router-dom";
import { business } from "../../data/business";
import { services } from "../../data/services";
import { serviceAreas, type ServiceArea } from "../../data/serviceAreas";
import { useFadeUp } from "../../hooks/useFadeUp";
import { serviceAreaSchema, faqPageSchema, breadcrumbListSchema } from "../../lib/schema";

interface ServiceAreaPageProps {
  area: ServiceArea;
}

export default function ServiceAreaPage({ area }: ServiceAreaPageProps) {
  const aboutRef = useFadeUp<HTMLDivElement>();
  const caseStudiesRef = useFadeUp<HTMLDivElement>();
  const whyNumberOneRef = useFadeUp<HTMLDivElement>();
  const servicesRef = useFadeUp<HTMLDivElement>();
  const exploreMoreRef = useFadeUp<HTMLDivElement>();
  const faqRef = useFadeUp<HTMLDivElement>();

  const nearbyAreas = serviceAreas.filter((otherArea) => otherArea.slug !== area.slug);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas" },
    { label: area.name },
  ];

  return (
    <>
      <PageMeta
        title={`Deck Builder ${area.name}, TX | ${business.name}`}
        description={`${business.name} builds and repairs custom decks in ${area.name}, TX. ${area.tagline}. Free estimates.`}
        path={`/service-areas/${area.slug}`}
        schema={[
          serviceAreaSchema(area),
          faqPageSchema(area.faqs),
          breadcrumbListSchema(breadcrumbItems, `/service-areas/${area.slug}`),
        ]}
      />
      <PageHero
        title={`Deck Builders in ${area.name}, TX`}
        subtitle={area.tagline}
        breadcrumbItems={breadcrumbItems}
      />

      {/* About decking in this area */}
      <section className="section bg-white">
        <div className="container-page">
          <div ref={aboutRef} className="fade-up grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <SectionEyebrow eyebrow="Local Expertise" heading={`Decking in ${area.name}, TX`} />
              <div className="mt-6 space-y-4">
                {area.aboutDecking.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="text-mid text-[17px]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <DeckImagePlaceholder label={`Recent Project — ${area.name}, TX`} />
              <div className="mt-6 bg-cream border border-rule rounded-sm p-6">
                <p className="font-serif italic text-lg text-navy">"{area.tagline}"</p>
                <Link to="/free-estimate-san-antonio" className="btn-primary mt-5">
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="section bg-cream">
        <div className="container-page">
          <div ref={caseStudiesRef} className="fade-up">
            <SectionEyebrow
              eyebrow="Case Studies"
              heading={`Recent Project Spotlights in ${area.name}`}
              align="center"
            />
            <div className="mt-10 grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
              {area.caseStudies.map((caseStudy) => (
                <div key={caseStudy.title} className="bg-white border-t-4 border-gold rounded-sm p-7 shadow-sm">
                  <h3 className="text-navy">{caseStudy.title}</h3>
                  <p className="mt-3 text-mid text-[15px]">{caseStudy.description}</p>
                  <p className="mt-4 text-charcoal text-[15px]">
                    <span className="font-heading font-semibold uppercase text-xs tracking-wide text-gold">
                      Result:{" "}
                    </span>
                    {caseStudy.result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why we're #1 */}
      <section className="section bg-white">
        <div className="container-page">
          <div ref={whyNumberOneRef} className="fade-up">
            <SectionEyebrow
              eyebrow="Local Authority"
              heading={`What Makes ${business.name} #1 in ${area.name}`}
              align="center"
            />
            <div className="mt-10 grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
              {area.whyNumberOne.map((point) => (
                <div key={point.title} className="bg-cream border border-rule rounded-sm p-6">
                  <h3 className="text-navy">{point.title}</h3>
                  <p className="mt-3 text-mid text-[15px]">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services showcase */}
      <section className="section bg-cream">
        <div className="container-page">
          <div ref={servicesRef} className="fade-up">
            <SectionEyebrow
              eyebrow="Full Service List"
              heading={`Every Service We Offer in ${area.name}`}
              align="center"
            />
            <div className="mt-10 grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
              {services.map((service) => (
                <ServiceCard
                  key={service.slug}
                  title={service.shortName}
                  description={service.description}
                  href={`/${service.slug}/${area.slug}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore more: parent service pages + nearby areas */}
      <section className="section bg-white">
        <div className="container-page">
          <div ref={exploreMoreRef} className="fade-up grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-navy">Learn More About Our Services</h3>
              <ul className="mt-4 space-y-2.5">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link to={`/${service.slug}`} className="text-gold hover:text-gold-lt font-semibold">
                      {service.shortName} &rarr;
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-navy">Nearby Service Areas</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {nearbyAreas.map((nearbyArea) => (
                  <Link
                    key={nearbyArea.slug}
                    to={`/service-areas/${nearbyArea.slug}`}
                    className="px-4 py-2 bg-cream border border-rule rounded-full text-sm font-heading font-semibold uppercase tracking-wide text-navy hover:border-gold hover:text-gold transition-colors"
                  >
                    {nearbyArea.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cream">
        <div className="container-page max-w-3xl">
          <div ref={faqRef} className="fade-up">
            <SectionEyebrow eyebrow="Common Questions" heading="Frequently Asked Questions" align="center" />
            <div className="mt-10">
              <FaqAccordion items={area.faqs} />
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        heading={`Ready to Build in ${area.name}?`}
        subtext={area.closingLine}
      />
    </>
  );
}
