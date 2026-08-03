import { useMemo, useState } from "react";
import PageMeta from "../components/PageMeta";
import PageHero from "../components/PageHero";
import CtaSection from "../components/CtaSection";
import DeckImagePlaceholder from "../components/DeckImagePlaceholder";
import { business } from "../data/business";
import { useFadeUp } from "../hooks/useFadeUp";
import { localBusinessSchema, breadcrumbListSchema } from "../lib/schema";

interface GalleryItem {
  label: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  { label: "Multi-Level Cedar Deck — Alamo Heights", category: "Wood Decks" },
  { label: "Pressure-Treated Pine Deck — Converse", category: "Wood Decks" },
  { label: "Hill Country Elevated Deck — Boerne", category: "Wood Decks" },
  { label: "Composite Deck & Railing — Stone Oak", category: "Composite Decking" },
  { label: "Composite Deck with Picture Frame Trim — Schertz", category: "Composite Decking" },
  { label: "Low-Maintenance Composite Deck — Live Oak", category: "Composite Decking" },
  { label: "Pool Deck Surround — New Braunfels", category: "Pool Decks" },
  { label: "Composite Pool Deck — Stone Oak", category: "Pool Decks" },
  { label: "Screened Porch Addition — Helotes", category: "Screened Porches" },
  { label: "Solid Patio Cover — Universal City", category: "Screened Porches" },
  { label: "Pergola & Deck Combo — Boerne", category: "Screened Porches" },
  { label: "Deck Restoration — Live Oak", category: "Wood Decks" },
];

const categories = ["All", "Wood Decks", "Composite Decking", "Pool Decks", "Screened Porches"];

const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Gallery" }];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const gridRef = useFadeUp<HTMLDivElement>();

  const filteredItems = useMemo(
    () =>
      activeCategory === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  return (
    <>
      <PageMeta
        title={`Deck Photo Gallery | ${business.name}`}
        description="Browse completed wood deck, composite deck, pool deck, and screened porch projects built by San Antonio Decking Pros across the San Antonio metro."
        path="/gallery"
        schema={[localBusinessSchema(), breadcrumbListSchema(breadcrumbItems, "/gallery")]}
      />
      <PageHero
        title="Project Gallery"
        subtitle="A sample of decks, pool surrounds, and outdoor structures we've built across the San Antonio metro."
        breadcrumbItems={breadcrumbItems}
      />

      <section className="section bg-white">
        <div className="container-page">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-heading font-semibold uppercase tracking-wide border transition-colors ${
                  activeCategory === category
                    ? "bg-gold border-gold text-white"
                    : "bg-white border-rule text-navy hover:border-gold hover:text-gold"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div
            ref={gridRef}
            className="fade-up grid gap-6"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
          >
            {filteredItems.map((item) => (
              <DeckImagePlaceholder key={item.label} label={item.label} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        heading="Like What You See?"
        subtext="Every project starts with a free, in-person consultation. Let's talk about what's possible for your backyard."
      />
    </>
  );
}
