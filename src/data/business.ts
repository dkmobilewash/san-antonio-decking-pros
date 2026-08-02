export const business = {
  name: "San Antonio Decking Pros",
  shortName: "Decking Pros",
  tagline: "Custom Decks Built for Texas Living",
  phone: "(210) 750-4428",
  phoneHref: "tel:+12107504428",
  email: "info@sanantoniodeckingpros.com",
  address: {
    street: "1102 S Flores St",
    city: "San Antonio",
    state: "TX",
    zip: "78204",
  },
  hours: "Mon–Sat: 7:00 AM – 6:00 PM",
  license: "TX Home Improvement Contractor Lic. #TXHIC-48291",
  yearsInBusiness: 18,
  founded: 2007,
  baseUrl: "https://sanantoniodeckingpros.com",
  ogImage: "https://sanantoniodeckingpros.com/og-image.png",
  geo: {
    latitude: 29.4241,
    longitude: -98.4936,
  },
  social: {
    facebook: "https://www.facebook.com/sanantoniodeckingpros",
    instagram: "https://www.instagram.com/sanantoniodeckingpros",
  },
};

export const fullAddress = `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`;
