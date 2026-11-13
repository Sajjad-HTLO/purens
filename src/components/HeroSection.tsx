import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { HERO_CONTENT } from '../data/botanicalData';
import { PurensSprigMark } from './BotanicalIllustrations';
import { ResilientImage } from './ResilientImage';

export const HeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('aromatherapy');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      aria-label="PURENS — The Origin of Nature"
      className="relative w-full min-h-[86vh] lg:min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#302D25]"
    >
      {/* Full-Bleed Botanical Harvest Photography with Gentle Compositor Settle */}
      <motion.div
        initial={prefersReducedMotion ? false : { scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full"
      >
        <ResilientImage
          src={HERO_CONTENT.image}
          alt={HERO_CONTENT.imageAlt}
          fallbackTitle="Provençal Wild Lavender Harvest at First Light"
          eager={true}
          containerClassName="relative w-full h-full overflow-hidden bg-[#302D25]"
          className="w-full h-full object-cover object-[62%_center] sm:object-center"
        />
      </motion.div>

      {/* Measured Contrast Scrims Preserving Golden-Hour Harvester Details on Right */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#1D1B16]/85 via-[#1D1B16]/52 to-[#1D1B16]/10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#1D1B16]/80 via-transparent to-[#1D1B16]/35 pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Spacer for Fixed Header */}
      <div className="h-20 shrink-0" aria-hidden="true" />

      {/* Main Editorial Hero Content Positioned in Calm Negative Space */}
      <div className="relative z-10 max-w-[1360px] w-full mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl lg:max-w-2xl"
        >
          {/* Subtle Brand Origin Kicker */}
          <div className="inline-flex items-center gap-3 text-[#EDE3D3]/90 mb-5">
            <PurensSprigMark className="w-4 h-4 text-[#EDE3D3]" />
            <span className="text-xs tracking-[0.32em] uppercase font-medium">
              {HERO_CONTENT.brand}
            </span>
            <span className="h-px w-10 bg-[#EDE3D3]/45" aria-hidden="true" />
            <span className="font-serif italic text-sm tracking-normal text-[#EDE3D3]/85">
              Maison Botanique
            </span>
          </div>

          {/* Primary Display Serif Headline */}
          <h1 className="font-serif font-normal text-4xl sm:text-6xl lg:text-[4.35rem] leading-[1.06] tracking-[0.01em] text-[#F6F0E6] text-balance">
            {HERO_CONTENT.tagline}
          </h1>

          {/* Lead Narrative */}
          <p className="mt-6 text-base sm:text-lg leading-[1.7] text-[#EDE3D3]/92 max-w-[46ch] font-normal">
            {HERO_CONTENT.subtitle}
          </p>

          {/* Minimal Editorial CTA */}
          <div className="mt-9 sm:mt-11">
            <a
              href="#aromatherapy"
              onClick={handleExploreClick}
              className="group inline-flex items-center gap-3.5 px-6 py-3.5 bg-[#F6F0E6]/95 text-[#302D25] border border-[#F6F0E6] text-xs tracking-[0.2em] uppercase font-medium whitespace-nowrap transition-colors duration-150 hover:bg-transparent hover:text-[#F6F0E6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F6F0E6]"
            >
              <span>{HERO_CONTENT.ctaLabel}</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Quiet Unboxed Botanical Origin Strip Along Hero Base */}
      <div className="relative z-10 border-t border-[#F6F0E6]/15 bg-[#1D1B16]/35 backdrop-blur-[2px]">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 py-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-[#EDE3D3]/80">
          <span className="font-serif italic text-sm text-[#F6F0E6]/90">
            Harvested by hand at first morning light
          </span>
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] tracking-[0.16em] uppercase">
            {HERO_CONTENT.provenanceLocations.map((loc, idx) => (
              <React.Fragment key={loc}>
                {idx > 0 && (
                  <span className="text-[#EDE3D3]/45" aria-hidden="true">
                    ·
                  </span>
                )}
                <span>{loc}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
