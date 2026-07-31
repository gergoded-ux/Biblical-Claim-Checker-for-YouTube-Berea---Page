"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, AlertTriangle, XCircle, FileText, Search, Loader2, Play, Sparkles, Share2, Download, User } from "lucide-react";
import { ShortData, ClaimVerdict } from "@/data/shortsData";

interface SidepanelModalProps {
  short: ShortData | null;
  onClose: () => void;
}

export default function SidepanelModal({ short, onClose }: SidepanelModalProps) {
  const [phase, setPhase] = useState<"extracting" | "retrieving" | "done">("extracting");
  const [progress, setProgress] = useState(0);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    if (!short) return;
    
    // Reset state on open
    setPhase("extracting");
    setProgress(0);

    const extInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(extInterval);
          return 100;
        }
        return p + 10;
      });
    }, 80);

    const timer1 = setTimeout(() => {
      setPhase("retrieving");
      setProgress(0);
      const retInterval = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            clearInterval(retInterval);
            return 100;
          }
          return p + 20;
        });
      }, 70);
    }, 1000);

    const timer2 = setTimeout(() => {
      setPhase("done");
    }, 1800);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, [short]);

  if (!short) return null;

  const getVerdictBadge = (verdict: ClaimVerdict) => {
    switch (verdict) {
      case "aligned":
        return <span className="text-[10px] font-bold px-2 py-0.5 rounded border bg-[#2d6a4f]/10 text-[#2d6a4f] border-[#2d6a4f]/20 uppercase">ALIGNED</span>;
      case "tension":
        return <span className="text-[10px] font-bold px-2 py-0.5 rounded border bg-[#c2410c]/10 text-[#c2410c] border-[#c2410c]/20 uppercase">TENSION</span>;
      case "misquote":
        return <span className="text-[10px] font-bold px-2 py-0.5 rounded border bg-[#b91c1c]/10 text-[#b91c1c] border-[#b91c1c]/20 uppercase">MISQUOTE</span>;
      case "partially_aligned":
        return <span className="text-[10px] font-bold px-2 py-0.5 rounded border bg-[#d97706]/10 text-[#d97706] border-[#d97706]/20 uppercase">PARTIAL</span>;
      case "unsupported":
        return <span className="text-[10px] font-bold px-2 py-0.5 rounded border bg-ink/10 text-ink border-ink/20 uppercase">UNSUPPORTED</span>;
    }
  };

  const filteredClaims = short.claims.filter((c) => {
    if (filter === "all") return true;
    return c.verdict === filter;
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-3 md:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-5xl bg-[#faf8f3] rounded-2xl shadow-2xl border border-line overflow-hidden flex flex-col md:flex-row h-[90vh] max-h-[750px]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-30 w-9 h-9 bg-black/60 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors"
            title="Close modal"
          >
            <X size={18} />
          </button>

          {/* Left Side: Embedded Shorts Player */}
          <div className="flex-1 bg-black flex items-center justify-center relative min-h-[300px] md:min-h-full">
            <iframe
              className="w-full h-full max-w-[420px] aspect-[9/16]"
              src={`https://www.youtube.com/embed/${short.id}?autoplay=1&rel=0&modestbranding=1`}
              title={short.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Right Side: Extension Sidepanel Replica */}
          <div className="w-full md:w-[450px] bg-[#faf8f3] border-t md:border-t-0 md:border-l border-line flex flex-col h-full overflow-hidden text-ink font-sans">
            
            {/* Topbar */}
            <div className="p-3 border-b border-line bg-surface flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="/Biblical-Claim-Checker-for-YouTube-Berea---Page/logo.png" alt="Berea" className="w-6 h-6 rounded shadow-sm" />
                <div>
                  <h3 className="text-xs font-bold leading-tight">Biblical Claim Checker for YouTube</h3>
                  <p className="text-[10px] text-muted">Berea™ — Acts 17:11</p>
                </div>
              </div>
            </div>

            {/* Auth Bar */}
            <div className="bg-accent-soft/40 px-3 py-2 border-b border-line text-xs flex items-center justify-between text-muted">
              <div className="flex items-center gap-1.5">
                <User size={13} className="text-primary" />
                <span className="font-semibold text-ink">user@berea.app</span>
              </div>
              <span className="font-bold text-primary bg-primary/10 px-2 py-0.5 rounded text-[11px]">8 credits</span>
            </div>

            {/* Main Sidepanel Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              
              {/* Video Info Header */}
              <div className="bg-surface p-3 rounded-lg border border-line shadow-2xs">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{short.author}</span>
                <h4 className="text-xs font-bold text-ink line-clamp-2 mt-0.5">{short.title}</h4>
              </div>

              {/* SIMULATION STATES */}
              {phase === "extracting" && (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <Loader2 className="animate-spin text-primary" size={36} />
                  <div>
                    <h4 className="font-bold text-sm text-ink">Extracting Claims</h4>
                    <p className="text-xs text-muted mt-1">Reading transcript & detecting theological statements...</p>
                  </div>
                  <div className="w-48 bg-line h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full transition-all duration-75" style={{ width: `${progress}%` }}></div>
                  </div>
                </div>
              )}

              {phase === "retrieving" && (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <Search className="animate-pulse text-primary" size={36} />
                  <div>
                    <h4 className="font-bold text-sm text-ink">Offline Scripture Retrieval</h4>
                    <p className="text-xs text-muted mt-1">Searching WEB + KJV Bible database (BM25 search)...</p>
                  </div>
                  <div className="w-48 bg-line h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full transition-all duration-75" style={{ width: `${progress}%` }}></div>
                  </div>
                </div>
              )}

              {phase === "done" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                  
                  {/* Summary Bar */}
                  <div className="flex items-center justify-between border-b border-line pb-2">
                    <span className="text-xs font-bold text-muted uppercase tracking-wider">
                      {short.claims.length} Claims Verified
                    </span>
                    <div className="flex gap-2">
                      <button className="text-[11px] font-semibold text-primary border border-line bg-surface hover:bg-accent-soft px-2 py-0.5 rounded transition-colors flex items-center gap-1">
                        <Download size={11} /> Export Markdown
                      </button>
                    </div>
                  </div>

                  {/* Filter Chips */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                    {["all", "aligned", "tension", "misquote", "partially_aligned"].map((f) => (
                      <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`text-[10px] font-bold px-2 py-0.5 rounded capitalize whitespace-nowrap transition-colors ${
                          filter === f
                            ? "bg-primary text-white"
                            : "bg-surface border border-line text-muted hover:text-ink"
                        }`}
                      >
                        {f === "all" ? "All" : f.replace("_", " ")}
                      </button>
                    ))}
                  </div>

                  {/* Claims List */}
                  <div className="space-y-3">
                    {filteredClaims.map((claim) => (
                      <div key={claim.id} className="bg-surface border border-line rounded-lg p-3 space-y-2 shadow-2xs">
                        <div className="flex items-center justify-between">
                          {getVerdictBadge(claim.verdict)}
                          <span className="text-[10px] font-bold text-primary bg-accent-soft px-1.5 py-0.5 rounded">
                            {claim.time}
                          </span>
                        </div>

                        <div>
                          <span className="text-[10px] uppercase font-bold text-muted block mb-0.5">Claim</span>
                          <p className="text-xs font-bold text-ink leading-snug">{claim.claim}</p>
                        </div>

                        <div className="bg-[#faf8f3] p-2 rounded border border-line/60">
                          <span className="text-[10px] uppercase font-bold text-muted block mb-0.5">What the Bible says</span>
                          <p className="text-xs text-ink leading-relaxed">{claim.explanation}</p>
                        </div>

                        <div className="flex flex-wrap gap-1 pt-1">
                          {claim.verses.map((v) => (
                            <span key={v} className="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                              {v}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                </motion.div>
              )}

            </div>

            {/* Sidepanel Footer */}
            <div className="p-3 border-t border-line bg-surface text-center text-[10px] text-muted">
              Powered by Berea™ Hybrid BM25 Engine · 100% Offline Scripture Search
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
