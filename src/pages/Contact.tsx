import { useState, type FormEvent } from "react";
import PageMeta from "../components/PageMeta";
import PageHero from "../components/PageHero";
import SectionEyebrow from "../components/SectionEyebrow";
import FaqAccordion from "../components/FaqAccordion";
import { business, fullAddress } from "../data/business";
import { services } from "../data/services";
import { supabase } from "../lib/supabase";
import { useFadeUp } from "../hooks/useFadeUp";
import { localBusinessSchema } from "../lib/schema";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const faqs = [
  {
    question: "Is the estimate really free?",
    answer:
      "Yes — every estimate includes an in-person visit and a written, itemized quote at no cost and no obligation.",
  },
  {
    question: "How soon will someone contact me?",
    answer: "We typically respond within one business day, often the same day for calls received before 3 PM.",
  },
  {
    question: "What information should I have ready?",
    answer:
      "Rough dimensions of the space, a general idea of your budget, and any material preferences help us prepare, but none of it is required to get started.",
  },
];

const trustBadges = ["Licensed & Insured", "Free Estimates", "Custom Designs"];

export default function Contact() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    description: "",
  });

  const formRef = useFadeUp<HTMLDivElement>();
  const faqRef = useFadeUp<HTMLDivElement>();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const { error } = await supabase.from("contact_submissions").insert({
      name: formValues.name,
      phone: formValues.phone,
      email: formValues.email,
      service: formValues.service,
      description: formValues.description,
    });

    if (error) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setFormValues({ name: "", phone: "", email: "", service: "", description: "" });
  };

  return (
    <>
      <PageMeta
        title={`Free Deck Estimate San Antonio | ${business.name}`}
        description="Request a free, no-obligation deck estimate from San Antonio Decking Pros. Licensed, insured, and locally owned."
        path="/free-estimate-san-antonio"
        schema={localBusinessSchema()}
      />
      <PageHero
        title="Get a Free Estimate"
        subtitle="Tell us about your project and we'll follow up to schedule a free in-person consultation."
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Free Estimate" }]}
      />

      <section className="section bg-white">
        <div className="container-page">
          <div ref={formRef} className="fade-up grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
            {/* Form */}
            <div className="bg-white border border-rule rounded-sm p-6 md:p-10 shadow-sm">
              {status === "success" ? (
                <div className="text-center py-10">
                  <h3 className="text-navy">Thanks — We Got Your Request</h3>
                  <p className="mt-4 text-mid">
                    A member of our team will reach out within one business day to schedule your free
                    estimate. If it's urgent, feel free to call us directly at{" "}
                    <a href={business.phoneHref} className="text-gold font-semibold">
                      {business.phone}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-navy text-2xl">Request Your Free Estimate</h2>

                  {status === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-800 text-sm rounded-sm p-4">
                      Something went wrong submitting your request. Please try again, or call us
                      directly at{" "}
                      <a href={business.phoneHref} className="font-semibold underline">
                        {business.phone}
                      </a>{" "}
                      and we'll get you scheduled right away.
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-sm font-heading font-semibold uppercase tracking-wide text-navy mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formValues.name}
                      onChange={handleChange}
                      className="w-full border border-rule rounded-sm px-4 py-3 text-charcoal focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-heading font-semibold uppercase tracking-wide text-navy mb-2">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formValues.phone}
                        onChange={handleChange}
                        className="w-full border border-rule rounded-sm px-4 py-3 text-charcoal focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-heading font-semibold uppercase tracking-wide text-navy mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formValues.email}
                        onChange={handleChange}
                        className="w-full border border-rule rounded-sm px-4 py-3 text-charcoal focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-heading font-semibold uppercase tracking-wide text-navy mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formValues.service}
                      onChange={handleChange}
                      className="w-full border border-rule rounded-sm px-4 py-3 text-charcoal focus:outline-none focus:border-gold bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.slug} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                      <option value="Not Sure">Not Sure Yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-heading font-semibold uppercase tracking-wide text-navy mb-2">
                      Project Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={5}
                      value={formValues.description}
                      onChange={handleChange}
                      placeholder="Tell us about your space, timeline, and any material preferences."
                      className="w-full border border-rule rounded-sm px-4 py-3 text-charcoal focus:outline-none focus:border-gold"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Submitting..." : "Submit Request"}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="bg-navy text-white rounded-sm p-8 sticky top-24">
              <h3 className="text-white">Contact Info</h3>
              <ul className="mt-5 space-y-3 text-white/85 text-sm">
                <li>
                  <a href={business.phoneHref} className="hover:text-white font-semibold text-gold-lt">
                    {business.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${business.email}`} className="hover:text-white">
                    {business.email}
                  </a>
                </li>
                <li>{fullAddress}</li>
                <li>{business.hours}</li>
              </ul>

              <div className="mt-8 border-t border-white/15 pt-6">
                <h4 className="font-heading uppercase text-sm tracking-wide text-gold-lt font-semibold">
                  Why Homeowners Trust Us
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {trustBadges.map((badge) => (
                    <li key={badge} className="flex items-center gap-2 text-sm text-white/90">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {badge}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-page max-w-3xl">
          <div ref={faqRef} className="fade-up">
            <SectionEyebrow eyebrow="Before You Reach Out" heading="Frequently Asked Questions" align="center" />
            <div className="mt-10">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
