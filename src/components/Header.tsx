import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { business } from "../data/business";
import { services } from "../data/services";
import { serviceAreas } from "../data/serviceAreas";
import { useClickOutside } from "../hooks/useClickOutside";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);

  useClickOutside(servicesRef, () => setServicesOpen(false));
  useClickOutside(areasRef, () => setAreasOpen(false));

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileAreasOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Top bar */}
      <div className="bg-navy-dark text-white text-sm hidden md:block">
        <div className="container-page flex items-center justify-between py-2">
          <span className="text-white/80 font-body">
            {business.tagline} &middot; {business.hours}
          </span>
          <a href={business.phoneHref} className="font-heading font-semibold tracking-wide text-gold-lt hover:text-gold">
            {business.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div
        className="bg-navy text-white"
        style={{ height: "var(--header-height)" }}
      >
        <div className="container-page h-full flex items-center justify-between">
          <Link to="/" className="flex flex-col leading-tight" onClick={closeMobile}>
            <span className="font-heading font-bold uppercase text-lg md:text-xl tracking-wide text-white">
              San Antonio
            </span>
            <span className="font-serif italic text-gold-lt text-sm md:text-base -mt-1">
              Decking Pros
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 font-heading uppercase text-sm font-semibold tracking-wide">
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-gold-lt" : "hover:text-gold-lt")}>
              Home
            </NavLink>

            <div className="relative" ref={servicesRef}>
              <button
                type="button"
                onClick={() => {
                  setServicesOpen((prev) => !prev);
                  setAreasOpen(false);
                }}
                className="flex items-center gap-1 hover:text-gold-lt"
                aria-expanded={servicesOpen}
              >
                Services
                <span aria-hidden="true" className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}>
                  &#9662;
                </span>
              </button>
              {servicesOpen && (
                <div className="absolute left-0 top-full mt-2 w-72 bg-white text-charcoal shadow-lg border-t-4 border-gold rounded-sm py-2 normal-case">
                  <Link
                    to="/decking-services"
                    onClick={() => setServicesOpen(false)}
                    className="block px-5 py-2 font-heading font-semibold uppercase text-xs tracking-wide text-navy hover:bg-cream"
                  >
                    All Services
                  </Link>
                  <div className="border-t border-rule my-1" />
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/${service.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="block px-5 py-2.5 text-sm font-body hover:bg-cream hover:text-gold"
                    >
                      {service.shortName}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative" ref={areasRef}>
              <button
                type="button"
                onClick={() => {
                  setAreasOpen((prev) => !prev);
                  setServicesOpen(false);
                }}
                className="flex items-center gap-1 hover:text-gold-lt"
                aria-expanded={areasOpen}
              >
                Service Areas
                <span aria-hidden="true" className={`transition-transform ${areasOpen ? "rotate-180" : ""}`}>
                  &#9662;
                </span>
              </button>
              {areasOpen && (
                <div className="absolute left-0 top-full mt-2 w-64 bg-white text-charcoal shadow-lg border-t-4 border-gold rounded-sm py-2 normal-case max-h-96 overflow-y-auto">
                  <Link
                    to="/service-areas"
                    onClick={() => setAreasOpen(false)}
                    className="block px-5 py-2 font-heading font-semibold uppercase text-xs tracking-wide text-navy hover:bg-cream"
                  >
                    All Areas
                  </Link>
                  <div className="border-t border-rule my-1" />
                  {serviceAreas.map((area) => (
                    <Link
                      key={area.slug}
                      to={`/service-areas/${area.slug}`}
                      onClick={() => setAreasOpen(false)}
                      className="block px-5 py-2.5 text-sm font-body hover:bg-cream hover:text-gold"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/gallery" className={({ isActive }) => (isActive ? "text-gold-lt" : "hover:text-gold-lt")}>
              Gallery
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "text-gold-lt" : "hover:text-gold-lt")}
            >
              Blog
            </NavLink>
            <NavLink
              to="/about-san-antonio-decking-pros"
              className={({ isActive }) => (isActive ? "text-gold-lt" : "hover:text-gold-lt")}
            >
              About
            </NavLink>
          </nav>

          <div className="hidden lg:block">
            <Link to="/free-estimate-san-antonio" className="btn-primary">
              Get Free Estimate
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden flex flex-col items-center justify-center gap-1.5 w-10 h-10"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[var(--header-height)] bg-navy text-white overflow-y-auto z-40">
          <div className="container-page py-6 flex flex-col gap-1">
            <Link to="/" onClick={closeMobile} className="py-3 border-b border-white/10 font-heading uppercase font-semibold">
              Home
            </Link>

            <div className="border-b border-white/10">
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="w-full flex items-center justify-between py-3 font-heading uppercase font-semibold"
              >
                Services
                <span aria-hidden="true" className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}>
                  &#9662;
                </span>
              </button>
              {mobileServicesOpen && (
                <div className="pb-3 flex flex-col gap-1">
                  <Link to="/decking-services" onClick={closeMobile} className="py-2 pl-4 text-sm text-gold-lt font-semibold">
                    All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/${service.slug}`}
                      onClick={closeMobile}
                      className="py-2 pl-4 text-sm text-white/85"
                    >
                      {service.shortName}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-white/10">
              <button
                type="button"
                onClick={() => setMobileAreasOpen((prev) => !prev)}
                className="w-full flex items-center justify-between py-3 font-heading uppercase font-semibold"
              >
                Service Areas
                <span aria-hidden="true" className={`transition-transform ${mobileAreasOpen ? "rotate-180" : ""}`}>
                  &#9662;
                </span>
              </button>
              {mobileAreasOpen && (
                <div className="pb-3 flex flex-col gap-1">
                  <Link to="/service-areas" onClick={closeMobile} className="py-2 pl-4 text-sm text-gold-lt font-semibold">
                    All Areas
                  </Link>
                  {serviceAreas.map((area) => (
                    <Link
                      key={area.slug}
                      to={`/service-areas/${area.slug}`}
                      onClick={closeMobile}
                      className="py-2 pl-4 text-sm text-white/85"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/gallery" onClick={closeMobile} className="py-3 border-b border-white/10 font-heading uppercase font-semibold">
              Gallery
            </Link>
            <Link to="/blog" onClick={closeMobile} className="py-3 border-b border-white/10 font-heading uppercase font-semibold">
              Blog
            </Link>
            <Link
              to="/about-san-antonio-decking-pros"
              onClick={closeMobile}
              className="py-3 border-b border-white/10 font-heading uppercase font-semibold"
            >
              About
            </Link>

            <Link to="/free-estimate-san-antonio" onClick={closeMobile} className="btn-primary mt-6 text-center">
              Get Free Estimate
            </Link>
            <a href={business.phoneHref} className="btn-outline-navy mt-3 text-center !text-white !border-white">
              Call {business.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
