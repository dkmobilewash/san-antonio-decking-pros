import PageMeta from "../components/PageMeta";
import PageHero from "../components/PageHero";
import SectionEyebrow from "../components/SectionEyebrow";
import ServiceCard from "../components/ServiceCard";
import ProcessSteps from "../components/ProcessSteps";
import FaqAccordion from "../components/FaqAccordion";
import CtaSection from "../components/CtaSection";
import DeckImagePlaceholder from "../components/DeckImagePlaceholder";
import { business } from "../data/business";
import { services } from "../data/services";
import { useFadeUp } from "../hooks/useFadeUp";
import { localBusinessSchema } from "../lib/schema";

const process = [
  { title: "Consult", description: "We assess your space, discuss goals, and recommend the right service for your project." },
  { title: "Quote", description: "You get a written, itemized estimate with no vague allowances or hidden fees." },
  { title: "Schedule", description: "We confirm a start date and, where needed, handle permit filing before crew arrives." },
  { title: "Complete", description: "Work is finished on schedule and inspected with you before final payment." },
];

const faqs = [
  {
    question: "Which decking service is right for my project?",
    answer:
      "If you're starting from scratch, Custom Deck Design & Installation is the place to start. If you have an existing deck showing wear, Deck Repair & Restoration or Deck Staining & Sealing usually fits better. We're happy to advise during a free consultation if you're not sure.",
  },
  {
    question: "Do you offer combined services, like a new deck with a screened porch?",
    answer:
      "Yes — combining a new deck build with a screened porch, patio cover, or pool deck extension is one of our most common project types, and we design them together from the start rather than as separate add-ons.",
  },
  {
    question: "Do all your services include a warranty?",
    answer:
      "All new construction includes a workmanship warranty, and composite decking carries the manufacturer's material warranty (typically 25–50 years). Ask about specific warranty terms for your project during your estimate.",
  },
];

export default function ServicesOverview() {
  const introRef = useFadeUp<HTMLDivElement>();
  const gridRef = useFadeUp<HTMLDivElement>();
  const processRef = useFadeUp<HTMLDivElement>();
  const faqRef = useFadeUp<HTMLDivElement>();

  return (
    <>
      <PageMeta
        title={`Decking Services San Antonio | ${business.name}`}
        description="Explore all of San Antonio Decking Pros' services — custom deck design and installation, repair, staining, composite decking, pool decks, and screened porches."
        path="/decking-services"
        schema={localBusinessSchema()}
      />
      <PageHero
        title="Decking Services"
        subtitle="Everything we build, repair, and maintain for San Antonio homeowners — under one licensed, insured company."
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="section bg-white">
        <div className="container-page">
          <div ref={introRef} className="fade-up grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <SectionEyebrow eyebrow="Full-Service Decking" heading="One Contractor for the Entire Project" />
              <p className="mt-6 text-mid text-[17px]">
                Whether you need a brand-new deck from the ground up or your existing deck needs
                structural repair and a fresh coat of stain, our crews handle it in-house — no
                subcontractor guesswork and no gaps in accountability.
              </p>
            </div>
            <DeckImagePlaceholder label="Composite Deck Installation — San Antonio, TX" />
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-page">
          <div ref={gridRef} className="fade-up">
            <SectionEyebrow eyebrow="Our Services" heading="Choose a Service" align="center" />
            <div className="mt-10 grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
              {services.map((service) => (
                <ServiceCard
                  key={service.slug}
                  title={service.shortName}
                  description={service.description}
                  href={`/${service.slug}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <div ref={processRef} className="fade-up">
            <SectionEyebrow eyebrow="Getting Started" heading="What to Expect" align="center" />
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

      <CtaSection />
    </>
  );
}
