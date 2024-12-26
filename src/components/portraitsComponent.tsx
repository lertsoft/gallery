import React, { useState, useEffect, JSX, useCallback } from 'react';

import { portraits } from '@/data/portraits';

const TrailingImage = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [images, setImages] = useState<HTMLCollectionOf<Element> | null>(null);
  const [globalIndex, setGlobalIndex] = useState(0);
  const [last, setLast] = useState({ x: 0, y: 0 });
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setImages(document.getElementsByClassName('image'));
    }
  }, []);

  const activate = (image: HTMLElement, x: number, y: number) => {
    const newImage = image.cloneNode(true) as HTMLElement;
    newImage.style.left = `${x}px`;
    newImage.style.top = `${y}px`;
    newImage.style.zIndex = globalIndex.toString();
    newImage.dataset.status = 'active';

    newImage.addEventListener('click', () => {
      const index = Number(newImage.getAttribute('data-index'));
      if (!Number.isNaN(index)) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        handleImageClick(index);
      }
    });

    image.parentNode?.replaceChild(newImage, image);
    setLast({ x, y });
  };

  const distanceFromLast = (x: number, y: number) => {
    return Math.hypot(x - last.x, y - last.y);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleOnMove = (e: MouseEvent | Touch): void => {
    if (!images) return;

    if (distanceFromLast(e.clientX, e.clientY) > window.innerWidth / 10) {
      const lead = images[globalIndex % images.length] as HTMLElement;
      const tail = images[(globalIndex - 5) % images.length] as HTMLElement;

      activate(lead, e.clientX, e.clientY);

      if (tail) tail.dataset.status = 'inactive';

      setGlobalIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleOnMove(e);
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        handleOnMove(e.touches[0]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [images, globalIndex, last, handleOnMove]);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleCloseCarousel = () => {
    setSelectedImage(null);
  };

  const handlePrevImage = () => {
    setSelectedImage((prev) => {
      if (prev === null) return null;
      if (prev === 0) return portraits.length - 1;
      return prev - 1;
    });
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => {
      if (prev === null) return null;
      if (prev === portraits.length - 1) return 0;
      return prev + 1;
    });
  };
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      setTouchStart(e.touches[0].clientX);
    }
  };

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!touchStart) return;

      const currentTouch = e.touches[0]?.clientX;
      if (!currentTouch) return;

      const diff = touchStart - currentTouch;

      // Swipe threshold of 50px
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // Swipe left
          handleNextImage();
        } else {
          // Swipe right
          handlePrevImage();
        }
        setTouchStart(null);
      }
    },
    [touchStart]
  );

  return (
    <>
      <div className="block">
        {portraits.map(({ src, alt, title, index }) => (
          <img
            key={index}
            src={src}
            alt={alt}
            title={title}
            className="image touch-manipulation"
            data-index={index}
            data-status="inactive"
          />
        ))}
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/70 z-50 flex items-center justify-center"
          onClick={handleCloseCarousel}
          // onTouchStart={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setTouchStart(null)}
        >
          <button
            className="absolute top-0 right-0 w-16 h-16 sm:w-12 sm:h-12 text-white text-4xl hover:text-gray-300 z-50 m-2"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleCloseCarousel();
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleCloseCarousel();
            }}
            aria-label="Close gallery"
          >
            <div className="w-full h-full rounded-full bg-black/40 flex items-center justify-center">
              ×
            </div>
          </button>

          <div className="absolute inset-y-0 left-0 w-1/3 flex items-center">
            <button
              className="w-full h-full flex items-center justify-start px-4"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handlePrevImage();
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handlePrevImage();
              }}
              aria-label="Previous image"
            >
              <span className="text-6xl sm:text-6xl text-white opacity-75 hover:opacity-100 active:opacity-100 transition-opacity bg-black/20 rounded-full w-16 h-16 sm:w-12 sm:h-12 flex items-center justify-center">
                ‹
              </span>
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 w-1/3 flex items-center">
            <button
              className="w-full h-full flex items-center justify-end px-4"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleNextImage();
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleNextImage();
              }}
              aria-label="Next image"
            >
              <span className="text-6xl sm:text-6xl text-white opacity-75 hover:opacity-100 active:opacity-100 transition-opacity bg-black/20 rounded-full w-16 h-16 sm:w-12 sm:h-12 flex items-center justify-center">
                ›
              </span>
            </button>
          </div>

          <img
            src={portraits[selectedImage]?.src}
            alt={portraits[selectedImage]?.alt}
            className=" bg-transparent max-h-[90vh] max-w-[90vw] object-contain drop-shadow-2xl select-none"
            onClick={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
            draggable={false}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          />

          <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
            <div className="text-white/50 text-sm">Swipe to navigate</div>
          </div>
        </div>
      )}
    </>
  );
};

export default TrailingImage;
