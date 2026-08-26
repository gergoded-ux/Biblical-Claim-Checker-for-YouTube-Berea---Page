import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="py-6 px-6 border-b border-line">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-primary font-bold text-lg hover:opacity-80 transition-opacity">
            &larr; Berea
          </Link>
          <span className="text-muted text-sm">Legal</span>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-ink mb-2">Privacy policy</h1>
        <p className="text-muted text-sm mb-12">Last updated: August 26, 2026</p>

        <div className="space-y-10 text-ink leading-relaxed">

          <section>
            <h2 className="text-xl font-bold mb-3">What Berea is</h2>
            <p>
              Berea is a Chrome extension that checks biblical claims in YouTube videos against Scripture.
              It reads the transcript of the video you are currently watching, extracts claims about God or the Bible,
              and retrieves relevant verses so you can verify them yourself.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Data Berea collects</h2>
            <p className="font-semibold mb-2">Short answer: as little as possible.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>YouTube transcript text.</strong> When you click &quot;Extract,&quot; Berea reads the captions of
                the video you are watching. This text is sent to the Google Gemini API using your own API key
                to identify biblical claims. Berea does not store transcripts after the session ends.
              </li>
              <li>
                <strong>Your Gemini API key.</strong> Stored locally in your browser
                using <code className="text-sm bg-accent-soft px-1 py-0.5 rounded">chrome.storage.local</code>.
                The key never leaves your browser except to authenticate directly with Google&apos;s Gemini API.
                Berea&apos;s servers never see it.
              </li>
              <li>
                <strong>Extension settings.</strong> Your preferences (Bible translation, theme) are stored locally
                in your browser. They are not transmitted anywhere.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Data Berea does not collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Berea does not track your browsing history.</li>
              <li>Berea does not monitor which YouTube videos you watch.</li>
              <li>Berea does not collect personal information (name, email, location).</li>
              <li>Berea does not use cookies or third-party analytics.</li>
              <li>Berea does not sell, share, or transmit any user data to third parties.</li>
              <li>Berea does not run in the background. It activates only when you open the side panel and click &quot;Extract.&quot;</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Third-party services</h2>
            <p>Berea connects to the following external services:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <strong>Google Gemini API</strong> (<code className="text-sm bg-accent-soft px-1 py-0.5 rounded">generativelanguage.googleapis.com</code>).
                Transcript text is sent to this API for claim extraction and Scripture comparison.
                Your API key authenticates the request directly with Google. Google&apos;s own privacy policy
                governs how they handle API requests:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:opacity-80"
                >
                  policies.google.com/privacy
                </a>.
              </li>
              <li>
                <strong>YouTube</strong> (<code className="text-sm bg-accent-soft px-1 py-0.5 rounded">youtube.com</code>).
                Berea reads the transcript (captions) of the video currently displayed in your active tab.
                It does not access any other YouTube data.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Permissions explained</h2>
            <p className="mb-3">The extension requests the following Chrome permissions:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-line rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-accent-soft">
                    <th className="text-left px-4 py-3 font-semibold border-b border-line">Permission</th>
                    <th className="text-left px-4 py-3 font-semibold border-b border-line">Why Berea needs it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-line">
                    <td className="px-4 py-3 font-mono text-xs">sidePanel</td>
                    <td className="px-4 py-3">Opens the Berea panel alongside YouTube</td>
                  </tr>
                  <tr className="border-b border-line bg-accent-soft/30">
                    <td className="px-4 py-3 font-mono text-xs">activeTab</td>
                    <td className="px-4 py-3">Reads the transcript from the YouTube tab you are currently viewing</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="px-4 py-3 font-mono text-xs">storage</td>
                    <td className="px-4 py-3">Saves your API key and settings locally in the browser</td>
                  </tr>
                  <tr className="border-b border-line bg-accent-soft/30">
                    <td className="px-4 py-3 font-mono text-xs">scripting</td>
                    <td className="px-4 py-3">Injects the content script that extracts the transcript from YouTube&apos;s page</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="px-4 py-3 font-mono text-xs">tabs</td>
                    <td className="px-4 py-3">Detects when you navigate to a YouTube video so the panel can update</td>
                  </tr>
                  <tr className="border-b border-line bg-accent-soft/30">
                    <td className="px-4 py-3 font-mono text-xs">tts</td>
                    <td className="px-4 py-3">Text-to-speech for reading verdicts aloud (accessibility)</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="px-4 py-3 font-mono text-xs">offscreen</td>
                    <td className="px-4 py-3">Runs the local Bible search engine in the background without a visible window</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">identity</td>
                    <td className="px-4 py-3">Reserved for future Google Sign-In (Berea Managed tier, not yet active)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Data retention</h2>
            <p>
              Berea does not maintain a server-side database of user data. All data (your API key, settings,
              and cached results) is stored locally in your browser. Uninstalling the extension deletes everything.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Children&apos;s privacy</h2>
            <p>
              Berea does not knowingly collect any personal information from anyone, including children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Changes to this policy</h2>
            <p>
              If this policy changes, the updated version will be posted at this URL with a new &quot;Last updated&quot; date.
              Continued use of the extension after a change means you accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Contact</h2>
            <p>
              Questions about this policy? Email{" "}
              <a
                href="mailto:stan.valsaintfr@gmail.com"
                className="text-primary underline hover:opacity-80"
              >
                stan.valsaintfr@gmail.com
              </a>.
            </p>
          </section>

        </div>
      </article>
    </div>
  );
}
