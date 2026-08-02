import { Link } from "react-router-dom";
import { business } from "../data/business";
import { useFadeUp } from "../hooks/useFadeUp";

interface CtaSectionProps {
  heading?: string;
  subtext?: string;
  estimateHref?: string;
}

export default function CtaSection({
  heading = "Ready to Start Your Deck Project?",
  subtext = "Get a free, no-pressure estimate from a licensed San Antonio deck builder. We'll walk your property and give you a written quote.",
  estimateHref = "/free-estimate-san-antonio",
}: CtaSectionProps) {
  const ref = useFadeUp<HTMLDivElement>();

  return (
    <section className="section bg-navy text-white">
      <div className="container-page">
        <div ref={ref} className="fade-up text-center max-w-2xl mx-auto">
          <h2 className="text-white">{heading}</h2>
          <p className="mt-5 text-white/85 text-lg">{subtext}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={business.phoneHref} className="btn-primary">
              Call {business.phone}
            </a>
            <Link to={estimateHref} className="btn-secondary">
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
