# Handoff: Berea Claim Extraction & Discernment Pipeline for Claude (v2 — corrected)

**Supersedes the prior handoff.** The first run of this task (18 YouTube Shorts →
`src/data/shortsData.ts`) produced data that does **not** match what the real
Chrome extension actually outputs. This version is grounded in a **real export
the user downloaded from the real extension** (`berea-3tBVnTVDZJQ.md`) and the
**real source code** that generates it — not assumption. Read §5 before writing
any code; it lists the exact mistakes the first pass made so you don't repeat them.

---

## 1. Required Execution Parameters (unchanged)

| Parameter | Value / Setting |
| :--- | :--- |
| **Doctrinal Lens** | `Neutral / Berean (default)` (`neutral_berean`) |
| **Scripture Translation** | `WEB` (World English Bible) |
| **Pipeline Architecture** | Two-Phase: Phase 1 Claim Extraction → Phase 2 RAG Retrieval & Discernment |
| **Discernment model** | `anthropic/claude-haiku-4.5` (fixed in the real product — see `berea-extension/sidepanel/sidepanel.js` `MODEL` constant) |
| **Extraction / expansion model** | `meta-llama/llama-4-maverick` (fixed — `FAST_MODEL` constant) |

**Do not reimplement the prompts.** Import and call the real functions:
`extractClaimsForVideo` and `verifyClaims` from `berea-extension/lib/pipeline.js`,
unmodified. A working Node harness that does exactly this already exists —
see §6. Fix it, don't rewrite it from scratch.

---

## 2. The workflow — and the part the first pass got wrong

The real extension is **two phases with a human selection step in between**:

1. **Extract** — reads the transcript, lists *every* checkable claim with a
   timestamp. Cheap, flat cost regardless of video length.
2. **The user selects which claims to verify.** They do **not** verify
   everything. A real signed-in user has **5 free credits/week**; extraction
   costs 1, each verified claim costs 1 more. Verifying all 18 claims from one
   video would cost 19 credits — **nearly four weeks of the free tier** for a
   single video. No real user session looks like "verify everything."
3. **Verify** — only the selected subset goes through retrieval + discernment.
   Everything else stays **unverified** and is still part of the report.

