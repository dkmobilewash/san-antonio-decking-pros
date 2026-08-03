import { createContext } from "react";

export interface HeadData {
  title: string;
  description: string;
  path: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

export interface HeadContextValue {
  set: (data: HeadData) => void;
}

/**
 * Only provided during server-side prerendering (see entry-server.tsx).
 * On the client this is always null, so PageMeta falls back to its
 * existing useEffect-based DOM mutation for client-side route changes.
 */
export const HeadContext = createContext<HeadContextValue | null>(null);
