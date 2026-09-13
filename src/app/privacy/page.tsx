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
        <p className="text-muted text-sm mb-12">Last updated: September 9, 2026</p>

        <div className="space-y-10 text-ink leading-relaxed">

          <section>
            <h2 className="text-xl font-bold mb-3">Overview</h2>
            <p>
              Berea is a client-side Chrome extension that fact-checks biblical claims in YouTube videos against Scripture.
              We operate no backend servers, maintain no databases, and collect zero user data.
              Everything runs locally in your browser.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Zero data collection</h2>
            <p className="mb-3">
              We do not collect, receive, or sell any personal data or usage information. Nothing you do in Berea is transmitted to us — we run no server. Some data is stored on your own device so the extension can work; you control it and can delete it at any time. See <em>What stays on your device</em> below.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>No personal information:</strong> We do not ask for or collect names, emails, IP addresses, or account credentials.
              </li>
              <li>
                <strong>No browsing history or tracking:</strong> We do not track what you watch or monitor your browsing activity.
              </li>
              <li>
                <strong>No analytics or cookies:</strong> There are no tracking scripts, telemetry, or third-party cookies in the extension.
              </li>
              <li>
                <strong>No backend servers:</strong> We do not operate any server infrastructure. The extension communicates directly from your browser to Google&apos;s API.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The Bible is on your device</h2>
            <p>
              Every translation Berea offers — eight of them, across six languages — is bundled inside the extension itself.
              Looking up a verse, searching for a passage or following a cross-reference happens entirely on your own computer
              and reaches no network at all. Nobody, ourselves included, can see what you looked up.
              Only the reasoning step contacts Google&apos;s Gemini API, using your own key.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">How data is handled locally</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Gemini API key:</strong> Your API key is stored strictly on your device using Chrome&apos;s local storage (<code className="text-sm bg-accent-soft px-1 py-0.5 rounded">chrome.storage.local</code>). It never leaves your browser except when sent directly to Google&apos;s Gemini API to process requests.
              </li>
              <li>
                <strong>Video transcripts:</strong> The transcript of the active YouTube video is read in your browser and sent directly to Google&apos;s Gemini API for claim verification or to answer a question you ask. It is also saved on your own device alongside the conversation it belongs to, so a conversation you return to still understands the video without re-reading it. It is never sent to us, and never to anyone but Google&apos;s API in service of your own request.
              </li>
              <li>
                <strong>Questions and answers:</strong> When you use Ask mode, the questions you type and the answers you receive are stored on your device as a conversation, together with the video&apos;s title and link. They are kept for as long as your chat-history setting says — the default is 7 days. You can set it to keep them only until you close the panel, or for a day, a week, a month, or ninety days, or until you delete them yourself — or <strong>don&apos;t save chats at all</strong>, and there is a <strong>Delete all chat history</strong> button beside the setting. Berea keeps at most 40 conversations and removes the oldest first.
              </li>
              <li>
                <strong>Local preferences:</strong> Settings such as your preferred Bible translation or interface preferences are saved locally in your browser and never synced to external servers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Third-party services</h2>
            <p className="mb-2">
              Because Berea runs entirely on your device with no intermediary servers, your browser interacts directly with two external services:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Google Gemini API</strong> (<code className="text-sm bg-accent-soft px-1 py-0.5 rounded">generativelanguage.googleapis.com</code>):
                Used to analyze claims and match Scripture using your own API key. Google&apos;s handling of API data is governed by the{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:opacity-80"
                >
                  Google Privacy Policy
                </a>.
              </li>
              <li>
                <strong>YouTube</strong> (<code className="text-sm bg-accent-soft px-1 py-0.5 rounded">youtube.com</code>):
                The extension reads the public transcript of the video you are actively watching when you request an analysis.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Permissions explained</h2>
            <p className="mb-3">Berea asks for these Chrome permissions, and for access to two web addresses. Nothing here sends data to us, because there is no us to send it to — we run no server.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-line rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-accent-soft">
                    <th className="text-left px-4 py-3 font-semibold border-b border-line">Permission</th>
                    <th className="text-left px-4 py-3 font-semibold border-b border-line">Purpose</th>
                  </tr>
                </thead>
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
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Data retention and deletion</h2>
            <p>
              Because all data is stored locally in your browser, removing or uninstalling the Berea extension immediately deletes all local data, including your saved API key and preferences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Children&apos;s privacy</h2>
            <p>
              Berea collects no personal information from any user, including children under 13 years of age.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Changes to this policy</h2>
            <p>
              Any updates to this policy will be published on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Contact</h2>
            <p>
              For any questions regarding this privacy policy, contact:{" "}
              <a
                href="mailto:pulsehubio@gmail.com"
                className="text-primary underline hover:opacity-80"
              >
                pulsehubio@gmail.com
              </a>
            </p>
          </section>

        </div>
      </article>
    </div>
  );
}
