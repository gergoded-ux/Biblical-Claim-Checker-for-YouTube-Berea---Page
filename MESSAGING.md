# Berea — Messaging Source of Truth

Last synced with the extension: 2026-08-06.

This file exists because the landing site kept describing a product the
extension didn't ship. **Before writing or changing any user-facing copy on this
site, check it against this file.** If the extension changes, update this file
first, then the site.

---

## 1. What Berea actually is, right now

A Chrome extension. You open a YouTube video, it reads the transcript, pulls out
the theological claims, searches a full offline Bible, and gives each claim a
verdict with the verses behind it.

**It is free. There is no subscription, no credits, and no account.** The user
pastes in their own free Google Gemini API key and that's the whole setup.

## 2. The one thing that changed

The site previously sold a **credit-based freemium service** — sign in with
Google, get free weekly credits, upgrade to "Berea Pro" for more. That is not
what ships. It's now **BYOK**: bring your own key.

The managed/credits system still exists in the codebase and may come back later
as a convenience option for people who don't want to handle a key. That's why
the second pricing card says *Coming later* instead of being deleted — but it
must never be described as something you can buy today.

## 3. Say / don't say

| Say | Don't say |
|---|---|
| Free forever | Freemium · Free tier · Free plan |
| Bring your own Gemini key | Sign in to get started |
| No account, no card, no credits | Weekly credits · Credit allowance · Top up |
| Berea Managed (coming later) | Berea Pro · Berea Basic · Upgrade to Pro |
| Your key stays in your browser | We handle the API for you |
| Runs on Google's free Gemini tier | Powered by our servers |

Nothing on the site may imply a purchase is available. There is no price, no
checkout, and no paid tier at launch.

## 4. Facts to keep accurate

- **Model:** `gemini-3.5-flash-lite` by default; the user can change it in
  settings. Do not name Claude, Haiku, Llama or OpenRouter anywhere — those were
  the managed-mode models and are not what a user runs.
- **Key:** free from `aistudio.google.com/apikey`, roughly a minute to create.
  Google's free tier covers normal study use.
- **Scripture search is genuinely offline.** BM25 + embeddings over 31,102
  verses bundled in the extension. WEB and KJV only — both public domain. Never
  list ESV, NIV, NASB or any other licensed translation.
- **Where data goes:** transcript and claim text go from the user's browser
  straight to Google's Gemini API on their own key. Berea operates no server in
  this mode and never sees the key or the claims. Verse lookups never leave the
  browser at all.
- **What it is not:** a cross-referencing study aid, not a spiritual authority.
  Keep the Acts 17:11 framing and the "discernment comes from the Holy Spirit"
  line — that's a trust anchor, not decoration.

## 5. The FAQ answers are duplicated — keep them in sync

`src/app/page.tsx` renders the FAQ; `src/app/layout.tsx` repeats the same text
inside a JSON-LD `FAQPage` block for search engines. **The two must match word
for word** or the structured data is invalid. Edit both in the same commit.

## 6. Where the copy lives

| What | File |
|---|---|
| Hero badge, pricing cards, FAQ | `src/app/page.tsx` |
| Page metadata + JSON-LD FAQ/Offer | `src/app/layout.tsx` |
| Waitlist incentive text | `src/components/WaitlistModal.tsx` |
| Extension mockup (model bar, footer) | `src/components/SidepanelModal.tsx` |
| Demo claim data | `src/data/shortsData.ts` — generated, see `HANDOFF_CLAUDE_BEREA.md`, don't hand-edit |
