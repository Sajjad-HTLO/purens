import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { BotanicalDividerOrnament, PurensSprigMark } from './BotanicalIllustrations';
import { MonographTab } from './HouseMonographModal';

interface FooterProps {
  onOpenMonograph: (tab: MonographTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMonograph }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showInstagramNote, setShowInstagramNote] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('atelier@purens-botanicals.com').catch(() => {});
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#F6F0E6] paper-grain text-[#302D25] pt-20 pb-14 sm:pt-24 sm:pb-16">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Centered Botanical Crest & Brand Closing Statement */}
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center justify-center text-[#55583D] mb-4">
            <PurensSprigMark className="w-7 h-7" />
          </div>

          <p className="font-serif text-2xl sm:text-[28px] tracking-[0.28em] text-[#302D25]">
            PURENS
          </p>

          <p className="mt-2 font-serif italic text-lg sm:text-xl text-[#80634C]">
            The Essence of Nature.
          </p>

          <div className="my-5">
            <BotanicalDividerOrnament className="text-[#55583D]/50" />
          </div>

          <p className="text-sm sm:text-[15px] leading-[1.75] text-[#302D25]/80 text-balance">
            Celebrating the beauty of nature, one drop at a time.
          </p>
        </div>

        {/* Hairline Separated Editorial Directory & Contact Row */}
        <div className="mt-14 pt-10 border-t border-[#302D25]/12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-xs">
          {/* Chapter Index Links */}
          <div className="md:col-span-5">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#80634C] block mb-3">
              Chapters
            </span>
            <nav
              aria-label="Footer Chapter Navigation"
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-[#302D25]/80"
            >
              <a
                href="#home"
                onClick={(e) => handleScrollTo(e, 'home')}
                className="hover:text-[#55583D] transition-colors duration-150 whitespace-nowrap"
              >
                Home
              </a>
              <a
                href="#aromatherapy"
                onClick={(e) => handleScrollTo(e, 'aromatherapy')}
                className="hover:text-[#55583D] transition-colors duration-150 whitespace-nowrap"
              >
                Aromatherapy
              </a>
              <a
                href="#perfumery"
                onClick={(e) => handleScrollTo(e, 'perfumery')}
                className="hover:text-[#55583D] transition-colors duration-150 whitespace-nowrap"
              >
                Perfumery
              </a>
              <a
                href="#botanical-living"
                onClick={(e) => handleScrollTo(e, 'botanical-living')}
                className="hover:text-[#55583D] transition-colors duration-150 whitespace-nowrap"
              >
                Botanical Living
              </a>
              <a
                href="#philosophy"
                onClick={(e) => handleScrollTo(e, 'philosophy')}
                className="hover:text-[#55583D] transition-colors duration-150 whitespace-nowrap"
              >
                Our Philosophy
              </a>
            </nav>
          </div>

          {/* Contact Email Placeholder */}
          <div className="md:col-span-4">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#80634C] block mb-3">
              Correspondence
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenMonograph('correspondence')}
                className="text-[13px] text-[#302D25]/85 hover:text-[#55583D] underline underline-offset-4 decoration-[#302D25]/25 hover:decoration-[#55583D] transition-colors duration-150 cursor-pointer"
              >
                atelier@purens-botanicals.com
              </button>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 text-[11px] tracking-[0.14em] uppercase text-[#55583D] hover:text-[#302D25] transition-colors duration-150 cursor-pointer whitespace-nowrap"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3 h-3" />
                    <span>Copied</span>
                  </>
                ) : (
                  <span>Copy</span>
                )}
              </button>
            </div>
          </div>

          {/* Instagram Link Placeholder */}
          <div className="md:col-span-3 md:text-right">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#80634C] block mb-3">
              Visual Journal
            </span>
            <button
              type="button"
              onClick={() => setShowInstagramNote((prev) => !prev)}
              className="text-[13px] text-[#302D25]/85 hover:text-[#55583D] underline underline-offset-4 decoration-[#302D25]/25 hover:decoration-[#55583D] transition-colors duration-150 cursor-pointer whitespace-nowrap"
            >
              Instagram · @purens.botanicals
            </button>
            {showInstagramNote && (
              <p className="mt-2 font-serif italic text-xs text-[#80634C]">
                Seasonal harvest dispatches & field studies from Haute-Provence.
              </p>
            )}
          </div>
        </div>

        {/* Quiet Copyright Bottom Line */}
        <div className="mt-12 pt-6 border-t border-[#302D25]/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-[#302D25]/60">
          <p>© {new Date().getFullYear()} PURENS Botanical Fragrance House. All rights reserved.</p>
          <p className="font-serif italic text-[13px] text-[#302D25]/70">
            Natural Essential Oils · Aromatherapy · Natural Perfumery
          </p>
        </div>
      </div>
    </footer>
  );
};
