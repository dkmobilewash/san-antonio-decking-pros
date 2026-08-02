import { useEffect, useRef } from "react";

export function useFadeUp<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = container.classList.contains("fade-up")
      ? [container, ...Array.from(container.querySelectorAll<HTMLElement>(".fade-up"))]
      : Array.from(container.querySelectorAll<HTMLElement>(".fade-up"));

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return ref;
}
