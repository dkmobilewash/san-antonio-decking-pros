import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <Link
      to={href}
      className="group block bg-white border-t-4 border-gold rounded-sm p-7 shadow-sm hover:bg-cream transition-colors duration-200"
    >
      <h3 className="text-navy group-hover:text-navy">{title}</h3>
      <p className="mt-3 text-mid text-[15px]">{description}</p>
      <span className="mt-5 inline-flex items-center gap-1 font-heading font-semibold uppercase text-sm tracking-wide text-gold group-hover:text-gold-lt">
        Learn More
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          &rarr;
        </span>
      </span>
    </Link>
  );
}
