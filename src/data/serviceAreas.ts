export interface ServiceArea {
  name: string;
  slug: string;
  tagline: string;
  intro: string;
  why: string;
  topServices: string[];
  localNotes: string;
  closingLine: string;
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
  },
];

export const getServiceAreaBySlug = (slug: string) =>
  serviceAreas.find((area) => area.slug === slug);
