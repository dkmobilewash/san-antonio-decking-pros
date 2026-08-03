export interface CaseStudy {
  title: string;
  description: string;
  result: string;
}

export interface AreaDifferentiator {
  title: string;
  description: string;
}

export interface AreaFaq {
  question: string;
  answer: string;
}

export interface ServiceArea {
  name: string;
  slug: string;
  tagline: string;
  intro: string;
  why: string;
  topServices: string[];
  localNotes: string;
  closingLine: string;
  aboutDecking: string[];
  caseStudies: CaseStudy[];
  whyNumberOne: AreaDifferentiator[];
  faqs: AreaFaq[];
}

export const serviceAreas: ServiceArea[] = [
  {
    name: "Alamo Heights",
    slug: "alamo-heights",
    tagline: "Custom decks for one of San Antonio's most established neighborhoods",
    intro:
      "Alamo Heights homes tend to sit on mature, well-established lots with established oak canopy, which shapes almost every deck we design here — placement has to work around root zones and dappled shade rather than open sun.",
    why:
      "Older homes in Alamo Heights often have additions and grade changes over the decades, so many decks here need custom framing solutions rather than a standard rectangular build to tie in cleanly with the existing house lines.",
    topServices: ["Custom Deck Design & Installation", "Screened Porches & Patio Covers", "Deck Staining & Sealing"],
    localNotes:
      "The City of Alamo Heights has its own permitting office separate from the City of San Antonio, and the Historic and Design Review Board may weigh in on projects visible from the street. We coordinate directly with the city's building department to keep the paperwork moving.",
    closingLine:
      "If you're in Alamo Heights and want a deck that respects the character of your lot's mature trees, we'd like to walk the property with you.",
    aboutDecking: [
      "Decking in Alamo Heights is defined by what's already on the lot — mature oak canopy, established landscaping, and homes that have often been added onto more than once over the decades. A deck here rarely gets to start from a blank slate.",
      "That means design work starts with the trees and the existing house lines, not a standard rectangle. Root zones limit where footings can go, dappled shade changes which materials perform best, and additions from prior decades often leave grade changes a generic deck plan wouldn't account for.",
      "The result, done well, is a deck that reads as though it's always been part of the property — built to work with the mature canopy rather than clearing space to make room for a standard layout.",
    ],
    caseStudies: [
      {
        title: "Cedar Deck Built Around a Mature Live Oak",
        description:
          "A homeowner wanted a multi-level cedar deck without disturbing a large live oak anchoring the backyard. We hand-notched the framing around the root zone and adjusted footing placement to stay outside the tree's critical root area.",
        result: "A shaded, multi-level cedar deck that preserved the tree's canopy as the yard's centerpiece.",
      },
      {
        title: "Deck Addition on a Historic-District Home",
        description:
          "An addition to a home visible from the street required coordination with the Historic and Design Review Board on material and railing style before permitting could move forward.",
        result: "An approved deck addition that matches the home's original architectural character.",
      },
    ],
    whyNumberOne: [
      {
        title: "Root-Zone-Aware Design",
        description: "We plan footing placement around mature tree root zones instead of defaulting to a standard grid layout.",
      },
      {
        title: "Direct Relationship With the City's Permitting Office",
        description: "Alamo Heights permits separately from San Antonio — we know that office and the Historic and Design Review Board process firsthand.",
      },
      {
        title: "Custom Framing for Older, Modified Homes",
        description: "Decades of additions mean grade changes and irregular house lines — we design custom rather than forcing a standard footprint.",
      },
      {
        title: "A Track Record on Mature Lots",
        description: "We've built repeatedly across Alamo Heights' established lots and know what these properties tend to require before we even arrive.",
      },
    ],
    faqs: [
      {
        question: "Do you build decks in Alamo Heights?",
        answer:
          "Yes — Alamo Heights is one of our regularly served areas. Older homes here often have additions and grade changes over the decades, so many decks need custom framing solutions rather than a standard build.",
      },
      {
        question: "What permits are required for a deck in Alamo Heights?",
        answer:
          "The City of Alamo Heights has its own permitting office separate from the City of San Antonio, and the Historic and Design Review Board may weigh in on projects visible from the street. We coordinate directly with the city's building department to keep the paperwork moving.",
      },
      {
        question: "Can you build a deck around mature trees on my lot?",
        answer:
          "Yes — this is one of the more common design challenges in Alamo Heights. We plan footing placement around root zones and can adjust framing to work with an established tree rather than requiring its removal.",
      },
      {
        question: "How long does a deck project take in Alamo Heights?",
        answer:
          "Most single-level decks take 1–2 weeks to build once permits are approved. Projects requiring Historic and Design Review Board input can add time to the front end of the schedule, which we account for in your written timeline.",
      },
    ],
  },
  {
    name: "Stone Oak",
    slug: "stone-oak",
    tagline: "Decks and outdoor living for Stone Oak's newer builds and HOA communities",
    intro:
      "Stone Oak's terrain is defined by Hill Country limestone shelf just under the topsoil, which affects how footings are set, and most communities here operate under active HOA architectural review.",
    why:
      "Many Stone Oak lots have a noticeable slope from front to back, which is why multi-level decks and taller support posts are common requests in this part of San Antonio.",
    topServices: ["Custom Deck Design & Installation", "Composite Decking", "Pool Deck Construction"],
    localNotes:
      "Most Stone Oak subdivisions require HOA architectural committee approval before permit submission, including material and color specs. We prepare the documentation package your HOA will ask for as part of the design phase so it doesn't slow down your build date.",
    closingLine:
      "We've worked through HOA approval in most of Stone Oak's major subdivisions and can walk you through what your specific community will require.",
    aboutDecking: [
      "Decking in Stone Oak comes with two constraints most other San Antonio neighborhoods don't combine: a limestone shelf sitting close to the surface, and near-universal HOA architectural review before a permit can even be filed.",
      "The limestone affects footing decisions directly — standard depth specs don't always apply, and many lots also slope noticeably from front to back, which is why multi-level layouts and taller support posts show up often in Stone Oak designs.",
      "The HOA layer adds a second track of approval most homeowners underestimate going in. Material, color, and sometimes railing style all need documentation before a city permit application even makes sense to file.",
    ],
    caseStudies: [
      {
        title: "Multi-Level Composite Deck on a Sloped Lot",
        description:
          "A backyard with significant front-to-back grade change needed a tiered design with taller support posts to create a usable, level entertaining surface.",
        result: "A multi-level composite deck that turned a steep, underused slope into the family's main outdoor space.",
      },
      {
        title: "HOA-Approved Pool Deck Surround",
        description:
          "We prepared the material and color documentation package a Stone Oak HOA architectural committee required, submitting it ahead of the city permit application to avoid delays.",
        result: "Approval on the first submission, with construction starting on the original proposed timeline.",
      },
    ],
    whyNumberOne: [
      {
        title: "HOA Documentation Prepared Up Front",
        description: "We put together the material, color, and design package most Stone Oak HOAs require before we ever file for a city permit.",
      },
      {
        title: "Footing Solutions for Limestone-Shelf Soil",
        description: "We know how shallow rock in this area affects footing depth and design accordingly rather than assuming standard soil conditions.",
      },
      {
        title: "Multi-Level Design for Sloped Lots",
        description: "Front-to-back grade change is common here — we design tiered layouts as a first option, not an afterthought.",
      },
      {
        title: "Familiarity With Community Guidelines",
        description: "We've worked through architectural review in most of Stone Oak's major subdivisions and know what each tends to expect.",
      },
    ],
    faqs: [
      {
        question: "Do you build decks in Stone Oak?",
        answer:
          "Yes — Stone Oak is one of our regularly served areas. Many lots here have a noticeable slope from front to back, which is why multi-level decks and taller support posts are common requests.",
      },
      {
        question: "What permits are required for a deck in Stone Oak?",
        answer:
          "Most Stone Oak subdivisions require HOA architectural committee approval before permit submission, including material and color specs. We prepare the documentation package your HOA will ask for as part of the design phase.",
      },
      {
        question: "How does HOA approval affect my project timeline?",
        answer:
          "HOA review typically adds one to a few weeks ahead of permit filing, depending on your community's committee schedule. We build this into your project timeline from the start rather than treating it as a surprise delay.",
      },
      {
        question: "What decking material works best for Stone Oak's sloped lots?",
        answer:
          "Composite decking is popular here for its low maintenance on multi-level builds, though cedar and pressure-treated pine remain strong options depending on your HOA's material guidelines and your budget.",
      },
    ],
  },
  {
    name: "Boerne",
    slug: "boerne",
    tagline: "Hill Country deck building for Boerne's sloped, rocky lots",
    intro:
      "Boerne properties are some of the most dramatic terrain we build on — steep grade changes, exposed limestone, and views worth designing around rather than fighting.",
    why:
      "Standard footing depths often aren't practical on Boerne's rocky Hill Country lots, so we frequently use surface-mounted post bases or engineered pier solutions suited to shallow rock.",
    topServices: ["Custom Deck Design & Installation", "Screened Porches & Patio Covers", "Deck Repair & Restoration"],
    localNotes:
      "Kendall County permitting applies outside Boerne city limits, while properties inside the city work through the City of Boerne's building department — the requirements and timelines differ, and we confirm which jurisdiction applies before filing.",
    closingLine:
      "If your Boerne lot has grade change or exposed rock that's made other contractors hesitate, that's exactly the kind of build we specialize in.",
    aboutDecking: [
      "Decking in Boerne means designing for the Hill Country terrain first — steep grade change, exposed limestone at or near the surface, and views most homeowners want the deck to frame rather than obscure.",
      "That terrain rules out standard footing approaches on a lot of properties. Where bedrock sits close to the surface, we use surface-mounted post bases or engineered pier systems instead of standard poured footings, and taller support posts or stepped multi-level layouts are often the more practical design than fighting the slope.",
      "Because Boerne spans both city limits and unincorporated Kendall County, jurisdiction is one of the first things we confirm on any project — the permitting process and timeline differ meaningfully between the two.",
    ],
    caseStudies: [
      {
        title: "Elevated Deck Over Exposed Limestone",
        description:
          "A property with bedrock close to the surface ruled out standard footing depths. We used engineered surface-mounted post bases to build a stable elevated deck without deep excavation into rock.",
        result: "A large elevated deck framing Hill Country views, built without the cost of blasting or deep rock excavation.",
      },
      {
        title: "Storm-Damaged Deck Rebuild on an Acreage Property",
        description:
          "Severe weather had damaged railing and framing on a rural Boerne property. We rebuilt the structure to current code with upgraded hardware rated for continued exposure.",
        result: "A restored, code-compliant deck built to hold up to future Hill Country storms.",
      },
    ],
    whyNumberOne: [
      {
        title: "Engineered Solutions for Shallow Rock",
        description: "We use surface-mounted post bases and engineered piers where standard footing depths aren't practical.",
      },
      {
        title: "Experience Across Both Jurisdictions",
        description: "We confirm and work within whichever permitting authority applies — City of Boerne or Kendall County — before filing anything.",
      },
      {
        title: "Design That Frames the View",
        description: "Hill Country terrain is a design asset here, not just an obstacle — we orient decks to take advantage of it.",
      },
      {
        title: "Comfortable With Significant Grade Change",
        description: "Steep slope is the norm rather than the exception on many Boerne lots, and it's a routine part of how we design.",
      },
    ],
    faqs: [
      {
        question: "Do you build decks in Boerne?",
        answer:
          "Yes — Boerne is one of our regularly served areas. Boerne properties are some of the most dramatic terrain we build on, with steep grade changes and exposed limestone that we design around rather than fight.",
      },
      {
        question: "What permits are required for a deck in Boerne?",
        answer:
          "Kendall County permitting applies outside Boerne city limits, while properties inside the city work through the City of Boerne's building department. The requirements and timelines differ, and we confirm which jurisdiction applies before filing.",
      },
      {
        question: "Can you build on a lot with exposed rock or steep grade?",
        answer:
          "Yes — this is common on Boerne properties. We use surface-mounted post bases or engineered pier systems when standard footing depths aren't practical due to shallow bedrock.",
      },
      {
        question: "How long does a deck project take in Boerne?",
        answer:
          "Most projects take 1–3 weeks depending on grade complexity, plus permit turnaround which varies by jurisdiction. We'll give you a realistic timeline once we've assessed your specific terrain.",
      },
    ],
  },
  {
    name: "New Braunfels",
    slug: "new-braunfels",
    tagline: "Decks built for river-adjacent living and Hill Country heat",
    intro:
      "New Braunfels' proximity to the Guadalupe and Comal Rivers means many of our projects here factor in higher humidity, flood-plain considerations near the water, and heavy outdoor entertaining use.",
    why:
      "Homes near the river corridors sometimes fall within flood-plain overlay zones that affect allowable structure height and footing design, which we check before finalizing any design near the water.",
    topServices: ["Pool Deck Construction", "Screened Porches & Patio Covers", "Composite Decking"],
    localNotes:
      "New Braunfels permits through the City of New Braunfels or Comal County depending on the property location, and flood-plain properties may require additional documentation. We verify flood zone status early so it doesn't surprise you mid-project.",
    closingLine:
      "Whether you're a mile from the river or out toward the county line, we'll design a deck suited to your exact lot conditions.",
    aboutDecking: [
      "Decking in New Braunfels is shaped by the Guadalupe and Comal Rivers running through it — higher ambient humidity than much of San Antonio, heavier outdoor entertaining use, and for river-adjacent properties, flood-plain overlay rules that affect what can be built and how.",
      "Humidity changes material recommendations here more than in drier parts of the metro — moisture-resistant species and coated or stainless fasteners matter more on a New Braunfels build than they would further from the water.",
      "For properties near the river corridors specifically, flood-plain status is one of the first things we verify, since it can affect allowable structure height and footing design before a design is ever finalized.",
    ],
    caseStudies: [
      {
        title: "Composite Pool Deck Near the Guadalupe",
        description:
          "A property close to the river needed a pool deck that could handle consistently higher humidity without the mildew and moisture issues standard wood decking would face.",
        result: "A low-maintenance composite pool deck built with coated fasteners rated for the added moisture exposure.",
      },
      {
        title: "Flood-Zone Compliant Deck Addition",
        description:
          "A property within a flood-plain overlay required verifying allowable structure height and footing design before finalizing the deck plan.",
        result: "A compliant deck addition delivered without permitting delays or design rework.",
      },
    ],
    whyNumberOne: [
      {
        title: "Flood-Zone Verification Built Into Every Design",
        description: "We check flood-plain overlay status on river-adjacent properties before finalizing height and footing decisions, not after.",
      },
      {
        title: "Moisture-Rated Material Selection",
        description: "We account for New Braunfels' higher ambient humidity when recommending species, finishes, and fasteners.",
      },
      {
        title: "Experience Across Two Jurisdictions",
        description: "We work within both City of New Braunfels and Comal County permitting depending on your property's exact location.",
      },
      {
        title: "Built for Heavy Entertaining Use",
        description: "River-corridor living tends to mean more frequent outdoor gatherings — we design and build for that use level.",
      },
    ],
    faqs: [
      {
        question: "Do you build decks in New Braunfels?",
        answer:
          "Yes — New Braunfels is one of our regularly served areas. Proximity to the Guadalupe and Comal Rivers means many of our projects here factor in higher humidity and, near the water, flood-plain considerations.",
      },
      {
        question: "What permits are required for a deck in New Braunfels?",
        answer:
          "New Braunfels permits through the City of New Braunfels or Comal County depending on the property location, and flood-plain properties may require additional documentation. We verify flood zone status early in the process.",
      },
      {
        question: "Does my property's flood zone status affect my deck design?",
        answer:
          "It can, particularly for structure height and footing design on properties near the river corridors. We check this before finalizing any design so it doesn't surprise you mid-project.",
      },
      {
        question: "What decking material handles New Braunfels' humidity best?",
        answer:
          "Capped composite decking and moisture-resistant species like cedar tend to perform best given the area's higher ambient humidity compared to other parts of the San Antonio metro.",
      },
    ],
  },
  {
    name: "Schertz",
    slug: "schertz",
    tagline: "Reliable deck builds for Schertz's growing family neighborhoods",
    intro:
      "Schertz has grown fast over the last decade, and most of the decks we build here are for newer homes with standard-depth lots, where the priority is maximizing usable outdoor space for families.",
    why:
      "Many Schertz backyards back up to greenbelt or drainage easements, which affects how far back a deck can extend and whether a permit needs an easement encroachment review.",
    topServices: ["Custom Deck Design & Installation", "Composite Decking", "Deck Staining & Sealing"],
    localNotes:
      "Schertz permits through its own building department, and lots backing to drainage easements typically need setback verification before a permit is issued. We handle that survey check as part of your design consultation.",
    closingLine:
      "We build a lot of family-focused decks in Schertz — kid-friendly railings, low-maintenance materials, and space for a full patio set.",
    aboutDecking: [
      "Decking in Schertz mostly means working with newer construction on standard-depth lots, where the design priority is usually maximizing usable backyard space for a growing family rather than solving unusual terrain problems.",
      "The one recurring constraint is easements — a large share of Schertz backyards back up to greenbelt or drainage easements, which limits how far a deck can extend and can trigger an encroachment review before a permit is issued.",
      "Beyond that, most Schertz projects are about efficient, family-focused design: durable, low-maintenance materials, kid-friendly railings, and enough space for real entertaining without unnecessary complexity driving up cost.",
    ],
    caseStudies: [
      {
        title: "Family Deck With Easement Setback Review",
        description:
          "A backyard bordering a drainage easement required setback verification against the property survey before the deck footprint could be finalized.",
        result: "A maximized, code-compliant deck footprint that made full use of the buildable space available.",
      },
      {
        title: "Composite Deck for a New-Build Home",
        description:
          "A family in a newer Schertz neighborhood wanted a low-maintenance entertaining space completed quickly after moving in.",
        result: "A composite deck completed on a tight timeline, ready for the family's first backyard cookout.",
      },
    ],
    whyNumberOne: [
      {
        title: "Easement and Setback Verification",
        description: "We check survey and easement documentation upfront on greenbelt-adjacent lots before finalizing a design.",
      },
      {
        title: "Efficient Builds for Newer Lots",
        description: "Standard-depth Schertz lots let us move quickly from design to build without the terrain complications common elsewhere.",
      },
      {
        title: "Family-Focused Design",
        description: "Kid-friendly railing spacing and durable, low-maintenance materials are a standard part of how we design here.",
      },
      {
        title: "Clearly Itemized, Straightforward Pricing",
        description: "No vague allowances — you get a written estimate that breaks down exactly what you're paying for.",
      },
    ],
    faqs: [
      {
        question: "Do you build decks in Schertz?",
        answer:
          "Yes — Schertz is one of our regularly served areas. Most of the decks we build here are for newer homes with standard-depth lots, where the priority is maximizing usable outdoor space for families.",
      },
      {
        question: "What permits are required for a deck in Schertz?",
        answer:
          "Schertz permits through its own building department, and lots backing to drainage easements typically need setback verification before a permit is issued. We handle that survey check as part of your design consultation.",
      },
      {
        question: "My backyard backs up to a greenbelt — can I still build a deck?",
        answer:
          "In most cases, yes, but the easement affects how far back the deck can extend. We verify your survey and easement documentation early so the design reflects what's actually buildable.",
      },
      {
        question: "How long does a typical deck project take in Schertz?",
        answer:
          "Most single-level decks on standard Schertz lots take 1–2 weeks to build once permits are approved, with easement verification sometimes adding a short review period upfront.",
      },
    ],
  },
  {
    name: "Helotes",
    slug: "helotes",
    tagline: "Rustic Hill Country decks for Helotes' larger acreage properties",
    intro:
      "Helotes properties tend to sit on larger lots with more tree cover and open Hill Country views than closer-in San Antonio neighborhoods, which opens up bigger, multi-purpose deck designs.",
    why:
      "With more acreage comes more flexibility — we see more requests here for large entertaining decks, attached pergolas, and structures positioned specifically to frame Hill Country sunset views.",
    topServices: ["Custom Deck Design & Installation", "Screened Porches & Patio Covers", "Deck Repair & Restoration"],
    localNotes:
      "Properties within Helotes city limits permit through the city; many surrounding properties fall under Bexar County jurisdiction instead. We confirm which applies before submitting plans, since inspection scheduling differs between the two.",
    closingLine:
      "If you've got the acreage and the view, we can help you design a deck that actually takes advantage of both.",
    aboutDecking: [
      "Decking in Helotes benefits from more room to work with than most closer-in San Antonio neighborhoods — larger lots, more established tree cover, and open Hill Country views that shape the design far more than any lot-line constraint does.",
      "That extra acreage tends to change what homeowners ask for. Instead of maximizing a tight footprint, Helotes projects lean toward larger entertaining decks, attached pergolas for shade, and structures oriented specifically to frame sunset views rather than squeezed into whatever space is left.",
      "Jurisdiction is worth checking early — some Helotes properties fall inside city limits and others under Bexar County, and the permitting and inspection process differs between the two.",
    ],
    caseStudies: [
      {
        title: "View-Framing Deck on an Acreage Property",
        description:
          "A large property with unobstructed Hill Country views needed a deck positioned and oriented specifically to take advantage of the sunset sightline, rather than simply attached at the nearest exterior wall.",
        result: "A large entertaining deck that became the property's primary outdoor gathering space.",
      },
      {
        title: "Pergola-Covered Deck Addition",
        description:
          "An existing large deck saw limited summer use due to direct sun exposure. We added a pergola structure to provide partial shade while keeping the space open-air.",
        result: "Extended usability of the existing deck through more of the Texas summer.",
      },
    ],
    whyNumberOne: [
      {
        title: "View-Oriented Design",
        description: "We position and orient larger decks specifically to take advantage of Hill Country sightlines rather than defaulting to the nearest wall.",
      },
      {
        title: "Comfortable Across Both Jurisdictions",
        description: "We confirm whether Helotes city or Bexar County permitting applies before submitting any plans.",
      },
      {
        title: "Large-Format Entertaining Design",
        description: "More acreage means more design flexibility, and we build decks sized for real entertaining rather than a minimal footprint.",
      },
      {
        title: "Shade Structure Integration",
        description: "Pergolas and patio covers are a natural fit for Helotes' larger decks, and we design them as part of the original layout when possible.",
      },
    ],
    faqs: [
      {
        question: "Do you build decks in Helotes?",
        answer:
          "Yes — Helotes is one of our regularly served areas. Properties here tend to sit on larger lots with more tree cover and open Hill Country views, which opens up bigger, multi-purpose deck designs.",
      },
      {
        question: "What permits are required for a deck in Helotes?",
        answer:
          "Properties within Helotes city limits permit through the city; many surrounding properties fall under Bexar County jurisdiction instead. We confirm which applies before submitting plans.",
      },
      {
        question: "Can you design a deck to take advantage of Hill Country views?",
        answer:
          "Yes — this is one of the most common requests we get in Helotes. We position and orient the deck specifically to frame the best sightline on the property rather than defaulting to the nearest exterior wall.",
      },
      {
        question: "How long does a large acreage deck project take in Helotes?",
        answer:
          "Larger entertaining decks typically take 2–4 weeks depending on size and whether a pergola or shade structure is included, plus permit turnaround for your specific jurisdiction.",
      },
    ],
  },
  {
    name: "Converse",
    slug: "converse",
    tagline: "Straightforward, budget-conscious deck builds for Converse homeowners",
    intro:
      "Converse is home to a lot of first-time deck owners adding outdoor living space to established single-story homes, and our most common project here is a mid-size attached deck off the back door or kitchen.",
    why:
      "Many Converse homes were built in phases over the past few decades, so utility line locations and existing add-ons (like covered patios) often factor into how a new deck ties in.",
    topServices: ["Custom Deck Design & Installation", "Deck Repair & Restoration", "Deck Staining & Sealing"],
    localNotes:
      "Converse permits through the City of Converse building department. We always run a utility locate before digging footings, particularly on older lots where as-built records can be incomplete.",
    closingLine:
      "We keep Converse projects straightforward and clearly priced — a solid, well-built deck without unnecessary upsells.",
    aboutDecking: [
      "Decking in Converse tends to serve a specific need: a first outdoor living space for a single-story home that's never had one, usually a mid-size deck attached off the back door or kitchen rather than a large multi-level structure.",
      "Because a lot of Converse homes were built and expanded in phases over the decades, existing additions like covered patios and incomplete utility records both factor into how a new deck ties into the house safely.",
      "Homeowners here are typically looking for a solid, well-built deck at a fair price rather than a showpiece structure — which is exactly the kind of project we aim to deliver clearly and without unnecessary upsells.",
    ],
    caseStudies: [
      {
        title: "Attached Deck Off the Kitchen",
        description:
          "A first-time deck owner wanted a straightforward mid-size deck attached off the kitchen door, their home's first outdoor living space in over twenty years of ownership.",
        result: "A clearly priced, solidly built deck completed without change-order surprises.",
      },
      {
        title: "Deck Repair on an Older Phased-Build Home",
        description:
          "An older home with multiple additions over the years had incomplete as-built utility records. We ran a full utility locate before any excavation to safely plan the repair.",
        result: "A safely rebuilt deck structure completed without utility conflicts or delays.",
      },
    ],
    whyNumberOne: [
      {
        title: "Utility Locate Discipline",
        description: "We run a utility locate before digging on every project, which matters most on older, incrementally-built Converse lots.",
      },
      {
        title: "Clear, Straightforward Pricing",
        description: "First-time deck owners get a plain-language, itemized estimate without confusing allowances or hidden fees.",
      },
      {
        title: "No-Upsell Repair Recommendations",
        description: "We tell you honestly what's needed and what can wait, rather than padding a repair estimate.",
      },
      {
        title: "Fast Turnaround on Standard Builds",
        description: "Mid-size attached decks are our most common Converse project, and we build them efficiently without cutting corners.",
      },
    ],
    faqs: [
      {
        question: "Do you build decks in Converse?",
        answer:
          "Yes — Converse is one of our regularly served areas. Our most common project here is a mid-size attached deck off the back door or kitchen for a homeowner's first outdoor living space.",
      },
      {
        question: "What permits are required for a deck in Converse?",
        answer:
          "Converse permits through the City of Converse building department. We always run a utility locate before digging footings, particularly on older lots where as-built records can be incomplete.",
      },
      {
        question: "My home has an older covered patio — can you still add a deck?",
        answer:
          "Yes — this is common on Converse's phased-built homes. We assess how the existing patio or addition affects the new deck's tie-in and design around it.",
      },
      {
        question: "How much does a standard Converse deck typically cost?",
        answer:
          "Most mid-size attached decks fall in line with our general pricing guide — pressure-treated pine runs the most budget-friendly, with cedar and composite as upgrade options. We provide a free, itemized estimate for your exact project.",
      },
    ],
  },
  {
    name: "Live Oak",
    slug: "live-oak",
    tagline: "Efficient deck builds for Live Oak's established residential streets",
    intro:
      "Live Oak's tree-lined residential streets and mature lots mean we're often designing around established landscaping as much as the house itself.",
    why:
      "Because many Live Oak lots are narrower than newer suburban developments, side and rear setback requirements matter more here — we confirm buildable area against your lot survey before designing.",
    topServices: ["Custom Deck Design & Installation", "Deck Staining & Sealing", "Deck Repair & Restoration"],
    localNotes:
      "Live Oak permits through its own building department, and setback requirements are enforced closely given the tighter lot sizes common in the city. We pull your lot survey early in the process to avoid redesigns later.",
    closingLine:
      "We know Live Oak's tighter lot geometry well and design decks that make the most of the space you actually have.",
    aboutDecking: [
      "Decking in Live Oak is shaped by the city's established, tree-lined residential streets — mature landscaping we design around as much as the house itself, on lots that tend to be narrower than newer suburban developments elsewhere in the metro.",
      "That narrower lot geometry makes setback calculation one of the first steps on nearly every project. Side and rear setback requirements are enforced closely here, so we pull the lot survey early rather than designing first and adjusting later.",
      "The result is decks designed to make full, efficient use of a smaller buildable footprint — precise rather than generic, since there's usually less margin for error than on a newer, wider suburban lot.",
    ],
    caseStudies: [
      {
        title: "Deck Built Within a Tight Setback Lot",
        description:
          "A narrower residential lot required precise buildable-area calculation from the survey before any layout could be finalized, to stay clear of both side and rear setback lines.",
        result: "A deck that maximized the available footprint while staying fully code-compliant.",
      },
      {
        title: "Restaining a Deck Under Mature Tree Canopy",
        description:
          "A shaded deck under heavy tree canopy accumulated leaf debris and moisture differently than a full-sun deck, requiring a different prep and maintenance approach.",
        result: "A refreshed finish paired with a maintenance schedule suited to the shade exposure.",
      },
    ],
    whyNumberOne: [
      {
        title: "Setback and Survey Expertise",
        description: "We pull and reference your lot survey early to confirm buildable area before designing, avoiding costly redesigns later.",
      },
      {
        title: "Established Relationship With the City",
        description: "We know Live Oak's building department and permitting process from repeated project experience in the city.",
      },
      {
        title: "Tree-Canopy-Aware Maintenance Advice",
        description: "Shaded, established-lot decks age differently than full-sun decks, and we tailor maintenance recommendations accordingly.",
      },
      {
        title: "Efficient Design for Tighter Footprints",
        description: "We design precisely for narrower lots rather than applying a standard layout that doesn't account for tighter setbacks.",
      },
    ],
    faqs: [
      {
        question: "Do you build decks in Live Oak?",
        answer:
          "Yes — Live Oak is one of our regularly served areas. The city's tree-lined residential streets and mature lots mean we're often designing around established landscaping as much as the house itself.",
      },
      {
        question: "What permits are required for a deck in Live Oak?",
        answer:
          "Live Oak permits through its own building department, and setback requirements are enforced closely given the tighter lot sizes common in the city. We pull your lot survey early in the process to avoid redesigns later.",
      },
      {
        question: "My lot is narrower than average — can I still fit a full-size deck?",
        answer:
          "In most cases, yes, once we calculate your exact buildable area against setback requirements. We design specifically to make efficient use of narrower Live Oak lots rather than applying a generic layout.",
      },
      {
        question: "How does mature tree cover affect deck maintenance in Live Oak?",
        answer:
          "Shaded decks under established canopy tend to accumulate leaf debris and hold moisture differently than full-sun decks, which can affect staining frequency. We'll recommend a maintenance schedule suited to your specific lot's shade exposure.",
      },
    ],
  },
  {
    name: "Universal City",
    slug: "universal-city",
    tagline: "Deck building close to Joint Base San Antonio's Randolph community",
    intro:
      "Universal City's proximity to JBSA-Randolph means a lot of our clients here are active-duty or retired military families, often working within a specific timeline around a move.",
    why:
      "We regularly coordinate build schedules around PCS timelines, and understand the urgency when a family needs outdoor space finished before a move date rather than an open-ended timeline.",
    topServices: ["Custom Deck Design & Installation", "Composite Decking", "Deck Repair & Restoration"],
    localNotes:
      "Universal City permits through its own building department. Some neighborhoods near the base have HOA guidelines on visible structures — we check this during the design consultation so there are no approval surprises.",
    closingLine:
      "We've built decks for a lot of Universal City military families on tight timelines, and we understand how to plan around a move date.",
    aboutDecking: [
      "Decking in Universal City is shaped by its proximity to JBSA-Randolph as much as by the terrain — a large share of our clients here are active-duty or retired military families, and timelines are frequently built around a specific move date rather than an open-ended schedule.",
      "That changes how we plan a project from the first conversation. PCS orders don't move for a construction schedule, so we coordinate permitting, materials, and crew scheduling around a hard deadline whenever that's the driving factor.",
      "Neighborhoods near the base also frequently carry HOA guidelines on visible structures, which we check during the design consultation so approval doesn't become a late surprise on an already tight timeline.",
    ],
    caseStudies: [
      {
        title: "Deck Completed Before a Family's PCS Move",
        description:
          "A family with orders to relocate needed their new deck completed before a fixed move-out date. We coordinated permitting, material ordering, and crew scheduling around that hard deadline.",
        result: "The deck was completed and passed final inspection ahead of the family's move.",
      },
      {
        title: "HOA-Compliant Deck Near JBSA-Randolph",
        description:
          "A neighborhood near the base carried HOA guidelines on visible backyard structures. We confirmed the requirements during the design consultation before finalizing plans.",
        result: "An approved design delivered without HOA-related delays to the build schedule.",
      },
    ],
    whyNumberOne: [
      {
        title: "Experience Scheduling Around Military Timelines",
        description: "We coordinate permitting, materials, and crew scheduling around PCS and other fixed move dates when that's the driving constraint.",
      },
      {
        title: "Familiarity With Base-Adjacent HOA Guidelines",
        description: "We check neighborhood HOA rules on visible structures during the design phase, before they can become a late surprise.",
      },
      {
        title: "Straightforward Communication",
        description: "Families managing a move get clear, direct updates on schedule and status rather than having to chase progress down.",
      },
      {
        title: "Predictable, Efficient Build Timelines",
        description: "We build a realistic schedule from day one and hold to it, which matters most when a hard deadline is involved.",
      },
    ],
    faqs: [
      {
        question: "Do you build decks in Universal City?",
        answer:
          "Yes — Universal City is one of our regularly served areas. Proximity to JBSA-Randolph means a lot of our clients here are active-duty or retired military families, often working within a specific timeline around a move.",
      },
      {
        question: "What permits are required for a deck in Universal City?",
        answer:
          "Universal City permits through its own building department. Some neighborhoods near the base have HOA guidelines on visible structures — we check this during the design consultation so there are no approval surprises.",
      },
      {
        question: "Can you complete a deck before our PCS move date?",
        answer:
          "In most cases, yes, if we know your move date early. We coordinate permitting, material ordering, and crew scheduling around a hard deadline whenever that's the driving factor on a project.",
      },
      {
        question: "How long does a typical deck project take in Universal City?",
        answer:
          "Most single-level decks take 1–2 weeks to build once permits are approved. If you're working around a move date, tell us early — we'll build the schedule around it from the start.",
      },
    ],
  },
];

export const getServiceAreaBySlug = (slug: string) =>
  serviceAreas.find((area) => area.slug === slug);
