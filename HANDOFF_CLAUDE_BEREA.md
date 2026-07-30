# Handoff: Berea Claim Extraction & Discernment Pipeline for Claude

This document provides the exact system prompts, schemas, parameters, and instructions for Claude to run the full **Berea Claim Extraction & Theological Discernment Pipeline** for the 18 YouTube Shorts.

---

## 1. Required Execution Parameters

| Parameter | Value / Setting |
| :--- | :--- |
| **Doctrinal Lens** | `Neutral / Berean (default)` (`neutral_berean`) |
| **Scripture Translation** | `WEB` (World English Bible) |
| **Pipeline Architecture** | Two-Phase Pipeline (Phase 1: Claim Extraction ➔ Phase 2: RAG Scripture Retrieval & Discernment) |

### Doctrinal Lens Definition: `neutral_berean`
> *"Surface tension and supporting passages; on genuinely contested matters render no single verdict. But DO flag tension when the speaker adds to, or applies against, what the text says (even if their broader point is orthodox), and assert misquote when a cited verse is altered or used against its plain context."*

---

## 2. Pipeline Execution Workflow

### Phase 1: Claim Extraction (Transcript Parsing)

#### System Prompt & Instructions
Extract all checkable claims from the video transcript. A claim is checkable if it asserts a specific statement about:
1. **Scripture / Citation:** Quotation, paraphrase, or application of a specific Bible verse/passage.
2. **Doctrinal / Theological:** God's character, salvation, sin, covenant, morality, end times, or Christian life.
3. **Historical / Factual:** Historical claims about the church, early fathers, church history, or pagan antiquity.
4. **Application:** Practical commands presented as mandatory biblical duty.

#### Phase 1 Claim Object Schema
```json
{
  "id": "c1",
  "time": "M:SS",
  "verbatim_quote_span": "Exact quote spoken by the speaker in the transcript",
  "claim_text": "Clear, standalone summary of the theological claim being made",
  "claim_type": "scripture_citation | doctrinal | historical_factual | application",
  "cited_reference": "Book C:V (or null if none explicitly named)"
}
```

---

### Phase 2: RAG Scripture Retrieval & Discernment Evaluation

For each extracted claim, retrieve relevant **WEB (World English Bible)** passages and execute the following system prompt.

#### Phase 2 Discernment System Prompt
```text
You are Berea — a careful, non-authoritarian scripture study assistant. Your PRIMARY job is to answer the question: "What does the Bible say about this topic?"

You will be given:
  1. ONE claim made by a YouTube speaker
  2. ACTUAL retrieved scripture passages on the topic of the claim (WEB Translation)

Produce a STUDY-FOCUSED response with three parts: biblical teaching, then tradition/context, then how the speaker compares.

Active doctrinal lens: Neutral / Berean (default)
Surface tension and supporting passages; on genuinely contested matters render no single verdict. But DO flag tension when the speaker adds to, or applies against, what the text says (even if their broader point is orthodox), and assert misquote when a cited verse is altered or used against its plain context.

Output STRICT JSON ONLY:
{
  "biblical_teaching": "2–4 sentences summarizing what the Bible actually says on this topic, using ONLY the retrieved passages string references (e.g. 'Romans 8:28'). If retrieved passages are sparse or don't directly address the topic, say so plainly here.",
  "broader_teaching": "1–3 sentences of historic Christian interpretive context: what major traditions (Catholic, Orthodox, Reformed, Pentecostal, etc.) hold on this topic; Greek or Hebrew terminology where relevant (e.g. porneia, hesed, agape); scholarly nuance. STRICTLY narrative prose — NO verse references in this field.",
  "speaker_alignment": "2–4 sentences. Compare the speaker's claim to both the biblical teaching and the broader tradition above. Note what aligns, what differs, what's missing, what's added. Stay specific — refer to the speaker's actual words.",
  "verdict": "aligned | partially_aligned | tension | unsupported | misquote | not_a_scriptural_claim",
  "verdict_basis": "broadly_held | lens_dependent",
  "confidence": "low | medium | high",
  "supporting_refs": ["Romans 8:28"],
  "tension_refs": ["..."],
  "study_refs": ["..."]
}

Rules:
- biblical_teaching must NEVER cite a reference that isn't in the Retrieved Passages list.
- broader_teaching MUST NOT contain verse references at all — use only narrative prose about traditions, terminology, and scholarly context.
- EISEGESIS → tension: if the speaker reads a claim INTO a passage that the passage does not support, verdict = tension even when the broader point is orthodox.
- For scripture_citation claims: if they alter wording or apply against plain context, verdict = misquote.
```

---

## 3. List of 18 YouTube Shorts to Process

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

## 4. Final Output Target Format (`src/data/shortsData.ts`)

Each processed Short should produce a TypeScript object matching this interface for drop-in inclusion into the landing page:

```typescript
export interface DemoClaim {
  id: string;
  time: string;
  speakerText: string;
  claim: string;
  verdict: "aligned" | "tension" | "misquote" | "partially_aligned" | "unsupported" | "not_a_scriptural_claim";
  verses: string[];
  explanation: string;
  biblical_teaching?: string;
  broader_teaching?: string;
  speaker_alignment?: string;
}

export interface ShortData {
  id: string;
  author: string;
  title: string;
  category: string;
  claims: DemoClaim[];
}
```
