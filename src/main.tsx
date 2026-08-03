import { StrictMode, type ReactNode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

const container = document.getElementById("root")!;

function withDevStrictMode(children: ReactNode) {
  // StrictMode's extra render pass breaks hydration matching against the
  // prerendered HTML in this app's setup (reproducible: removing it fixes
  // hydration, re-adding it reintroduces the mismatch). Its value is at
  // dev time anyway, so it's opt-in only under `npm run dev`.
  return import.meta.env.DEV ? <StrictMode>{children}</StrictMode> : children;
}

const app = <BrowserRouter>{withDevStrictMode(<App />)}</BrowserRouter>;

// Prerendered pages ship with real markup inside #root; hydrate into it
// instead of discarding and re-rendering from scratch. The dev server and
// any route that wasn't prerendered fall back to a normal client render.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
