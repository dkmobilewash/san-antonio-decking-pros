import type { ReactNode } from "react";
import Breadcrumb, { type BreadcrumbItem } from "./Breadcrumb";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbItems?: BreadcrumbItem[];
  children?: ReactNode;
  gradient?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbItems,
  children,
  gradient = "linear-gradient(135deg, var(--color-navy) 0%, #2A4E70 100%)",
}: PageHeroProps) {
  return (
    <>
      <section
        className="relative text-white"
        style={{ background: gradient }}
      >
        <div className="container-page py-16 md:py-24 text-center">
          <h1 className="text-white">{title}</h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl mx-auto text-lg text-white/90 font-body">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
        <div className="h-1.5 w-full bg-gold" />
      </section>
      {breadcrumbItems && breadcrumbItems.length > 0 && (
        <Breadcrumb items={breadcrumbItems} />
      )}
    </>
  );
}
