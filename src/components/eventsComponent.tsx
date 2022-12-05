/* eslint-disable no-param-reassign */
import React from 'react';

import { Events } from '@/data/events';

const EventsComponent = (): JSX.Element => {
  let images: string | any[] | HTMLCollectionOf<Element>;

  if (typeof window !== 'undefined') {
    images = document.getElementsByClassName('image');
  }

  let globalIndex = 0;
  let last = { x: 0, y: 0 };

  const activate = (image: any, x: number, y: number) => {
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
    image.style.zIndex = globalIndex;

    // e.stopPropagation();

    image.dataset.status = 'active';

    last = { x, y };
  };

  const distanceFromLast = (x: number, y: number) => {
    return Math.hypot(x - last.x, y - last.y);
  };

  const handleOnMove = (e: any): void => {
    if (distanceFromLast(e.clientX, e.clientY) > window.innerWidth / 10) {
      const lead: any = images[globalIndex % images.length];
      const tail: any = images[(globalIndex - 5) % images.length];

      activate(lead, e.clientX, e.clientY);
      // e.stopPropagation();

      if (tail) tail.dataset.status = 'inactive';

      // eslint-disable-next-line no-plusplus
      globalIndex++;
    }
  };

  if (typeof window !== 'undefined') {
    window.onmousemove = (e) => handleOnMove(e);
    window.ontouchmove = (e) => handleOnMove(e.touches[0]);
    // e.stopPropagation();
  }

  // function handleOnMove(e: React.TouchEvent<HTMLImageElement>): void {
  //   throw new Error('Function not implemented.');
  // }

  return (
    <>
      <div className=" block">
        {Events.map(({ src, alt, title, index }) => (
          <img
            key={index}
            src={src}
            alt={alt}
            title={title}
            className="image"
            data-index={index}
            data-status="inactive"
            // onTouchMove={(e) => handleOnMove(e.touches[0])}
            // onMouseMove={(e) => handleOnMove(e)}
          />
        ))}
      </div>
    </>
  );
};

export default EventsComponent;
