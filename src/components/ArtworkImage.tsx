
import React from 'react';
import { cn } from '@/lib/utils';

interface ArtworkImageProps {
  src: string;
  alt: string;
  className?: string;
  iconMode?: boolean;
}

const ArtworkImage = ({ src, alt, className, iconMode = false }: ArtworkImageProps) => {
  return (
    <div className={cn(
      "overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-border",
      iconMode && "bg-transparent border-none flex items-center justify-center",
      className
    )}>
      <img 
        src={src} 
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-transform duration-300",
          !iconMode && "hover:scale-105"
        )}
      />
    </div>
  );
};

export default ArtworkImage;
