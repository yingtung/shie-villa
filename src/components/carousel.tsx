import React, { useState, useEffect, useRef } from 'react';
import { Transition } from '@headlessui/react';

interface CarouselProps {
  children: React.ReactNode[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoplay = false,
  autoplayInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const goToSlide = (index: number) => {
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
    <div className="relative overflow-hidden border-base border-(--color-highlight)">
      {/* Slides */}
      <div className="relative h-64 md:h-96">
        {children.map((child, index) => (
          <Transition
            key={index}
            show={currentIndex === index}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
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
      {children.length > 1 && (
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
  );
};

export default Carousel;
