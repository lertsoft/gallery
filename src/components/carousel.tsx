import React, { useEffect, useState } from 'react';

export const CarouselItem = ({
  children,
  width,
}: {
  children: any;
  width: any;
}) => {
  return (
    <div id="carousel-item" style={{ width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }: { children: any }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused] = useState(false);
  // const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex: React.SetStateAction<number>) => {
    if (newIndex < 0) {
      // eslint-disable-next-line no-param-reassign
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      // eslint-disable-next-line no-param-reassign
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  // const handlers = useSwipeable({
  //   onSwipedLeft: () => updateIndex(activeIndex + 1),
  //   onSwipedRight: () => updateIndex(activeIndex - 1),
  // });

  return (
    <div
    // {...handlers}
    // id="carousel"
    // onMouseEnter={() => setPaused(true)}
    // onMouseLeave={() => setPaused(false)}
    >
      <div
        id="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, _index) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </div>
      <div id="indicators">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        {React.Children.map(children, (_child, index) => {
          return (
            <button
              className={`${index === activeIndex ? 'active' : ''}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
