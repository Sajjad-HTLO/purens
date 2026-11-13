import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import { EditorialChapter, OlfactoryAccord } from '../data/botanicalData';
import { ChapterBotanicalIllustration } from './BotanicalIllustrations';
import { ResilientImage } from './ResilientImage';

interface EditorialSectionProps {
  chapter: EditorialChapter;
  onSelectPlate: (chapter: EditorialChapter) => void;
  onDiscoverPurens: () => void;
}

export const EditorialSection: React.FC<EditorialSectionProps> = ({
  chapter,
  onSelectPlate,
  onDiscoverPurens,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [activeAccordId, setActiveAccordId] = useState<'top' | 'heart' | 'base'>('heart');

  const isIvory = chapter.surfaceTone === 'ivory';
  const sectionBgClass = isIvory ? 'bg-[#F6F0E6]' : 'bg-[#EDE3D3]';

  // Subtle chapter-specific accent palette matching the brief
  const themeStyles = {
    'sage-olive': {
      kickerText: 'text-[#55583D]',
      numberText: 'text-[#55583D]/80',
      ornamentText: 'text-[#55583D]',
      dividerBg: 'bg-[#A5AA91]/55',
      frameWrapper: 'p-0',
      captionBorder: 'border-[#A5AA91]/45',
      highlightDot: 'text-[#55583D]',
      ctaButton:
        'border border-[#55583D] bg-[#55583D] text-[#F6F0E6] hover:bg-[#302D25] hover:border-[#302D25]',
    },
    'rose-brown': {
      kickerText: 'text-[#80634C]',
      numberText: 'text-[#80634C]/85',
      ornamentText: 'text-[#80634C]',
      dividerBg: 'bg-[#D8B8AD]',
      frameWrapper:
        'p-3 sm:p-5 bg-[#F6F0E6]/75 border border-[#80634C]/22',
      captionBorder: 'border-[#D8B8AD]/80',
      highlightDot: 'text-[#80634C]',
      ctaButton:
        'border border-[#80634C] bg-[#80634C] text-[#F6F0E6] hover:bg-[#302D25] hover:border-[#302D25]',
    },
    'olive-earth': {
      kickerText: 'text-[#55583D]',
      numberText: 'text-[#80634C]/85',
      ornamentText: 'text-[#55583D]',
      dividerBg: 'bg-[#80634C]/35',
      frameWrapper:
        'p-2.5 sm:p-4 bg-[#EDE3D3]/85 border border-[#302D25]/10',
      captionBorder: 'border-[#80634C]/30',
      highlightDot: 'text-[#80634C]',
      ctaButton:
        'border border-[#55583D] bg-[#55583D] text-[#F6F0E6] hover:bg-[#302D25] hover:border-[#302D25]',
    },
    philosophy: {
      kickerText: 'text-[#55583D]',
      numberText: 'text-[#55583D]/85',
      ornamentText: 'text-[#55583D]',
      dividerBg: 'bg-[#55583D]/35',
      frameWrapper:
        'p-3 sm:p-4 bg-[#F6F0E6]/80 border border-[#55583D]/20',
      captionBorder: 'border-[#55583D]/30',
      highlightDot: 'text-[#55583D]',
      ctaButton:
        'border border-[#55583D] bg-[#55583D] text-[#F6F0E6] hover:bg-[#302D25] hover:border-[#302D25]',
    },
  }[chapter.accentTheme];

  const selectedAccord: OlfactoryAccord | undefined = chapter.accords?.find(
    (acc) => acc.id === activeAccordId
  );

  return (
    <section
      id={chapter.id}
      aria-labelledby={`heading-${chapter.id}`}
      className={`relative ${sectionBgClass} paper-grain border-b border-[#302D25]/10 py-20 sm:py-28 lg:py-36`}
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* LEFT COLUMN: Large Editorial Botanical Photograph */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className={chapter.imageColumnClass}
          >
            <figure className="group">
              <div className={themeStyles.frameWrapper}>
                <button
                  type="button"
                  onClick={() => onSelectPlate(chapter)}
                  aria-label={`View archival details for ${chapter.headline}`}
                  className={`relative block w-full ${chapter.aspectClass} overflow-hidden text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#55583D]`}
                >
                  <ResilientImage
                    src={chapter.image}
                    alt={chapter.imageAlt}
                    fallbackTitle={chapter.headline}
                    containerClassName="relative w-full h-full overflow-hidden bg-[#EDE3D3]"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />

                  {/* Subtle Hover Plate Affordance */}
                  <span className="absolute bottom-3.5 right-3.5 inline-flex items-center gap-2 px-3 py-1.5 bg-[#F6F0E6]/92 text-[#302D25] text-[11px] tracking-[0.14em] uppercase opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100">
                    <Maximize2 className="w-3 h-3 text-[#55583D]" />
                    <span>Inspect Plate</span>
                  </span>
                </button>
              </div>

              {/* Archival Figure Caption */}
              <figcaption
                className={`mt-3.5 pt-3 border-t ${themeStyles.captionBorder} flex items-baseline justify-between gap-4`}
              >
                <span className="font-serif italic text-xs sm:text-[13px] text-[#302D25]/75">
                  {chapter.caption}
                </span>
                <button
                  type="button"
                  onClick={() => onSelectPlate(chapter)}
                  className="text-[11px] tracking-[0.16em] uppercase text-[#55583D] hover:text-[#302D25] whitespace-nowrap shrink-0 cursor-pointer transition-colors duration-150"
                >
                  Provenance
                </button>
              </figcaption>
            </figure>

            {/* Chapter 04 Optional Archival Terroir Strip Under Panoramic Harvest Image */}
            {chapter.id === 'philosophy' && (
              <dl className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#302D25]/10 text-xs">
                <div>
                  <dt className="text-[10px] tracking-[0.18em] uppercase text-[#80634C]">
                    Terroir
                  </dt>
                  <dd className="mt-1 font-serif text-sm text-[#302D25]">
                    Mediterranean Limestone Slopes
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] tracking-[0.18em] uppercase text-[#80634C]">
                    Harvest Rhythm
                  </dt>
                  <dd className="mt-1 font-serif text-sm text-[#302D25]">
                    Hand-cut at Equinox Dawn
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] tracking-[0.18em] uppercase text-[#80634C]">
                    Extraction
                  </dt>
                  <dd className="mt-1 font-serif text-sm text-[#302D25]">
                    Pure Spring-Water Steam
                  </dd>
                </div>
              </dl>
            )}
          </motion.div>

          {/* RIGHT COLUMN: Spacious Editorial Typography & Botanical Ornament */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={chapter.textColumnClass}
          >
            <div className="max-w-xl lg:pl-2">
              {/* Chapter Number, Fine Separator & Vintage Botanical Illustration */}
              <div className="flex items-end justify-between gap-4 pb-5 border-b border-[#302D25]/12">
                <div className="flex items-center gap-3.5">
                  <span
                    className={`font-serif text-2xl sm:text-[26px] italic tabular-nums leading-none ${themeStyles.numberText}`}
                  >
                    {chapter.chapterNumber}
                  </span>
                  <span className={`h-px w-8 ${themeStyles.dividerBg}`} aria-hidden="true" />
                  <span
                    className={`text-xs tracking-[0.24em] uppercase font-medium ${themeStyles.kickerText}`}
                  >
                    {chapter.label}
                  </span>
                </div>

                <ChapterBotanicalIllustration
                  kind={chapter.illustration}
                  className={`w-10 h-12 sm:w-11 sm:h-14 shrink-0 opacity-85 ${themeStyles.ornamentText}`}
                />
              </div>

              {/* Editorial Serif Headline */}
              <h2
                id={`heading-${chapter.id}`}
                className="mt-7 font-serif font-normal text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] tracking-[0.01em] text-[#302D25] text-balance"
              >
                {chapter.headline}
              </h2>

              {/* Primary Description */}
              <p className="mt-6 text-[15px] sm:text-base leading-[1.78] text-[#302D25]/90 max-w-[62ch]">
                {chapter.description}
              </p>

              {/* Secondary Poetic Monograph Note */}
              <p className="mt-4 text-[15px] leading-[1.78] text-[#302D25]/75 max-w-[62ch]">
                {chapter.extendedNote}
              </p>

              {/* Chapter 02 Special Feature: Interactive Natural Perfumery Olfactory Architecture */}
              {chapter.accords && selectedAccord && (
                <div className="mt-8 pt-6 border-t border-[#80634C]/20">
                  <div className="flex items-center justify-between gap-4 mb-3.5">
                    <span className="text-[11px] tracking-[0.2em] uppercase text-[#80634C] font-medium">
                      Olfactory Architecture
                    </span>
                    <div
                      role="tablist"
                      aria-label="Natural Perfumery Accord Tiers"
                      className="inline-flex items-center gap-1 p-0.5 bg-[#F6F0E6]/80 border border-[#80634C]/20"
                    >
                      {chapter.accords.map((accord) => {
                        const isSelected = accord.id === activeAccordId;
                        const shortLabel =
                          accord.id === 'top'
                            ? 'Top'
                            : accord.id === 'heart'
                              ? 'Heart'
                              : 'Base';
                        return (
                          <button
                            key={accord.id}
                            type="button"
                            role="tab"
                            aria-selected={isSelected}
                            onClick={() => setActiveAccordId(accord.id)}
                            className={`px-3 py-1 text-[11px] tracking-[0.14em] uppercase whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer ${
                              isSelected
                                ? 'bg-[#80634C] text-[#F6F0E6] font-medium'
                                : 'text-[#302D25]/75 hover:text-[#302D25]'
                            }`}
                          >
                            {shortLabel}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 bg-[#F6F0E6]/65 border border-[#D8B8AD]/70">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-serif text-xl text-[#302D25]">
                        {selectedAccord.title}
                      </h3>
                      <span className="text-[11px] tracking-[0.16em] uppercase text-[#80634C]">
                        {selectedAccord.tier}
                      </span>
                    </div>
                    <p className="mt-1.5 font-serif italic text-sm text-[#80634C]">
                      {selectedAccord.botanicals}
                    </p>
                    <p className="mt-2.5 text-sm leading-[1.65] text-[#302D25]/80">
                      {selectedAccord.impression}
                    </p>
                  </div>
                </div>
              )}

              {/* Chapter 03 Special Feature: Quiet Daily Botanical Rituals List */}
              {chapter.rituals && (
                <div className="mt-8 pt-2 divide-y divide-[#302D25]/10 border-t border-b border-[#302D25]/10">
                  {chapter.rituals.map((ritual) => (
                    <div
                      key={ritual.moment}
                      className="py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 items-baseline"
                    >
                      <span className="sm:col-span-4 text-[11px] tracking-[0.18em] uppercase text-[#80634C] font-medium">
                        {ritual.moment}
                      </span>
                      <div className="sm:col-span-8">
                        <h3 className="font-serif text-lg text-[#302D25] leading-snug">
                          {ritual.title}
                        </h3>
                        <p className="mt-0.5 text-xs sm:text-[13px] leading-[1.6] text-[#302D25]/72">
                          {ritual.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Clean Unboxed Botanical Highlights Metadata (Zero Pills) */}
              <div className="mt-7 pt-5 border-t border-[#302D25]/10">
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs tracking-[0.08em] text-[#302D25]/75">
                  {chapter.botanicalHighlights.map((item, idx) => (
                    <React.Fragment key={item}>
                      {idx > 0 && (
                        <span className={themeStyles.highlightDot} aria-hidden="true">
                          ·
                        </span>
                      )}
                      <span>{item}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Chapter 04 Dedicated CTA ("Discover PURENS") */}
              {chapter.ctaLabel && (
                <div className="mt-9">
                  <button
                    type="button"
                    onClick={onDiscoverPurens}
                    className={`group inline-flex items-center gap-3 px-6 py-3.5 text-xs tracking-[0.2em] uppercase font-medium whitespace-nowrap cursor-pointer transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#55583D] ${themeStyles.ctaButton}`}
                  >
                    <span>{chapter.ctaLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
