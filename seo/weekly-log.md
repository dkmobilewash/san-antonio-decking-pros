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
