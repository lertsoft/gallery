/* eslint-disable no-param-reassign */
import React from 'react';

const Photos = [
  {
    src: '/assets/images/76480002.JPG',
    alt: 'Salomon Ligthelm',
    title: 'Salomon Ligthelm',
    width: 1080,
    height: 1350,
    className: 'image',
    loader: 'nextJsImage',
    index: 1,
    status: 'inactive',
  },

  {
    src: '/assets/images/01530001.JPG',
    alt: 'WSP Spirit',
    title: 'Washington Square Park Spirit',
    width: 1080,
    height: 1350,
    className: 'image',
    loader: 'nextJsImage',
    index: 2,
    status: 'inactive',
  },
  {
    src: '/assets/images/76480006.PNG',
    alt: 'Pierre Benoit',
    title: 'Pierre Benoit',
    width: 1080,
    height: 1350,
    className: 'image',
    loader: 'nextJsImage',
    index: 3,
    status: 'inactive',
  },
  {
    src: '/assets/images/brook_76480009.JPG',
    alt: 'Brook Interview portrait',
    title: 'Brook Interview portrait',
    width: 3200,
    height: 2400,
    sizes: '(max-height: 500px) 1000px',
    className: 'image',
    loader: 'nextJsImage',
    onClick: 'onClick',
    index: 4,
    status: 'inactive',
  },
  {
    src: '/assets/images/76480007.PNG',
    alt: 'Brook Boughton',
    title: 'Brook Boughton',
    width: 1080,
    height: 1350,
    className: 'image',
    loader: 'nextJsImage',
    index: 5,
    status: 'inactive',
  },
  {
    src: '/assets/images/arq_000078040018.JPG',
    alt: 'Old Manhattan arquitecture',
    title: 'Police departement late 1800',
    width: 1080,
    height: 1350,
    sizes: '(max-height: 500px) 1000px',
    className: 'Photos, image',
    loader: 'nextJsImage',
    onClick: 'onClick',
    index: 6,
    status: 'inactive',
  },
  {
    src: '/assets/images/BLM2020.JPG',
    alt: 'Summer 2020 - BLM',
    title: 'in protest we trust',
    width: 3200,
    height: 2400,
    sizes: '(max-height: 500px) 1000px',
    className: 'Photos, image',
    loader: 'nextJsImage',
    onClick: 'onClick',
    index: 7,
    status: 'inactive',
  },
  {
    src: '/assets/images/brook_76480010.JPG',
    alt: 'Brook Interview portrait',
    title: 'Brook Interview portrait',
    width: 1080,
    height: 1350,
    className: 'Photos, image',
    loader: 'nextJsImage',
    index: 8,
    status: 'inactive',
  },
  {
    src: '/assets/images/cover_000078040032.JPG',
    alt: 'Album Cover',
    title: 'Album Cover',
    width: 1080,
    height: 1350,
    sizes: '(max-height: 500px) 1000px',
    className: 'Photos, image',
    loader: 'nextJsImage',
    onClick: 'onClick',
    index: 9,
    status: 'inactive',
  },
  {
    src: '/assets/images/pa_000678220001.JPG',
    alt: 'PA rural streets',
    title: 'PA rural streets',
    width: 3200,
    height: 2400,
    sizes: '(max-height: 500px) 1000px',
    className: 'Photos, image',
    loader: 'nextJsImage',
    onClick: 'onClick',
    index: 10,
    status: 'inactive',
  },
  {
    src: '/assets/images/portrait_78050009.JPG',
    alt: 'GoodBye NewYork',
    title: 'GoodBye NewYork shoot',
    width: 1080,
    height: 1350,
    sizes: '(max-height: 500px) 1000px',
    className: 'Photos',
    loader: 'nextJsImage',
    onClick: 'onClick',
    index: 11,
    status: 'inactive',
  },
  {
    src: '/assets/images/tns_21920005.JPG',
    alt: 'India Graduation portrait',
    title: 'India Graduation portrait',
    width: 1080,
    height: 1350,
    className: 'Photos',
    loader: 'nextJsImage',
    index: 12,
    status: 'inactive',
  },
  {
    src: '/assets/images/01530003.JPG',
    alt: 'Reservoir of Central Park',
    title: 'Reservoir of Central Park',
    width: 1080,
    height: 1350,
    className: 'Photos',
    loader: 'nextJsImage',
    index: 13,
    status: 'inactive',
  },
  {
    src: '/assets/images/01530004.JPG',
    alt: 'Double Exposed portrait',
    title: 'Double Exposed portrait',
    width: 3200,
    height: 2400,
    className: 'Photos',
    loader: 'nextJsImage',
    index: 14,
    status: 'inactive',
  },
  {
    src: '/assets/images/000002010003.jpg',
    alt: 'Hide and Seek',
    title: 'Hide and Seek',
    width: 3200,
    height: 2400,
    className: 'Photos',
    loader: 'nextJsImage',
    index: 15,
    status: 'inactive',
  },
  {
    src: '/assets/images/000002010002.jpg',
    alt: 'Climb or Hike',
    title: 'Climb or Hike',
    width: 3200,
    height: 2400,
    className: 'Photos',
    loader: 'nextJsImage',
    index: 16,
    status: 'inactive',
  },
  {
    src: '/assets/images/04550033.JPG',
    alt: 'NYC From the skies',
    title: 'NYC from the skies',
    width: 3200,
    height: 2400,
    className: 'Photos',
    loader: 'nextJsImage',
    index: 17,
    status: 'inactive',
  },
  {
    src: '/assets/images/13710005.JPG',
    alt: 'Samson portrait',
    title: 'Samson portrait',
    width: 3200,
    height: 2400,
    className: 'Photos',
    loader: 'nextJsImage',
    index: 18,
    status: 'inactive',
  },
  {
    src: '/assets/images/04550035.JPG',
    alt: 'Brooklyn Bridge from the skies',
    title: 'Brooklyn Bridge from the skies',
    width: 3200,
    height: 2400,
    className: 'Photos',
    loader: 'nextJsImage',
    index: 19,
    status: 'inactive',
  },
  {
    src: '/assets/images/04550036.JPG',
    alt: 'Skyline portraits',
    title: 'Skyline',
    width: 3200,
    height: 2400,
    className: 'Photos',
    loader: 'nextJsImage',
    index: 20,
    status: 'inactive',
  },
  {
    src: '/assets/images/12070008.JPG',
    alt: 'Vacation mode',
    title: 'Vacay mode',
    width: 3200,
    height: 2400,
    className: 'Photos',
    loader: 'nextJsImage',
    index: 21,
    status: 'inactive',
  },
  {
    src: '/assets/images/12070009.JPG',
    alt: 'Concrete and Wood',
    title: 'Concrete and Wood',
    width: 3200,
    height: 2400,
    className: 'Photos',
    loader: 'nextJsImage',
    index: 22,
    status: 'inactive',
  },
  {
    src: '/assets/images/12080001.JPG',
    alt: 'Snow fight',
    title: 'Snow Fight',
    width: 3200,
    height: 2400,
    className: 'Photos',
    loader: 'nextJsImage',
    index: 23,
    status: 'inactive',
  },
  {
    src: '/assets/images/12080005.JPG',
    alt: 'Snow storm NYC 2021',
    title: '',
    width: 3200,
    height: 2400,
    className: 'Photos',
    loader: 'nextJsImage',
    index: 24,
    status: 'inactive',
  },
  {
    src: '/assets/images/12080006.JPG',
    alt: 'Snow storm NYC 2021',
    title: 'Empty streets',
    width: 1080,
    height: 1350,
    className: 'Photos',
    loader: 'nextJsImage',
    index: 25,
    status: 'inactive',
  },
  {
    src: '/assets/images/12080009.JPG',
    alt: 'guitar Hotel',
    title: 'Guitar Hotel Miami',
    width: 3200,
    height: 2400,
    className: 'Photos',
    loader: 'nextJsImage',
    index: 26,
    status: 'inactive',
  },
  {
    src: '/assets/images/24430002.JPG',
    alt: 'Into the wild',
    title: 'Into the Wild',
    width: 3200,
    height: 2400,
    className: 'Photos',
    loader: 'nextJsImage',
    index: 27,
    status: 'inactive',
  },
  {
    src: '/assets/images/24430010.JPG',
    alt: 'Into the Wild',
    title: 'Into the Wild...',
    width: 3200,
    height: 2400,
    className: 'Photos',
    loader: 'nextJsImage',
    index: 28,
    status: 'inactive',
  },
  {
    src: '/assets/images/32790004.JPG',
    alt: 'last day in bk',
    title: 'Last day in bk',
    width: 1080,
    height: 1080,
    className: 'Photos',
    loader: 'nextJsImage',
    index: 29,
    status: 'inactive',
  },
  {
    src: '/assets/images/76480008.JPG',
    alt: 'Brook interview BTS',
    title: 'Brook interview BTS',
    width: 3200,
    height: 2400,
    className: 'Photos',
    loader: 'nextJsImage',
    index: 30,
    status: 'inactive',
  },
  {
    src: '/assets/images/78050001.JPG',
    alt: 'NYC <3',
    title: 'NYC <3',
    width: 3200,
    height: 2400,
    className: 'Photos',
    loader: 'nextJsImage',
    index: 31,
    status: 'inactive',
  },
  {
    src: '/assets/images/78050002.JPG',
    alt: 'NYC <3',
    title: 'NYC <3',
    width: 3200,
    height: 2400,
    className: 'Photos',
    loader: 'nextJsImage',
    index: 32,
    status: 'inactive',
  },
  {
    src: '/assets/images/78050004.JPG',
    alt: 'NYC Paints',
    title: 'NYC Paints',
    width: 1080,
    height: 1350,
    className: 'Photos',
    loader: 'nextJsImage',
    index: 33,
    status: 'inactive',
  },
  {
    src: '/assets/images/87280009.JPG',
    alt: 'Elizabeth <3',
    title: 'Elizabeth <3',
    width: 1080,
    height: 1350,
    className: 'Photos',
    loader: 'nextJsImage',
    index: 34,
    status: 'inactive',
  },
  {
    src: '/assets/images/000678220002.jpg',
    alt: 'Summer days',
    title: 'Summer days',
    width: 3200,
    height: 2400,
    className: 'Photos',
    loader: 'nextJsImage',
    index: 35,
    status: 'inactive',
  },
  {
    src: '/assets/images/000678230002.jpg',
    alt: 'NYC Chinatown <3',
    title: 'Chinatown <3',
    width: 3200,
    height: 2400,
    className: 'Photos',
    loader: 'nextJsImage',
    index: 36,
    status: 'inactive',
  },
];

const TrailingImage = (): JSX.Element => {
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
    if (distanceFromLast(e.clientX, e.clientY) > window.innerWidth / 15) {
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
      <div className="">
        {Photos.map(({ src, alt, title, index }) => (
          <img
            key={index}
            src={src}
            alt={alt}
            title={title}
            // sizes=500
            // width="500px"
            // height="600px"
            className="image"
            data-index={index}
            data-status="inactive"
            onTouchMove={(e) => handleOnMove(e.touches[0])}
            onMouseMove={(e) => handleOnMove(e)}
          />
        ))}
      </div>
    </>
  );
};

export default TrailingImage;
