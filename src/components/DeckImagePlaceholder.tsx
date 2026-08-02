interface DeckImagePlaceholderProps {
  label: string;
  className?: string;
}

export default function DeckImagePlaceholder({ label, className = "" }: DeckImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-sm flex items-end p-6 ${className}`}
      style={{
        background: "linear-gradient(160deg, var(--color-navy) 0%, #4E85B8 60%, #6FA0CC 100%)",
        minHeight: "260px",
      }}
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 2px, transparent 2px, transparent 34px)",
        }}
      />
      <div className="absolute top-4 right-4 h-2.5 w-16 bg-gold rounded-sm" />
      <span className="relative font-heading uppercase tracking-wide text-sm font-semibold text-white/90 bg-navy-dark/60 px-3 py-1.5 rounded-sm">
        {label}
      </span>
    </div>
  );
}
