import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

interface BannerProps {
  renderImage: () => React.ReactNode;
  titleText: string;
}

const Banner: React.FC<BannerProps> = ({ renderImage, titleText }) => {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden">
      {renderImage()}

      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white text-center">
          {titleText}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
