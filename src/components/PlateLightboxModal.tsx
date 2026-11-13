import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { EditorialChapter } from '../data/botanicalData';
import { ChapterBotanicalIllustration } from './BotanicalIllustrations';
import { ResilientImage } from './ResilientImage';

interface PlateLightboxModalProps {
  chapter: EditorialChapter | null;
  onClose: () => void;
}

export const PlateLightboxModal: React.FC<PlateLightboxModalProps> = ({ chapter, onClose }) => {
  useEffect(() => {
    if (!chapter) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.body.classList.add('overflow-hidden');
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [chapter, onClose]);

  if (!chapter) return null;

  const { plateMetadata } = chapter;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="plate-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#1E1C17]/80 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#F6F0E6] text-[#302D25] border border-[#302D25]/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4 bg-[#F6F0E6]/95 backdrop-blur-xs border-b border-[#302D25]/12">
          <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#55583D]">
            <span>{plateMetadata.plateNumber}</span>
            <span aria-hidden="true">·</span>
            <span>{chapter.label}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close archival plate viewer"
            className="inline-flex items-center justify-center w-9 h-9 text-[#302D25] hover:bg-[#EDE3D3] transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#55583D]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-start">
          <div className="lg:col-span-7">
            <div className="bg-[#EDE3D3] p-2 sm:p-3 border border-[#302D25]/10">
              <ResilientImage
                src={chapter.image}
                alt={chapter.imageAlt}
                fallbackTitle={chapter.headline}
                containerClassName="relative w-full aspect-[4/3] overflow-hidden bg-[#EDE3D3]"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 font-serif italic text-xs text-[#302D25]/70">
              {chapter.caption}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#302D25]/12">
                <div>
                  <span className="text-[11px] tracking-[0.2em] uppercase text-[#80634C]">
                    Chapter {chapter.chapterNumber}
                  </span>
                  <h2
                    id="plate-modal-title"
                    className="mt-1 font-serif text-2xl sm:text-3xl text-[#302D25] text-balance"
                  >
                    {chapter.headline}
                  </h2>
                </div>
                <ChapterBotanicalIllustration
                  kind={chapter.illustration}
                  className="w-10 h-12 text-[#55583D] shrink-0"
                />
              </div>

              <dl className="mt-5 divide-y divide-[#302D25]/10 text-sm">
                <div className="py-3">
                  <dt className="text-[10px] tracking-[0.2em] uppercase text-[#80634C]">
                    Botanical Binomial
                  </dt>
                  <dd className="mt-1 font-serif italic text-base text-[#302D25]">
                    {plateMetadata.latinBinomial}
                  </dd>
                </div>

                <div className="py-3">
                  <dt className="text-[10px] tracking-[0.2em] uppercase text-[#80634C]">
                    Origin & Terroir
                  </dt>
                  <dd className="mt-1 text-[13px] leading-relaxed text-[#302D25]/88">
                    {plateMetadata.terroir}
                  </dd>
                </div>

                <div className="py-3">
                  <dt className="text-[10px] tracking-[0.2em] uppercase text-[#80634C]">
                    Harvest Window
                  </dt>
                  <dd className="mt-1 text-[13px] leading-relaxed text-[#302D25]/88">
                    {plateMetadata.harvestSeason}
                  </dd>
                </div>

                <div className="py-3">
                  <dt className="text-[10px] tracking-[0.2em] uppercase text-[#80634C]">
                    Extraction Craft
                  </dt>
                  <dd className="mt-1 text-[13px] leading-relaxed text-[#302D25]/88">
                    {plateMetadata.extractionMethod}
                  </dd>
                </div>

                <div className="py-3">
                  <dt className="text-[10px] tracking-[0.2em] uppercase text-[#80634C]">
                    Olfactory Character
                  </dt>
                  <dd className="mt-1 text-[13px] leading-relaxed text-[#302D25]/88">
                    {plateMetadata.aromaticProfile}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 pt-4 border-t border-[#302D25]/12 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 border border-[#302D25]/30 text-xs tracking-[0.16em] uppercase text-[#302D25] hover:bg-[#302D25] hover:text-[#F6F0E6] transition-colors duration-150 whitespace-nowrap cursor-pointer"
              >
                Return to Journal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
