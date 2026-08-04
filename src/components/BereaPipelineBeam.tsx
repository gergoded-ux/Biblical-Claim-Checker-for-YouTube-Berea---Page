"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Video, FileText, Brain, BookOpen, CheckCircle2, ClipboardList } from "lucide-react";

const PipelineNode = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; label?: string; sublabel?: string }
>(({ className, children, label, sublabel }, ref) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-14 md:size-16 items-center justify-center rounded-2xl border-2 border-line bg-surface p-3 shadow-[0_0_24px_-8px_rgba(107,63,31,0.15)] transition-all hover:shadow-[0_0_32px_-4px_rgba(107,63,31,0.25)] hover:scale-110",
          className,
        )}
      >
        {children}
      </div>
      {label && (
        <div className="text-center">
          <p className="text-xs md:text-sm font-bold text-ink leading-tight">{label}</p>
          {sublabel && <p className="text-[10px] md:text-xs text-muted leading-tight mt-0.5">{sublabel}</p>}
        </div>
      )}
    </div>
  );
});

PipelineNode.displayName = "PipelineNode";

export function BereaPipelineBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const youtubeRef = useRef<HTMLDivElement>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const claimRef = useRef<HTMLDivElement>(null);
  const bm25Ref = useRef<HTMLDivElement>(null);
  const verdictRef = useRef<HTMLDivElement>(null);
  const reportRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-line bg-surface/80 p-8 md:p-12 lg:p-16"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-2xl items-stretch justify-between gap-12 md:gap-16">
        
        {/* Row 1: YouTube → Transcript Extraction → AI Claim Extraction */}
        <div className="flex flex-row items-start justify-between">
          <PipelineNode ref={youtubeRef} label="YouTube Video" sublabel="Any video or short" className="border-red-400/50 bg-red-50">
            <Video className="text-red-600" size={28} />
          </PipelineNode>
          <PipelineNode ref={transcriptRef} label="Transcript" sublabel="Auto-extracted" className="border-primary/30 bg-accent-soft/50">
            <FileText className="text-primary" size={28} />
          </PipelineNode>
          <PipelineNode ref={claimRef} label="Claim Extraction" sublabel="AI-powered" className="border-purple-400/50 bg-purple-50">
            <Brain className="text-purple-600" size={28} />
          </PipelineNode>
        </div>

        {/* Row 2: Scripture DB (center hub) */}
        <div className="flex flex-row items-start justify-center">
          <PipelineNode ref={bm25Ref} label="Scripture Retrieval" sublabel="Instant Bible Index" className="size-18 md:size-20 border-primary bg-accent-soft shadow-[0_0_40px_-8px_rgba(107,63,31,0.3)]">
            <BookOpen className="text-primary" size={32} />
          </PipelineNode>
        </div>

        {/* Row 3: Verdict Engine → Structured Report */}
        <div className="flex flex-row items-start justify-between">
          <PipelineNode ref={verdictRef} label="Verdict Engine" sublabel="AI comparison" className="border-amber-400/50 bg-amber-50">
            <CheckCircle2 className="text-amber-600" size={28} />
          </PipelineNode>
          <PipelineNode ref={reportRef} label="Claim Report" sublabel="Aligned · Tension · Misquote" className="border-emerald-400/50 bg-emerald-50">
            <ClipboardList className="text-emerald-600" size={28} />
          </PipelineNode>
        </div>
      </div>

      {/* Animated Beams — Berea Pipeline Flow */}
      {/* YouTube → Transcript */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={youtubeRef}
        toRef={transcriptRef}
        gradientStartColor="#6b3f1f"
        gradientStopColor="#c2410c"
        duration={4}
      />
      {/* Transcript → Claim Extraction */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={transcriptRef}
        toRef={claimRef}
        gradientStartColor="#c2410c"
        gradientStopColor="#7c3aed"
        duration={4}
        delay={0.5}
      />
      {/* Claim Extraction → BM25 Scripture DB */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={claimRef}
        toRef={bm25Ref}
        curvature={-40}
        reverse
        gradientStartColor="#7c3aed"
        gradientStopColor="#6b3f1f"
        duration={5}
        delay={1}
      />
      {/* BM25 → Verdict Engine */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={bm25Ref}
        toRef={verdictRef}
        curvature={40}
        reverse
        gradientStartColor="#6b3f1f"
        gradientStopColor="#d97706"
        duration={5}
        delay={1.5}
      />
      {/* Verdict Engine → Report */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={verdictRef}
        toRef={reportRef}
        gradientStartColor="#d97706"
        gradientStopColor="#059669"
        duration={4}
        delay={2}
      />
      {/* Reverse beam: Report → YouTube (feedback loop) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={reportRef}
        toRef={youtubeRef}
        curvature={-120}
        reverse
        gradientStartColor="#059669"
        gradientStopColor="#6b3f1f"
        pathOpacity={0.1}
        duration={7}
        delay={3}
      />
    </div>
  );
}
