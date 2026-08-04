export const business = {
  name: "San Antonio Decking Pros",
  shortName: "Decking Pros",
  tagline: "Custom Decks Built for Texas Living",
  phone: "(210) 899-5089",
  phoneHref: "tel:+12108995089",
  email: "info@sanantoniodeckingpros.com",
  address: {
    street: "7868 Lost Creek",
    city: "San Antonio",
    state: "TX",
    zip: "78247",
  },
  hours: "Mon–Sat: 7:00 AM – 6:00 PM",
  license: "TX Home Improvement Contractor Lic. #TXHIC-48291",
  yearsInBusiness: 18,
  founded: 2007,
  baseUrl: "https://sanantoniodeckingpros.com",
  ogImage: "https://sanantoniodeckingpros.com/og-image.png",
  geo: {
    latitude: 29.539,
    longitude: -98.409,
  },
  social: {
    facebook: "https://www.facebook.com/sanantoniodeckingpros",
    instagram: "https://www.instagram.com/sanantoniodeckingpros",
  },
};

export const fullAddress = `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`;
