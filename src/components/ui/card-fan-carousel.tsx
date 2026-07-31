"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight, Sparkles, Play } from "lucide-react";
import { ShortData, SHORTS_DATA } from "@/data/shortsData";

interface CardFanCarouselProps {
  cards?: ShortData[];
  onSelectShort: (short: ShortData) => void;
}

export default function CardFanCarousel({
  cards = SHORTS_DATA,
  onSelectShort,
}: CardFanCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const totalCards = cards.length;

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % totalCards);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  // Animate cards on activeIndex or hover state change
  useEffect(() => {
    if (!cardsRef.current.length) return;

    cardsRef.current.forEach((cardEl, idx) => {
      if (!cardEl) return;

      // Calculate relative position from activeIndex
      let offset = idx - activeIndex;
      
      // Handle circular wrapping
      if (offset > totalCards / 2) offset -= totalCards;
      if (offset < -totalCards / 2) offset += totalCards;

      const absOffset = Math.abs(offset);
      const isVisible = absOffset <= 4; // Display up to 4 cards on each side

      if (!isVisible) {
        gsap.to(cardEl, {
          opacity: 0,
          scale: 0.6,
          y: 50,
          duration: 0.2,
          ease: "power2.out",
          overwrite: "auto",
          pointerEvents: "none",
        });
        return;
      }

      // Fan calculations (Flatter, 35% larger radius arc)
      const spreadMultiplier = isHovered ? 1.25 : 1.0;
      const rotationAngle = offset * 2.2 * spreadMultiplier; // minimal rotation
      const xPos = offset * 145 * spreadMultiplier; // 35% wider horizontal spacing
      const yPos = Math.pow(offset, 2) * 2.5 - (offset === 0 ? 10 : 0); // very flat vertical curve
      const zIndex = 100 - absOffset * 10;
      const scale = 1 - absOffset * 0.04;
      const opacity = 1; // 100% solid opacity - NO transparency

      gsap.to(cardEl, {
        x: xPos,
        y: yPos,
        rotation: rotationAngle,
        scale: scale,
        opacity: opacity,
        zIndex: zIndex,
        duration: 0.25,
        ease: "power2.out",
        overwrite: "auto",
        pointerEvents: offset === 0 || isHovered ? "auto" : "none",
      });
    });
  }, [activeIndex, isHovered, totalCards]);

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto overflow-hidden relative">
      {/* Title Header */}
      <div className="text-center mb-12 space-y-3">
        <span className="text-xs font-bold text-primary tracking-widest uppercase bg-accent-soft px-3 py-1 rounded-full border border-line">
          Fanned Interactive Showcase
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-ink tracking-tight">
          Explore 18 YouTube Shorts in Fanned Arc
        </h2>
        <p className="text-muted max-w-xl mx-auto text-sm md:text-base">
          Hover to spread the fan, scroll or click arrows to cycle, and tap any card to launch Berea's simulated claim analysis.
        </p>
      </div>

      {/* Fan Carousel Container */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative h-[480px] md:h-[540px] flex items-center justify-center my-6"
      >
        {cards.map((short, idx) => {
          const isCenter = idx === activeIndex;
          return (
            <div
              key={short.id}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              onClick={() => {
                onSelectShort(short);
              }}
              className={`absolute w-[240px] md:w-[280px] aspect-[9/15] rounded-2xl overflow-hidden shadow-2xl border border-line/80 cursor-pointer bg-stone-900 transition-all duration-300 group ${
                isCenter ? "ring-2 ring-primary/60 shadow-primary/30 scale-[1.02]" : ""
              }`}
            >
              {/* Thumbnail Image (HD MaxRes/SD with fallback, subtle crop) */}
              <img
                src={`https://i.ytimg.com/vi/${short.id}/maxresdefault.jpg`}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.includes("maxresdefault")) {
                    target.src = `https://i.ytimg.com/vi/${short.id}/sddefault.jpg`;
                  } else if (target.src.includes("sddefault")) {
                    target.src = `https://i.ytimg.com/vi/${short.id}/hqdefault.jpg`;
                  }
                }}
                alt={short.title}
                className="w-full h-full object-cover scale-[1.08] group-hover:scale-[1.15] transition-transform duration-300 opacity-100"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              {/* Top Category Badge */}
              <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary text-white shadow-sm">
                  {short.category}
                </span>
                <span className="text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-md border border-white/10">
                  {short.claims.length} Claims
                </span>
              </div>

              {/* Subtle Hover Indicator */}
              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-lg backdrop-blur-sm transform group-hover:scale-110 transition-transform">
                  <Play size={20} className="ml-0.5 fill-white" />
                </div>
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-3 left-3 right-3 z-10 text-left space-y-1">
                <p className="text-[11px] font-bold text-primary-light uppercase tracking-wider">
                  {short.author}
                </p>
                <h3 className="text-xs font-bold text-white line-clamp-2 leading-snug drop-shadow-sm">
                  {short.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls & Pagination */}
      <div className="flex flex-col items-center justify-center gap-4 mt-6">
        {/* Navigation Arrows */}
        <div className="flex items-center gap-4">
          <button
            onClick={prevCard}
            className="w-10 h-10 rounded-full bg-surface border border-line text-ink hover:bg-accent-soft flex items-center justify-center shadow-md transition-transform active:scale-95"
            title="Previous Short"
          >
            <ChevronLeft size={20} />
          </button>
          
          <span className="text-xs font-bold text-muted tracking-wider">
            {activeIndex + 1} / {totalCards}
          </span>

          <button
            onClick={nextCard}
            className="w-10 h-10 rounded-full bg-surface border border-line text-ink hover:bg-accent-soft flex items-center justify-center shadow-md transition-transform active:scale-95"
            title="Next Short"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Circular / Dot Pagination */}
        <div className="flex gap-1.5 overflow-x-auto max-w-full px-4 py-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 bg-primary"
                  : "w-2 bg-line hover:bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
