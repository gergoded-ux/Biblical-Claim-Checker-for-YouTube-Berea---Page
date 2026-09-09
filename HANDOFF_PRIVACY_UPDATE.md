# Privacy page update — for Antigravity

**URL does not change.** Still `/privacy`. What changed is the extension, in
ways the page now describes wrongly.

One file: `src/app/privacy/page.tsx`.

Checked against `berea-extension/manifest.json` v1.5.2 and the shipping code on
2026-09-09.

---

## 1. The permission table is wrong — `activeTab` is not requested

The manifest asks for exactly: `sidePanel`, `storage`, `scripting`, `tabs`,
`tts`, `offscreen`. There is no `activeTab`. The page claims one.

The table also omits **host permissions** and the **content script**, which are
the two things a Chrome reviewer actually compares the policy against. Berea
runs a content script on every `www.youtube.com` page (it mounts the small
Berea bar), not only when you press a button. That is fine — but it has to be
disclosed.

Replace the whole `<tbody>` of the permissions table with:

```tsx
<tbody>
  <tr className="border-b border-line">
    <td className="px-4 py-3 font-mono text-xs">sidePanel</td>
    <td className="px-4 py-3">Displays the Berea panel beside the video you are watching</td>
  </tr>
  <tr className="border-b border-line bg-accent-soft/30">
    <td className="px-4 py-3 font-mono text-xs">storage</td>
    <td className="px-4 py-3">Keeps your API key, your preferences and your saved conversations on your own device</td>
  </tr>
  <tr className="border-b border-line">
    <td className="px-4 py-3 font-mono text-xs">scripting</td>
    <td className="px-4 py-3">Reads the transcript of the YouTube tab you are watching, when you ask for an analysis or an answer</td>
  </tr>
  <tr className="border-b border-line bg-accent-soft/30">
    <td className="px-4 py-3 font-mono text-xs">tabs</td>
    <td className="px-4 py-3">Notices when you move to another YouTube video, so the panel follows you</td>
  </tr>
  <tr className="border-b border-line">
    <td className="px-4 py-3 font-mono text-xs">tts</td>
    <td className="px-4 py-3">Reads a result aloud when you ask it to</td>
  </tr>
  <tr className="border-b border-line bg-accent-soft/30">
    <td className="px-4 py-3 font-mono text-xs">offscreen</td>
    <td className="px-4 py-3">Runs the bundled Scripture search in the background of your browser</td>
  </tr>
  <tr className="border-b border-line">
    <td className="px-4 py-3 font-mono text-xs">youtube.com</td>
    <td className="px-4 py-3">Berea adds its small bar to YouTube pages and reads the transcript there. It runs on no other website.</td>
  </tr>
  <tr>
    <td className="px-4 py-3 font-mono text-xs">generativelanguage.googleapis.com</td>
    <td className="px-4 py-3">The only address Berea contacts: Google&apos;s Gemini API, called straight from your browser with your own key</td>
  </tr>
</tbody>
```

Change the sentence above the table from "the Chrome permissions strictly
needed for client-side functionality" to:

```tsx
<p className="mb-3">Berea asks for these Chrome permissions, and for access to two web addresses. Nothing here sends data to us, because there is no us to send it to — we run no server.</p>
```

---

## 2. One retention choice is missing from the list

The settings menu offers seven choices. The page lists six — it leaves out
**session** ("until you close the panel"), which is the most privacy-preserving
option after *off* and the one a cautious reader would want to know exists.

In the **Questions and answers** bullet, replace:

> You can set it to one day, a week, a month, ninety days, until you delete it, or **don't save chats at all**

with:

> You can set it to keep them only until you close the panel, or for a day, a week, a month, or ninety days, or until you delete them yourself — or **don&apos;t save chats at all**

Everything else in that bullet is still accurate: default 7 days, a **Delete all
chat history** button, a cap of 40 conversations, oldest removed first.

---

## 3. Missing: the Bible never touches the network

This is the strongest privacy claim Berea has, and the page does not make it.
Every translation ships inside the extension — eight of them, across six
languages — and every verse lookup, search and cross-reference is answered from
the user's own disk. Only the *reasoning* step calls Google.

Add this as a new `<section>` immediately after **Zero data collection**:

```tsx
<section>
  <h2 className="text-xl font-bold mb-3">The Bible is on your device</h2>
  <p>
    Every translation Berea offers — eight of them, across six languages — is bundled inside the extension itself.
    Looking up a verse, searching for a passage or following a cross-reference happens entirely on your own computer
    and reaches no network at all. Nobody, ourselves included, can see what you looked up.
    Only the reasoning step contacts Google&apos;s Gemini API, using your own key.
  </p>
</section>
```

---

## 4. Date

`Last updated: August 26, 2026` → `Last updated: September 9, 2026`

---

## Still true, leave alone

Zero data collection, no analytics, no backend, the API key handling, the
transcript bullet, children's privacy, contact address. The *Video transcripts*
bullet in particular is already correct and was the reason for the last rewrite.

## Do not forget

This repo has **never been pushed**. The 2026-08-26 rewrite that disclosed
transcript and conversation storage is still local only — the live page today
carries the old text. Push and deploy, then load
`https://gergoded-ux.github.io/Biblical-Claim-Checker-for-YouTube-Berea---Page/privacy`
and confirm the *Questions and answers* section is visible before the Web Store
upload. A privacy page that contradicts the store's data disclosure is a
rejection.
