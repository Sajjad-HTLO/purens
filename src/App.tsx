import React, { useEffect, useState } from 'react';
import { EDITORIAL_CHAPTERS, EditorialChapter } from './data/botanicalData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EditorialSection } from './components/EditorialSection';
import { BotanicalDividerOrnament } from './components/BotanicalIllustrations';
import { PlateLightboxModal } from './components/PlateLightboxModal';
import { HouseMonographModal, MonographTab } from './components/HouseMonographModal';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedPlate, setSelectedPlate] = useState<EditorialChapter | null>(null);
  const [monographOpen, setMonographOpen] = useState<boolean>(false);
  const [monographTab, setMonographTab] = useState<MonographTab>('herbarium');

  useEffect(() => {
    const sectionIds = [
      'home',
      ...EDITORIAL_CHAPTERS.map((chapter) => chapter.id),
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0 && visibleEntries[0].target.id) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -45% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleOpenMonograph = (tab: MonographTab = 'herbarium') => {
    setMonographTab(tab);
    setMonographOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F6F0E6] text-[#302D25] selection:bg-[#55583D] selection:text-[#F6F0E6] overflow-x-clip">
      <Navbar
        activeSection={activeSection}
        onOpenMonograph={handleOpenMonograph}
      />

      <main>
        {/* Hero — The Origin of Nature */}
        <HeroSection />

        {/* Four Editorial Chapters */}
        {EDITORIAL_CHAPTERS.map((chapter, index) => (
          <React.Fragment key={chapter.id}>
            <EditorialSection
              chapter={chapter}
              onSelectPlate={(selected) => setSelectedPlate(selected)}
              onDiscoverPurens={() => handleOpenMonograph('herbarium')}
            />

            {/* Quiet Poetic Interlude Between Chapter 02 and Chapter 03 */}
            {index === 1 && (
              <aside
                aria-label="Botanical Epigraph"
                className="bg-[#F6F0E6] paper-grain border-b border-[#302D25]/10 py-16 sm:py-20 px-5 sm:px-8"
              >
                <div className="max-w-2xl mx-auto text-center">
                  <BotanicalDividerOrnament className="text-[#80634C]/65" />
                  <blockquote className="mt-4 font-serif italic text-2xl sm:text-[28px] leading-[1.45] text-[#302D25] text-balance">
                    “Every drop of pure essence carries the memory of sunlight, morning dew, and the living earth from which it was gathered.”
                  </blockquote>
                  <p className="mt-4 text-[11px] tracking-[0.24em] uppercase text-[#80634C]">
                    PURENS · Materia Aromatica
                  </p>
                </div>
              </aside>
            )}
          </React.Fragment>
        ))}
      </main>

      <Footer onOpenMonograph={handleOpenMonograph} />

      {/* Archival Plate Lightbox Viewer */}
      <PlateLightboxModal
        chapter={selectedPlate}
        onClose={() => setSelectedPlate(null)}
      />

      {/* Interactive PURENS House Monograph & Botanical Compendium */}
      <HouseMonographModal
        isOpen={monographOpen}
        initialTab={monographTab}
        onClose={() => setMonographOpen(false)}
      />
    </div>
  );
}

export default App;
