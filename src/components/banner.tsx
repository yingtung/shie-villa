import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

interface BannerProps {
  titleText: string;
}

const Banner: React.FC<BannerProps> = ({ titleText }) => {
  return (
    <div className="relative h-[40vh] w-full overflow-hidden">
      <StaticImage
        src={'../images/banner.jpg'}
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
