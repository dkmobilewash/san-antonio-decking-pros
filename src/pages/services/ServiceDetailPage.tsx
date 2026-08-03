import { Link } from "react-router-dom";
import PageMeta from "../../components/PageMeta";
import PageHero from "../../components/PageHero";
import SectionEyebrow from "../../components/SectionEyebrow";
import ServiceCard from "../../components/ServiceCard";
import ProcessSteps from "../../components/ProcessSteps";
import FaqAccordion from "../../components/FaqAccordion";
import CtaSection from "../../components/CtaSection";
import DeckImagePlaceholder from "../../components/DeckImagePlaceholder";
import { business } from "../../data/business";
import type { Service } from "../../data/services";
import { serviceAreas } from "../../data/serviceAreas";
import { useFadeUp } from "../../hooks/useFadeUp";
import { serviceSchema } from "../../lib/schema";

interface ServiceDetailPageProps {
  service: Service;
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const aboutRef = useFadeUp<HTMLDivElement>();
  const processRef = useFadeUp<HTMLDivElement>();
  const includedRef = useFadeUp<HTMLDivElement>();
  const whyUsRef = useFadeUp<HTMLDivElement>();
  const benefitsRef = useFadeUp<HTMLDivElement>();
  const areasRef = useFadeUp<HTMLDivElement>();
  const faqRef = useFadeUp<HTMLDivElement>();

  return (
    <>
      <PageMeta
        title={`${service.shortName} San Antonio | ${business.name}`}
        description={service.description}
        path={`/${service.slug}`}
        schema={serviceSchema(service)}
      />
      <PageHero
        title={service.name}
        subtitle={service.heroSubtitle}
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/decking-services" },
          { label: service.shortName },
        ]}
      />

      {/* About */}
      <section className="section bg-white">
        <div className="container-page">
          <div ref={aboutRef} className="fade-up grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <SectionEyebrow eyebrow={service.eyebrow} heading={`About ${service.shortName}`} />
              <div className="mt-6 space-y-4">
                {service.about.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="text-mid text-[17px]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <DeckImagePlaceholder label={`${service.shortName} — San Antonio, TX`} />
              <div className="mt-6 bg-cream border border-rule rounded-sm p-6">
                <p className="font-serif italic text-lg text-navy">"{service.tagline}"</p>
                <Link to="/free-estimate-san-antonio" className="btn-primary mt-5">
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-cream">
        <div className="container-page">
          <div ref={processRef} className="fade-up">
            <SectionEyebrow eyebrow="Our Process" heading="What It's Like Working With Us" align="center" />
            <div className="mt-10">
              <ProcessSteps steps={service.process} />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section bg-white">
        <div className="container-page">
          <div ref={includedRef} className="fade-up">
            <SectionEyebrow
              eyebrow="Scope of Work"
              heading="What's Included, Start to Finish"
              align="center"
            />
            <div className="mt-10 grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
              {service.included.map((group) => (
                <div key={group.category} className="bg-cream border border-rule rounded-sm p-6">
                  <h3 className="text-navy">{group.category}</h3>
                  <ul className="mt-4 space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-charcoal text-[15px]">
                        <span className="mt-1 h-2 w-2 rounded-full bg-gold shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Stand Out */}
      <section className="section bg-cream">
        <div className="container-page">
          <div ref={whyUsRef} className="fade-up">
            <SectionEyebrow
              eyebrow="Why San Antonio Decking Pros"
              heading={`How We Stand Out for ${service.shortName}`}
              align="center"
            />
            <div className="mt-10 grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
              {service.whyUs.map((point) => (
                <div key={point.title} className="bg-white border-t-4 border-gold rounded-sm p-6 shadow-sm">
                  <h3 className="text-navy">{point.title}</h3>
                  <p className="mt-3 text-mid text-[15px]">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="section bg-white">
        <div className="container-page">
          <div ref={benefitsRef} className="fade-up">
            <SectionEyebrow
              eyebrow="Is This Right for You?"
              heading={`Who Benefits From ${service.shortName}`}
              subtitle={service.whoBenefits.intro}
              align="center"
            />
            <div className="mt-10 grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
              {service.whoBenefits.personas.map((persona) => (
                <div key={persona.title} className="bg-cream border border-rule rounded-sm p-6">
                  <h3 className="text-navy">{persona.title}</h3>
                  <p className="mt-3 text-mid text-[15px]">{persona.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Showcase */}
      <section className="section bg-cream">
        <div className="container-page">
          <div ref={areasRef} className="fade-up">
            <SectionEyebrow
              eyebrow="Where We Build"
              heading={`Areas We Offer ${service.shortName} In`}
              align="center"
            />
            <div className="mt-10 grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
              {serviceAreas.map((area) => (
                <ServiceCard
                  key={area.slug}
                  title={area.name}
                  description={area.tagline}
                  href={`/${service.slug}/${area.slug}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-page max-w-3xl">
          <div ref={faqRef} className="fade-up">
            <SectionEyebrow eyebrow="Common Questions" heading="Frequently Asked Questions" align="center" />
            <div className="mt-10">
              <FaqAccordion items={service.faqs.map((faq) => ({ question: faq.question, answer: faq.answer }))} />
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        heading={`Ready to Start Your ${service.shortName} Project?`}
        subtext={`Get a free, written estimate for ${service.shortName.toLowerCase()} from a licensed San Antonio deck builder.`}
      />
    </>
  );
}
