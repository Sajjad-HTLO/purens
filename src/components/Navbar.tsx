import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PurensSprigMark } from './BotanicalIllustrations';

interface NavbarProps {
  activeSection: string;
  onOpenMonograph: (initialTab?: 'herbarium' | 'craft' | 'correspondence') => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'aromatherapy', label: 'Aromatherapy' },
  { id: 'perfumery', label: 'Perfumery' },
  { id: 'botanical-living', label: 'Botanical Living' },
  { id: 'philosophy', label: 'Our Philosophy' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenMonograph }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 48);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const overHero = !isScrolled && !mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
        overHero
          ? 'bg-gradient-to-b from-[#1E1C17]/55 via-[#1E1C17]/20 to-transparent border-b border-[#F6F0E6]/12 text-[#F6F0E6]'
          : 'bg-[#F6F0E6]/95 backdrop-blur-md border-b border-[#302D25]/10 text-[#302D25]'
      }`}
    >
      <div className="max-w-[1360px] mx-auto h-16 px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark with subtle botanical sprig */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="inline-flex items-center gap-2.5 font-serif text-xl sm:text-[22px] font-medium tracking-[0.26em] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
        >
          <PurensSprigMark
            className={`w-5 h-5 transition-colors duration-200 ${
              overHero ? 'text-[#EDE3D3]' : 'text-[#55583D]'
            }`}
          />
          <span>PURENS</span>
        </a>

        {/* Zone 2: Clean single-line editorial navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 xl:gap-9"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative py-1 text-[13px] tracking-[0.12em] font-normal whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px after:origin-left after:transition-transform after:duration-200 ${
                  overHero
                    ? isActive
                      ? 'text-[#F6F0E6] after:bg-[#F6F0E6] after:scale-x-100'
                      : 'text-[#F6F0E6]/85 hover:text-[#F6F0E6] after:bg-[#F6F0E6]/80 after:scale-x-0 hover:after:scale-x-100'
                    : isActive
                      ? 'text-[#302D25] font-medium after:bg-[#55583D] after:scale-x-100'
                      : 'text-[#302D25]/75 hover:text-[#302D25] after:bg-[#55583D] after:scale-x-0 hover:after:scale-x-100'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single primary action + Mobile drawer toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenMonograph('herbarium')}
            className={`hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs tracking-[0.16em] uppercase font-medium whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 ${
              overHero
                ? 'border border-[#F6F0E6]/45 text-[#F6F0E6] hover:bg-[#F6F0E6] hover:text-[#302D25]'
                : 'border border-[#55583D]/55 text-[#302D25] hover:bg-[#55583D] hover:text-[#F6F0E6]'
            }`}
          >
            Botanical Index
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Compact Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#F6F0E6] border-b border-[#302D25]/15 text-[#302D25] px-6 pt-4 pb-7 shadow-sm"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col divide-y divide-[#302D25]/10">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`py-3.5 flex items-center justify-between text-sm tracking-[0.12em] whitespace-nowrap ${
                    isActive ? 'text-[#55583D] font-medium' : 'text-[#302D25]/85'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="font-serif italic text-xs text-[#80634C]">
                    {item.id === 'home' ? 'Origin' : 'Chapter'}
                  </span>
                </a>
              );
            })}
          </nav>
          <div className="mt-5 pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMonograph('herbarium');
              }}
              className="w-full py-3 px-4 border border-[#55583D] bg-[#55583D] text-[#F6F0E6] text-xs tracking-[0.18em] uppercase font-medium whitespace-nowrap cursor-pointer transition-colors duration-150 hover:bg-[#302D25]"
            >
              Open Botanical Index
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
