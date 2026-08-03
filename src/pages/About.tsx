import PageMeta from "../components/PageMeta";
import PageHero from "../components/PageHero";
import SectionEyebrow from "../components/SectionEyebrow";
import ProcessSteps from "../components/ProcessSteps";
import FaqAccordion from "../components/FaqAccordion";
import CtaSection from "../components/CtaSection";
import YouMayAlsoNeed from "../components/YouMayAlsoNeed";
import DeckImagePlaceholder from "../components/DeckImagePlaceholder";
import { business, fullAddress } from "../data/business";
import { useFadeUp } from "../hooks/useFadeUp";
import { localBusinessSchema, faqPageSchema, breadcrumbListSchema } from "../lib/schema";

const process = [
  { title: "We Listen", description: "Every project starts with understanding how you actually want to use the space." },
  { title: "We Design", description: "Layouts and material choices are tailored to your home, soil, and budget." },
  { title: "We Build", description: "Our own crews build the project — no rotating subcontractors, no lost accountability." },
  { title: "We Stand Behind It", description: "Every project is backed by a workmanship warranty and a real phone number to call." },
];

const trustPoints = [
  `${business.license}`,
  "General liability & workers' compensation insured",
  `${business.yearsInBusiness}+ years building decks in the San Antonio area`,
  "Locally owned and operated — not a national franchise",
];

const faqs = [
  {
    question: "How long has San Antonio Decking Pros been in business?",
    answer: `We've been designing and building decks in the San Antonio area since ${business.founded}, with crews that have worked across nearly every neighborhood and terrain type in the metro.`,
  },
  {
    question: "Do you subcontract your work?",
    answer:
      "No. Our framing and installation crews are our own employees, not rotating subcontractors, which is why we can guarantee consistent quality and stand fully behind our workmanship warranty.",
  },
  {
    question: "What makes San Antonio Decking Pros different from other contractors?",
    answer:
      "We build almost exclusively in this region, which means our designs already account for expansive clay soil, Hill Country grade change, and the UV and heat load that breaks down materials faster here than in milder climates.",
  },
];

const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "About" }];

export default function About() {
  const introRef = useFadeUp<HTMLDivElement>();
  const processRef = useFadeUp<HTMLDivElement>();
  const faqRef = useFadeUp<HTMLDivElement>();

  return (
    <>
      <PageMeta
        title={`About Us | ${business.name}`}
        description={`Learn about ${business.name} — a licensed, insured deck building company serving San Antonio, TX since ${business.founded}.`}
        path="/about-san-antonio-decking-pros"
        schema={[
          localBusinessSchema(),
          faqPageSchema(faqs),
          breadcrumbListSchema(breadcrumbItems, "/about-san-antonio-decking-pros"),
        ]}
      />
      <PageHero
        title="About San Antonio Decking Pros"
        subtitle="A locally owned deck building company that's spent nearly two decades learning what actually holds up in South Texas."
        breadcrumbItems={breadcrumbItems}
      />

      <section className="section bg-white">
        <div className="container-page">
          <div ref={introRef} className="fade-up grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <SectionEyebrow eyebrow="Our Story" heading="Built From the Ground Up in San Antonio" />
              <p className="mt-6 text-mid text-[17px]">
                {business.name} started with a simple frustration: too many decks in this region were
                being built with framing and finish choices copied from contractors up north, and they
                were failing early because of it. Since {business.founded}, we've focused on one thing —
                decks engineered specifically for San Antonio's soil, heat, and storms.
              </p>
              <p className="mt-4 text-mid text-[17px]">
                Today our crews have built and repaired decks across the metro, from tight in-town lots
                in Live Oak to sloped Hill Country acreage in Boerne and Helotes. Every estimate we
                write reflects that hands-on regional experience.
              </p>
              <ul className="mt-6 space-y-3">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-charcoal">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gold shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <DeckImagePlaceholder label={`${business.name} Crew — ${fullAddress}`} />
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-page">
          <div ref={processRef} className="fade-up">
            <SectionEyebrow eyebrow="How We Work" heading="Our Approach to Every Project" align="center" />
            <div className="mt-10">
              <ProcessSteps steps={process} />
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

      <YouMayAlsoNeed />

      <CtaSection />
    </>
  );
}
