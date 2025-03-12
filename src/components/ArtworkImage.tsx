
import React from 'react';
import { cn } from '@/lib/utils';

interface ArtworkImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ArtworkImage = ({ src, alt, className }: ArtworkImageProps) => {
  return (
    <div className={cn(
      "overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-border",
      className
    )}>
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

export default ArtworkImage;
