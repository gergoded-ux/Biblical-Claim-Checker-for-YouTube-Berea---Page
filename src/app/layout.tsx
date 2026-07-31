import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Biblical Claim Checker for YouTube — Berea™",
  description: "Examine YouTube teachings against Scripture in a side panel. Berea is a Chrome extension that scrapes transcripts, extracts claims, and retrieves relevant Scripture.",
  keywords: ["Berea", "Bible", "Scripture", "Scripture Verification", "YouTube", "Chrome Extension", "Acts 17:11"],
  openGraph: {
    title: "Biblical Claim Checker for YouTube — Berea™",
    description: "Examine YouTube teachings against Scripture in a side panel. Berea is a Chrome extension that scrapes transcripts, extracts claims, and retrieves relevant Scripture.",
    type: "website",
    url: "https://gergoded-ux.github.io/Biblical-Claim-Checker-for-YouTube-Berea---Page/",
  },
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
            }
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
