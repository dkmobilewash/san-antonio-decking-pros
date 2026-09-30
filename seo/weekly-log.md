# San Antonio Decking Pros — Weekly SEO Agent Log

Auto-maintained by a scheduled Claude Code Routine. Each entry covers one
weekly run: what was checked, what changed, and what's flagged for human
review (not auto-committed).

---

## 2026-09-21 — First run

**Semrush:** Not available. `projects_research`, `overview_research`, and
`keyword_research` all returned the same response: the connected Semrush
account's plan does not include MCP API access (not a transient error —
consistent across all three tools). Skipped all of Step 1 (rank tracking,
keyword gaps, backlink profile, technical crawl audit). This needs a plan
upgrade on Semrush's side before this routine can do any of that — see
https://www.semrush.com/mcp-access. Everything below is from direct
code-level review only, no external ranking/traffic data this run.

**Checked:**
- All 6 service pages' and 9 location pages' `PageMeta` title/description
  lengths — no issues found there.
- The 54 service x location combo page template (`ServiceAreaComboPage.tsx`)
  — found and fixed a real, quantified problem (below).
- Internal links: grepped every literal `to=`/`href=` in `src/pages` and
  `src/components` against the actual route list (90 known paths). 0 broken
  links found. (Template-generated links weren't individually checked since
  they're constructed from the same data files that define the routes —
  structurally correct by construction.)
- Blog interlinking mesh (`relatedPostSlugs` across all 13 posts) — found
  and fixed one orphaned post.

**Fixed and deployed (commits `ed643f0`, `29f795a` on both the working
branch and `main`):**
1. **Combo page title/meta description length.** All 54 combo pages shared
   one `PageMeta` template. Titles ran up to 75 characters (22/54 over the
   ~60-char practical SERP truncation point — every "Deck Design &
   Installation" combo was affected, since that's the longest service
   name). Meta descriptions ran up to 233 characters — **all 54/54** were
   over the ~155-char limit, meaning every single combo page's search
   snippet was being cut off mid-sentence. Shortened the brand suffix
   (`business.shortName` instead of the full business name) and replaced
   the description with a compact, combo-specific template. New worst
   case: title 63 chars (3/54 still marginally over), description 135
   chars (0/54 over).
2. **Orphaned blog post.** `best-pool-deck-materials` had outbound related-
   post links but no other post linked back to it — only reachable via the
   `/blog` index, not reinforced contextually from related content. Added
   it to `hot-tub-on-deck`'s `relatedPostSlugs` (closely related topic:
   pool/spa decking materials).

**Flagged for human review (not auto-committed):**
- **Combo page content depth.** All 54 combo pages share a template that
  generates the bulk of on-page copy from just 2-3 sentences of variable
  text (`area.why`, `area.localNotes`, one service intro sentence) plus
  boilerplate. This is a legitimate thinness/near-duplicate-content risk
  at scale, but genuinely rewriting unique copy for 54 pages isn't a
  same-run auto-commit — it's a real content project. Flagging for a
  dedicated pass rather than rushing templated-sounding "unique" copy
  across all 54 to hit a weekly quota.
- **No rank/traffic baseline yet.** Until Semrush access works, this
  routine can't tell you what's actually moving the needle vs. just
  fixing hygiene issues. Worth prioritizing the plan upgrade so next
  week's run can actually track position changes.

**Bottom line for this week:** No ranking/traffic data available (Semrush
plan gap — needs your attention, link above). On the code side: fixed a
site-wide SERP-snippet-truncation issue affecting all 54 combo pages, and
closed one gap in the blog's internal linking. Flagged the combo pages'
content depth as a larger initiative rather than rushing it.

---

## 2026-09-28 — Second run

**Semrush:** Still not available — same "plan doesn't include MCP access"
response as last week (checked `overview_research`). Not re-checking every
endpoint each week; will re-verify weekly until it changes. Still needs
the plan upgrade at https://www.semrush.com/mcp-access — this is the
second week in a row with zero ranking/traffic visibility.

**Checked:** Re-read last week's entry first so I didn't redo settled
analysis. Followed up specifically on the "combo page content depth" item
flagged last week rather than re-running the same broad sweep.

**Fixed and deployed (commits `371d87f` on both the working branch and
`main`):**
1. **Combo page content depth — resolved without new content generation.**
   `src/data/serviceAreas.ts` already has genuine, unique per-area content
   that was never wired into the 54 combo pages: `whyNumberOne` (4
   differentiators per area) and `faqs` (4 area-specific FAQs per area).
   The standalone location pages (`ServiceAreaPage.tsx`) already used
   both; the combo page template (`ServiceAreaComboPage.tsx`) used
   neither. Added a "What Makes [business] #1 in [area]" section
   (identical proven copy/markup to the location pages) and merged
   `area.faqs` into the combo FAQ list — 4 → 8 FAQs per combo page, richer
   `FAQPage` schema. This is real previously-authored content, not
   templated filler, so it resolves last week's flag without the
   54-pages-of-new-copy project I was avoiding rushing.
   - Deliberately left out `area.caseStudies` on combo pages: each case
     study is written about one specific service, and matching it
     correctly to an arbitrary combo page's service isn't a safe
     automated pairing (e.g. showing a cedar-deck case study on a "Pool
     Decks in X" page). Case studies stay on the location pages only,
     where they're already correctly scoped to the whole area rather
     than one service.
2. Verified no internal duplicate FAQ text got introduced by the merge
   (checked all 9 areas for repeated `question` strings — none found),
   and sitemap.xml / robots.txt both still generate correctly (89 URLs).

**Flagged for human review (not auto-committed, unchanged from before):**
- **Semrush plan gap** — now 2 weeks running with no rank/traffic data.
- **Sitemap/canonical domain.** `business.ts`'s `baseUrl` is still
  `sanantoniodeckingpros.com`, which is what every canonical URL, OG tag,
  and the sitemap.xml itself is built from — separate from `business.ts`
  changes being out of scope for this routine to touch, this was flagged
  as an open discrepancy earlier in this project against the actual live
  domain and doesn't look resolved. Worth confirming which domain is
  truly canonical and fixing it deliberately, since it affects how GSC
  and every search engine understands the site's own URLs.

**Bottom line for this week:** Still no ranking data (Semrush). Resolved
last week's biggest flagged item — the 54 combo pages now surface real,
previously-written local content instead of sitting thin — without
writing a single line of new marketing copy, just wiring up content that
already existed. Re-flagging the domain/sitemap discrepancy since it's
been open a while and is worth a deliberate fix.

---

## 2026-09-30 — Out-of-band fix (user-directed, not a scheduled run)

The user confirmed `deckingprossanantonio.com` as the actual canonical
domain and asked directly for the `baseUrl` fix flagged in the last two
entries. This wasn't a scheduled Monday run, but logging it here since
it resolves a standing flagged item and this routine should know not to
keep re-flagging it.

**Fixed and deployed (commit `a7aad40`):** `business.ts`'s `baseUrl` and
`ogImage`, `index.html`'s OG/Twitter image tags, and `vercel.json`'s
www-redirect host/destination all updated from `sanantoniodeckingpros.com`
to `deckingprossanantonio.com`. Verified post-build: sitemap.xml,
robots.txt, canonical tags, and OG tags across the built site all now
point at the correct domain (checked homepage + a spot-check page).

**Left unchanged, flagged separately:** `business.ts`'s `email` field is
still `info@sanantoniodeckingpros.com`. That's a live mailbox, not a
URL-construction value — out of scope to change without confirming a
matching inbox exists on the new domain first.

---
