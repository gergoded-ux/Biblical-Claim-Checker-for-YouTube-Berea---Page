"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight, Sparkles, Play } from "lucide-react";
import { ShortData, SHORTS_DATA } from "@/data/shortsData";
import { BorderRotate } from "@/components/ui/animated-gradient-border";

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
          Interactive Demo
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-ink tracking-tight">
          Test Real YouTube Sermons Against Scripture
        </h2>
        <p className="text-muted max-w-xl mx-auto text-sm md:text-base">
          Click any sermon or short below to see Berea's offline scripture retrieval and 3-part theological breakdown in action.
        </p>
      </div>

      {/* Fan Carousel Container */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative h-[500px] md:h-[560px] flex items-center justify-center my-2 pt-10"
      >
        {/* Fluorescent High-Converting Call-to-Action Badge */}
        <div className="absolute top-0 z-30 flex flex-col items-center pointer-events-none">
          <div className="bg-amber-400 text-stone-950 px-5 py-2 rounded-full font-extrabold text-xs md:text-sm tracking-wide shadow-[0_0_30px_rgba(251,191,36,0.85)] border border-amber-200 flex items-center gap-2 animate-bounce">
            <span className="text-base">⚡</span>
            <span>Click Any Video to See Berea in Action</span>
            <span className="bg-stone-950 text-amber-400 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ml-1 shadow-sm">
              Interactive
            </span>
          </div>
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-amber-400 -mt-0.5"></div>
        </div>
        {cards.map((short, idx) => {
          const isCenter = idx === activeIndex;
          
          const cardContent = (
            <div className="w-full h-full relative overflow-hidden rounded-[14px]">
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
                <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg backdrop-blur-sm transform group-hover:scale-110 transition-transform">
                  <Play size={20} className="ml-0.5 fill-white" />
                </div>
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-3 left-3 right-3 z-10 text-left space-y-1">
                <p className="text-[11px] font-bold text-red-400 uppercase tracking-wider">
                  {short.author}
                </p>
                <h3 className="text-xs font-bold text-white line-clamp-2 leading-snug drop-shadow-sm">
                  {short.title}
                </h3>
              </div>
            </div>
          );

          return (
            <div
              key={short.id}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              onClick={() => {
                onSelectShort(short);
              }}
              className={`absolute w-[240px] md:w-[280px] aspect-[9/15] rounded-2xl cursor-pointer bg-stone-900 transition-all duration-300 group ${
                isCenter ? "shadow-[0_0_40px_rgba(220,38,38,0.7)] scale-[1.02]" : "border border-line/80 shadow-xl"
              }`}
            >
              {isCenter ? (
                <BorderRotate
                  animationSpeed={1.5}
                  borderWidth={3}
                  borderRadius={16}
                  gradientColors={{
                    primary: '#7f1d1d',
                    secondary: '#dc2626',
                    accent: '#f87171'
                  }}
                  backgroundColor="#1c1917"
                  className="w-full h-full relative"
                >
                  {cardContent}
                </BorderRotate>
              ) : (
                cardContent
              )}
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
