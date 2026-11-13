import React from 'react';
import { BotanicalIllustrationKind } from '../data/botanicalData';

interface IllustrationProps {
  className?: string;
}

/**
 * Minimalist botanical sprig crest for the PURENS wordmark and footer
 */
export const PurensSprigMark: React.FC<IllustrationProps> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M14 25V5.5"
      stroke="currentColor"
      strokeWidth="1.15"
      strokeLinecap="round"
    />
    <path
      d="M14 19.5C9.5 18.8 7 15.3 7.8 11.2C11.8 11.9 14 15.2 14 19.5Z"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <path
      d="M14 14.5C18.5 13.8 21 10.3 20.2 6.2C16.2 6.9 14 10.2 14 14.5Z"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <path
      d="M14 23C11.2 22.4 9.5 20.3 9.8 17.8"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <circle cx="14" cy="4" r="1.25" fill="currentColor" />
  </svg>
);

/**
 * Vintage engraving-inspired fine-line Lavandula angustifolia illustration
 */
export const LavenderIllustration: React.FC<IllustrationProps> = ({ className = 'w-11 h-14' }) => (
  <svg
    viewBox="0 0 48 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M24 59C24 44 24.5 28 24 9"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    {/* Blossom whorls */}
    <ellipse cx="24" cy="8.5" rx="1.8" ry="3.2" stroke="currentColor" strokeWidth="0.95" />
    <ellipse
      cx="20.5"
      cy="14"
      rx="1.7"
      ry="3.2"
      transform="rotate(-24 20.5 14)"
      stroke="currentColor"
      strokeWidth="0.95"
    />
    <ellipse
      cx="27.5"
      cy="14"
      rx="1.7"
      ry="3.2"
      transform="rotate(24 27.5 14)"
      stroke="currentColor"
      strokeWidth="0.95"
    />
    <ellipse
      cx="19.8"
      cy="21"
      rx="1.8"
      ry="3.5"
      transform="rotate(-28 19.8 21)"
      stroke="currentColor"
      strokeWidth="0.95"
    />
    <ellipse
      cx="28.2"
      cy="21"
      rx="1.8"
      ry="3.5"
      transform="rotate(28 28.2 21)"
      stroke="currentColor"
      strokeWidth="0.95"
    />
    <ellipse
      cx="20.2"
      cy="28.5"
      rx="1.8"
      ry="3.4"
      transform="rotate(-25 20.2 28.5)"
      stroke="currentColor"
      strokeWidth="0.95"
    />
    <ellipse
      cx="27.8"
      cy="28.5"
      rx="1.8"
      ry="3.4"
      transform="rotate(25 27.8 28.5)"
      stroke="currentColor"
      strokeWidth="0.95"
    />
    {/* Slender opposite leaves */}
    <path
      d="M24 44C18.5 41.5 14.5 36.5 13 31C17.5 34.2 21.5 38.8 24 44Z"
      stroke="currentColor"
      strokeWidth="0.95"
      strokeLinejoin="round"
    />
    <path
      d="M24 46C29.5 43.5 33.5 38.5 35 33C30.5 36.2 26.5 40.8 24 46Z"
      stroke="currentColor"
      strokeWidth="0.95"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Vintage engraving-inspired Rosa damascena illustration
 */
export const DamaskRoseIllustration: React.FC<IllustrationProps> = ({ className = 'w-12 h-14' }) => (
  <svg
    viewBox="0 0 52 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Stem */}
    <path
      d="M26 29C26 40 25 49 23.5 59"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    {/* Rose corolla petals */}
    <path
      d="M26 11C21 11 17 14.5 17 19.2C17 24.5 21.2 28 26 28C30.8 28 35 24.5 35 19.2C35 14.5 31 11 26 11Z"
      stroke="currentColor"
      strokeWidth="0.95"
    />
    <path
      d="M20.5 15.5C22.5 13.8 26 14 28.8 15.8C31 17.2 30.8 20.8 28 22.2C25.2 23.5 21.8 21.8 21.5 18.8C21.3 17 23.2 16.2 25.5 16.8"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
    />
    <path
      d="M17 18.5C13.5 17 12 21.5 15.5 24.5C18.2 26.8 22 28 26 28"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
    />
    <path
      d="M35 18.5C38.5 17 40 21.5 36.5 24.5C33.8 26.8 30 28 26 28"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
    />
    {/* Calyx sepals */}
    <path d="M23 28L19.5 31.5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <path d="M29 28L32.5 31.5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    {/* Serrated rose leaf */}
    <path
      d="M25.2 43C31 42.5 36.5 38.5 38 33.5C32.5 34.2 27.8 37.8 25.2 43Z"
      stroke="currentColor"
      strokeWidth="0.95"
      strokeLinejoin="round"
    />
    <path
      d="M24.8 48C19.5 47.2 14.5 43.8 13 39C18 39.8 22.2 43.2 24.8 48Z"
      stroke="currentColor"
      strokeWidth="0.95"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Vintage engraving-inspired Olive & Chamomile botanical branch
 */
export const OliveChamomileIllustration: React.FC<IllustrationProps> = ({
  className = 'w-12 h-14',
}) => (
  <svg
    viewBox="0 0 52 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M18 58C21 44 25 28 31 10"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    {/* Lanceolate olive leaves */}
    <path
      d="M28.5 17.5C23.5 15 19.5 11.5 18.8 7.5C23.2 9.2 27 12.8 28.5 17.5Z"
      stroke="currentColor"
      strokeWidth="0.95"
      strokeLinejoin="round"
    />
    <path
      d="M27.2 21.5C32.8 20.5 37.5 17.5 39.2 13.5C34.2 14.5 29.8 17.5 27.2 21.5Z"
      stroke="currentColor"
      strokeWidth="0.95"
      strokeLinejoin="round"
    />
    <path
      d="M24.2 31.5C18.8 29 14.5 24.8 13.8 20.2C18.8 22 22.8 26.2 24.2 31.5Z"
      stroke="currentColor"
      strokeWidth="0.95"
      strokeLinejoin="round"
    />
    <path
      d="M22.8 36C28.8 35.2 34.2 32 36.2 27.5C30.8 28.5 25.8 31.8 22.8 36Z"
      stroke="currentColor"
      strokeWidth="0.95"
      strokeLinejoin="round"
    />
    <path
      d="M20.2 46.5C15.2 44.2 11.5 40.2 11 35.8C15.5 37.5 18.8 41.5 20.2 46.5Z"
      stroke="currentColor"
      strokeWidth="0.95"
      strokeLinejoin="round"
    />
    {/* Small olive drupe */}
    <ellipse
      cx="29.5"
      cy="27"
      rx="2.6"
      ry="3.6"
      transform="rotate(22 29.5 27)"
      stroke="currentColor"
      strokeWidth="0.95"
    />
  </svg>
);

/**
 * Vintage engraving-inspired Wild Rosemary sprig
 */
export const RosemaryIllustration: React.FC<IllustrationProps> = ({ className = 'w-11 h-14' }) => (
  <svg
    viewBox="0 0 48 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M23 59C23.5 43 24.5 26 25 8"
      stroke="currentColor"
      strokeWidth="1.05"
      strokeLinecap="round"
    />
    {/* Aromatic needle pairs */}
    <path d="M24.8 14C21 11 18.5 8.5 17 5.5" stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" />
    <path d="M24.8 15C28.5 12 31 9.5 32.5 6.5" stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" />

    <path d="M24.5 22C19.5 18.5 16.5 15 15 11.5" stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" />
    <path d="M24.5 23C29.5 19.5 32.5 16 34 12.5" stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" />

    <path d="M24.2 30.5C18.8 26.8 15.5 23 14 19" stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" />
    <path d="M24.2 31.5C29.8 27.8 33 24 34.5 20" stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" />

    <path d="M23.8 39C18.5 35.5 15.5 31.5 14 27.5" stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" />
    <path d="M23.8 40C29.2 36.5 32.2 32.5 33.8 28.5" stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" />

    <path d="M23.4 47.5C19 44.5 16.2 41 15 37.5" stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" />
    <path d="M23.4 48.5C28 45.5 30.8 42 32 38.5" stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" />

    {/* Delicate rosemary blossom dots */}
    <circle cx="21.5" cy="18.5" r="1" fill="currentColor" />
    <circle cx="27.5" cy="26.5" r="1" fill="currentColor" />
    <circle cx="21" cy="34.5" r="1" fill="currentColor" />
  </svg>
);

export const ChapterBotanicalIllustration: React.FC<{
  kind: BotanicalIllustrationKind;
  className?: string;
}> = ({ kind, className }) => {
  switch (kind) {
    case 'lavender':
      return <LavenderIllustration className={className} />;
    case 'rose':
      return <DamaskRoseIllustration className={className} />;
    case 'olive':
      return <OliveChamomileIllustration className={className} />;
    case 'rosemary':
      return <RosemaryIllustration className={className} />;
  }
};

/**
 * Subtle hairline botanical divider flourish between major sections
 */
export const BotanicalDividerOrnament: React.FC<{ className?: string }> = ({
  className = 'text-[#55583D]/55',
}) => (
  <div className={`flex items-center justify-center gap-4 py-2 ${className}`} aria-hidden="true">
    <span className="h-px w-14 sm:w-24 bg-current opacity-35" />
    <svg viewBox="0 0 24 12" fill="none" className="w-5 h-3">
      <path
        d="M2 6H22M12 6C10 3 7.5 2 5 2.5C6.5 5 9 6 12 6ZM12 6C14 9 16.5 10 19 9.5C17.5 7 15 6 12 6Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className="h-px w-14 sm:w-24 bg-current opacity-35" />
  </div>
);
