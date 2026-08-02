import PageMeta from "../../components/PageMeta";
import PageHero from "../../components/PageHero";
import SectionEyebrow from "../../components/SectionEyebrow";
import ServiceCard from "../../components/ServiceCard";
import ProcessSteps from "../../components/ProcessSteps";
import FaqAccordion from "../../components/FaqAccordion";
import CtaSection from "../../components/CtaSection";
import YouMayAlsoNeed from "../../components/YouMayAlsoNeed";
import DeckImagePlaceholder from "../../components/DeckImagePlaceholder";
import { business } from "../../data/business";
import { services } from "../../data/services";
import type { ServiceArea } from "../../data/serviceAreas";
import { useFadeUp } from "../../hooks/useFadeUp";
import { serviceAreaSchema } from "../../lib/schema";

interface ServiceAreaPageProps {
  area: ServiceArea;
}

const process = [
  { title: "Site Visit", description: "We walk your property and take measurements specific to your lot's terrain and soil." },
  { title: "Design & Permit", description: "We design around local requirements and file for permits with the correct jurisdiction." },
  { title: "Build", description: "Our crew builds on a written schedule, coordinated around local HOA or inspection timing." },
  { title: "Final Inspection", description: "We pass final inspection and walk the finished project with you." },
];

export default function ServiceAreaPage({ area }: ServiceAreaPageProps) {
  const introRef = useFadeUp<HTMLDivElement>();
  const servicesRef = useFadeUp<HTMLDivElement>();
  const processRef = useFadeUp<HTMLDivElement>();
  const faqRef = useFadeUp<HTMLDivElement>();
  const allServicesRef = useFadeUp<HTMLDivElement>();

  const topServices = services.filter((service) => area.topServices.includes(service.name));

  const faqs = [
    {
      question: `Do you build decks in ${area.name}?`,
      answer: `Yes — ${area.name} is one of our regularly served areas. ${area.why}`,
    },
    {
      question: `What permits are required for a deck in ${area.name}?`,
      answer: area.localNotes,
    },
    {
      question: `What decking material works best for ${area.name} homes?`,
      answer:
        "It depends on your sun exposure and maintenance preference — composite decking is popular for its low upkeep, while cedar and pressure-treated pine remain strong, budget-friendly choices. We'll recommend the best fit during your free consultation.",
    },
    {
      question: `How long does a typical deck project take in ${area.name}?`,
      answer:
        "Most single-level decks take 1–2 weeks to build once permits are approved, though jurisdiction-specific permit timelines can add to the overall schedule. We'll give you a realistic date range in your written estimate.",
    },
  ];

  return (
    <>
      <PageMeta
        title={`Deck Builder ${area.name}, TX | ${business.name}`}
        description={`${business.name} builds and repairs custom decks in ${area.name}, TX. ${area.tagline}. Free estimates.`}
        path={`/service-areas/${area.slug}`}
        schema={serviceAreaSchema(area)}
      />
      <PageHero
        title={`Deck Builders in ${area.name}, TX`}
        subtitle={area.tagline}
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/service-areas" },
          { label: area.name },
        ]}
      />

      <section className="section bg-white">
        <div className="container-page">
          <div ref={introRef} className="fade-up grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <SectionEyebrow eyebrow="Local Expertise" heading={`Building Decks in ${area.name}`} />
              <p className="mt-6 text-mid text-[17px]">{area.intro}</p>
              <p className="mt-4 text-mid text-[17px]">{area.why}</p>
            </div>
            <DeckImagePlaceholder label={`Recent Project — ${area.name}, TX`} />
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-page">
          <div ref={servicesRef} className="fade-up">
            <SectionEyebrow
              eyebrow="Popular in This Area"
              heading={`Top Services in ${area.name}`}
              align="center"
            />
            <div className="mt-10 grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
              {topServices.map((service) => (
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

      <section className="section bg-white">
        <div className="container-page">
          <div ref={processRef} className="fade-up">
            <SectionEyebrow eyebrow="What to Expect" heading="Our Local Process" align="center" />
            <div className="mt-10">
              <ProcessSteps steps={process} />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-page max-w-3xl">
          <div ref={faqRef} className="fade-up">
            <SectionEyebrow eyebrow="Common Questions" heading="Frequently Asked Questions" align="center" />
            <div className="mt-10">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <div ref={allServicesRef} className="fade-up">
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

      <YouMayAlsoNeed />

      <CtaSection
        heading={`Ready to Build in ${area.name}?`}
        subtext={area.closingLine}
      />
    </>
  );
}