**Real example** (the user's actual download, `berea-3tBVnTVDZJQ.md`):
> `Verified 4 of 18 extracted claims`

That's what a real interactive user session looks like — 4 of 18 verified,
14 left as an `## Unverified claims (14)` section (timestamp, type, claim
text only — no verdict, no scripture, no discernment prose).

**For the shortsData.ts landing-page dataset specifically, the product
decision (explicit, 2026-07-31) is to verify ALL extracted claims for every
video** — comprehensive coverage beats behavioral realism for a showcase
gallery. `unverified_claims` stays in the schema (§3/§8) for forward
compatibility and because it's what the real product produces in normal use,
but for this dataset it will be an empty array on every entry. **What must
not regress is the correct, complete schema per claim** (§3) — that was the
actual bug in v1, not the verification rate.

---

## 3. Exact real output schema (ground truth: `pipeline.js` + `sidepanel.js`)

### A verified claim — every field, exact names, exact types

```ts
{
  claim_id: string,              // e.g. "c-1"
  start_seconds: number,
  claim_type: "doctrinal" | "scripture_citation" | "historical_factual" | "application",
  claim_text: string,             // clean paraphrase
  verbatim_quote_span: string,     // EXACT words the speaker said, ORIGINAL LANGUAGE
                                   // (the real example is a French video — the quote
                                   // stays in French even though the analysis is English)
  cited_reference: string | null, // only set if the speaker named a specific verse

  biblical_teaching: string,      // "What the Bible says" — 2-4 sentences, ONLY cites
                                   // refs that are actually in the retrieved set
  broader_teaching: string,       // "Tradition · context" — historic/tradition prose,
                                   // NEVER contains a verse reference
  speaker_alignment: string,      // "How the speaker compares" — 2-4 sentences

  verdict: "aligned" | "partially_aligned" | "tension" | "unsupported" | "misquote" | "not_a_scriptural_claim",
  verdict_basis: "broadly_held" | "lens_dependent",
  confidence: "low" | "medium" | "high",

  supporting_refs: [{ reference: string, translation: string, text: string }, ...],
  tension_refs:    [{ reference: string, translation: string, text: string }, ...],
  study_refs:      [{ reference: string, translation: string, text: string }, ...],
}
```

**`supporting_refs`/`tension_refs`/`study_refs` are arrays of objects carrying
the ACTUAL VERSE TEXT and translation label — never bare reference strings.**
This was the single biggest gap in the first pass (`verses: string[]` threw
the real verse text away). `study_refs` is a genuinely distinct category
(passages worth reading that aren't cited as direct support or tension) — keep
it, don't drop it or use it only as a fallback.

### An unverified claim — much thinner

```ts
{
  claim_id: string,
  start_seconds: number,
  claim_type: "doctrinal" | "scripture_citation" | "historical_factual" | "application",
  claim_text: string,
}
```
No verdict, no scripture, no discernment prose — it was never sent through Phase 2.

### Exact verdict display labels (`sidepanel.js` `VERDICT_LABELS`, byte-exact)

```js
{
  aligned: "Aligned",
  partially_aligned: "Partial",
  tension: "Tension",
  unsupported: "Unsupported",
  misquote: "Misquote",
  not_a_scriptural_claim: "N/A",   // NOT "Not scriptural" — that string is only the
}                                    // filter-chip label, not the report/card label.
```

### One subtlety worth knowing, not repeating verbatim

A real exported report's `Model:` line shows the **extraction-phase** model
(`meta-llama/llama-4-maverick`), not the discernment model — because
`header.settings.model` is set at the end of Phase 1, and Phase 2 doesn't
overwrite it. If you're producing structured data (not literally imitating the
`.md` export), don't reproduce that ambiguity — just record
`extraction_model` and `discernment_model` as two separate, clearly-labeled
fields.

---

## 4. Exact real markdown export algorithm (ground truth: `reportToMarkdown()`,
`berea-extension/sidepanel/sidepanel.js` ~L1328-1400)

Use this as the unambiguous reference if the target output is markdown, or as
the field/order reference even if the target is structured JSON/TS:

```
# Biblical Claim Checker for YouTube — Berea™ · {video title}

- Channel: {channel}
- Video: {url}
- Duration: {mm:ss}
- Lens (last verification): {lens id}
- Translation (last verification): {translation}
- Model: {extraction-phase model}
- Verified {N verified} of {M total extracted} claims

---

## {VERDICT_LABEL} · {mm:ss} · {claim_type with _ replaced by space}

**Claim:** {claim_text}

> *"{verbatim_quote_span}"*

*Speaker cited:* {cited_reference}          ← ONLY if cited_reference is set

**What the Bible says:** {biblical_teaching}

*Tradition · context:* {broader_teaching}   ← ONLY if non-empty

**How the speaker compares:** {speaker_alignment}

**Supporting:**
- *{reference}* ({translation}) — {verse text}
  ...                                        ← ONLY if supporting_refs non-empty

**Tension:**
- *{reference}* ({translation}) — {verse text}
  ...                                        ← ONLY if tension_refs non-empty

**Study yourself:**
- *{reference}* ({translation}) — {verse text}
  ...   ← study_refs MINUS any ref already shown in Supporting or Tension
        (dedup against those two sets — that's a display-time filter, keep
        the raw study_refs in the underlying data, only dedup when rendering)

*Confidence: {confidence} · {verdict_basis with _ replaced by space}*

---

[... repeat per verified claim ...]

## Unverified claims (N)

- *{mm:ss}* · **{claim_type with _ replaced by space}** · {claim_text}
[... one line per unverified claim ...]
```

---

## 5. What the first pass got wrong — concrete, so it isn't repeated

