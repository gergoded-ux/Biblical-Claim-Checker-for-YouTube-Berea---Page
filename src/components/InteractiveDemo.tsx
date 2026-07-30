"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, CheckCircle2, AlertTriangle, XCircle, Search, FileText, Loader2, Maximize2 } from "lucide-react";

export type ClaimVerdict = "aligned" | "tension" | "misquote" | "unsupported";

export interface DemoClaim {
  id: string;
  time: string;
  speakerText: string;
  claim: string;
  verdict: ClaimVerdict;
  verses: string[];
  explanation: string;
}

export interface InteractiveDemoProps {
  videoId: string; // e.g., "dQw4w9WgXcQ"
  claims: DemoClaim[];
}

export default function InteractiveDemo({ videoId, claims }: InteractiveDemoProps) {
  const [step, setStep] = useState<"idle" | "extracting" | "retrieving" | "done">("idle");
  const [progress, setProgress] = useState(0);

  const startSimulation = () => {
    setStep("extracting");
    setProgress(0);

    // Simulate extraction progress
    const extractionInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(extractionInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    // Transition to retrieving
    setTimeout(() => {
      setStep("retrieving");
      setProgress(0);
      
      const retrievalInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(retrievalInterval);
            return 100;
          }
          return prev + 10;
        });
      }, 100);
      
      // Transition to done
      setTimeout(() => {
        setStep("done");
      }, 1500);

    }, 2500);
  };

  const getVerdictColor = (verdict: ClaimVerdict) => {
    switch (verdict) {
      case "aligned": return "bg-[#2d6a4f]/10 text-[#2d6a4f] border-[#2d6a4f]/20";
      case "tension": return "bg-[#c2410c]/10 text-[#c2410c] border-[#c2410c]/20";
      case "misquote": return "bg-[#b91c1c]/10 text-[#b91c1c] border-[#b91c1c]/20";
      case "unsupported": return "bg-ink/10 text-ink border-ink/20";
    }
  };

  const getVerdictIcon = (verdict: ClaimVerdict) => {
    switch (verdict) {
      case "aligned": return <CheckCircle2 size={16} className="text-[#2d6a4f]" />;
      case "tension": return <AlertTriangle size={16} className="text-[#c2410c]" />;
      case "misquote": return <XCircle size={16} className="text-[#b91c1c]" />;
      case "unsupported": return <FileText size={16} className="text-ink" />;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto paper-card rounded-2xl overflow-hidden shadow-2xl border-line flex flex-col md:flex-row h-[600px] mt-16 relative">
      
      {/* Left side: YouTube Player Simulator */}
      <div className="flex-1 bg-black relative flex flex-col">
        <iframe 
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&modestbranding=1`} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      {/* Right side: Extension Simulator */}
      <div className="w-full md:w-[400px] bg-surface border-l border-line flex flex-col h-full overflow-hidden relative">
        {/* Extension Header */}
        <div className="h-14 border-b border-line flex items-center px-4 bg-[#faf8f3]">
          <img src="/Biblical-Claim-Checker-for-YouTube-Berea---Page/logo.png" alt="Berea" className="w-6 h-6 rounded mr-2" />
          <div className="flex flex-col">
             <span className="text-xs font-bold text-ink leading-tight">Biblical Claim Checker</span>
             <span className="text-[10px] text-muted leading-tight">Berea™</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col">
          
          <AnimatePresence mode="wait">
            
            {/* IDLE STATE */}
            {step === "idle" && (
              <motion.div 
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center h-full text-center space-y-4"
              >
                <div className="w-16 h-16 bg-accent-soft rounded-full flex items-center justify-center mb-2">
                  <Play className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg text-ink">Ready to Analyze</h3>
                <p className="text-sm text-muted max-w-[250px]">
                  Click below to extract the transcript and verify theological claims offline.
                </p>
                <button 
                  onClick={startSimulation}
                  className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-hover transition-colors mt-4 shadow-sm"
                >
                  Extract Claims
                </button>
              </motion.div>
            )}

            {/* EXTRACTING STATE */}
            {step === "extracting" && (
              <motion.div 
                key="extracting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center h-full text-center space-y-6"
              >
                <Loader2 className="text-primary animate-spin" size={48} />
                <div>
                  <h3 className="font-bold text-lg text-ink mb-1">Extracting Transcript</h3>
                  <p className="text-sm text-muted">Reading video captions...</p>
                </div>
                <div className="w-full bg-line rounded-full h-2 overflow-hidden">
                  <div className="bg-primary h-full transition-all duration-100" style={{ width: `${progress}%` }}></div>
                </div>
              </motion.div>
            )}

            {/* RETRIEVING STATE */}
            {step === "retrieving" && (
              <motion.div 
                key="retrieving"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center h-full text-center space-y-6"
              >
                <Search className="text-primary animate-pulse" size={48} />
                <div>
                  <h3 className="font-bold text-lg text-ink mb-1">Retrieving Scripture</h3>
                  <p className="text-sm text-muted">Running offline BM25 search...</p>
                </div>
                <div className="w-full bg-line rounded-full h-2 overflow-hidden">
                  <div className="bg-primary h-full transition-all duration-100" style={{ width: `${progress}%` }}></div>
                </div>
              </motion.div>
            )}

            {/* DONE STATE */}
            {step === "done" && (
              <motion.div 
                key="done"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col space-y-4"
              >
                <div className="flex items-center justify-between pb-2 border-b border-line">
                  <span className="text-xs font-bold text-muted uppercase tracking-wider">{claims.length} Claims Found</span>
                  <button onClick={() => setStep("idle")} className="text-xs text-primary hover:underline">Reset</button>
                </div>
                
                <div className="flex flex-col gap-4">
                  {claims.map((claim, idx) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.15 }}
                      key={claim.id} 
                      className="bg-white border border-line rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border flex items-center gap-1 uppercase tracking-wide ${getVerdictColor(claim.verdict)}`}>
                          {getVerdictIcon(claim.verdict)}
                          {claim.verdict}
                        </span>
                        <span className="text-xs font-semibold text-primary bg-accent-soft px-2 rounded cursor-pointer">{claim.time}</span>
                      </div>
                      
                      <p className="text-sm font-bold text-ink mb-2 leading-snug">"{claim.claim}"</p>
                      
                      <div className="bg-[#faf8f3] border border-line rounded p-2 mb-2">
                        <span className="text-[10px] uppercase font-bold text-muted block mb-1">What the Bible says</span>
                        <p className="text-xs text-ink">{claim.explanation}</p>
                      </div>

                      <div className="flex gap-1 flex-wrap">
                        {claim.verses.map(v => (
                          <span key={v} className="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">{v}</span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            )}

          </AnimatePresence>

        </div>
      </div>

    </div>
  );
}
