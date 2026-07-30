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
    <div className="relative overflow-hidden font-sans text-ink selection:bg-accent-soft selection:text-primary">
      {/* Navbar */}
      <nav className="fixed top-0 w-full paper-card border-x-0 border-t-0 rounded-none z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-ink">
            <BookOpen className="text-primary" />
            <span>Berea<span className="text-primary font-normal">™</span></span>
          </div>
          <div className="flex gap-4">
            <a href="#what" className="text-sm font-semibold hover:text-primary text-muted transition-colors hidden md:block">How it Works</a>
            <a href="#why" className="text-sm font-semibold hover:text-primary text-muted transition-colors hidden md:block">Why Berea</a>
            <a href="https://github.com/gergoded-ux/BEREA" target="_blank" rel="noreferrer" className="text-sm font-semibold hover:text-primary text-muted transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-6xl mx-auto text-center relative">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-accent-soft blur-[100px] rounded-full pointer-events-none -z-10" />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl mx-auto space-y-8"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-line bg-surface text-primary text-sm font-bold tracking-wide shadow-sm mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            v0.3 MANAGED EDITION
          </motion.div>
          
          <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tight text-balance text-ink">
            Examine the Scriptures <span className="text-gradient">Daily.</span>
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted text-balance leading-relaxed">
            Biblical Claim Checker for YouTube — Berea™ is an intelligent Chrome extension acting as your study companion. It extracts theological claims from teachings, retrieves relevant Scripture offline, and helps you discern the truth.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-bold transition-all flex items-center gap-2 shadow-md">
              <Download size={20} />
              Install Extension
            </button>
            <a href="#what" className="px-8 py-4 rounded-lg font-bold border border-line bg-surface text-ink hover:bg-accent-soft transition-colors shadow-sm">
              See How it Works
            </a>
          </motion.div>
        </motion.div>

        {/* Mockup / Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 relative mx-auto max-w-5xl paper-card aspect-video rounded-xl overflow-hidden border border-line flex items-center justify-center bg-surface"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_99%,#e7e3da_100%),linear-gradient(to_bottom,transparent_99%,#e7e3da_100%)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
          <div className="text-center space-y-4 z-10">
            <BookOpen size={48} className="mx-auto text-primary opacity-80" />
            <p className="text-ink font-semibold tracking-wide">Acts 17:11</p>
          </div>
        </motion.div>
      </section>

      {/* How it works (What) */}
      <section id="what" className="py-24 px-6 relative border-t border-line bg-surface/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ink">The Discernment Process</h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">Four scholarly steps to scriptural discernment, executed instantly.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: "1. Transcribe", desc: "Instantly reads the YouTube video transcript as you watch." },
              { icon: Search, title: "2. Extract", desc: "Identifies checkable theological claims and timestamps them." },
              { icon: BookOpen, title: "3. Retrieve", desc: "Finds relevant Scripture using 100% offline BM25 and semantic search." },
              { icon: CheckCircle2, title: "4. Discern", desc: "Compares claims against Scripture, providing a structured, neutral report." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="paper-card p-8 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity text-primary">
                  <step.icon size={100} />
                </div>
                <div className="h-12 w-12 bg-accent-soft rounded-lg flex items-center justify-center mb-6 border border-line">
                  <step.icon className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-ink">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Berea */}
      <section id="why" className="py-24 px-6 border-y border-line bg-surface">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-ink">Built for Truth. <br/>Designed for Privacy.</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Shield className="text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-ink">100% Offline Retrieval</h4>
                  <p className="text-muted text-sm mt-1">Your Scripture database lives entirely in your browser. No external API calls for Bible verses. Fast, private, and self-contained.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Zap className="text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-ink">Fully Managed Service</h4>
                  <p className="text-muted text-sm mt-1">No API keys to configure. Sign in with Google directly in the panel and your weekly credits cover everything. We handle the AI proxies.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MessageSquare className="text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-ink">Neutral / Berean Lens</h4>
                  <p className="text-muted text-sm mt-1">Berea doesn't enforce a specific denomination's doctrine. It compares the speaker's claims against the retrieved text objectively.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="paper-card p-8 space-y-6 bg-accent-soft/30"
          >
            <h3 className="text-xl font-bold text-center text-ink border-b border-line pb-4">Exportable Reports</h3>
            <div className="space-y-4 pt-2">
              {[
                { verdict: "ALIGNED", color: "var(--color-aligned)", text: "Speaker accurately cited John 1:1." },
                { verdict: "TENSION", color: "var(--color-tension)", text: "Claim stretches the context of Jeremiah 29:11." },
                { verdict: "MISQUOTE", color: "var(--color-misquote)", text: "Direct distortion of the text found in Romans 8." }
              ].map((item, i) => (
                <div key={i} className="bg-surface p-4 rounded-lg border border-line shadow-sm">
                  <div className="text-xs font-bold tracking-wider mb-2" style={{ color: item.color }}>
                    {item.verdict}
                  </div>
                  <p className="text-sm text-ink">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-muted pt-4 font-medium">Export findings to Markdown or CSV for your study notes.</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-ink">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            { q: "What is Berea?", a: "Berea is an AI-powered Chrome extension that helps you verify biblical claims made in YouTube videos. It acts as an interactive study companion inspired by Acts 17:11." },
            { q: "Do I need to provide my own API keys?", a: "Not anymore. With v0.3, Berea is a fully managed service. You just sign in with Google, and we provide weekly credits that cover all AI processing." },
            { q: "Is my data private?", a: "Yes. Berea's heavy Scripture retrieval engine runs 100% locally in your browser. Only the extracted claims are sent to our secure Vercel proxy for AI evaluation." },
            { q: "Which Bible translations are supported?", a: "Currently, the local retrieval engine supports WEB (World English Bible) and KJV. The semantic embeddings are trained on these robust datasets." }
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
