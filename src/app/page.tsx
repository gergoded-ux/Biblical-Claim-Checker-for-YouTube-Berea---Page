"use client";

import { motion } from "framer-motion";
import { BookOpen, Search, Shield, Zap, FileText, CheckCircle2, ChevronDown, Download, MessageSquare, Quote, AlertTriangle, ArrowRight, User } from "lucide-react";
import { useState } from "react";
import InteractiveDemo from "@/components/InteractiveDemo";
import ShortsGallery from "@/components/ShortsGallery";
import CardFanCarousel from "@/components/ui/card-fan-carousel";
import SidepanelModal from "@/components/SidepanelModal";
import { ShortData } from "@/data/shortsData";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedShort, setSelectedShort] = useState<ShortData | null>(null);

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
            <img src="/Biblical-Claim-Checker-for-YouTube-Berea---Page/logo.png" alt="Berea Logo" className="w-7 h-7 rounded shadow-sm" />
            <span>Berea<span className="text-primary font-normal">™</span></span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#toolkit" className="text-sm font-semibold hover:text-primary text-muted transition-colors hidden md:block">Toolkit</a>
            <a href="#pricing" className="text-sm font-semibold hover:text-primary text-muted transition-colors hidden md:block">Pricing</a>
            <a href="https://github.com/gergoded-ux/BEREA" target="_blank" rel="noreferrer" className="text-sm font-semibold hover:text-primary text-muted transition-colors">
              GitHub
            </a>
            <a href="#install" className="text-sm font-bold bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hover transition-colors">
              Add to Chrome
            </a>
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
            Study YouTube Theology <br className="hidden md:block" />
            <span className="text-gradient">With Discernment</span>
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted text-balance leading-relaxed max-w-2xl mx-auto pt-2">
            Berea’s AI-powered side panel helps believers instantly verify theological claims in any YouTube video using local, offline Scripture retrieval.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex justify-center pt-8">
            <button className="bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg" alt="Chrome" className="w-6 h-6 brightness-0 invert" />
              Add to Chrome - Start Discerning Today <ArrowRight size={20} />
            </button>
          </motion.div>
        </motion.div>
        
        {/* INTERACTIVE DEMO */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <InteractiveDemo 
            videoId="dQw4w9WgXcQ" 
            claims={[
              {
                id: "c1",
                time: "1:15",
                speakerText: "The Bible says God just wants you to be wealthy and happy.",
                claim: "God's primary desire is our material wealth and happiness.",
                verdict: "misquote",
                verses: ["Matthew 6:19-21", "Luke 9:23"],
                explanation: "Jesus taught to lay up treasures in heaven, not on earth, and that following Him involves taking up a cross."
              },
              {
                id: "c2",
                time: "3:40",
                speakerText: "We must study the word daily to know if these things are true.",
                claim: "Believers should examine scriptures daily to verify teachings.",
                verdict: "aligned",
                verses: ["Acts 17:11"],
                explanation: "The Bereans were commended for receiving the word with eagerness and examining the Scriptures daily."
              }
            ]}
          />
        </motion.div>
      </section>

      {/* 2. Social Proof / Logos */}
      <section className="py-10 px-6 border-y border-line bg-surface/50">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold text-muted tracking-widest uppercase mb-8">Supported Offline Translations & Frameworks</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="font-bold text-xl flex items-center gap-2"><BookOpen size={24}/> KJV</div>
            <div className="font-bold text-xl flex items-center gap-2"><BookOpen size={24}/> WEB</div>
            <div className="font-bold text-xl flex items-center gap-2"><BookOpen size={24}/> ESV</div>
            <div className="font-bold text-xl flex items-center gap-2"><BookOpen size={24}/> NASB</div>
          </div>
        </div>
      </section>

      {/* 3. Bento Box Toolkit Grid */}
      <section id="toolkit" className="py-24 px-6 relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Your Complete Toolkit</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-ink">Everything You Need to Discern</h2>
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
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-ink">How Berea Helps You Study</h2>
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

      {/* 4.5 18-Shorts Card Fan Carousel */}
      <CardFanCarousel onSelectShort={(short) => setSelectedShort(short)} />

      {/* Sidepanel Modal Drawer */}
      <SidepanelModal short={selectedShort} onClose={() => setSelectedShort(null)} />

      {/* 5. Ultimate Transformation */}
      <section className="py-24 px-6 relative max-w-4xl mx-auto text-center">
        <Shield size={64} className="mx-auto text-primary mb-8 opacity-20" />
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Study Like the Bereans.<br/>Discern with Confidence.</h2>
        <p className="text-xl text-muted max-w-2xl mx-auto mb-10">
          Stop being a passive consumer of YouTube theology. Become an active, discerning student of the Word.
        </p>
        <button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
          Add to Chrome - It's Free
        </button>
      </section>

      {/* 6. Testimonials / Real Results (Masonry Style) */}
      <section className="py-24 px-6 bg-surface border-y border-line">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-ink">Real Believers, Real Discernment</h2>
            <p className="text-muted">See how Berea is helping Christians study the Word online.</p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Review 1 */}
            <div className="paper-card p-6 break-inside-avoid">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent-soft rounded-full flex items-center justify-center text-primary font-bold"><User size={20}/></div>
                <div>
                  <p className="font-bold text-sm">Seminary Student</p>
                  <p className="text-xs text-muted">Using Berea v0.2</p>
                </div>
              </div>
              <p className="text-ink text-sm leading-relaxed">"Finally, I can watch 2-hour theological podcasts and have all the referenced verses pulled up automatically for me. The BM25 retrieval is blazing fast."</p>
            </div>
            
            {/* Review 2 */}
            <div className="paper-card p-6 break-inside-avoid bg-primary text-white border-primary">
              <Quote className="mb-4 opacity-50" size={32} />
              <p className="text-white text-lg font-bold leading-relaxed mb-4">"Berea caught a misquoted verse I would have completely missed. Incredible tool."</p>
              <p className="text-sm opacity-80">— Bible Study Leader</p>
            </div>

            {/* Review 3 */}
            <div className="paper-card p-6 break-inside-avoid">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent-soft rounded-full flex items-center justify-center text-primary font-bold"><User size={20}/></div>
                <div>
                  <p className="font-bold text-sm">Apologetics Channel</p>
                  <p className="text-xs text-muted">10k Subscribers</p>
                </div>
              </div>
              <p className="text-ink text-sm leading-relaxed">"The way it categorizes claims into Aligned, Tension, and Misquote saves me hours of research when preparing my response videos."</p>
              <div className="mt-4 p-3 bg-surface rounded border border-line">
                <span className="text-xs font-bold text-misquote">MISQUOTE DETECTED</span>
              </div>
            </div>

            {/* Review 4 */}
            <div className="paper-card p-6 break-inside-avoid">
              <p className="text-ink text-sm leading-relaxed italic">"Now these Jews were more noble than those in Thessalonica; they received the word with all eagerness, examining the Scriptures daily to see if these things were so."</p>
              <p className="text-xs text-muted mt-4 font-bold tracking-widest uppercase">— Acts 17:11</p>
            </div>
            
             {/* Review 5 */}
             <div className="paper-card p-6 break-inside-avoid">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent-soft rounded-full flex items-center justify-center text-primary font-bold"><User size={20}/></div>
                <div>
                  <p className="font-bold text-sm">Sunday School Teacher</p>
                  <p className="text-xs text-muted">Using Berea v0.3</p>
                </div>
              </div>
              <p className="text-ink text-sm leading-relaxed">"The managed edition means I don't have to fiddle with API keys anymore. I just log in and start studying."</p>
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
            <p className="text-muted text-sm mb-6">Start discerning truth immediately.</p>
            <div className="text-4xl font-extrabold mb-8">Free<span className="text-lg font-normal text-muted"></span></div>
            
            <button className="w-full py-4 rounded-lg font-bold border-2 border-primary text-primary hover:bg-accent-soft transition-colors mb-8">
              Install Extension
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
            
            <button className="w-full py-4 rounded-lg font-bold bg-primary text-white hover:bg-primary-hover transition-colors mb-8">
              Get Unlimited Credits
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
      <section className="py-24 px-6 max-w-3xl mx-auto border-t border-line">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-ink">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            { q: "Is Berea really free to use?", a: "Berea is a freemium service. The extension is free to install and we provide free weekly credits to all users who sign in with Google to get started. You can upgrade to Berea Pro for unlimited usage." },
            { q: "Does Berea enforce a specific denomination's theology?", a: "No. Berea uses a neutral prompt architecture designed to objectively compare the speaker's claim against the text of the retrieved Scripture. It evaluates textual alignment, not denominational tradition." },
            { q: "Which Bible translations are supported?", a: "Currently, the local retrieval engine supports the World English Bible (WEB) and King James Version (KJV). The semantic embeddings are trained on these datasets for maximum accuracy." },
            { q: "Is my data private?", a: "Yes. Berea's heavy Scripture retrieval engine runs 100% locally in your browser. Only the extracted claims are sent to our secure Vercel edge proxy for AI evaluation." }
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
    </div>
  );
}
