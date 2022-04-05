import React from 'react';

import PhotoAlbum from 'react-photo-album';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

import Carousel, { CarouselItem } from './carousel';

const photos = [
  {
    src: '/assets/images/BLM2020-2.jpg',
    alt: 'photo taken',
    title: 'photo mine',
    width: 3200,
    height: 2400,
    id: 10,
    sizes: '(max-height: 500px) 1000px',
    className: 'photos',
    loader: 'nextJsImage',
    onClick: 'onClick',
  },
  {
    src: '/assets/images/000678220001.JPG',
    width: 1600,
    height: 900,
  },
  {
    src: '/assets/images/000678220001.JPG',
    width: 800,
    height: 600,
  },
  {
    src: '/assets/images/000678220001.JPG',
    width: 1600,
    height: 900,
  },
  {
    src: '/assets/images/000678220001.JPG',
    width: 800,
    height: 600,
  },
  {
    src: '/banner.png',
    width: 1600,
    height: 900,
  },
];

const Index = () => {
  const imageClick = () => {
    // eslint-disable-next-line no-console
    console.log('Click');
    return (
      <div id="app">
        <Carousel>
          <CarouselItem width={100}>Item 1</CarouselItem>
          <CarouselItem width={100}>Item 2</CarouselItem>
          <CarouselItem width={100}>Item 3</CarouselItem>
        </Carousel>
      </div>
    );
  };

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="inset-y-4 grid gap-10">
        <PhotoAlbum
          layout="masonry"
          photos={photos}
          columns={3}
          spacing={10}
          padding={20}
          onClick={() => imageClick()}
        />
      </div>

      {/* Another format */}
      {/* <div className="container mx-auto px-4">
        <section className="py-8 px-4">
          <div className="-mx-4 flex flex-wrap">
            <div className="hidden px-4 md:block md:w-1/2">
              <div
                className="h-full w-full rounded bg-cover shadow-md"
                // style="background-image: url('https://source.unsplash.com/random/1280x720')"
              ></div>
            </div>
            <div className="h-auto px-4 md:w-1/2">
              <div className="mb-8">
                <img
                  className="rounded shadow-md"
                  src="https://source.unsplash.com/random/1280x720"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded shadow-md"
                  src="https://source.unsplash.com/random/1280x720"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 px-4">
          <div className="-mx-4 flex flex-wrap">
            <div className="mb-8 px-4 md:mb-0 md:w-1/2">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="mb-8 px-4 md:mb-0 md:w-1/2">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="px-4 pt-8">
          <div className="-mx-4 flex flex-wrap">
            <div className="mb-8 px-4 md:w-1/3">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="mb-8 px-4 md:w-1/3">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="mb-8 px-4 md:w-1/3">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="mb-8 px-4 md:w-1/3">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="mb-8 px-4 md:w-1/3">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="mb-8 px-4 md:w-1/3">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
          </div>
        </section>
      </div> */}
    </Main>
  );
};

export default Index;
