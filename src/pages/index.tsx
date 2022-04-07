import React from 'react';

import PhotoAlbum from 'react-photo-album';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

// import Carousel, { CarouselItem } from './carousel';
import NextJsImage from '../components/nextJsImage';

const photos = [
  {
    src: '/assets/images/BLM2020.JPG',
    alt: 'Summer 2020 - BLM',
    title: 'in protest we trust',
    width: 3200,
    height: 2400,
    sizes: '(max-height: 500px) 1000px',
    className: 'photos',
    loader: 'nextJsImage',
    onClick: 'onClick',
  },
  {
    src: '/assets/images/arq_000078040018.JPG',
    alt: 'Old Manhattan arquitecture',
    title: 'Police departement late 1800',
    width: 1080,
    height: 1350,
    sizes: '(max-height: 500px) 1000px',
    className: 'photos',
    loader: 'nextJsImage',
    onClick: 'onClick',
  },
  {
    src: '/assets/images/brook_76480009.JPG',
    alt: 'Brook Interview portrait',
    title: 'Brook Interview portrait',
    width: 3200,
    height: 2400,
    sizes: '(max-height: 500px) 1000px',
    className: 'photos',
    loader: 'nextJsImage',
    onClick: 'onClick',
  },
  {
    src: '/assets/images/brook_76480010.JPG',
    width: 1080,
    height: 1350,
  },
  {
    src: '/assets/images/cover_000078040032.JPG',
    alt: 'Album Cover',
    title: 'Album Cover',
    width: 1080,
    height: 1350,
    sizes: '(max-height: 500px) 1000px',
    className: 'photos',
    loader: 'nextJsImage',
    onClick: 'onClick',
  },
  {
    src: '/assets/images/pa_000678220001.JPG',
    alt: 'PA rural streets',
    title: 'PA rural streets',
    width: 3200,
    height: 2400,
    sizes: '(max-height: 500px) 1000px',
    className: 'photos',
    loader: 'nextJsImage',
    onClick: 'onClick',
  },
  {
    src: '/assets/images/pa_000678230010.JPG',
    alt: 'PA rural streets',
    title: 'PA rural streets',
    width: 3200,
    height: 2400,
    sizes: '(max-height: 500px) 1000px',
    className: 'photos',
    loader: 'nextJsImage',
    onClick: 'onClick',
  },
  {
    src: '/assets/images/portrait_78050009.JPG',
    alt: 'GoodBye NewYork',
    title: 'GoodBye NewYork shoot',
    width: 1080,
    height: 1350,
    sizes: '(max-height: 500px) 1000px',
    className: 'photos',
    loader: 'nextJsImage',
    onClick: 'onClick',
  },
  {
    src: '/assets/images/tns_21920005.JPG',
    width: 1080,
    height: 1120,
  },
];

const Index = () => {
  // const imageClick = () => {
  //   // eslint-disable-next-line no-console
  //   console.log('Click');
  //   return (
  //     <div id="app">
  //       <Carousel>
  //         <CarouselItem width={100}>Item 1</CarouselItem>
  //         <CarouselItem width={100}>Item 2</CarouselItem>
  //         <CarouselItem width={100}>Item 3</CarouselItem>
  //       </Carousel>
  //     </div>
  //   );
  // };

  return (
    <Main
      meta={
        <Meta
          title="Ronny Coste Photo gallery"
          description="Photo gallery with a selection of photos from the photographer Ronny Coste"
        />
      }
    >
      <div className="inset-y-4 grid gap-10">
        <PhotoAlbum
          renderPhoto={NextJsImage}
          layout="masonry"
          photos={photos}
          columns={3}
          spacing={10}
          padding={20}
        />
      </div>
    </Main>
  );
};

export default Index;
