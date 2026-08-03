"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, Search, Shield, Zap, FileText, CheckCircle2, ChevronDown, Download, MessageSquare, Quote, AlertTriangle, ArrowRight, User, Mail, Sparkles } from "lucide-react";
import { useState } from "react";
import { BereaPipelineBeam } from "@/components/BereaPipelineBeam";
import ShortsGallery from "@/components/ShortsGallery";
import CardFanCarousel from "@/components/ui/card-fan-carousel";
import SidepanelModal from "@/components/SidepanelModal";
import WaitlistModal from "@/components/WaitlistModal";
import { ShortData } from "@/data/shortsData";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedShort, setSelectedShort] = useState<ShortData | null>(null);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [heroEmail, setHeroEmail] = useState("");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="relative overflow-hidden font-sans text-ink selection:bg-accent-soft selection:text-primary pb-20">
      {/* Navbar */}
      <nav className="fixed top-0 w-full paper-card border-x-0 border-t-0 rounded-none z-50 shadow-sm bg-surface/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-ink">
            <Image src="/Biblical-Claim-Checker-for-YouTube-Berea---Page/logo.png" alt="Berea Logo" width={28} height={28} className="rounded shadow-sm" />
            <span>Berea<span className="text-primary font-normal">™</span></span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#toolkit" className="text-sm font-semibold hover:text-primary text-muted transition-colors hidden md:block">Toolkit</a>
            <a href="#pricing" className="text-sm font-semibold hover:text-primary text-muted transition-colors hidden md:block">Pricing</a>
            <a href="#faq" className="text-sm font-semibold hover:text-primary text-muted transition-colors hidden md:block">FAQ</a>
            <button
              onClick={() => setIsWaitlistOpen(true)}
              className="text-sm font-bold bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hover transition-colors shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="pt-40 pb-16 px-6 max-w-6xl mx-auto text-center relative">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-accent-soft blur-[100px] rounded-full pointer-events-none -z-10" />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-6"
        >
          <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight text-balance text-ink leading-tight">
            The Biblical Claim Checker <br className="hidden md:block" />
            <span className="text-gradient">for YouTube</span>
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted text-balance leading-relaxed max-w-2xl mx-auto pt-2">
            Study YouTube theology with Scripture. Berea’s AI-powered side panel helps believers instantly verify theological claims in any video using local, offline Scripture retrieval.
          </motion.p>
          
          <motion.div variants={fadeIn} className="pt-6 max-w-xl mx-auto space-y-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsWaitlistOpen(true);
              }}
              className="flex flex-col sm:flex-row items-center gap-3 p-2 bg-surface paper-card border-line shadow-xl rounded-2xl"
            >
              <div className="relative flex-grow w-full">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
                <input
                  type="email"
                  value={heroEmail}
                  onChange={(e) => setHeroEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full pl-11 pr-4 py-3 bg-transparent text-ink placeholder:text-muted/60 focus:outline-none text-sm font-medium"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-7 py-3.5 rounded-xl font-bold text-sm md:text-base transition-all flex items-center justify-center gap-2 shadow-md shrink-0 active:scale-95"
              >
                <span>Get Early Access</span>
                <ArrowRight size={18} />
              </button>
            </form>

            {/* Social proof & incentive badge */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted font-medium pt-1">
              <span className="flex items-center gap-1.5 text-ink font-semibold">
                <Sparkles size={14} className="text-amber-500 fill-amber-400" />
                <span>500+ Berean listeners on early access list</span>
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="text-primary font-bold bg-accent-soft px-2.5 py-0.5 rounded-full border border-line">
                🎁 10 Bonus Credits on Launch
              </span>
            </div>

            {/* Holy Spirit & Discernment Trust Banner */}
            <div className="pt-2">
              <p className="text-[11px] md:text-xs text-muted/80 max-w-md mx-auto italic border-t border-line/40 pt-3">
                📖 Designed as a Scripture cross-referencing tool for personal study (Acts 17:11). Spiritual discernment comes from the Holy Spirit.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Hero Carousel — 18 YouTube Shorts Fan Arc */}
      <CardFanCarousel onSelectShort={(short) => setSelectedShort(short)} />

      {/* Sidepanel Modal Drawer */}
      <SidepanelModal short={selectedShort} onClose={() => setSelectedShort(null)} />

      {/* 2. Dual Marquee Banner — Scripture Verses (→) & Translations (←) */}
      <section className="py-0 border-y border-line bg-ink overflow-hidden">
        {/* Top Row — Scripture Verses scrolling RIGHT */}
        <div className="marquee-track border-b border-white/10 py-4">
          <div className="marquee-right flex whitespace-nowrap w-max">
            {[...Array(2)].map((_, dupeIdx) => (
              <div key={dupeIdx} className="flex items-center">
                {[
                  { verse: "Acts 17:11", text: "They examined the Scriptures daily to see if these things were so." },
                  { verse: "2 Timothy 2:15", text: "Be diligent to present yourself approved to God, a worker who does not need to be ashamed, rightly dividing the word of truth." },
                  { verse: "1 John 4:1", text: "Beloved, do not believe every spirit, but test the spirits to see whether they are from God." },
                  { verse: "Proverbs 18:17", text: "The one who states his case first seems right, until the other comes and examines him." },
                  { verse: "Isaiah 8:20", text: "To the law and to the testimony! If they do not speak according to this word, it is because there is no light in them." },
                  { verse: "John 17:17", text: "Sanctify them in the truth; your word is truth." },
                  { verse: "2 Timothy 3:16", text: "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness." },
                  { verse: "Psalm 119:105", text: "Your word is a lamp to my feet and a light to my path." },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 mx-8">
                    <span className="text-primary font-bold text-xs tracking-wide bg-primary/15 px-2.5 py-1 rounded-full shrink-0 border border-primary/20">
                      {item.verse}
                    </span>
                    <span className="text-white/70 text-sm italic">
                      "{item.text}"
                    </span>
                    <span className="text-white/20 mx-4">✦</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row — Supported Translations scrolling LEFT */}
        <div className="marquee-track py-3.5">
          <div className="marquee-left flex whitespace-nowrap w-max">
            {[...Array(2)].map((_, dupeIdx) => (
              <div key={dupeIdx} className="flex items-center">
                {[
                  { abbr: "KJV", name: "King James Version" },
                  { abbr: "WEB", name: "World English Bible" },
                  { abbr: "ESV", name: "English Standard Version" },
                  { abbr: "NASB", name: "New American Standard" },
                  { abbr: "NIV", name: "New International Version" },
                  { abbr: "NKJV", name: "New King James Version" },
                  { abbr: "CSB", name: "Christian Standard Bible" },
                  { abbr: "NLT", name: "New Living Translation" },
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-2.5 mx-8">
                    <BookOpen size={16} className="text-primary/80 shrink-0" />
                    <span className="text-white font-bold text-sm tracking-wider">{t.abbr}</span>
                    <span className="text-white/40 text-xs hidden md:inline">{t.name}</span>
                    <span className="text-white/15 mx-4">•</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bento Box Toolkit Grid */}
      <section id="toolkit" className="py-24 px-6 relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Your Complete Toolkit</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-ink">Everything You Need in a YouTube Bible Study Tool</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          
          {/* Bento Item 1 - Large */}
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="paper-card p-8 flex flex-col md:col-span-2 relative overflow-hidden group">
            <div className="z-10 relative h-full flex flex-col">
              <FileText className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-2">Live Transcript Extraction</h3>
              <p className="text-muted max-w-md">Instantly reads the YouTube video transcript as you watch, identifying checkable theological claims in real-time.</p>
            </div>
            {/* Fake UI Background */}
            <div className="absolute -bottom-10 -right-10 w-2/3 h-48 bg-surface border border-line rounded-tl-xl shadow-2xl p-4 flex flex-col gap-3 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-500">
              <div className="h-4 w-3/4 bg-line rounded"></div>
              <div className="h-4 w-1/2 bg-line rounded"></div>
              <div className="h-4 w-5/6 bg-accent-soft rounded border border-primary/20"></div>
            </div>
          </motion.div>

          {/* Bento Item 2 - Small */}
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.1}} className="paper-card p-8 flex flex-col relative overflow-hidden group bg-accent-soft/30">
            <div className="z-10">
              <Shield className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">100% Offline</h3>
              <p className="text-muted text-sm">Your Bible database lives entirely in the browser. Zero API calls for scripture.</p>
            </div>
          </motion.div>

          {/* Bento Item 3 - Small */}
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.2}} className="paper-card p-8 flex flex-col relative overflow-hidden group">
            <div className="z-10 h-full flex flex-col">
              <Search className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">BM25 Retrieval</h3>
              <p className="text-muted text-sm flex-grow">Hybrid semantic search pulls the exact chapters needed to verify the claim.</p>
              
              <div className="mt-4 bg-surface border border-line rounded p-3 shadow-sm text-xs text-primary font-bold">
                Found: Acts 17:11 (98% match)
              </div>
            </div>
          </motion.div>

          {/* Bento Item 4 - Large */}
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.3}} className="paper-card p-8 flex flex-col md:col-span-2 relative overflow-hidden group bg-[#faf8f3]">
            <div className="z-10 relative h-full flex flex-col md:w-1/2">
              <CheckCircle2 className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-2">The Verdict Engine</h3>
              <p className="text-muted">Compares the extracted claim against the retrieved text, outputting a structured, neutral theological report.</p>
            </div>
            {/* Fake Badges Background */}
            <div className="absolute right-0 top-0 h-full w-full md:w-1/2 flex items-center justify-center p-8">
              <div className="flex flex-col gap-4 w-full">
                <div className="bg-surface p-3 rounded shadow-sm border border-line flex justify-between items-center group-hover:scale-105 transition-transform">
                  <span className="text-sm font-bold text-ink">Sola Fide</span>
                  <span className="text-xs font-bold px-2 py-1 bg-[#2d6a4f]/10 text-[#2d6a4f] rounded">ALIGNED</span>
                </div>
                <div className="bg-surface p-3 rounded shadow-sm border border-line flex justify-between items-center group-hover:scale-105 transition-transform delay-75">
                  <span className="text-sm font-bold text-ink">Prosperity Gospel</span>
                  <span className="text-xs font-bold px-2 py-1 bg-[#c2410c]/10 text-[#c2410c] rounded">TENSION</span>
                </div>
                <div className="bg-surface p-3 rounded shadow-sm border border-line flex justify-between items-center group-hover:scale-105 transition-transform delay-150">
                  <span className="text-sm font-bold text-ink">Extrabiblical Prophecy</span>
                  <span className="text-xs font-bold px-2 py-1 bg-[#b91c1c]/10 text-[#b91c1c] rounded">UNSUPPORTED</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. Pain Points / Solutions */}
      <section className="py-24 px-6 bg-surface border-y border-line">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-ink">A Chrome Extension for Scripture Verification</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-line rounded-xl bg-[#faf8f3]">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-line">
                <AlertTriangle className="text-tension" size={24} />
                <h4 className="font-bold text-lg">Am I being misled?</h4>
              </div>
              <h5 className="font-bold text-xl mb-3">Verify Teachings Instantly</h5>
              <p className="text-muted leading-relaxed">Let AI cross-reference the speaker's claims against biblical context so you never fall for cherry-picked or out-of-context verses.</p>
            </div>

            <div className="p-8 border border-line rounded-xl bg-[#faf8f3]">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-line">
                <BookOpen className="text-muted" size={24} />
                <h4 className="font-bold text-lg">I don't know the text well enough.</h4>
              </div>
              <h5 className="font-bold text-xl mb-3">Your Personal Study Assistant</h5>
              <p className="text-muted leading-relaxed">Berea acts like a pocket theologian, instantly pulling up the relevant chapters and historical context for you right beside the video.</p>
            </div>

            <div className="p-8 border border-line rounded-xl bg-[#faf8f3]">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-line">
                <FileText className="text-muted" size={24} />
                <h4 className="font-bold text-lg">Taking notes is too tedious.</h4>
              </div>
              <h5 className="font-bold text-xl mb-3">Exportable Study Reports</h5>
              <p className="text-muted leading-relaxed">Focus on the teaching. Berea automatically structures the claims, verdicts, and verses into exportable markdown notes for Obsidian or Notion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 How It Works — Animated Pipeline Beam */}
      <section className="py-24 px-6 relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Under the Hood</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-ink">How Berea Checks Sermon Transcripts Offline</h2>
          <p className="text-muted max-w-2xl mx-auto">From the moment you press "Extract" on any YouTube video, Berea runs a 6-step pipeline — entirely in your browser side panel.</p>
        </div>
        <BereaPipelineBeam />

        {/* Step descriptions below the beam */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
            <p className="text-xs md:text-sm text-muted"><span className="font-bold text-ink">Open any YouTube video</span> — sermons, podcasts, shorts, or lectures.</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 rounded-full bg-accent-soft text-primary flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
            <p className="text-xs md:text-sm text-muted"><span className="font-bold text-ink">Transcript is auto-extracted</span> — pulled from YouTube captions instantly.</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
            <p className="text-xs md:text-sm text-muted"><span className="font-bold text-ink">AI extracts biblical claims</span> — identifies testable theological statements.</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 rounded-full bg-accent-soft text-primary flex items-center justify-center mx-auto mb-2 text-sm font-bold">4</div>
            <p className="text-xs md:text-sm text-muted"><span className="font-bold text-ink">Offline BM25 Scripture search</span> — retrieves the most relevant Bible passages locally.</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-2 text-sm font-bold">5</div>
            <p className="text-xs md:text-sm text-muted"><span className="font-bold text-ink">AI compares claim vs. Scripture</span> — generates a structured theological verdict.</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2 text-sm font-bold">6</div>
            <p className="text-xs md:text-sm text-muted"><span className="font-bold text-ink">Full claim report</span> — Aligned, Tension, or Misquote with verse references.</p>
          </div>
        </div>
      </section>

      {/* 5. Ultimate Transformation */}
      <section className="py-24 px-6 relative max-w-4xl mx-auto text-center">
        <Shield size={64} className="mx-auto text-primary mb-8 opacity-20" />
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Study Like the Bereans.<br/>Examine with Confidence.</h2>
        <p className="text-xl text-muted max-w-2xl mx-auto mb-10">
          Stop being a passive consumer of YouTube theology. Become an active, scripture-testing student of the Word.
        </p>
        <button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
          Add to Chrome - It's Free
        </button>
      </section>

      {/* 6. Testimonials / Real Results (Everyday Believers) */}
      <section className="py-24 px-6 bg-surface border-y border-line">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-ink">Trusted by Everyday Believers</h2>
            <p className="text-muted max-w-xl mx-auto">See how everyday Christians are using Berea to verify online teaching and study Scripture with confidence.</p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Review 1 */}
            <div className="paper-card p-6 break-inside-avoid bg-surface border border-line rounded-xl shadow-2xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent-soft rounded-full flex items-center justify-center text-primary font-bold"><User size={20}/></div>
                <div>
                  <p className="font-bold text-sm text-ink">Daily Podcast Listener</p>
                  <p className="text-xs text-muted">Verified User</p>
                </div>
              </div>
              <p className="text-ink text-sm leading-relaxed">"I watch a lot of long Christian podcasts while working. Berea pulls up the exact scripture references as the speaker mentions them so I don't have to pause and search manually."</p>
            </div>
            
            {/* Review 2 */}
            <div className="paper-card p-6 break-inside-avoid bg-surface border border-line rounded-xl shadow-2xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent-soft rounded-full flex items-center justify-center text-primary font-bold"><User size={20}/></div>
                <div>
                  <p className="font-bold text-sm text-ink">Everyday Bible Reader</p>
                  <p className="text-xs text-muted">Verified User</p>
                </div>
              </div>
              <p className="text-ink text-sm leading-relaxed">"Berea caught a misquoted verse in a viral sermon clip that I would have completely missed. It gives me real peace of mind when watching content online."</p>
            </div>

            {/* Review 3 */}
            <div className="paper-card p-6 break-inside-avoid bg-surface border border-line rounded-xl shadow-2xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent-soft rounded-full flex items-center justify-center text-primary font-bold"><User size={20}/></div>
                <div>
                  <p className="font-bold text-sm text-ink">YouTube Sermon Viewer</p>
                  <p className="text-xs text-muted">Verified User</p>
                </div>
              </div>
              <p className="text-ink text-sm leading-relaxed">"The way it highlights claims into Aligned, Tension, and Misquote saves me so much time when double-checking claims I hear online."</p>
              <div className="mt-4 p-2.5 bg-accent-soft/40 rounded border border-line flex items-center gap-2">
                <span className="text-[11px] font-bold text-primary">Instant Scripture Verification</span>
              </div>
            </div>

            {/* Review 4 */}
            <div className="paper-card p-6 break-inside-avoid bg-[#faf8f3] border border-line rounded-xl shadow-2xs">
              <p className="text-ink text-sm leading-relaxed italic">"Now these Jews were more noble than those in Thessalonica; they received the word with all eagerness, examining the Scriptures daily to see if these things were so."</p>
              <p className="text-xs text-muted mt-4 font-bold tracking-widest uppercase">— Acts 17:11</p>
            </div>

            {/* Review 5 */}
            <div className="paper-card p-6 break-inside-avoid bg-surface border border-line rounded-xl shadow-2xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent-soft rounded-full flex items-center justify-center text-primary font-bold"><User size={20}/></div>
                <div>
                  <p className="font-bold text-sm text-ink">College Student</p>
                  <p className="text-xs text-muted">Verified User</p>
                </div>
              </div>
              <p className="text-ink text-sm leading-relaxed">"Super easy to use. I just open YouTube, click extract in the side panel, and I can see the biblical context right beside the video without leaving my tab."</p>
            </div>

            {/* Review 6 */}
            <div className="paper-card p-6 break-inside-avoid bg-surface border border-line rounded-xl shadow-2xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent-soft rounded-full flex items-center justify-center text-primary font-bold"><User size={20}/></div>
                <div>
                  <p className="font-bold text-sm text-ink">Family & Bible Study Listener</p>
                  <p className="text-xs text-muted">Verified User</p>
                </div>
              </div>
              <p className="text-ink text-sm leading-relaxed">"Our family watches teaching videos together. Having Berea side-by-side helps us discuss what was taught and verify scripture together."</p>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Pricing */}
      <section id="pricing" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Simple, Transparent Access</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-ink">Pick the Setup That Fits You</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="paper-card p-10 flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Berea Basic</h3>
            <p className="text-muted text-sm mb-6">Start examining Scripture immediately.</p>
            <div className="text-4xl font-extrabold mb-8">Free<span className="text-lg font-normal text-muted"></span></div>
            
            <button
              onClick={() => setIsWaitlistOpen(true)}
              className="w-full py-4 rounded-lg font-bold border-2 border-primary text-primary hover:bg-accent-soft transition-colors mb-8"
            >
              Join Basic Waitlist
            </button>
            
            <ul className="space-y-4 text-sm text-ink flex-grow">
              <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0" size={20}/> Weekly AI processing credits</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0" size={20}/> 100% Local BM25 Scripture DB</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0" size={20}/> Transcript extraction</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0" size={20}/> Google Sign-in sync</li>
            </ul>
          </div>

          {/* Managed Tier */}
          <div className="paper-card p-10 flex flex-col border-2 border-primary relative shadow-xl transform md:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
              Recommended
            </div>
            <h3 className="text-2xl font-bold mb-2">Berea Pro</h3>
            <p className="text-muted text-sm mb-6">For power users and theologians.</p>
            <div className="text-4xl font-extrabold mb-8">Freemium<span className="text-lg font-normal text-muted">/upgrade</span></div>
            
            <button
              onClick={() => setIsWaitlistOpen(true)}
              className="w-full py-4 rounded-lg font-bold bg-primary text-white hover:bg-primary-hover transition-colors mb-8 shadow-md"
            >
              Reserve Pro Early Access
            </button>
            
            <div className="bg-accent-soft p-3 rounded mb-6 text-xs font-bold text-center border border-line">
              Everything in Basic, plus:
            </div>

            <ul className="space-y-4 text-sm text-ink flex-grow">
              <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0" size={20}/> <strong>Unlimited AI verdicts</strong></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0" size={20}/> Exportable Markdown Reports</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0" size={20}/> Advanced Theology Lenses</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0" size={20}/> Priority Support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section id="faq" className="py-24 px-6 max-w-3xl mx-auto border-t border-line">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-ink">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            { q: "Does Berea track my YouTube history or personal data?", a: "No. Berea is 100% private. It only activates when you open the side panel and explicitly click 'Extract'. It only reads the transcript of the video you are currently watching and does not track your general browsing history or personal data." },
            { q: "What Bible translation does Berea use for verification?", a: "Currently, the local retrieval engine defaults to the World English Bible (WEB) and King James Version (KJV). The AI strictly compares claims against the retrieved verses, minimizing denominational bias by sticking to the text itself." },
            { q: "Is Berea really free to use?", a: "Berea is a freemium service. The extension is free to install and we provide free weekly credits to all users who sign in with Google. You can upgrade to Berea Pro for unlimited usage." },
            { q: "Does it work on every YouTube video?", a: "Berea works on any YouTube video that has a transcript (captions). Whether the video uses auto-generated or manual captions—which includes almost all sermons and podcasts—Berea can analyze it for theological claims." },
            { q: "How does the AI prevent hallucinations or making things up?", a: "We use a hybrid approach. First, Berea runs a traditional search algorithm (BM25) on a local Bible database to find relevant verses. The AI is then strictly constrained to compare the speaker's claim only against those specific verses, significantly reducing the chance of AI hallucination." }
          ].map((faq, i) => (
            <div key={i} className="paper-card overflow-hidden">
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full text-left p-6 font-bold text-ink flex justify-between items-center hover:bg-accent-soft/50 transition-colors"
              >
                {faq.q}
                <ChevronDown className={`transition-transform duration-300 text-muted ${activeFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {activeFaq === i && (
                <div className="p-6 pt-0 text-muted text-sm leading-relaxed border-t border-line mt-2">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        initialEmail={heroEmail}
      />
    </div>
  );
}
