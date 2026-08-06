import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://gergoded-ux.github.io"),
  title: "Biblical Claim Checker for YouTube — Berea™",
  description: "Examine YouTube teachings against Scripture in a side panel. Berea is a Chrome extension that scrapes transcripts, extracts claims, and retrieves relevant Scripture.",
  keywords: ["Berea", "Bible", "Scripture", "Scripture Verification", "YouTube", "Chrome Extension", "Acts 17:11"],
  openGraph: {
    title: "Biblical Claim Checker for YouTube — Berea™",
    description: "Examine YouTube teachings against Scripture in a side panel. Berea is a Chrome extension that scrapes transcripts, extracts claims, and retrieves relevant Scripture.",
    type: "website",
    url: "https://gergoded-ux.github.io/Biblical-Claim-Checker-for-YouTube-Berea---Page/",
    images: [
      {
        url: "https://gergoded-ux.github.io/Biblical-Claim-Checker-for-YouTube-Berea---Page/logo.png",
        width: 1200,
        height: 630,
        alt: "Berea Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biblical Claim Checker for YouTube — Berea™",
    description: "Examine YouTube teachings against Scripture in a side panel. Berea is a Chrome extension that scrapes transcripts, extracts claims, and retrieves relevant Scripture.",
    images: ["https://gergoded-ux.github.io/Biblical-Claim-Checker-for-YouTube-Berea---Page/logo.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="schema-org" type="application/ld+json">
          {`
            [
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "Biblical Claim Checker for YouTube — Berea™",
                "operatingSystem": "Chrome",
                "applicationCategory": "BrowserApplication",
                "description": "Examine YouTube teachings against Scripture in a side panel.",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Does Berea track my YouTube history or personal data?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. Berea is 100% private. It only activates when you open the side panel and explicitly click 'Extract'. It only reads the transcript of the video you are currently watching and does not track your general browsing history or personal data."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What Bible translation does Berea use for verification?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Currently, the local retrieval engine defaults to the World English Bible (WEB) and King James Version (KJV). The AI strictly compares claims against the retrieved verses, minimizing denominational bias by sticking to the text itself."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is Berea really free to use?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. There is no subscription, no credits to buy, and no account to create. Berea runs on your own Google Gemini API key, which is free to generate at aistudio.google.com and whose free tier covers normal study use. Nothing is ever billed through Berea."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Why do I need my own API key?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Weighing a claim against Scripture takes an AI model, and models cost money to run. Rather than charge a subscription to cover that, Berea lets you use Google's free Gemini tier directly. Paste the key into the extension's settings once and you are done — it stays in your browser, your claims go straight to Google, and Berea never sees either."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it work on every YouTube video?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Berea works on any YouTube video that has a transcript (captions). Whether the video uses auto-generated or manual captions—which includes almost all sermons and podcasts—Berea can analyze it for theological claims."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does the AI prevent hallucinations or making things up?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We use a hybrid approach. First, Berea runs a traditional search algorithm (BM25) on a local Bible database to find relevant verses. The AI is then strictly constrained to compare the speaker's claim only against those specific verses, significantly reducing the chance of AI hallucination."
                    }
                  }
                ]
              }
            ]
          `}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans min-h-screen bg-background text-foreground flex flex-col`}>
        <main className="flex-grow">{children}</main>
        <footer className="py-8 border-t border-[rgba(255,255,255,0.1)] text-center text-sm text-gray-400 mt-20">
          <p>Berea™ — Acts 17:11. "They examined the Scriptures daily to see whether these things were so."</p>
          <p className="mt-2 text-gray-500">Not affiliated with YouTube.</p>
        </footer>
      </body>
    </html>
  );
}
