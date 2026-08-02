import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  variant?: "light" | "dark";
}

export default function FaqAccordion({ items, variant = "light" }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const isDark = variant === "dark";
  const textColor = isDark ? "text-white" : "text-navy";
  const subTextColor = isDark ? "text-white/85" : "text-charcoal";
  const borderColor = isDark ? "border-white/20" : "border-rule";
  const iconColor = isDark ? "text-white" : "text-gold";

  return (
    <div className="divide-y" style={{ borderColor: isDark ? "rgba(255,255,255,0.2)" : "var(--color-rule)" }}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className={`border-b ${borderColor}`}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
            >
              <span className={`font-heading font-semibold text-base md:text-lg ${textColor}`}>
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className={`shrink-0 text-2xl leading-none font-light ${iconColor}`}
                aria-hidden="true"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <p className={`pb-5 pr-8 text-[15px] ${subTextColor}`}>{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
