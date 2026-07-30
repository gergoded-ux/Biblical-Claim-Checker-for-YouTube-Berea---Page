"use client";

import { motion } from "framer-motion";
import { BookOpen, Search, Shield, Zap, FileText, CheckCircle2, ChevronDown, Download, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full glass-card border-x-0 border-t-0 rounded-none z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <BookOpen className="text-primary" />
            <span>Berea<span className="text-primary font-normal">™</span></span>
          </div>
          <div className="flex gap-4">
            <a href="#what" className="text-sm font-medium hover:text-white text-gray-300 transition-colors hidden md:block">How it Works</a>
            <a href="#why" className="text-sm font-medium hover:text-white text-gray-300 transition-colors hidden md:block">Why Berea</a>
            <a href="https://github.com/gergoded-ux/BEREA" target="_blank" rel="noreferrer" className="text-sm font-medium hover:text-white text-gray-300 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-6xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl mx-auto space-y-8"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            v0.3 Managed Edition Available
          </motion.div>
          
          <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Examine the Scriptures <span className="text-gradient">Daily.</span>
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-400 text-balance leading-relaxed">
            Biblical Claim Checker for YouTube — Berea™ is an AI-powered Chrome extension that runs alongside any YouTube teaching. It extracts theological claims, retrieves relevant Scripture offline, and helps you discern the truth.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.4)]">
              <Download size={20} />
              Install Extension
            </button>
            <a href="#what" className="px-8 py-4 rounded-xl font-semibold border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.05)] transition-colors">
              See How it Works
            </a>
          </motion.div>
        </motion.div>

        {/* Mockup / Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 relative mx-auto max-w-5xl glass-card aspect-video rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-2xl flex items-center justify-center bg-[#0a0a0a]"
        >
          {/* Placeholder for video/screenshot */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
          <div className="text-center space-y-4">
            <BookOpen size={48} className="mx-auto text-primary/50" />
            <p className="text-gray-500 font-medium">Berea Side Panel UI Preview</p>
          </div>
        </motion.div>
      </section>

      {/* How it works (What) */}
      <section id="what" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How Berea Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Four steps to scriptural discernment, directly in your browser.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: "1. Scrape", desc: "Instantly reads the YouTube video transcript as you watch." },
              { icon: Search, title: "2. Extract", desc: "Identifies checkable theological claims and timestamps them." },
              { icon: BookOpen, title: "3. Retrieve", desc: "Finds relevant Scripture using 100% offline hybrid search (BM25 + semantic)." },
              { icon: CheckCircle2, title: "4. Discern", desc: "Compares claims against Scripture using AI, providing a structured report." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="glass-card p-8 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <step.icon size={100} />
                </div>
                <div className="h-12 w-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 border border-primary/30">
                  <step.icon className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Berea */}
      <section id="why" className="py-24 px-6 bg-black/40 border-y border-[rgba(255,255,255,0.05)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold">Built for Truth, Designed for Privacy.</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Shield className="text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">100% Offline Retrieval</h4>
                  <p className="text-gray-400 text-sm mt-1">Your Scripture database lives entirely in your browser. No external API calls for Bible verses. Fast, private, and self-contained.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Zap className="text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Fully Managed Service</h4>
                  <p className="text-gray-400 text-sm mt-1">No API keys to configure. Sign in with Google directly in the panel and your weekly credits cover everything. We handle the AI proxies.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MessageSquare className="text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Neutral / Berean Lens</h4>
                  <p className="text-gray-400 text-sm mt-1">Berea doesn't enforce a specific denomination's doctrine. It compares the speaker's claims against the retrieved text, providing an objective analysis.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 space-y-6 bg-gradient-to-b from-[rgba(30,33,48,0.7)] to-transparent"
          >
            <h3 className="text-xl font-bold text-center">Exportable Reports</h3>
            <div className="space-y-4">
              {[
                { verdict: "ALIGNED", text: "Speaker accurately cited John 1:1." },
                { verdict: "TENSION", text: "Claim stretches the context of Jeremiah 29:11." },
                { verdict: "UNSUPPORTED", text: "No biblical basis found for the financial claim." }
              ].map((item, i) => (
                <div key={i} className="bg-black/50 p-4 rounded-lg border border-[rgba(255,255,255,0.05)]">
                  <div className="text-xs font-bold tracking-wider mb-2" style={{ color: item.verdict === 'ALIGNED' ? '#4ade80' : item.verdict === 'TENSION' ? '#fbbf24' : '#f87171' }}>
                    {item.verdict}
                  </div>
                  <p className="text-sm text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-gray-500 pt-4">Export findings to Markdown or CSV for your own study notes.</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            { q: "What is Berea?", a: "Berea is an AI-powered Chrome extension that helps you verify biblical claims made in YouTube videos. It acts as an interactive study companion inspired by Acts 17:11." },
            { q: "Do I need to provide my own API keys?", a: "Not anymore. With v0.3, Berea is a fully managed service. You just sign in with Google, and we provide weekly credits that cover all AI processing." },
            { q: "Is my data private?", a: "Yes. Berea's heavy Scripture retrieval engine runs 100% locally in your browser. Only the extracted claims are sent to our secure Vercel proxy for AI evaluation." },
            { q: "Which Bible translations are supported?", a: "Currently, the local retrieval engine supports WEB (World English Bible) and KJV. The semantic embeddings are trained on these robust datasets." }
          ].map((faq, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full text-left p-6 font-semibold flex justify-between items-center hover:bg-[rgba(255,255,255,0.02)] transition-colors"
              >
                {faq.q}
                <ChevronDown className={`transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {activeFaq === i && (
                <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-[rgba(255,255,255,0.05)] mt-2">
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
