import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

interface BannerProps {
  image: IGatsbyImageData;
  titleText: string;
}

const Banner: React.FC<BannerProps> = ({ image, titleText }) => {
  return (
    <div className="relative h-[48vh] w-full overflow-hidden">
      <GatsbyImage
        image={image}
        alt="Banner image"
        className="w-full h-full"
        objectFit="cover"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white text-center">
          {titleText}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
