import { createClient } from "@supabase/supabase-js";

// Falls back to a well-formed placeholder so createClient() never throws
// at module-load time when the real env vars aren't configured yet (e.g.
// during the SSR prerender build step, or a preview deploy without
// secrets set). With the placeholder, the contact form's insert call
// fails at request time instead of crashing the build, and the existing
// error-state UI in Contact.tsx handles that gracefully. Set real values
// in Vercel's Project Settings -> Environment Variables for the form to
// actually submit to Supabase.
const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string) || "https://placeholder.supabase.co";
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || "placeholder-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
