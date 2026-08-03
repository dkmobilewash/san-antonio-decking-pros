export type BlogSectionType = "h2" | "h3" | "p" | "ul" | "ol" | "callout";

export interface BlogSection {
  type: BlogSectionType;
  text?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  readTime: string;
  content: BlogSection[];
  relatedServiceSlugs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "deck-cost-san-antonio-pricing-guide",
    title: "How Much Does a Deck Cost in San Antonio? 2026 Pricing Guide",
    excerpt:
      "A realistic breakdown of what San Antonio homeowners are paying for wood and composite decks, plus the factors that move the price most.",
    date: "2026-01-14",
    tag: "Cost Guides",
    readTime: "7 min read",
    content: [
      {
        type: "p",
        text: "Deck pricing gets murky fast because so much of the cost depends on things you can't see in a photo — soil conditions, framing complexity, and material grade. Here's a realistic look at what San Antonio homeowners are actually paying in 2026.",
      },
      { type: "h2", text: "Typical Cost Ranges by Material" },
      {
        type: "ul",
        items: [
          "Pressure-treated pine: $28–$40 per square foot installed",
          "Cedar: $38–$55 per square foot installed",
          "Capped composite (Trex, TimberTech): $48–$70 per square foot installed",
          "Tropical hardwoods (ipe, cumaru): $60–$85 per square foot installed",
        ],
      },
      {
        type: "p",
        text: "These ranges include framing, footings, decking, and standard railing. A basic 300 sq ft pressure-treated deck typically lands between $8,400 and $12,000, while the same footprint in composite runs $14,400 to $21,000.",
      },
      { type: "h2", text: "What Actually Moves the Price" },
      { type: "h3", text: "Height and grade change" },
      {
        type: "p",
        text: "A ground-level deck is the cheapest to build. Every additional foot of height adds railing, stairs, and often taller support posts with deeper footings — common on sloped lots in Boerne and Helotes.",
      },
      { type: "h3", text: "Soil and footing depth" },
      {
        type: "p",
        text: "San Antonio's expansive clay soil often requires deeper or larger-diameter footings than you'd see in other regions, which adds labor and concrete cost that's easy to underestimate in a DIY budget.",
      },
      { type: "h3", text: "Railing and stair complexity" },
      {
        type: "p",
        text: "Cable railing, glass panels, or custom-milled balusters can add $25–$60 per linear foot over standard wood or aluminum railing.",
      },
      {
        type: "callout",
        text: "Get an itemized quote, not a single lump number. A written estimate that breaks out footings, framing, decking, and railing separately makes it much easier to see where your money is actually going — and to compare quotes apples to apples.",
      },
      { type: "h2", text: "Hidden Costs Worth Budgeting For" },
      {
        type: "ul",
        items: [
          "Permit fees, typically $150–$500 depending on jurisdiction",
          "HOA architectural review fees in communities like Stone Oak",
          "Utility locate delays if lines run through the dig area",
          "Old deck removal and haul-away if you're replacing an existing structure",
        ],
      },
      {
        type: "p",
        text: "The honest takeaway: material choice matters, but soil, height, and railing complexity usually move the final number more than most homeowners expect going in.",
      },
    ],
    relatedServiceSlugs: ["deck-design-installation", "composite-decking"],
  },
  {
    slug: "composite-vs-wood-decking-comparison",
    title: "Composite vs. Wood Decking: Which Is Right for Your San Antonio Home?",
    excerpt:
      "A head-to-head look at upfront cost, maintenance, heat performance, and lifespan for wood and composite decking in South Texas.",
    date: "2025-12-02",
    tag: "Materials",
    readTime: "6 min read",
    content: [
      {
        type: "p",
        text: "This is the single most common question we get during design consultations. There's no universally right answer — it depends on how much yearly maintenance you're willing to do and how long you plan to stay in the home.",
      },
      { type: "h2", text: "Upfront Cost" },
      {
        type: "p",
        text: "Wood wins here. Pressure-treated pine and even cedar cost meaningfully less per square foot than composite decking, which makes wood the more approachable option for a larger deck footprint on a tighter budget.",
      },
      { type: "h2", text: "Maintenance" },
      {
        type: "p",
        text: "This is where composite pulls ahead decisively. Wood needs cleaning and restaining every 1–3 years depending on sun exposure to stay protected from San Antonio's UV intensity. Composite needs occasional washing but no staining or sealing, ever.",
      },
      { type: "h2", text: "Heat and Comfort Underfoot" },
      {
        type: "p",
        text: "Lighter-colored wood species generally stay cooler than dark composite boards in direct August sun, though newer composite lines with reflective capstock technology have closed that gap significantly. If bare feet on the deck matter to you, ask to see color samples in direct sunlight before deciding.",
      },
      { type: "h2", text: "Lifespan" },
      {
        type: "ul",
        items: [
          "Pressure-treated pine: 10–15 years with regular staining",
          "Cedar: 15–20 years with regular staining",
          "Composite: 25–30+ years, often backed by manufacturer warranty",
        ],
      },
      { type: "h2", text: "Resale Considerations" },
      {
        type: "p",
        text: "Composite decking is increasingly viewed as a premium feature by buyers specifically because it signals lower ongoing maintenance — worth factoring in if you expect to sell within the next decade.",
      },
      {
        type: "callout",
        text: "Rule of thumb: if you enjoy yard work and want the lowest upfront cost, wood is a great choice. If your priority is spending weekends on the deck instead of maintaining it, composite pays for itself in time saved.",
      },
    ],
    relatedServiceSlugs: ["composite-decking", "deck-design-installation"],
  },
  {
    slug: "how-often-reseal-deck-texas-heat",
    title: "How Often Should You Reseal a Deck in Texas Heat?",
    excerpt:
      "UV exposure, humidity swings, and freeze-thaw winters all affect how long a stain job actually lasts. Here's a realistic resealing schedule.",
    date: "2025-11-10",
    tag: "Maintenance",
    readTime: "5 min read",
    content: [
      {
        type: "p",
        text: "San Antonio's climate is uniquely hard on exterior wood finishes — intense summer UV, sudden humidity swings, and enough winter freeze-thaw cycles to stress a finish that would hold up longer in a milder climate.",
      },
      { type: "h2", text: "General Resealing Timeline" },
      {
        type: "ul",
        items: [
          "Full sun, south- or west-facing decks: every 1–2 years",
          "Partial shade or covered decks: every 2–3 years",
          "Decks under a solid patio cover: every 3–4 years",
        ],
      },
      { type: "h2", text: "Signs You're Overdue" },
      {
        type: "ul",
        items: [
          "Water no longer beads on the surface — it soaks in instead",
          "Graying or silvering has become visible across the boards",
          "Wood feels rough or splintery underfoot",
          "You can see the stain has worn through in high-traffic paths",
        ],
      },
      {
        type: "p",
        text: "The water bead test is the fastest way to check: splash a cup of water on a dry board in full shade. If it beads up, your finish is still working. If it soaks in within a minute or two, it's time to reseal.",
      },
      { type: "h2", text: "Why Skipping a Season Costs More Later" },
      {
        type: "p",
        text: "Once UV breaks down the surface fibers of unsealed wood, moisture gets into the grain and accelerates checking and splitting. A deck that's gone two seasons without stain often needs a heavier sanding pass — and sometimes board replacement — that a deck on schedule would never have needed.",
      },
      {
        type: "callout",
        text: "Composite decking sidesteps this maintenance cycle entirely, which is one of the main reasons homeowners switch materials when it's time for a full rebuild rather than another repair.",
      },
    ],
    relatedServiceSlugs: ["deck-staining-sealing", "composite-decking"],
  },
  {
    slug: "signs-your-deck-needs-repair",
    title: "5 Signs Your Deck Needs Repair (Not Just a Refinish)",
    excerpt:
      "Staining won't fix a structural problem. Here's how to tell the difference before you spend money on the wrong fix.",
    date: "2025-10-22",
    tag: "Repair",
    readTime: "5 min read",
    content: [
      {
        type: "p",
        text: "A fresh coat of stain makes almost any deck look better, which is exactly why structural problems sometimes get papered over instead of fixed. Here's what to check before you call for a refinish.",
      },
      { type: "h2", text: "1. Bounce or Sponginess Underfoot" },
      {
        type: "p",
        text: "A deck should feel solid when you walk across it. Noticeable bounce usually means joists have weakened from rot or were undersized for the span in the first place.",
      },
      { type: "h2", text: "2. Movement in the Railing" },
      {
        type: "p",
        text: "Push firmly on the top rail. Any real movement — not just a slight give — usually means post connections have loosened or the posts themselves have started to rot at the base.",
      },
      { type: "h2", text: "3. Gaps Between the Ledger Board and the House" },
      {
        type: "p",
        text: "The ledger board attachment to your house is the single most critical structural connection on an attached deck. Visible gaps, water staining, or rust streaks here are a serious warning sign and the leading cause of deck collapses nationally.",
      },
      { type: "h2", text: "4. Rust Streaks Around Hardware" },
      {
        type: "p",
        text: "Rust bleeding from joist hangers or bolts means the hardware is failing, often because non-coated fasteners were used originally or standard hardware has been overwhelmed by years of moisture exposure.",
      },
      { type: "h2", text: "5. Posts That Feel Loose at the Base" },
      {
        type: "p",
        text: "Grab a support post and gently rock it. Looseness usually points to a rotted post base or a footing that has shifted — both are structural issues that staining will only disguise, not fix.",
      },
      {
        type: "callout",
        text: "If you notice any of these, get a structural inspection before spending money on a refinish. Cosmetic work on a deck with an underlying structural issue is money spent covering up a problem instead of solving it.",
      },
    ],
    relatedServiceSlugs: ["deck-repair-restoration"],
  },
  {
    slug: "cedar-vs-pressure-treated-pine",
    title: "Cedar vs. Pressure-Treated Pine: Choosing Your Deck Wood",
    excerpt:
      "Both are popular, budget-friendly choices for San Antonio decks — but they behave differently over time. Here's how to decide.",
    date: "2025-09-18",
    tag: "Materials",
    readTime: "5 min read",
    content: [
      {
        type: "p",
        text: "Cedar and pressure-treated pine are the two most common wood choices for decks in our area, and both can look great and last for years — but they age differently, and the right pick depends on what you value most.",
      },
      { type: "h2", text: "Cost" },
      {
        type: "p",
        text: "Pressure-treated pine is typically 20–35% less expensive than cedar for the same square footage, which is often the deciding factor for larger deck footprints.",
      },
      { type: "h2", text: "Rot and Insect Resistance" },
      {
        type: "p",
        text: "Cedar contains natural oils that resist rot and deter insects without chemical treatment. Pressure-treated pine is chemically treated to resist the same threats, but the protection is concentrated near the surface — deep cuts or drilled holes should be treated with sealant to protect the exposed untreated core.",
      },
      { type: "h2", text: "Appearance" },
      {
        type: "p",
        text: "Cedar has a tighter, more consistent grain and takes semi-transparent stain beautifully, which is why it's often chosen for more visible, higher-end builds. Pressure-treated pine has a coarser grain and is more prone to knots, but performs well with solid stain that doesn't rely on showing off the grain.",
      },
      { type: "h2", text: "Stability" },
      {
        type: "p",
        text: "Cedar tends to warp and cup less over time than pressure-treated pine, particularly in boards that see direct, intense sun exposure through a San Antonio summer.",
      },
      {
        type: "ol",
        items: [
          "Choose pressure-treated pine if budget is the top priority and you're comfortable staining every 1–2 years.",
          "Choose cedar if you want a more refined look, slightly better long-term stability, and don't mind the added upfront cost.",
          "Choose composite if you'd rather not think about either wood species' maintenance schedule at all.",
        ],
      },
    ],
    relatedServiceSlugs: ["deck-design-installation", "deck-staining-sealing"],
  },
  {
    slug: "deck-permit-requirements-san-antonio",
    title: "Do You Need a Permit to Build a Deck in San Antonio?",
    excerpt:
      "A plain-language guide to when a deck needs a permit, what jurisdictions apply across the San Antonio metro, and how HOA review fits in.",
    date: "2025-08-27",
    tag: "Planning",
    readTime: "6 min read",
    content: [
      {
        type: "p",
        text: "Permit rules trip up more first-time deck owners than any other part of the process. Here's a straightforward breakdown of when you need one and what to expect.",
      },
      { type: "h2", text: "When a Permit Is Required" },
      {
        type: "p",
        text: "In the City of San Antonio and most surrounding municipalities, a permit is required for any deck attached to your home, and for any freestanding deck elevated more than 30 inches above grade. Electrical work for outdoor lighting or fans also requires its own permit.",
      },
      { type: "h2", text: "It Depends on Your Jurisdiction" },
      {
        type: "p",
        text: "The San Antonio metro spans multiple permitting authorities, and the correct one depends on your exact address:",
      },
      {
        type: "ul",
        items: [
          "City of San Antonio Development Services",
          "Individual suburb building departments (Alamo Heights, Boerne, Schertz, Live Oak, Converse, Universal City, Helotes, New Braunfels each have their own)",
          "Bexar County, Comal County, or Kendall County for unincorporated areas",
        ],
      },
      { type: "h2", text: "HOA Review Is Separate From City Permits" },
      {
        type: "p",
        text: "Many newer communities, particularly in Stone Oak and similar planned developments, require a separate HOA architectural committee approval before you can even submit for a city permit. Skipping this step is one of the most common causes of project delays we see.",
      },
      { type: "h2", text: "What the Permit Process Typically Involves" },
      {
        type: "ol",
        items: [
          "Submit stamped or standard plans depending on deck size and height",
          "Pay permit fees, generally $150–$500 depending on jurisdiction and project scope",
          "Schedule a footing inspection before decking is installed",
          "Schedule a final inspection once the deck is complete",
        ],
      },
      {
        type: "callout",
        text: "Building without a required permit can create real problems at resale — unpermitted structures often have to be disclosed and can hold up a sale or trigger a retroactive permit and inspection process. It's rarely worth the shortcut.",
      },
    ],
    relatedServiceSlugs: ["deck-design-installation"],
  },
  {
    slug: "best-pool-deck-materials",
    title: "Pool Deck Materials That Won't Get Slippery or Fade",
    excerpt:
      "Pool decks face harder conditions than a standard backyard deck. Here's what actually holds up to chlorine, splash, and bare feet.",
    date: "2025-07-15",
    tag: "Pool Decks",
    readTime: "5 min read",
    content: [
      {
        type: "p",
        text: "Pool decks deal with near-constant moisture, chemical splash, sunscreen residue, and heavy bare-foot traffic — conditions that push standard decking materials and fasteners past what they're designed for.",
      },
      { type: "h2", text: "Capped Composite" },
      {
        type: "p",
        text: "Capped composite boards are the most common choice for new pool decks. The polymer cap resists chlorine and moisture absorption, doesn't support mildew growth the way untreated wood can, and many lines are engineered with textured, slip-resistant surfaces specifically for wet areas.",
      },
      { type: "h2", text: "Cedar and Tropical Hardwoods" },
      {
        type: "p",
        text: "For homeowners who want a natural wood look poolside, cedar and dense tropical hardwoods like ipe perform far better than pressure-treated pine in constant wet conditions, thanks to naturally higher rot and moisture resistance.",
      },
      { type: "h2", text: "Fasteners and Hardware Matter As Much As the Boards" },
      {
        type: "p",
        text: "Standard exterior-grade fasteners can corrode faster than expected under near-daily chlorine and moisture exposure. We spec stainless steel or specifically coated fasteners rated for wet, chemical-exposed environments on every pool deck we build.",
      },
      { type: "h2", text: "Color and Heat" },
      {
        type: "p",
        text: "Lighter composite colors stay noticeably cooler underfoot in direct summer sun than dark tones — worth prioritizing for a pool deck where bare feet are the norm rather than the exception.",
      },
      {
        type: "callout",
        text: "Proper drainage and airflow underneath the deck matter just as much as material choice — even the best board will hold moisture and develop mildew if water can't drain away from the structure.",
      },
    ],
    relatedServiceSlugs: ["pool-deck-construction", "composite-decking"],
  },
  {
    slug: "prep-deck-for-texas-summer",
    title: "How to Prep Your Deck for a Texas Summer",
    excerpt:
      "A pre-summer maintenance checklist to catch small problems before 100-degree days and heavy entertaining put real stress on your deck.",
    date: "2025-05-30",
    tag: "Maintenance",
    readTime: "4 min read",
    content: [
      {
        type: "p",
        text: "Late spring is the ideal window to get ahead of summer deck problems — before the heat makes any repair work more uncomfortable and before your deck sees its heaviest use of the year.",
      },
      { type: "h2", text: "Walk the Full Structure" },
      {
        type: "p",
        text: "Check for loose railings, soft or spongy boards, popped fasteners, and any gaps at the ledger board connection to your house. Small issues caught now are far cheaper than the same issue discovered after a summer of heavy use.",
      },
      { type: "h2", text: "Do the Water Bead Test" },
      {
        type: "p",
        text: "Splash water on a shaded board. If it soaks in rather than beading up, your stain has worn through and it's time to reseal before peak UV season arrives.",
      },
      { type: "h2", text: "Clear Debris From Between Boards" },
      {
        type: "p",
        text: "Leaves and dirt trapped between boards trap moisture against the wood and accelerate rot. A quick sweep and rinse before summer keeps airflow moving underneath the deck surface.",
      },
      { type: "h2", text: "Check Furniture and Grill Placement" },
      {
        type: "p",
        text: "Move furniture periodically through the season to avoid uneven fading, and confirm your grill sits on a heat-safe pad — direct grill heat is one of the more common causes of localized deck damage we see." ,
      },
      {
        type: "ol",
        items: [
          "Inspect structure and hardware",
          "Test finish with the water bead check",
          "Clear debris and confirm drainage",
          "Reseal or spot-repair anything that needs it before peak summer heat",
        ],
      },
      {
        type: "callout",
        text: "If your walkthrough turns up anything beyond surface wear — movement, soft spots, or rust — get it inspected before summer entertaining season puts more load and more feet on the deck.",
      },
    ],
    relatedServiceSlugs: ["deck-staining-sealing", "deck-repair-restoration"],
  },
];

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
