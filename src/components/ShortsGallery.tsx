"use client";

import { motion } from "framer-motion";
import { Play, Sparkles, CheckCircle2, AlertTriangle, XCircle, Search } from "lucide-react";
import { ShortData, SHORTS_DATA } from "@/data/shortsData";

interface ShortsGalleryProps {
  onSelectShort: (short: ShortData) => void;
}

export default function ShortsGallery({ onSelectShort }: ShortsGalleryProps) {
  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case "Apologetics": return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "Polemics": return "bg-red-500/10 text-red-600 border-red-500/20";
      case "Exposé": return "bg-amber-500/10 text-amber-600 border-amber-500/20";
      case "Theology": return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
      default: return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <span className="text-xs font-bold text-primary tracking-widest uppercase bg-accent-soft px-3 py-1 rounded-full border border-line">
          Live Interactive Showcase
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-ink tracking-tight">
          Test Berea on 18 Real YouTube Shorts
        </h2>
        <p className="text-muted max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Click any video below to trigger Berea's simulated offline transcript extraction and scripture verification engine in real-time.
        </p>
      </div>

      {/* Masonry / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {SHORTS_DATA.map((short, idx) => (
          <motion.div
            key={short.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (idx % 4) * 0.1, duration: 0.4 }}
            className="group relative paper-card rounded-xl overflow-hidden flex flex-col hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            onClick={() => onSelectShort(short)}
          >
            {/* Video Thumbnail Container */}
            <div className="relative aspect-[9/14] w-full bg-black overflow-hidden">
              <img
                src={`https://img.youtube.com/vi/${short.id}/hqdefault.jpg`}
                alt={short.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Author & Category Badge */}
              <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border backdrop-blur-md ${getCategoryBadgeColor(short.category)}`}>
                  {short.category}
                </span>
                <span className="text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-md">
                  {short.claims.length} Claims
                </span>
              </div>

              {/* Play / Analyze Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="bg-primary hover:bg-primary-hover text-white font-bold text-xs px-4 py-2.5 rounded-full flex items-center gap-2 shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/20">
                  <Sparkles size={15} />
                  <span>Analyze with Berea</span>
                </div>
              </div>

              {/* Bottom Video Title */}
              <div className="absolute bottom-3 left-3 right-3 z-10 space-y-1">
                <p className="text-xs font-bold text-primary-light uppercase tracking-wider">{short.author}</p>
                <h3 className="text-sm font-bold text-white line-clamp-2 leading-tight drop-shadow-sm">
                  {short.title}
                </h3>
              </div>
            </div>

            {/* Card Footer: Verdict Summary */}
            <div className="p-3 bg-surface border-t border-line flex items-center justify-between text-xs text-muted">
              <span className="text-[11px] font-semibold text-ink">Theological Audit</span>
              <div className="flex gap-1">
                {short.claims.map((c, i) => (
                  <span
                    key={i}
                    className={`text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded ${
                      c.verdict === "aligned"
                        ? "bg-[#2d6a4f]/10 text-[#2d6a4f]"
                        : c.verdict === "misquote"
                        ? "bg-[#b91c1c]/10 text-[#b91c1c]"
                        : "bg-[#c2410c]/10 text-[#c2410c]"
                    }`}
                  >
                    {c.verdict.slice(0, 3)}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
