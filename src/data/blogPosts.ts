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
  relatedPostSlugs: string[];
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
    relatedPostSlugs: ["does-a-deck-add-home-value", "how-long-does-it-take-to-build-a-deck"],
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
    relatedPostSlugs: ["deck-vs-patio-comparison", "cedar-vs-pressure-treated-pine"],
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
    relatedPostSlugs: ["prep-deck-for-texas-summer", "protect-wood-deck-from-termites-texas"],
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
    relatedPostSlugs: ["protect-wood-deck-from-termites-texas", "how-often-reseal-deck-texas-heat"],
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
    relatedPostSlugs: ["protect-wood-deck-from-termites-texas", "composite-vs-wood-decking-comparison"],
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
    relatedPostSlugs: ["how-long-does-it-take-to-build-a-deck", "hot-tub-on-deck"],
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
    relatedPostSlugs: ["hot-tub-on-deck", "deck-vs-patio-comparison"],
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
    relatedPostSlugs: ["how-often-reseal-deck-texas-heat", "protect-wood-deck-from-termites-texas"],
  },
  {
    slug: "how-long-does-it-take-to-build-a-deck",
    title: "How Long Does It Take to Build a Deck? Realistic Timelines",
    excerpt:
      "From first call to first cookout — what actually eats up time on a deck project, and how to build a schedule that won't leave you frustrated.",
    date: "2026-02-04",
    tag: "Planning",
    readTime: "5 min read",
    content: [
      {
        type: "p",
        text: "Most homeowners underestimate the front end of a deck project, not the construction itself. The actual build is often the fastest part — design, permitting, and material lead times are where timelines quietly stretch.",
      },
      { type: "h2", text: "Design and Permitting: 2–4 Weeks" },
      {
        type: "p",
        text: "A straightforward design typically takes a few days to finalize once you've chosen materials and layout. Permit review timelines vary by jurisdiction — the City of San Antonio often turns around simple residential deck permits in 1–2 weeks, but HOA architectural review in communities like Stone Oak or Alamo Heights can add another 2–3 weeks on top of that.",
      },
      { type: "h2", text: "Material Lead Times" },
      { type: "h3", text: "In-stock lumber" },
      {
        type: "p",
        text: "Pressure-treated pine and cedar are typically stocked locally and ready within days of ordering, which is one reason wood projects often move faster start to finish than composite ones.",
      },
      { type: "h3", text: "Composite decking special orders" },
      {
        type: "p",
        text: "Popular composite colors are often in stock, but less common colors or trim profiles can carry a 2–4 week manufacturer lead time. If you're set on a specific composite color, confirm availability before locking in a start date.",
      },
      { type: "h2", text: "Actual Construction Time by Deck Size" },
      {
        type: "ul",
        items: [
          "Small deck (under 200 sq ft): 3–5 working days",
          "Mid-size deck (200–400 sq ft): 1–2 weeks",
          "Large or multi-level deck with a pergola, screened porch, or stairs to grade: 3–4 weeks",
        ],
      },
      { type: "h2", text: "What Actually Slows a Project Down" },
      {
        type: "ul",
        items: [
          "Rain delays during framing and footing concrete cure time — a real factor during San Antonio's spring storm season",
          "Inspection scheduling gaps between the framing inspection and final inspection",
          "Custom railing (cable, glass, or hand-milled balusters) fabricated off-site",
          "Change orders made mid-build, which can pause work while materials are reordered",
        ],
      },
      {
        type: "callout",
        text: "Build in a buffer. If a contractor gives you a bare-minimum timeline with no room for weather or inspection scheduling, treat that number as the best case, not the expected case.",
      },
      { type: "h2", text: "A Realistic Overall Timeline" },
      {
        type: "ol",
        items: [
          "Initial consultation and design: 3–7 days",
          "Written estimate and contract signing: 2–5 days",
          "Permit submission and approval: 1–4 weeks depending on jurisdiction and HOA review",
          "Material ordering and delivery: same week for wood, up to 4 weeks for special-order composite",
          "Construction: 3 days to 4 weeks depending on size and complexity",
          "Final inspection and walkthrough: 1–5 days after construction wraps",
        ],
      },
      {
        type: "p",
        text: "The honest range for a mid-size deck, from your first call to your first cookout, is usually 6–10 weeks. Ask any contractor for a written schedule that separates design, permitting, material lead time, and construction — a single lump-sum timeline is where most missed expectations come from.",
      },
    ],
    relatedServiceSlugs: ["deck-design-installation", "composite-decking"],
    relatedPostSlugs: ["deck-cost-san-antonio-pricing-guide", "deck-permit-requirements-san-antonio"],
  },
  {
    slug: "deck-vs-patio-comparison",
    title: "Deck vs. Patio: Which Is Right for Your San Antonio Backyard?",
    excerpt:
      "Cost, heat, drainage, and resale — a straight comparison to help you decide between a deck and a patio for your specific lot.",
    date: "2026-02-11",
    tag: "Planning",
    readTime: "6 min read",
    content: [
      {
        type: "p",
        text: "This is one of the first questions we get from homeowners who haven't settled on a project yet, and the honest answer is: it depends heavily on your lot, not just your taste.",
      },
      { type: "h2", text: "Cost Comparison" },
      {
        type: "p",
        text: "A basic paver or stamped-concrete patio is usually cheaper per square foot than a wood deck, and meaningfully cheaper than composite. But that gap narrows or reverses on lots that need significant grading, retaining work, or drainage correction to support a patio at all.",
      },
      { type: "h2", text: "Which Handles Slope and Drainage Better" },
      {
        type: "p",
        text: "This is where decks usually win in San Antonio. Our expansive clay soil holds water and shifts seasonally, which can crack and heave a patio slab over time on anything but a well-prepared, well-draining site. A deck built on properly sized footings rides above grade and isn't affected by soil movement the same way — a real advantage on sloped lots common in Boerne and Helotes.",
      },
      { type: "h2", text: "Heat and Comfort" },
      {
        type: "p",
        text: "Concrete and stone patios absorb and hold heat, and by mid-afternoon in a San Antonio summer, a dark-colored patio surface can be uncomfortable to walk on barefoot. Wood stays cooler than concrete, and lighter composite colors are engineered to run noticeably cooler than dark composite boards in direct sun — worth factoring in if the space gets full afternoon exposure.",
      },
      { type: "h2", text: "Maintenance Differences" },
      {
        type: "ul",
        items: [
          "Patios: occasional resealing of pavers or concrete, weed control in joints, pressure washing",
          "Wood decks: annual or biennial staining/sealing, hardware checks, board replacement over time",
          "Composite decks: periodic cleaning, essentially no staining or sealing required",
        ],
      },
      { type: "h2", text: "Resale and Backyard Usability" },
      {
        type: "p",
        text: "Decks tend to read as a more deliberate outdoor living investment to buyers, especially when they extend usable square footage on a sloped or oddly graded lot where a patio wasn't a realistic option. See our full breakdown on deck resale value for more detail.",
      },
      {
        type: "callout",
        text: "You don't always have to pick one. A raised deck off the back of the house connected by stairs to a paver patio at grade is one of the most common combinations we build — it gets you the drainage advantage of a deck near the house and the open, ground-level feel of a patio for a fire pit or larger gatherings.",
      },
      { type: "h2", text: "Quick Decision Checklist" },
      {
        type: "ol",
        items: [
          "Sloped or drainage-challenged lot → deck",
          "Flat, well-draining lot and lowest upfront cost is the priority → patio",
          "Want direct, step-free access from an elevated back door → deck",
          "Want low ongoing maintenance and don't mind concrete underfoot → patio",
          "Want both → ask about a combined deck-and-patio design",
        ],
      },
    ],
    relatedServiceSlugs: ["deck-design-installation", "pool-deck-construction"],
    relatedPostSlugs: ["composite-vs-wood-decking-comparison", "does-a-deck-add-home-value"],
  },
  {
    slug: "does-a-deck-add-home-value",
    title: "Does a New Deck Increase Your Home's Value in San Antonio?",
    excerpt:
      "What buyers and appraisers actually respond to, why permitted work matters more than square footage, and how material choice affects resale appeal.",
    date: "2026-02-18",
    tag: "Cost Guides",
    readTime: "6 min read",
    content: [
      {
        type: "p",
        text: "Deck additions are consistently ranked among the remodeling projects that recoup the largest share of their cost at resale — often more than kitchen or bathroom remodels, according to national cost-vs-value data. But the honest answer for any specific home depends on how the deck is built, not just whether one exists.",
      },
      { type: "h2", text: "What Buyers and Appraisers Actually Look At" },
      {
        type: "ul",
        items: [
          "Structural condition — solid railings, no soft or bouncy boards, no visible rot at ground contact points",
          "Whether the work was permitted and passed final inspection",
          "How well the deck integrates with the home's style, rather than looking like a bolted-on afterthought",
          "Size relative to the lot and home — a deck that overwhelms a small backyard reads as excessive, not additive",
        ],
      },
      { type: "h2", text: "Material Choice and ROI" },
      {
        type: "p",
        text: "Composite decking generally costs more upfront but tends to hold buyer appeal longer because it photographs well and doesn't carry the \"this will need refinishing soon\" concern that an aging wood deck raises during a showing. A well-maintained wood deck with a fresh stain job can perform just as well, but the maintenance history matters to a buyer in a way it doesn't for composite.",
      },
      { type: "h2", text: "Why Permitted Work Matters More Than People Expect" },
      {
        type: "p",
        text: "An unpermitted deck can complicate a sale — some lenders and appraisers flag unpermitted structural additions, which can stall closing or force last-minute retroactive permitting. See our permit guide for what's required in San Antonio before you build.",
      },
      {
        type: "callout",
        text: "If you're planning to sell within the next few years, skipping a permit to save time now is one of the more common regrets we hear about during a later sale.",
      },
      { type: "h2", text: "Local Factors That Matter in the San Antonio Market" },
      {
        type: "p",
        text: "Indoor-outdoor living carries real weight here given how much of the year is comfortable enough for outdoor entertaining. Decks that connect naturally to a kitchen or living area, or that pair with a pool deck or screened porch, tend to stand out most in listing photos and showings in neighborhoods like Stone Oak, Schertz, and Converse.",
      },
      { type: "h2", text: "How to Maximize Resale Value" },
      {
        type: "ol",
        items: [
          "Pull the required permits and keep the final inspection paperwork",
          "Match materials and railing style to the home's existing architecture",
          "Prioritize build quality over maximizing square footage",
          "Keep maintenance records (staining dates, repairs) to show buyers",
          "Consider composite in high-visibility areas if low-maintenance appeal matters to your target buyer",
        ],
      },
    ],
    relatedServiceSlugs: ["deck-design-installation", "composite-decking"],
    relatedPostSlugs: ["deck-cost-san-antonio-pricing-guide", "deck-vs-patio-comparison"],
  },
  {
    slug: "protect-wood-deck-from-termites-texas",
    title: "How to Protect Your Wood Deck From Termites in Texas",
    excerpt:
      "San Antonio sits in a high subterranean termite pressure zone. Here's where they actually get into a deck, and how to build and maintain one that keeps them out.",
    date: "2026-02-25",
    tag: "Maintenance",
    readTime: "5 min read",
    content: [
      {
        type: "p",
        text: "Central Texas has significant subterranean termite pressure, and an outdoor wood structure sitting closer to grade and soil than the rest of your house is a natural point of entry if it isn't built and maintained with that in mind.",
      },
      { type: "h2", text: "Where Termites Actually Get In" },
      {
        type: "ul",
        items: [
          "Ledger board connections where the deck attaches to the house framing",
          "Support posts embedded directly in or resting on soil without a standoff base",
          "Mulch or soil piled up against framing or skirting",
          "Any spot where moisture collects and wood stays damp for extended periods",
        ],
      },
      { type: "h2", text: "Wood Choice Matters" },
      {
        type: "p",
        text: "Pressure-treated pine is chemically treated to resist termites and rot, which is why it's required for any framing member in ground contact. Cedar has natural oils that offer some resistance but isn't as reliably termite-resistant as properly treated lumber for the parts of a deck closest to grade — see our full cedar vs. pressure-treated comparison for where each makes sense.",
      },
      { type: "h2", text: "Warning Signs to Check For Seasonally" },
      {
        type: "ul",
        items: [
          "Mud tubes running up posts, footings, or the house foundation near the deck",
          "Boards that sound hollow when tapped, even if the surface looks fine",
          "Blistered or bubbling paint or stain, which can indicate moisture trapped underneath",
          "Discarded termite wings near the structure, especially after spring rain",
        ],
      },
      {
        type: "p",
        text: "If any of these show up, don't just refinish over it — see our guide on the signs your deck needs repair versus a surface refinish.",
      },
      { type: "h2", text: "Preventive Steps That Actually Work" },
      {
        type: "ol",
        items: [
          "Use post bases and standoffs that keep structural wood off soil and concrete rather than embedding posts directly",
          "Keep mulch, soil, and dense plantings pulled back from framing and skirting",
          "Maintain airflow underneath the deck to keep humidity from building up",
          "Reseal on schedule — a failed finish exposes bare wood to moisture, which attracts termites even in treated lumber over time",
          "Schedule an annual termite inspection alongside your regular deck check",
        ],
      },
      {
        type: "callout",
        text: "A termite problem caught early is a spot repair. Caught late, it can mean replacing structural framing, not just decking boards — the inspection is worth the twenty minutes.",
      },
    ],
    relatedServiceSlugs: ["deck-repair-restoration", "deck-staining-sealing"],
    relatedPostSlugs: ["signs-your-deck-needs-repair", "cedar-vs-pressure-treated-pine"],
  },
  {
    slug: "hot-tub-on-deck",
    title: "Can Your Deck Support a Hot Tub? Weight & Framing Guide",
    excerpt:
      "A loaded hot tub is far heavier than most homeowners expect. Here's what your framing, footings, and permits actually need to handle it safely.",
    date: "2026-03-04",
    tag: "Planning",
    readTime: "6 min read",
    content: [
      {
        type: "p",
        text: "This is one of the most common structural questions we get, and it's a good one to ask before you buy the spa, not after it's sitting in your driveway. A deck framed for normal foot traffic is not automatically rated to hold a filled hot tub.",
      },
      { type: "h2", text: "How Much Does a Hot Tub Actually Weigh?" },
      {
        type: "p",
        text: "An empty 6-person spa typically weighs somewhere around 800–1,000 lbs. Once you add water and several adults, that same footprint — often only around 7x7 feet — can concentrate 4,000 to 5,000+ lbs into roughly 50–60 square feet. That works out to a concentrated load well beyond the 40 lb per square foot a standard residential deck is designed to carry.",
      },
      { type: "h2", text: "What Your Framing Needs to Handle It" },
      { type: "h3", text: "Joist spacing and beam sizing" },
      {
        type: "p",
        text: "Framing under a hot tub location typically needs tighter joist spacing and larger or doubled beams than the rest of the deck to spread that concentrated load properly rather than relying on a handful of joists to carry it.",
      },
      { type: "h3", text: "Footings sized for the load path" },
      {
        type: "p",
        text: "San Antonio's expansive clay soil already pushes footing depth beyond what you'd see in other regions for a standard deck. Under a hot tub, the footings supporting that load path often need to be larger in diameter or reinforced specifically for the concentrated weight, not just deep enough for frost line concerns.",
      },
      { type: "h2", text: "Ground-Level vs. Elevated Placement" },
      {
        type: "p",
        text: "A reinforced concrete pad at grade is the simplest and least expensive way to support a hot tub structurally, since the load goes straight to the ground rather than through deck framing. An elevated deck can absolutely be built to handle it, but it should go through a structural review — this isn't a location where \"it looks sturdy enough\" is a safe judgment call.",
      },
      {
        type: "callout",
        text: "Always confirm your hot tub's actual filled weight and footprint from the manufacturer's spec sheet before finalizing deck framing. Guessing at spa weight is the most common mistake we see in DIY and even some contractor-built hot tub decks.",
      },
      { type: "h2", text: "Permits and Electrical" },
      {
        type: "p",
        text: "Beyond the structural permit for the framing itself, most hot tub installations require a dedicated GFCI-protected electrical circuit pulled and inspected separately. Check our permit guide for what San Antonio and surrounding jurisdictions require before you schedule delivery.",
      },
      { type: "h2", text: "Retrofitting an Existing Deck" },
      {
        type: "p",
        text: "Adding a hot tub to a deck that wasn't originally designed for one is possible but often means opening up and reinforcing framing from underneath, which is more involved than it sounds. If a hot tub is even a maybe for the future, it's worth telling us during initial design so we can frame that section for it from day one.",
      },
      {
        type: "ol",
        items: [
          "Get the filled weight and footprint from the hot tub's spec sheet",
          "Have the existing or planned framing evaluated against that load",
          "Size footings for the concentrated load path, not just standard spacing",
          "Pull structural and electrical permits before delivery",
          "Schedule the dedicated GFCI circuit with a licensed electrician",
        ],
      },
    ],
    relatedServiceSlugs: ["deck-design-installation", "pool-deck-construction"],
    relatedPostSlugs: ["deck-cost-san-antonio-pricing-guide", "how-long-does-it-take-to-build-a-deck"],
  },
];

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
