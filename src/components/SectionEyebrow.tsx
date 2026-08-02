interface SectionEyebrowProps {
  eyebrow: string;
  heading: string;
  subtitle?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
}

export default function SectionEyebrow({
  eyebrow,
  heading,
  subtitle,
  align = "left",
  variant = "light",
}: SectionEyebrowProps) {
  const isCenter = align === "center";
  const isDark = variant === "dark";

  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      <div
        className={`h-[2px] w-10 bg-gold ${isCenter ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      <span
        className={`mt-4 block font-heading font-semibold uppercase tracking-[0.15em] text-sm ${
          isDark ? "text-gold-lt" : "text-gold"
        }`}
      >
        {eyebrow}
      </span>
      <h2 className={`mt-2 ${isDark ? "text-white" : "text-navy"}`}>{heading}</h2>
      {subtitle && (
        <p
          className={`mt-4 font-serif italic text-lg ${
            isDark ? "text-white/85" : "text-mid"
          } ${isCenter ? "max-w-2xl mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
