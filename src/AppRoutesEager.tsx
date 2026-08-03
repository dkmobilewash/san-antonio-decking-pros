/**
 * Server-only mirror of App.tsx's route table using eager imports instead
 * of React.lazy(). This file is never bundled for the browser — it's only
 * loaded by entry-server.tsx via Vite's SSR module runner during the
 * prerender build step (see scripts/prerender.mjs). React's renderToString
 * does not wait on Suspense-driven lazy imports, so a non-lazy route table
 * is required for synchronous server rendering.
 *
 * Keep this route list in sync with App.tsx.
 */
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ServicesOverview from "./pages/ServicesOverview";
import DeckDesignInstallation from "./pages/services/DeckDesignInstallation";
import DeckRepairRestoration from "./pages/services/DeckRepairRestoration";
import DeckStainingSealing from "./pages/services/DeckStainingSealing";
import CompositeDecking from "./pages/services/CompositeDecking";
import PoolDeckConstruction from "./pages/services/PoolDeckConstruction";
import ScreenedPorchesPatioCovers from "./pages/services/ScreenedPorchesPatioCovers";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import ServiceAreasIndex from "./pages/ServiceAreasIndex";
import AlamoHeights from "./pages/serviceAreas/AlamoHeights";
import StoneOak from "./pages/serviceAreas/StoneOak";
import Boerne from "./pages/serviceAreas/Boerne";
import NewBraunfels from "./pages/serviceAreas/NewBraunfels";
import Schertz from "./pages/serviceAreas/Schertz";
import Helotes from "./pages/serviceAreas/Helotes";
import Converse from "./pages/serviceAreas/Converse";
import LiveOak from "./pages/serviceAreas/LiveOak";
import UniversalCity from "./pages/serviceAreas/UniversalCity";
import ServiceAreaComboPage from "./pages/combos/ServiceAreaComboPage";

export default function AppRoutesEager() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/decking-services" element={<ServicesOverview />} />
        <Route path="/deck-design-installation" element={<DeckDesignInstallation />} />
        <Route path="/deck-repair-restoration" element={<DeckRepairRestoration />} />
        <Route path="/deck-staining-sealing" element={<DeckStainingSealing />} />
        <Route path="/composite-decking" element={<CompositeDecking />} />
        <Route path="/pool-deck-construction" element={<PoolDeckConstruction />} />
        <Route path="/screened-porches-patio-covers" element={<ScreenedPorchesPatioCovers />} />

        <Route path="/about-san-antonio-decking-pros" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/free-estimate-san-antonio" element={<Contact />} />

        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        <Route path="/service-areas" element={<ServiceAreasIndex />} />
        <Route path="/service-areas/alamo-heights" element={<AlamoHeights />} />
        <Route path="/service-areas/stone-oak" element={<StoneOak />} />
        <Route path="/service-areas/boerne" element={<Boerne />} />
        <Route path="/service-areas/new-braunfels" element={<NewBraunfels />} />
        <Route path="/service-areas/schertz" element={<Schertz />} />
        <Route path="/service-areas/helotes" element={<Helotes />} />
        <Route path="/service-areas/converse" element={<Converse />} />
        <Route path="/service-areas/live-oak" element={<LiveOak />} />
        <Route path="/service-areas/universal-city" element={<UniversalCity />} />

        <Route path="/:serviceSlug/:areaSlug" element={<ServiceAreaComboPage />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
