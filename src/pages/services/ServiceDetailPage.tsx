import { Link } from "react-router-dom";
import PageMeta from "../../components/PageMeta";
import PageHero from "../../components/PageHero";
import SectionEyebrow from "../../components/SectionEyebrow";
import ProcessSteps from "../../components/ProcessSteps";
import FaqAccordion from "../../components/FaqAccordion";
import CtaSection from "../../components/CtaSection";
import YouMayAlsoNeed from "../../components/YouMayAlsoNeed";
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
  const introRef = useFadeUp<HTMLDivElement>();
  const processRef = useFadeUp<HTMLDivElement>();
  const faqRef = useFadeUp<HTMLDivElement>();
  const areasRef = useFadeUp<HTMLDivElement>();

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

      <section className="section bg-white">
        <div className="container-page">
          <div ref={introRef} className="fade-up grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <SectionEyebrow eyebrow={service.eyebrow} heading={service.tagline} subtitle={undefined} />
              <div className="mt-6 space-y-4">
                {service.intro.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="text-mid text-[17px]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <DeckImagePlaceholder label={`${service.shortName} — San Antonio, TX`} />
              <div className="mt-6 bg-cream border border-rule rounded-sm p-6">
                <h3 className="text-navy">What's Included</h3>
                <ul className="mt-4 space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-charcoal text-[15px]">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gold shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-page">
          <div ref={processRef} className="fade-up">
            <SectionEyebrow eyebrow="Our Process" heading="How This Project Works" align="center" />
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
              <FaqAccordion items={service.faqs.map((faq) => ({ question: faq.question, answer: faq.answer }))} />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-section-alt">
        <div className="container-page">
          <div ref={areasRef} className="fade-up">
            <SectionEyebrow
              eyebrow="Where We Build"
              heading={`Areas We Offer ${service.shortName} In`}
              align="center"
            />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <Link
                  key={area.slug}
                  to={`/${service.slug}/${area.slug}`}
                  className="px-5 py-2.5 bg-white border border-rule rounded-full text-sm font-heading font-semibold uppercase tracking-wide text-navy hover:border-gold hover:text-gold transition-colors"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <YouMayAlsoNeed currentSlug={service.slug} />

      <CtaSection
        heading={`Ready to Start Your ${service.shortName} Project?`}
        subtext={`Get a free, written estimate for ${service.shortName.toLowerCase()} from a licensed San Antonio deck builder.`}
      />
    </>
  );
}
