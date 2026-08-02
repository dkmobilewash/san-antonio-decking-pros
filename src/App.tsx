import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate, useLocation, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";

const Home = lazy(() => import("./pages/Home"));
const ServicesOverview = lazy(() => import("./pages/ServicesOverview"));
const DeckDesignInstallation = lazy(() => import("./pages/services/DeckDesignInstallation"));
const DeckRepairRestoration = lazy(() => import("./pages/services/DeckRepairRestoration"));
const DeckStainingSealing = lazy(() => import("./pages/services/DeckStainingSealing"));
const CompositeDecking = lazy(() => import("./pages/services/CompositeDecking"));
const PoolDeckConstruction = lazy(() => import("./pages/services/PoolDeckConstruction"));
const ScreenedPorchesPatioCovers = lazy(() => import("./pages/services/ScreenedPorchesPatioCovers"));
const About = lazy(() => import("./pages/About"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ServiceAreasIndex = lazy(() => import("./pages/ServiceAreasIndex"));
const AlamoHeights = lazy(() => import("./pages/serviceAreas/AlamoHeights"));
const StoneOak = lazy(() => import("./pages/serviceAreas/StoneOak"));
const Boerne = lazy(() => import("./pages/serviceAreas/Boerne"));
const NewBraunfels = lazy(() => import("./pages/serviceAreas/NewBraunfels"));
const Schertz = lazy(() => import("./pages/serviceAreas/Schertz"));
const Helotes = lazy(() => import("./pages/serviceAreas/Helotes"));
const Converse = lazy(() => import("./pages/serviceAreas/Converse"));
const LiveOak = lazy(() => import("./pages/serviceAreas/LiveOak"));
const UniversalCity = lazy(() => import("./pages/serviceAreas/UniversalCity"));
const ServiceAreaComboPage = lazy(() => import("./pages/combos/ServiceAreaComboPage"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function App() {
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

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
