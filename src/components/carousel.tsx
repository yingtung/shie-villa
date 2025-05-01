import React, { useState, useEffect, useRef } from 'react';
import { Transition } from '@headlessui/react';

interface CarouselProps {
  children: React.ReactNode[];
  height: number;
  hasBorder?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  withThumbnail?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  height,
  hasBorder = true,
  autoplay = false,
  autoplayInterval = 3000,
  withThumbnail = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const goToPrevious = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (autoplay && children.length > 0) {
      resetTimeout();
      timeoutRef.current = setTimeout(() => {
        goToNext();
      }, autoplayInterval);
    }

    return () => {
      resetTimeout();
    };
  }, [currentIndex, autoplay, autoplayInterval, children.length]);

  return (
    <>
      <div
        className={`relative overflow-hidden ${hasBorder && 'border-base border-(--color-highlight)'}`}
      >
        {/* Slides */}
        <div className={`relative h-${height * 0.66} md:h-${height}`}>
          {children.map((child, index) => (
            <Transition
              key={index}
              show={index === currentIndex}
              enter={'transition-transform duration-500 ease-in-out'}
              enterFrom={`${direction === 'right' ? 'translate-x-full' : '-translate-x-full'}`}
              enterTo="translate-x-0"
              leave="transition-transform duration-500 ease-in-out absolute top-0 left-0"
              leaveFrom="translate-x-0"
              leaveTo={`${direction === 'right' ? '-translate-x-full' : 'translate-x-full'}`}
            >
              <div className="w-full h-full">{child}</div>
            </Transition>
          ))}
        </div>

        {/* Controls (Previous/Next Buttons) */}
        {children.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                  className="bg-transparent"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Indicators (Dots) */}
        {children.length > 1 && !withThumbnail && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {children.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full w-3 h-3 focus:outline-none ${
                  currentIndex === index
                    ? 'bg-(--color-highlight)'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
      {/* Thumbnails */}
      <div className="grid grid-cols-8 gap-2 py-8">
        {children.length > 0 &&
          withThumbnail &&
          children.map((child, index) => (
            <div onClick={() => goToSlide(index)}>{child}</div>
          ))}
      </div>
    </>
  );
};

export default Carousel;
