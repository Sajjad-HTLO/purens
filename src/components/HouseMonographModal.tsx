import React, { useEffect, useState } from 'react';
import { Check, X } from 'lucide-react';
import { HERBARIUM_SPECIMENS, HerbariumSpecimen } from '../data/botanicalData';
import { PurensSprigMark } from './BotanicalIllustrations';

export type MonographTab = 'herbarium' | 'craft' | 'correspondence';

interface HouseMonographModalProps {
  isOpen: boolean;
  initialTab: MonographTab;
  onClose: () => void;
}

export const HouseMonographModal: React.FC<HouseMonographModalProps> = ({
  isOpen,
  initialTab,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<MonographTab>(initialTab);
  const [selectedSpecimenId, setSelectedSpecimenId] = useState<string>(
    HERBARIUM_SPECIMENS[0].id
  );
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [inquirySubject, setInquirySubject] = useState('Atelier & Botanical Monograph');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    if (!isOpen) return;
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const activeSpecimen: HerbariumSpecimen =
    HERBARIUM_SPECIMENS.find((item) => item.id === selectedSpecimenId) ||
    HERBARIUM_SPECIMENS[0];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderEmail.trim()) return;
    setSubmitted(true);
  };

  const resetCorrespondence = () => {
    setSenderName('');
    setSenderEmail('');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="monograph-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#1E1C17]/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#F6F0E6] text-[#302D25] border border-[#302D25]/20 shadow-2xl paper-grain"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-[#F6F0E6]/95 backdrop-blur-xs border-b border-[#302D25]/12 px-6 sm:px-8 py-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <PurensSprigMark className="w-5 h-5 text-[#55583D]" />
            <div>
              <h2
                id="monograph-modal-title"
                className="font-serif text-xl sm:text-2xl tracking-[0.14em] text-[#302D25]"
              >
                PURENS MONOGRAPH
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close PURENS Monograph"
            className="inline-flex items-center justify-center w-9 h-9 text-[#302D25] hover:bg-[#EDE3D3] transition-colors duration-150 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Clean Interactive Section Tabs */}
        <div
          role="tablist"
          aria-label="PURENS House Monograph Sections"
          className="px-6 sm:px-8 bg-[#EDE3D3]/65 border-b border-[#302D25]/10 flex items-center gap-6 overflow-x-auto"
        >
          {[
            { id: 'herbarium' as const, label: 'Materia Aromatica' },
            { id: 'craft' as const, label: 'Distillation Craft' },
            { id: 'correspondence' as const, label: 'Atelier Correspondence' },
          ].map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3.5 text-xs tracking-[0.16em] uppercase whitespace-nowrap shrink-0 border-b-2 transition-colors duration-150 cursor-pointer ${
                  isSelected
                    ? 'border-[#55583D] text-[#302D25] font-medium'
                    : 'border-transparent text-[#302D25]/65 hover:text-[#302D25]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab 1: Materia Aromatica Herbarium Index */}
        {activeTab === 'herbarium' && (
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="font-serif italic text-lg text-[#80634C] max-w-2xl">
              An archival index of the raw botanical harvests that shape the olfactory language of PURENS.
            </p>

            <div className="mt-7 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Botanical Selector List */}
              <div className="md:col-span-5 border border-[#302D25]/12 bg-[#EDE3D3]/45 divide-y divide-[#302D25]/10">
                {HERBARIUM_SPECIMENS.map((specimen, idx) => {
                  const active = specimen.id === activeSpecimen.id;
                  return (
                    <button
                      key={specimen.id}
                      type="button"
                      onClick={() => setSelectedSpecimenId(specimen.id)}
                      className={`w-full px-4 py-3.5 text-left flex items-baseline justify-between gap-3 transition-colors duration-150 cursor-pointer ${
                        active
                          ? 'bg-[#55583D] text-[#F6F0E6]'
                          : 'text-[#302D25] hover:bg-[#EDE3D3]'
                      }`}
                    >
                      <div className="min-w-0">
                        <span
                          className={`text-[10px] tracking-[0.18em] uppercase tabular-nums block ${
                            active ? 'text-[#EDE3D3]/80' : 'text-[#80634C]'
                          }`}
                        >
                          0{idx + 1} · {specimen.olfactoryFamily}
                        </span>
                        <span className="font-serif text-lg block truncate">
                          {specimen.commonName}
                        </span>
                      </div>
                      <span
                        className={`font-serif italic text-xs shrink-0 ${
                          active ? 'text-[#EDE3D3]/90' : 'text-[#302D25]/60'
                        }`}
                      >
                        Inspect
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Specimen Detail Card */}
              <div className="md:col-span-7 p-6 sm:p-7 bg-[#EDE3D3]/55 border border-[#302D25]/12">
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#55583D]">
                  {activeSpecimen.chapterRef}
                </span>
                <h3 className="mt-2 font-serif text-3xl text-[#302D25]">
                  {activeSpecimen.commonName}
                </h3>
                <p className="mt-1 font-serif italic text-base text-[#80634C]">
                  {activeSpecimen.latinName}
                </p>

                <p className="mt-5 text-[15px] leading-[1.75] text-[#302D25]/88">
                  {activeSpecimen.tastingNote}
                </p>

                <dl className="mt-6 pt-5 border-t border-[#302D25]/12 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <dt className="text-[10px] tracking-[0.18em] uppercase text-[#80634C]">
                      Region of Origin
                    </dt>
                    <dd className="mt-1 font-medium text-[#302D25]">
                      {activeSpecimen.origin}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] tracking-[0.18em] uppercase text-[#80634C]">
                      Harvest Season
                    </dt>
                    <dd className="mt-1 font-medium text-[#302D25]">
                      {activeSpecimen.harvestWindow}
                    </dd>
                  </div>
                  <div className="sm:col-span-2 pt-2 border-t border-[#302D25]/10">
                    <dt className="text-[10px] tracking-[0.18em] uppercase text-[#80634C]">
                      Natural Botanical Ratio
                    </dt>
                    <dd className="mt-1 font-serif italic text-sm text-[#302D25] tabular-nums">
                      {activeSpecimen.distillationYield}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Traditional Distillation & Craft */}
        {activeTab === 'craft' && (
          <div className="p-6 sm:p-8 lg:p-10 space-y-8">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#55583D]">
                Savoir-Faire
              </span>
              <h3 className="mt-2 font-serif text-3xl text-[#302D25] text-balance">
                From Living Blossom to Pure Essence
              </h3>
              <p className="mt-4 text-[15px] leading-[1.78] text-[#302D25]/85">
                True botanical perfumery begins long before the still is warmed. Soil composition, morning mist, and the exact hour of harvest shape the delicate aromatic molecules held within leaf, petal, rind, and seed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 bg-[#EDE3D3]/60 border border-[#302D25]/10">
                <span className="font-serif italic text-xl text-[#80634C] tabular-nums">
                  I.
                </span>
                <h4 className="mt-2 font-serif text-xl text-[#302D25]">
                  Dawn Field Harvesting
                </h4>
                <p className="mt-2.5 text-sm leading-[1.7] text-[#302D25]/80">
                  Fragile blossoms such as Damask rose and fine lavender are gathered by hand at sunrise before warmth disperses their volatile aromatic dew.
                </p>
              </div>

              <div className="p-5 bg-[#EDE3D3]/60 border border-[#302D25]/10">
                <span className="font-serif italic text-xl text-[#80634C] tabular-nums">
                  II.
                </span>
                <h4 className="mt-2 font-serif text-xl text-[#302D25]">
                  Slow Copper Hydro-Distillation
                </h4>
                <p className="mt-2.5 text-sm leading-[1.7] text-[#302D25]/80">
                  Gentle, low-pressure mountain spring steam passes slowly through freshly cut botanicals in traditional copper alembics, preserving subtle top and heart nuances.
                </p>
              </div>

              <div className="p-5 bg-[#EDE3D3]/60 border border-[#302D25]/10">
                <span className="font-serif italic text-xl text-[#80634C] tabular-nums">
                  III.
                </span>
                <h4 className="mt-2 font-serif text-xl text-[#302D25]">
                  Dark Amber Maturation
                </h4>
                <p className="mt-2.5 text-sm leading-[1.7] text-[#302D25]/80">
                  Distilled essences rest quietly in UV-protective dark amber apothecary glass in cool stone cellars until their sharp edges soften into harmonious depth.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Atelier Correspondence */}
        {activeTab === 'correspondence' && (
          <div className="p-6 sm:p-8 lg:p-10">
            {submitted ? (
              <div className="py-10 px-6 bg-[#EDE3D3]/65 border border-[#55583D]/25 text-center max-w-xl mx-auto">
                <div className="w-10 h-10 mx-auto border border-[#55583D] text-[#55583D] flex items-center justify-center mb-4">
                  <Check className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-2xl text-[#302D25]">
                  Correspondence Received
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#302D25]/80 max-w-md mx-auto">
                  Thank you, {senderName}. Your note regarding{' '}
                  <span className="italic font-serif">{inquirySubject}</span> has been recorded for the PURENS botanical studio.
                </p>
                <button
                  type="button"
                  onClick={resetCorrespondence}
                  className="mt-6 px-5 py-2.5 border border-[#55583D] text-xs tracking-[0.16em] uppercase text-[#55583D] hover:bg-[#55583D] hover:text-[#F6F0E6] transition-colors duration-150 cursor-pointer"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-5">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-[#80634C]">
                    House Studio
                  </span>
                  <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-[#302D25] text-balance">
                    Write to the PURENS Atelier
                  </h3>
                  <p className="mt-3 text-sm leading-[1.75] text-[#302D25]/80">
                    For editorial press inquiries, architectural scent collaborations, or questions regarding our seasonal botanical harvests.
                  </p>
                  <div className="mt-6 pt-5 border-t border-[#302D25]/12 space-y-2 text-xs text-[#302D25]/75">
                    <p>
                      <span className="uppercase tracking-[0.15em] text-[#80634C] block">
                        Direct Post
                      </span>
                      atelier@purens-botanicals.com
                    </p>
                    <p className="pt-2">
                      <span className="uppercase tracking-[0.15em] text-[#80634C] block">
                        Archival Journal
                      </span>
                      @purens.botanicals
                    </p>
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} className="md:col-span-7 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="purens-name"
                        className="block text-[11px] tracking-[0.16em] uppercase text-[#302D25]/80 mb-1.5"
                      >
                        Full Name
                      </label>
                      <input
                        id="purens-name"
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="Clara Moreau"
                        className="w-full px-3.5 py-2.5 bg-[#F6F0E6] border border-[#302D25]/25 text-sm text-[#302D25] placeholder:text-[#302D25]/40 focus:outline-none focus:border-[#55583D]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="purens-email"
                        className="block text-[11px] tracking-[0.16em] uppercase text-[#302D25]/80 mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="purens-email"
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="clara@example.com"
                        className="w-full px-3.5 py-2.5 bg-[#F6F0E6] border border-[#302D25]/25 text-sm text-[#302D25] placeholder:text-[#302D25]/40 focus:outline-none focus:border-[#55583D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="purens-subject"
                      className="block text-[11px] tracking-[0.16em] uppercase text-[#302D25]/80 mb-1.5"
                    >
                      Subject of Inquiry
                    </label>
                    <select
                      id="purens-subject"
                      value={inquirySubject}
                      onChange={(e) => setInquirySubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F6F0E6] border border-[#302D25]/25 text-sm text-[#302D25] focus:outline-none focus:border-[#55583D]"
                    >
                      <option value="Atelier & Botanical Monograph">
                        Atelier & Botanical Monograph
                      </option>
                      <option value="Editorial & Press Desk">Editorial & Press Desk</option>
                      <option value="Scent & Spatial Curation">Scent & Spatial Curation</option>
                      <option value="Botanical Provenance">Botanical Provenance</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="purens-message"
                      className="block text-[11px] tracking-[0.16em] uppercase text-[#302D25]/80 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="purens-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share a note with our studio..."
                      className="w-full px-3.5 py-2.5 bg-[#F6F0E6] border border-[#302D25]/25 text-sm text-[#302D25] placeholder:text-[#302D25]/40 focus:outline-none focus:border-[#55583D]"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#55583D] text-[#F6F0E6] text-xs tracking-[0.18em] uppercase font-medium whitespace-nowrap hover:bg-[#302D25] transition-colors duration-150 cursor-pointer"
                    >
                      Send Correspondence
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
