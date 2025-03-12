
import React from 'react';
import ArtworkImage from './ArtworkImage';

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {images.map((image, index) => (
        <ArtworkImage
          key={index}
          src={image.src}
          alt={image.alt}
          className="aspect-[4/3]"
        />
      ))}
    </div>
  );
};

export default ImageGrid;
