import { Link } from "react-router-dom";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-cream border-b border-rule">
      <div className="container-page py-3">
        <ol className="flex flex-wrap items-center gap-2 text-sm font-body">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.label} className="flex items-center gap-2">
                {isLast || !item.href ? (
                  <span className="text-mid">{item.label}</span>
                ) : (
                  <Link to={item.href} className="text-gold hover:text-gold-lt font-semibold">
                    {item.label}
                  </Link>
                )}
                {!isLast && <span className="text-mid">&rsaquo;</span>}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
