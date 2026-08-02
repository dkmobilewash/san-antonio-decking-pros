import { business, fullAddress } from "../data/business";
import type { Service } from "../data/services";
import type { ServiceArea } from "../data/serviceAreas";
import type { BlogPost } from "../data/blogPosts";
import type { FaqItem } from "../components/FaqAccordion";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: business.name,
    image: business.ogImage,
    telephone: business.phone,
    email: business.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    url: business.baseUrl,
    areaServed: "San Antonio, TX",
    openingHours: "Mo-Sa 07:00-18:00",
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.description,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: business.name,
      telephone: business.phone,
      address: fullAddress,
    },
    areaServed: "San Antonio, TX",
  };
}

export function serviceAreaSchema(area: ServiceArea) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: `${business.name} — ${area.name}`,
    telephone: business.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: area.name,
      addressRegion: "TX",
      addressCountry: "US",
    },
    areaServed: area.name,
    parentOrganization: {
      "@type": "HomeAndConstructionBusiness",
      name: business.name,
    },
  };
}

export function blogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: business.name,
    },
    publisher: {
      "@type": "Organization",
      name: business.name,
      logo: {
        "@type": "ImageObject",
        url: business.ogImage,
      },
    },
  };
}

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
