import React, { useState } from 'react';
import { PurensSprigMark } from './BotanicalIllustrations';

interface ResilientImageProps {
  src: string;
  alt: string;
  fallbackTitle?: string;
  className?: string;
  containerClassName?: string;
  eager?: boolean;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  fallbackTitle = 'PURENS Botanical Plate',
  className = 'w-full h-full object-cover',
  containerClassName = 'relative w-full h-full overflow-hidden bg-[#EDE3D3]',
  eager = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        className={`${containerClassName} flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#EDE3D3] via-[#F6F0E6] to-[#D8B8AD]/35 border border-[#302D25]/10`}
        role="img"
        aria-label={alt}
      >
        <PurensSprigMark className="w-9 h-9 text-[#55583D] mb-3 opacity-80" />
        <p className="font-serif text-lg italic text-[#302D25] max-w-xs text-balance">
          {fallbackTitle}
        </p>
        <span className="mt-1.5 text-[11px] uppercase tracking-[0.2em] text-[#80634C]">
          PURENS Archival Herbarium
        </span>
      </div>
    );
  }

  return (
    <div className={containerClassName}>
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-[#EDE3D3] animate-pulse"
          aria-hidden="true"
        />
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={eager ? 'eager' : 'lazy'}
        decoding={eager ? 'sync' : 'async'}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`${className} transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
