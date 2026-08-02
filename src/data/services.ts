export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  tagline: string;
  description: string;
  heroSubtitle: string;
  intro: string[];
  benefits: string[];
  process: ServiceProcessStep[];
  faqs: ServiceFaq[];
}

export const services: Service[] = [
  {
    slug: "deck-design-installation",
    name: "Custom Deck Design & Installation",
    shortName: "Deck Design & Installation",
    eyebrow: "New Construction",
    tagline: "A deck built around how your family actually lives outside.",
    description:
      "Custom wood and composite decks designed and built from the ground up, engineered for San Antonio's clay soil and Hill Country heat.",
    heroSubtitle:
      "From first sketch to final board, we design and build custom decks engineered for South Texas conditions.",
    intro: [
      "A new deck is one of the few home projects that pays you back every single week — it's where dinner happens, where the kids play, where you actually use your yard. We start every project with a design conversation, not a price quote: how many people do you host, do you want shade, is a hot tub or outdoor kitchen coming later, what's your maintenance tolerance.",
      "From there we handle structural engineering for San Antonio's expansive clay soils, pull the required city or county permits, and build on footings sized for our freeze-thaw cycles and heavy spring rains. Every deck we install meets current IRC span tables and local wind-load requirements.",
    ],
    benefits: [
      "Free in-home design consultation with 3D layout sketch",
      "Engineered footings sized for San Antonio's expansive clay soil",
      "Permit pulling and inspection scheduling handled for you",
      "Choice of cedar, pressure-treated pine, or composite decking",
      "Integrated lighting, railing, and built-in seating options",
      "Written fixed-price contract — no surprise change orders",
    ],
    process: [
      {
        title: "Design Consultation",
        description:
          "We walk your property, discuss how you'll use the space, and sketch a layout that fits your home's footprint and your budget.",
      },
      {
        title: "Engineering & Permits",
        description:
          "We size footings for your soil, draft plans, and file for permits with the City of San Antonio or your county so nothing holds up your build day.",
      },
      {
        title: "Framing & Construction",
        description:
          "Our crew sets footings, frames the structure, and installs decking, railing, and stairs — most decks are framed and decked in 3–7 working days.",
      },
      {
        title: "Final Walkthrough",
        description:
          "We inspect every board and rail with you, handle final city inspection, and leave you with care instructions for your specific decking material.",
      },
    ],
    faqs: [
      {
        question: "How long does a custom deck take to build?",
        answer:
          "Most single-level decks between 250–400 sq ft take 1–2 weeks from the start of framing to final walkthrough, including permit inspections. Multi-level decks, screened structures, or decks with outdoor kitchens typically run 3–5 weeks. Weather and permit turnaround with the City of San Antonio can add time, which we build into your written schedule up front.",
      },
      {
        question: "Do I need a permit to build a deck in San Antonio?",
        answer:
          "Almost always, yes. The City of San Antonio requires a permit for any deck attached to your home or elevated more than 30 inches, and many HOAs in areas like Stone Oak or Alamo Ranch require separate architectural approval. We handle the permit application, drawings, and inspection scheduling as part of every installation.",
      },
      {
        question: "What's the difference between cedar, pressure-treated pine, and composite?",
        answer:
          "Pressure-treated pine is the most budget-friendly and holds up well when stained every 1–2 years. Cedar costs more but resists rot and insects naturally and takes stain beautifully. Composite (Trex, TimberTech) costs the most upfront but never needs staining, won't splinter in bare feet on a 100°F day, and typically carries a 25-year fade and stain warranty.",
      },
      {
        question: "Can you build on a slope or over uneven ground?",
        answer:
          "Yes — a large share of our builds in Hill Country neighborhoods around Boerne and Helotes involve significant grade change. We use engineered footings and, where needed, taller support posts or a stepped multi-level design to work with the terrain instead of against it.",
      },
    ],
  },
  {
    slug: "deck-repair-restoration",
    name: "Deck Repair & Restoration",
    shortName: "Deck Repair",
    eyebrow: "Repair Services",
    tagline: "Fix what's failing before it becomes a liability.",
    description:
      "Structural repairs, board replacement, railing fixes, and full restorations for decks damaged by age, weather, or termites.",
    heroSubtitle:
      "Wobbly railings, soft boards, and rusted hardware don't get better on their own. We diagnose the real problem and fix it right.",
    intro: [
      "Most deck failures we see aren't cosmetic — they're structural, and they start underneath where you can't see them. Ledger boards pull away from the house, joist hangers rust through, and posts set in soil rot from the inside out. San Antonio's swing between drought and downpour is especially hard on wood that wasn't properly flashed or sealed when it was built.",
      "We start every repair call with a full structural inspection, not just a look at the surface boards. You'll get a clear, written breakdown of what's a safety issue, what's cosmetic, and what can wait — no scare tactics, no upsell you don't need.",
    ],
    benefits: [
      "Free structural safety inspection with photos",
      "Ledger board and flashing repair to stop water intrusion",
      "Joist, beam, and post replacement to current code",
      "Railing and stair repair to meet safety height requirements",
      "Board-by-board replacement matched to existing decking",
      "Same-week service for urgent safety concerns",
    ],
    process: [
      {
        title: "Structural Inspection",
        description:
          "We check ledger attachment, joists, posts, footings, and hardware — the parts of a deck that actually cause collapses — not just the visible surface.",
      },
      {
        title: "Written Repair Plan",
        description:
          "You get an itemized list separating urgent structural fixes from cosmetic ones, with pricing for each, so you decide what to prioritize.",
      },
      {
        title: "Repair & Reinforcement",
        description:
          "We replace rotted framing, correct flashing and ledger issues, swap failing hardware to code-rated connectors, and rebuild railings to current height codes.",
      },
      {
        title: "Refinish & Protect",
        description:
          "New and existing wood is cleaned, brightened, and sealed together so repairs blend in rather than standing out.",
      },
    ],
    faqs: [
      {
        question: "How do I know if my deck is actually unsafe?",
        answer:
          "Warning signs include board bounce or sponginess underfoot, railings that move when pushed, rust streaks around hardware, gaps opening between the ledger board and the house, and posts that feel loose at the base. Any one of these is worth a free inspection — deck collapses are almost always preceded by signs like these.",
      },
      {
        question: "Can you repair termite damage?",
        answer:
          "Yes. South Texas has active subterranean termite pressure, and we regularly replace termite-damaged joists, posts, and ledger boards. If we find active termite activity during an inspection, we'll recommend a licensed pest control partner before we close up any repaired framing.",
      },
      {
        question: "Is it cheaper to repair or replace my deck?",
        answer:
          "If the footings and framing are structurally sound and it's mainly surface boards or railing that need attention, repair is almost always more cost-effective — often 40–60% less than a full rebuild. If the ledger connection has failed or multiple footings have shifted, a rebuild is often the safer long-term investment, and we'll tell you honestly which situation you're in.",
      },
      {
        question: "How fast can you get to an urgent repair?",
        answer:
          "For safety-related issues — a loose railing, a soft spot near stairs, visible structural movement — we prioritize a same-week inspection. Call us directly at the number in our header and mention it's a safety concern.",
      },
    ],
  },
  {
    slug: "deck-staining-sealing",
    name: "Deck Staining & Sealing",
    shortName: "Staining & Sealing",
    eyebrow: "Maintenance",
    tagline: "Protect your wood investment from Texas sun and storms.",
    description:
      "Professional cleaning, sanding, staining, and sealing to protect wood decks from UV damage, moisture, and the freeze-thaw cycle.",
    heroSubtitle:
      "San Antonio sun bleaches and dries unsealed wood fast. Regular staining is the cheapest insurance your deck will ever get.",
    intro: [
      "Wood decking left unsealed in South Texas doesn't age gracefully — it grays, checks, and splinters within a season or two of direct sun exposure. Staining isn't cosmetic maintenance, it's the barrier that keeps water out of the wood fibers and UV rays from breaking down the lignin that holds boards together.",
      "We pressure wash at a controlled PSI to avoid etching the wood, let it dry fully (usually 48 hours, longer in humid stretches), sand any raised grain or splinters, and apply either a semi-transparent or solid stain based on the wood's condition and your color preference.",
    ],
    benefits: [
      "Low-pressure wash that cleans without damaging wood fibers",
      "Full sanding pass to remove splinters and raised grain",
      "Oil or water-based stain options in a range of transparencies",
      "UV-blocking sealer to slow graying and checking",
      "Railing, stair, and fascia board included in every job",
      "Maintenance plans available for annual or biennial refresh",
    ],
    process: [
      {
        title: "Wash & Prep",
        description:
          "We clean the deck surface, remove old flaking finish where needed, and let the wood dry completely before any product goes down.",
      },
      {
        title: "Sand & Repair",
        description:
          "Raised grain, splinters, and rough spots get sanded smooth. Any loose fasteners or minor board issues are corrected before staining.",
      },
      {
        title: "Stain Application",
        description:
          "We apply your chosen stain in even coats with brush and roller work at rail balusters and board ends, avoiding the lap marks sprayers often leave.",
      },
      {
        title: "Cure & Inspect",
        description:
          "We walk the finished deck with you, check coverage in direct light, and give you a realistic maintenance timeline based on sun exposure.",
      },
    ],
    faqs: [
      {
        question: "How often should a deck be stained in San Antonio?",
        answer:
          "South- and west-facing decks with full sun exposure typically need restaining every 1–2 years. Shaded or covered decks can often go 2–3 years between coats. Our summer UV index and freeze-thaw winters both accelerate finish breakdown compared to milder climates.",
      },
      {
        question: "What's the difference between semi-transparent and solid stain?",
        answer:
          "Semi-transparent stain shows the wood grain and is the better choice for cedar or higher-grade lumber you want to show off, but it needs more frequent reapplication. Solid stain acts more like a thin paint, hides imperfections and older wood better, and generally lasts longer between coats.",
      },
      {
        question: "How long before I can walk on a freshly stained deck?",
        answer:
          "Light foot traffic is usually fine after 24 hours, but we recommend keeping furniture, grills, and pets off the surface for a full 72 hours so the finish cures properly, especially in humid weather.",
      },
      {
        question: "Can you stain a deck that's already gray and weathered?",
        answer:
          "In most cases, yes. Graying is UV bleaching of the surface wood fibers, not permanent damage. A thorough wash and sand typically restores enough of the wood's natural tone for stain to take evenly. Severely split or cupped boards may need spot replacement first.",
      },
    ],
  },
  {
    slug: "composite-decking",
    name: "Composite Decking",
    shortName: "Composite Decking",
    eyebrow: "Low-Maintenance Materials",
    tagline: "Board looks and feels like wood, without the yearly upkeep.",
    description:
      "Trex, TimberTech, and other composite decking installation — built for homeowners who want the deck without the annual staining chore.",
    heroSubtitle:
      "No sanding, no staining, no splinters underfoot — composite decking is built for people who'd rather use their deck than maintain it.",
    intro: [
      "Composite decking has come a long way from the plastic-looking boards of a decade ago. Today's capped composite boards from Trex and TimberTech have realistic wood grain, come in a wide range of colors, and resist fading, staining, scratching, and moisture far better than natural wood — which matters when your deck bakes in 100°F sun for months at a time.",
      "We're factory-trained installers for the major composite brands, which means correct fastener spacing for thermal expansion, proper joist spacing for the specific board profile, and hidden fastener systems for a clean, screw-free surface.",
    ],
    benefits: [
      "No annual staining or sealing required",
      "25–50 year manufacturer fade and stain warranties",
      "Cooler underfoot than many wood species in direct sun",
      "Resists splintering, warping, and insect damage",
      "Hidden fastener systems for a clean board surface",
      "Wide color range to match any home exterior",
    ],
    process: [
      {
        title: "Material Selection",
        description:
          "We bring physical board samples to your home so you can see color and grain pattern in your actual lighting before you commit.",
      },
      {
        title: "Substructure Build",
        description:
          "Composite decking needs correctly spaced joists and proper ventilation underneath — we frame to the manufacturer's exact specifications to protect your warranty.",
      },
      {
        title: "Board Installation",
        description:
          "Boards are installed with hidden fastener clips and manufacturer-specified gapping to allow for thermal expansion in our summer heat.",
      },
      {
        title: "Trim & Warranty Registration",
        description:
          "We finish fascia and picture-frame trim details, then register your manufacturer warranty so it's on file in your name.",
      },
    ],
    faqs: [
      {
        question: "Is composite decking worth the extra cost over wood?",
        answer:
          "If you value your weekends, generally yes. Composite typically costs 20–40% more upfront than pressure-treated pine, but you'll never pay for staining, sanding, or board replacement over the life of the deck. Over a 15–20 year span, total cost of ownership is often comparable or lower than wood.",
      },
      {
        question: "Does composite decking get hot in the San Antonio sun?",
        answer:
          "Darker composite colors can get warm in direct August sun, similar to dark wood stains or dark concrete. Lighter colors and boards with newer heat-mitigating capstock technology stay noticeably cooler. We'll walk you through color options with this specifically in mind if you have bare feet or pets on the deck often.",
      },
      {
        question: "Which composite brands do you install?",
        answer:
          "We're factory-trained installers for Trex and TimberTech, the two most established brands with the strongest warranties and widest color selections. We can source other manufacturers on request.",
      },
      {
        question: "Can composite decking be installed over an existing wood frame?",
        answer:
          "Sometimes — it depends on whether the existing joist spacing and structural condition meet the composite manufacturer's requirements, which are often tighter than standard wood decking spans. We inspect the substructure first and will tell you honestly if it needs to be reframed to protect your warranty.",
      },
    ],
  },
  {
    slug: "pool-deck-construction",
    name: "Pool Deck Construction",
    shortName: "Pool Decks",
    eyebrow: "Outdoor Living",
    tagline: "Decking built to handle chlorine, splash, and bare feet.",
    description:
      "Wood and composite pool decks and surrounds designed for wet feet, splash zones, and San Antonio's long pool season.",
    heroSubtitle:
      "Pool decks take more abuse than any other part of your yard. We build them with materials and hardware chosen specifically for it.",
    intro: [
      "A pool deck lives a harder life than a standard backyard deck — constant moisture, chlorine and saltwater splash, sunscreen, and near-daily bare-foot traffic through most of the year in our climate. Standard fasteners and some wood species simply don't hold up the same way.",
      "We spec stainless or coated fasteners rated for wet/chemical exposure, use decking species and composite boards with proven slip resistance when wet, and grade the structure to keep splash water draining away from the pool equipment pad and house foundation.",
    ],
    benefits: [
      "Fasteners and hardware rated for chlorine and moisture exposure",
      "Slip-resistant board selection for wet, bare-foot traffic",
      "Proper drainage grading away from pool equipment and foundation",
      "Cooler composite color options for bare feet in summer",
      "Coordinated height transitions with pool coping",
      "Built to code for pool-adjacent barrier and railing requirements",
    ],
    process: [
      {
        title: "Site & Drainage Assessment",
        description:
          "We evaluate grading around your pool, existing coping height, and equipment pad location before designing the deck layout.",
      },
      {
        title: "Material & Fastener Selection",
        description:
          "We choose decking and hardware specifically rated for constant moisture and chemical splash exposure, not standard exterior-grade materials.",
      },
      {
        title: "Construction",
        description:
          "The deck is framed and built with drainage channels directing water away from your home and pool equipment, and transitions are set flush with pool coping.",
      },
      {
        title: "Safety & Code Review",
        description:
          "We confirm railing height, gate, and barrier requirements meet San Antonio pool safety code before final sign-off.",
      },
    ],
    faqs: [
      {
        question: "What decking material is best around a pool?",
        answer:
          "Capped composite decking is generally the top choice for pool surrounds — it doesn't absorb chlorinated water, resists mildew, and many boards are engineered with textured, slip-resistant surfaces. For wood, cedar and tropical hardwoods perform better than pressure-treated pine in constant wet conditions.",
      },
      {
        question: "Do pool decks need special permits in San Antonio?",
        answer:
          "Pool-adjacent decks often trigger additional review for barrier and fall-protection code compliance beyond a standard deck permit, particularly around railing height and gate self-closing requirements. We handle this as part of our permitting process.",
      },
      {
        question: "How do you keep the deck from staying wet and growing mildew?",
        answer:
          "Proper board spacing and joist height for airflow underneath, correct grading so water doesn't pool against the house or equipment pad, and material selection that doesn't wick moisture are the three biggest factors — we address all three in every pool deck design.",
      },
      {
        question: "Can you build a deck that ties into existing pool coping?",
        answer:
          "Yes, this is one of our most common pool deck requests. We measure and set deck height to transition smoothly from your existing coping so there's no trip hazard at the seam.",
      },
    ],
  },
  {
    slug: "screened-porches-patio-covers",
    name: "Screened Porches & Patio Covers",
    shortName: "Screened Porches",
    eyebrow: "Shade & Comfort",
    tagline: "Use your deck through July and August, not just April.",
    description:
      "Screened-in porches, pergolas, and patio covers that extend your outdoor living season through the hottest and buggiest months.",
    heroSubtitle:
      "A shade structure or screened porch is the difference between a deck you use three seasons and one you use all year.",
    intro: [
      "An unshaded deck in San Antonio is genuinely unusable for a good chunk of summer afternoons — surface temperatures climb, direct sun is intense, and mosquitoes show up the moment the sun drops. A screened porch, pergola, or solid patio cover solves both problems at once, and it's consistently the upgrade our repeat customers wish they'd done the first time.",
      "We build custom to your existing deck footprint or design a new combined structure from scratch, matching roofline and materials to your home so it looks original to the house rather than bolted on.",
    ],
    benefits: [
      "Screened porches keep out mosquitoes and pollen year-round",
      "Solid patio covers cut deck surface temperature significantly",
      "Pergolas add partial shade while keeping the space open-air",
      "Structures engineered for wind load and attached roof tie-in",
      "Integrated ceiling fans and lighting available",
      "Designed to match existing rooflines and siding",
    ],
    process: [
      {
        title: "Structure Consultation",
        description:
          "We discuss whether a full screen enclosure, solid roof patio cover, or open pergola best fits your goals — bugs, shade, or both — and your budget.",
      },
      {
        title: "Engineering & Roof Tie-In",
        description:
          "We engineer the structure for wind load and, for attached covers, properly tie into your existing roofline and flashing to prevent leaks.",
      },
      {
        title: "Construction",
        description:
          "Framing, roofing or screen panel installation, and any electrical for fans or lighting are completed by our crew, typically over 1–3 weeks depending on structure size.",
      },
      {
        title: "Final Details",
        description:
          "Screen doors are hung and adjusted, gutters or drainage are tied in if needed, and we walk the finished structure with you before final payment.",
      },
    ],
    faqs: [
      {
        question: "What's the difference between a pergola and a patio cover?",
        answer:
          "A pergola has an open or slatted top that provides partial shade while letting light and air through — good for filtered shade without darkening the space. A solid patio cover has a full roof structure that blocks sun and rain completely, functioning more like an extension of your home's roofline.",
      },
      {
        question: "Can you screen in an existing deck?",
        answer:
          "In most cases, yes, as long as the existing deck structure and any roof cover are sound. We assess the frame first — if it needs reinforcement to support screen framing or a roof tie-in, we'll include that in your quote.",
      },
      {
        question: "Will a patio cover make my deck too dark?",
        answer:
          "Not necessarily — we offer solid roof, louvered/adjustable, and open lattice cover options with very different light levels, and can also add skylight panels to a solid cover. We'll talk through light versus shade trade-offs during your consultation.",
      },
      {
        question: "Do screened porches and patio covers need permits?",
        answer:
          "Yes, any roofed structure attached to your home requires a building permit in San Antonio, and freestanding structures over a certain size typically do as well. We handle the permit application and inspection scheduling as part of the project.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
