export interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div
      className="grid gap-px bg-rule border border-rule"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}
    >
      {steps.map((step, index) => (
        <div key={step.title} className="bg-white p-6 md:p-8">
          <span className="block font-heading font-bold text-5xl md:text-6xl text-cream leading-none" style={{ WebkitTextStroke: "1px var(--color-rule)", color: "var(--color-section-alt)" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 text-navy">{step.title}</h3>
          <p className="mt-2 text-mid text-[15px]">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
