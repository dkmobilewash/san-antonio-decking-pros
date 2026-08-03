import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import SectionEyebrow from "../components/SectionEyebrow";
import ServiceCard from "../components/ServiceCard";
import ProcessSteps from "../components/ProcessSteps";
import FaqAccordion from "../components/FaqAccordion";
import CtaSection from "../components/CtaSection";
import DeckImagePlaceholder from "../components/DeckImagePlaceholder";
import { business } from "../data/business";
import { services } from "../data/services";
import { serviceAreas } from "../data/serviceAreas";
import { useFadeUp } from "../hooks/useFadeUp";
import { localBusinessSchema, faqPageSchema } from "../lib/schema";

const process = [
  {
    title: "Free Consultation",
    description: "We walk your property, talk through your goals, and sketch a layout that fits your budget.",
  },
  {
    title: "Design & Permits",
    description: "We engineer the structure for our soil and climate, then handle permit filing and approvals.",
  },
  {
    title: "Build",
    description: "Our crew frames, decks, and finishes your project on a written schedule — most builds run 1–3 weeks.",
  },
  {
    title: "Walkthrough",
    description: "We inspect every detail with you, pass final inspection, and hand over care instructions.",
  },
];

const faqs = [
  {
    question: "How much does a new deck cost in San Antonio?",
    answer:
      "Most pressure-treated pine decks run $28–$40 per square foot installed, cedar runs $38–$55, and composite runs $48–$70. A typical 300 sq ft deck lands between $8,400 and $21,000 depending on material and design complexity. We provide a free, itemized estimate for your exact project.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      `Yes. ${business.name} is fully licensed and carries general liability and workers' compensation insurance. We can provide certificates of insurance on request before any work begins.`,
  },
  {
    question: "Do you handle permits and HOA approval?",
    answer:
      "Yes, permit filing is included on every project that requires one, and we prepare the documentation package most HOAs request for architectural review before construction starts.",
  },
  {
    question: "What areas do you serve around San Antonio?",
    answer:
      "We build throughout the San Antonio metro, including Alamo Heights, Stone Oak, Boerne, New Braunfels, Schertz, Helotes, Converse, Live Oak, and Universal City. See our full service area list for details specific to your neighborhood.",
  },
];

export default function Home() {
  const introRef = useFadeUp<HTMLDivElement>();
  const servicesRef = useFadeUp<HTMLDivElement>();
  const processRef = useFadeUp<HTMLDivElement>();
  const areasRef = useFadeUp<HTMLDivElement>();
  const faqRef = useFadeUp<HTMLDivElement>();

  return (
    <>
      <PageMeta
        title={`Deck Builder San Antonio | ${business.name}`}
        description="Licensed San Antonio deck builders specializing in custom wood and composite decks, repairs, and outdoor living structures. Free estimates."
        path="/"
        schema={[localBusinessSchema(), faqPageSchema(faqs)]}
      />

      {/* Hero */}
      <section className="relative text-white page-hero-gradient">
        <div className="container-page py-20 md:py-28 text-center">
          <span className="inline-block font-heading uppercase tracking-[0.2em] text-xs md:text-sm text-gold-lt font-semibold">
            San Antonio, TX &middot; Licensed &amp; Insured
          </span>
          <h1 className="mt-4 text-white">{business.tagline}</h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/90">
            {business.name} designs and builds custom wood and composite decks engineered for Hill
            Country terrain and South Texas heat — plus repair, staining, and outdoor living structures
            for decks you already own.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link to="/free-estimate-san-antonio" className="btn-primary">
              Get Free Estimate
            </Link>
            <a href={business.phoneHref} className="btn-secondary">
              Call {business.phone}
            </a>
          </div>
        </div>
        <div className="h-1.5 w-full bg-gold" />
      </section>

      {/* Intro */}
      <section className="section bg-white">
        <div className="container-page">
          <div ref={introRef} className="fade-up grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <SectionEyebrow eyebrow="Why Homeowners Choose Us" heading="Built for San Antonio, By San Antonio Builders" />
              <p className="mt-6 text-mid text-[17px]">
                For over {business.yearsInBusiness} years we've built decks that hold up to South
                Texas summers, Hill Country grade changes, and expansive clay soil — the details that
                get overlooked by contractors who haven't built here.
              </p>
              <ul className="mt-6 space-y-3">
                {["Licensed, insured & locally owned", "Engineered footings for San Antonio soil conditions", "Written, fixed-price estimates — no surprise change orders", "Permit filing and inspection scheduling included"].map(
                  (item) => (
                    <li key={item} className="flex items-start gap-3 text-charcoal">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gold shrink-0" />
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <DeckImagePlaceholder label="Custom Cedar Deck — Alamo Heights, TX" />
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section bg-cream">
        <div className="container-page">
          <div ref={servicesRef} className="fade-up">
            <SectionEyebrow
              eyebrow="What We Build"
              heading="Our Decking Services"
              subtitle="From new construction to repair and everything in between."
              align="center"
            />
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

      {/* Process */}
      <section className="section bg-white">
        <div className="container-page">
          <div ref={processRef} className="fade-up">
            <SectionEyebrow eyebrow="How It Works" heading="From First Call to Final Walkthrough" align="center" />
            <div className="mt-10">
              <ProcessSteps steps={process} />
            </div>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="section bg-section-alt">
        <div className="container-page">
          <div ref={areasRef} className="fade-up text-center">
            <SectionEyebrow eyebrow="Where We Work" heading="Serving Greater San Antonio" align="center" />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <Link
                  key={area.slug}
                  to={`/service-areas/${area.slug}`}
                  className="px-5 py-2.5 bg-white border border-rule rounded-full text-sm font-heading font-semibold uppercase tracking-wide text-navy hover:border-gold hover:text-gold transition-colors"
                >
                  {area.name}
                </Link>
              ))}
            </div>
            <Link to="/service-areas" className="inline-block mt-8 font-heading font-semibold uppercase text-sm tracking-wide text-gold hover:text-gold-lt">
              View All Service Areas &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      <CtaSection />
    </>
  );
}
