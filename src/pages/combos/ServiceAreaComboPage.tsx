import { Link, Navigate, useParams } from "react-router-dom";
import PageMeta from "../../components/PageMeta";
import PageHero from "../../components/PageHero";
import SectionEyebrow from "../../components/SectionEyebrow";
import ServiceCard from "../../components/ServiceCard";
import ProcessSteps from "../../components/ProcessSteps";
import FaqAccordion from "../../components/FaqAccordion";
import CtaSection from "../../components/CtaSection";
import DeckImagePlaceholder from "../../components/DeckImagePlaceholder";
import { business } from "../../data/business";
import { services, getServiceBySlug } from "../../data/services";
import { serviceAreas, getServiceAreaBySlug } from "../../data/serviceAreas";
import { useFadeUp } from "../../hooks/useFadeUp";
import { serviceAreaComboSchema } from "../../lib/schema";

export default function ServiceAreaComboPage() {
  const { serviceSlug, areaSlug } = useParams<{ serviceSlug: string; areaSlug: string }>();
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
  const area = areaSlug ? getServiceAreaBySlug(areaSlug) : undefined;

  const introRef = useFadeUp<HTMLDivElement>();
  const processRef = useFadeUp<HTMLDivElement>();
  const faqRef = useFadeUp<HTMLDivElement>();
  const otherServicesRef = useFadeUp<HTMLDivElement>();
  const otherAreasRef = useFadeUp<HTMLDivElement>();

  if (!service || !area) {
    return <Navigate to="/" replace />;
  }

  const faqs = [
    ...service.faqs.slice(0, 2),
    {
      question: `Do you offer ${service.name.toLowerCase()} in ${area.name}?`,
      answer: `Yes — ${area.name} is one of our regularly served areas for ${service.name.toLowerCase()}. ${area.why}`,
    },
    {
      question: `What should I know about ${service.shortName.toLowerCase()} projects in ${area.name}?`,
      answer: area.localNotes,
    },
  ];

  const otherServices = services.filter((s) => s.slug !== service.slug);
  const otherAreas = serviceAreas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <PageMeta
        title={`${service.shortName} in ${area.name}, TX | ${business.name}`}
        description={`${service.description} Serving homeowners in ${area.name}, TX. Free estimates from a licensed San Antonio deck builder.`}
        path={`/${service.slug}/${area.slug}`}
        schema={serviceAreaComboSchema(service, area)}
      />
      <PageHero
        title={`${service.shortName} in ${area.name}, TX`}
        subtitle={`Licensed ${service.shortName.toLowerCase()} for homeowners in ${area.name} — built by a crew that knows the local terrain and permitting.`}
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: service.shortName, href: `/${service.slug}` },
          { label: area.name },
        ]}
      />

      <section className="section bg-white">
        <div className="container-page">
          <div ref={introRef} className="fade-up grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <SectionEyebrow eyebrow={service.eyebrow} heading={`${service.shortName} Built for ${area.name}`} />
              <div className="mt-6 space-y-4">
                <p className="text-mid text-[17px]">{service.intro[0]}</p>
                <p className="text-mid text-[17px]">
                  {area.why} When it comes to {service.name.toLowerCase()} specifically, {area.localNotes}
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {service.benefits.slice(0, 4).map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-charcoal">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gold shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <DeckImagePlaceholder label={`${service.shortName} — ${area.name}, TX`} />
              <div className="mt-6 bg-cream border border-rule rounded-sm p-6">
                <h3 className="text-navy">{area.name} at a Glance</h3>
                <p className="mt-3 text-mid text-[15px]">{area.tagline}</p>
                <p className="mt-3 text-mid text-[15px]">{area.intro}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-page">
          <div ref={processRef} className="fade-up">
            <SectionEyebrow eyebrow="Our Process" heading={`How ${service.shortName} Works in ${area.name}`} align="center" />
            <div className="mt-10">
              <ProcessSteps steps={service.process} />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page max-w-3xl">
          <div ref={faqRef} className="fade-up">
            <SectionEyebrow eyebrow="Common Questions" heading="Frequently Asked Questions" align="center" />
            <div className="mt-10">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-page">
          <div ref={otherServicesRef} className="fade-up">
            <SectionEyebrow eyebrow="More in This Area" heading={`Other Services in ${area.name}`} align="center" />
            <div className="mt-10 grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
              {otherServices.map((s) => (
                <ServiceCard
                  key={s.slug}
                  title={s.shortName}
                  description={s.description}
                  href={`/${s.slug}/${area.slug}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <div ref={otherAreasRef} className="fade-up">
            <SectionEyebrow eyebrow="More Locations" heading={`${service.shortName} in Other Areas`} align="center" />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {otherAreas.map((a) => (
                <Link
                  key={a.slug}
                  to={`/${service.slug}/${a.slug}`}
                  className="px-5 py-2.5 bg-white border border-rule rounded-full text-sm font-heading font-semibold uppercase tracking-wide text-navy hover:border-gold hover:text-gold transition-colors"
                >
                  {a.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        heading={`Ready for ${service.shortName} in ${area.name}?`}
        subtext={area.closingLine}
      />
    </>
  );
}
