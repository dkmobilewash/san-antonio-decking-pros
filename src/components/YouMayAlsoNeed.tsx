import { services } from "../data/services";
import ServiceCard from "./ServiceCard";
import SectionEyebrow from "./SectionEyebrow";
import { useFadeUp } from "../hooks/useFadeUp";

interface YouMayAlsoNeedProps {
  currentSlug?: string;
  count?: number;
}

export default function YouMayAlsoNeed({ currentSlug, count = 3 }: YouMayAlsoNeedProps) {
  const ref = useFadeUp<HTMLDivElement>();
  const related = services.filter((service) => service.slug !== currentSlug).slice(0, count);

  if (related.length === 0) return null;

  return (
    <section className="section bg-cream">
      <div className="container-page">
        <div ref={ref} className="fade-up">
          <SectionEyebrow eyebrow="Related Services" heading="You May Also Need" align="center" />
          <div className="mt-10 grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {related.map((service) => (
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
  );
}
