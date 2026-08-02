import { Link } from "react-router-dom";
import { business, fullAddress } from "../data/business";
import { services } from "../data/services";
import { serviceAreas } from "../data/serviceAreas";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "var(--color-navy-dark)" }} className="text-white">
      <div className="container-page py-14">
        <div
          className="grid gap-10"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
        >
          <div>
            <Link to="/" className="flex flex-col leading-tight">
              <span className="font-heading font-bold uppercase text-xl text-white">San Antonio</span>
              <span className="font-serif italic text-gold-lt text-base -mt-1">Decking Pros</span>
            </Link>
            <p className="mt-4 text-white/70 text-sm">{business.tagline}</p>
            <p className="mt-4 text-white/50 text-xs leading-relaxed">{business.license}</p>
          </div>

          <div>
            <h4 className="font-heading uppercase text-sm tracking-wide text-gold-lt font-semibold">Services</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link to="/decking-services" className="text-white/75 hover:text-white text-sm">
                  All Services
                </Link>
              </li>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to={`/${service.slug}`} className="text-white/75 hover:text-white text-sm">
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading uppercase text-sm tracking-wide text-gold-lt font-semibold">Service Areas</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link to="/service-areas" className="text-white/75 hover:text-white text-sm">
                  All Areas
                </Link>
              </li>
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link to={`/service-areas/${area.slug}`} className="text-white/75 hover:text-white text-sm">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading uppercase text-sm tracking-wide text-gold-lt font-semibold">Contact Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>
                <a href={business.phoneHref} className="hover:text-white">
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
            <Link to="/free-estimate-san-antonio" className="btn-primary mt-5">
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <span>
            &copy; {year} {business.name}. All rights reserved.
          </span>
          <span>{business.license}</span>
        </div>
      </div>
    </footer>
  );
}