1. **Verified 100% of extracted claims for every video.** Real users can't do
   this under the free tier (see §2's math), and it doesn't match the real
   export's "N of M" pattern. → Select a realistic subset per video (§2).
2. **Collapsed `supporting_refs`/`tension_refs`/`study_refs` into one flat
   `verses: string[]` of bare reference strings**, discarding the actual verse
   text and translation. → Keep all three as separate arrays of
   `{reference, translation, text}` objects (§3).
3. **Dropped `confidence` and `verdict_basis` entirely.** → Include both;
   they're real fields on every verified claim (§3).
4. **Dropped `cited_reference`.** → Include it when the speaker named a
   specific verse; it's what drives misquote detection framing.
5. **No concept of "unverified claims" in the output at all.** → Every short's
   data needs BOTH a `claims` (verified) array and an `unverified_claims`
   array, exactly mirroring the real product's behavior.
6. Wrote a generic `explanation: string` field that duplicated
   `speaker_alignment` — not present in the real object. → Don't invent fields;
   use exactly `biblical_teaching` / `broader_teaching` / `speaker_alignment`
   as the real pipeline does (§3), so any future "render this like a real
   card" feature can consume the data without translation.

---

## 6. Reusable infrastructure — fix it, don't rewrite it

The last run already built and validated a Node harness that correctly:
- imports the REAL `extractClaimsForVideo`/`verifyClaims` from `pipeline.js`
  (never reimplement the prompts)
- mirrors the real local retriever (`retriever/offscreen.js`) in Node —
  same BM25 + bge-small embeddings + RRF + cross-refs, same 31,102-verse corpus
- authenticates through a local proxy shim using the `CLIENT_TOKEN` dev-bypass
  (billing-exempt, safe — never touches a real user's credits or the live
  deployment)

Files (in the `BEREA` repo, sibling to `Berea-Page`):
- `tools/eval/gen-shorts-data.mjs` — the generator. **Needs updating**: add
  the claim-selection step from §2, and fix the per-claim mapping to carry the
  full schema from §3 (currently collapses refs to bare strings and drops
  `confidence`/`verdict_basis`/`cited_reference`/`unverified_claims`).
- `tools/eval/local-proxy-shim.mjs` — local stand-in for the deployed proxy,
  already has crash-resilience (try/catch per request) after a prior bug.
  Works as-is.
- `tools/eval/shorts-transcripts.json` — all 18 real transcripts, already
  fetched (6 from an earlier Antigravity attempt, 12 fetched via live browser
  automation against YouTube's transcript panel). Reuse as-is.

**Before running:**
1. Start the shim: `cd BEREA && set -a && . ./server/.env && set +a && node tools/eval/local-proxy-shim.mjs` (needs `CLIENT_TOKEN` in `server/.env`; never add `CLIENT_TOKEN` to the live Vercel deployment).
2. Temporarily point `berea-extension/lib/openrouter.js`'s `PROXY_URL` at
   `http://localhost:3000/api/chat` — **revert this to the live URL
   (`https://berea-proxy.vercel.app/api/chat`) the moment the run finishes.**
   This constant is the extension's real production config; never leave it
   pointed at localhost.
3. Run the generator, then run `npm run build` in `Berea-Page` to confirm the
   output compiles before calling it done.
4. Kill the shim, confirm port 3000 is clear, confirm `server/`'s tests and
   `berea-extension/`'s tests still pass, confirm the live proxy still
   responds normally. None of this local testing should ever touch production.

---

## 7. List of 18 YouTube Shorts (unchanged from v1)

| # | Video ID | Author | Title & URL |
| :- | :--- | :--- | :--- |
| 1 | `1M-2k3UdTyA` | Bible Alive | [Why Cliffe Knechtle Is NOT Catholic ✝️](https://www.youtube.com/shorts/1M-2k3UdTyA) |
| 2 | `hanhMa44MGg` | GodLogic Apologetics | [Hebrew Israelite Gets BUSTED!](https://www.youtube.com/shorts/hanhMa44MGg) |
| 3 | `R5ywV0hTzlg` | Standing For Christ | [When Your PASTOR Hasn't Read the Bible (Kathryn Krick Exposed)](https://www.youtube.com/shorts/R5ywV0hTzlg) |
| 4 | `4YgM2dswgdw` | Tucker Carlson | [Ted Cruz Uses the Bible to Justify Israel Support](https://www.youtube.com/shorts/4YgM2dswgdw) |
| 5 | `0kHOe9f3RQg` | Bible Flow | [The True Definition of a Christian ✝️ \| Bryce Crawford](https://www.youtube.com/shorts/0kHOe9f3RQg) |
| 6 | `eQnmFL2-ZsI` | Bryce Crawford | [Why Do I Believe God Exists? ✝️](https://www.youtube.com/shorts/eQnmFL2-ZsI) |
| 7 | `k5Gm7EqF-xU` | Melissa Dougherty | [I need to do WHAT to be saved?!](https://www.youtube.com/shorts/k5Gm7EqF-xU) |
| 8 | `JWW53iS8w10` | Melissa Dougherty | [She didn't expect this after leaving the New Age.](https://www.youtube.com/shorts/JWW53iS8w10) |
| 9 | `t1FTzijOFY4` | Melissa Dougherty | [Eckhart Tolle is WRONG.](https://www.youtube.com/shorts/t1FTzijOFY4) |
| 10 | `4BsDX_RoGAU` | Melissa Dougherty | [No other religious figure warned about fake versions of themselves.](https://www.youtube.com/shorts/4BsDX_RoGAU) |
| 11 | `xjcrOlSPhjU` | Pastor Mark Driscoll | [A wife has more influence over her husband than she may ever realize.](https://www.youtube.com/shorts/xjcrOlSPhjU) |
| 12 | `yOBChNxPrXY` | Pastor Mark Driscoll | [Your kids should never have to carry the weight of division in your marriage.](https://www.youtube.com/shorts/yOBChNxPrXY) |
| 13 | `9yf99ReR1XI` | Pastor Mark Driscoll | [Men, either you lead your family or satan will](https://www.youtube.com/shorts/9yf99ReR1XI) |
| 14 | `N3Ewia6QCNM` | John & Lisa Bevere | [Does God Allow Divorce?!](https://www.youtube.com/shorts/N3Ewia6QCNM) |
| 15 | `9ENFLASsyL0` | SitWithJesus | [This is true love for your brothers and sisters.](https://www.youtube.com/shorts/9ENFLASsyL0) |
| 16 | `1cgqrD2IPK4` | Full Fledged | [Ephesians 1–2 will change how you see yourself](https://www.youtube.com/shorts/1cgqrD2IPK4) |
| 17 | `TLn5zbAN0o4` | Alex O'Connor | [Women and Christianity](https://www.youtube.com/shorts/TLn5zbAN0o4) |
| 18 | `iIJz69NF8Wg` | Alex O'Connor | [Why Would God Do That?](https://www.youtube.com/shorts/iIJz69NF8Wg) |

---

## 8. Final Output Target (`src/data/shortsData.ts`)

```typescript
export interface RefHit {
  reference: string;
  translation: string;
  text: string;
}

export interface VerifiedClaim {
  id: string;
  time: string;                 // "M:SS"
  claim_type: "doctrinal" | "scripture_citation" | "historical_factual" | "application";
  speakerText: string;          // verbatim_quote_span
  claim: string;                // claim_text
  cited_reference: string | null;
  verdict: "aligned" | "partially_aligned" | "tension" | "unsupported" | "misquote" | "not_a_scriptural_claim";
  verdict_basis: "broadly_held" | "lens_dependent";
  confidence: "low" | "medium" | "high";
  biblical_teaching: string;
  broader_teaching: string;
  speaker_alignment: string;
  supporting_refs: RefHit[];
  tension_refs: RefHit[];
  study_refs: RefHit[];
}

export interface UnverifiedClaim {
  id: string;
  time: string;
  claim_type: "doctrinal" | "scripture_citation" | "historical_factual" | "application";
  claim: string;
}

export interface ShortData {
  id: string;
  author: string;
  title: string;
  category: string;
  extraction_model: string;
  discernment_model: string;
  claims: VerifiedClaim[];              // only the selected, verified subset
  unverified_claims: UnverifiedClaim[]; // everything extracted but not verified
}
```

This is a **superset** of the v1 shape (adds `cited_reference`,
`verdict_basis`, `confidence`, splits `verses` into three typed ref arrays,
adds `unverified_claims`) — should not require changes to
`ShortsGallery.tsx`/`page.tsx`, only to how `SidepanelModal.tsx` renders a
claim card, if it wants to show the fuller picture.
