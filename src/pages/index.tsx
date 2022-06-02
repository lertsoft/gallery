import React from 'react';

import PhotoAlbum from 'react-photo-album';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

// import Carousel, { CarouselItem } from './carousel';
import NextJsImage from '../components/nextJsImage';

const photos = [
  {
    src: '/assets/images/76480002.JPG',
    alt: 'Salomon Ligthelm',
    title: 'Salomon Ligthelm',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },

  {
    src: '/assets/images/01530001.JPG',
    alt: 'WSP Spirit',
    title: 'Washington Square Park Spirit',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/76480006.PNG',
    alt: 'Pierre Benoit',
    title: 'Pierre Benoit',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
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
    src: '/assets/images/76480007.PNG',
    alt: 'Brook Boughton',
    title: 'Brook Boughton',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
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
    src: '/assets/images/brook_76480010.JPG',
    alt: 'Brook Interview portrait',
    title: 'Brook Interview portrait',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
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
    alt: 'India Graduation portrait',
    title: 'India Graduation portrait',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/01530003.JPG',
    alt: 'Reservoir of Central Park',
    title: 'Reservoir of Central Park',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/01530004.JPG',
    alt: 'Double Exposed portrait',
    title: 'Double Exposed portrait',
    width: 3200,
    height: 2400,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/000002010003.jpg',
    alt: 'Hide and Seek',
    title: 'Hide and Seek',
    width: 3200,
    height: 2400,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/000002010002.jpg',
    alt: 'Climb or Hike',
    title: 'Climb or Hike',
    width: 3200,
    height: 2400,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/04550033.JPG',
    alt: 'NYC From the skies',
    title: 'NYC from the skies',
    width: 3200,
    height: 2400,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/13710005.JPG',
    alt: 'Samson portrait',
    title: 'Samson portrait',
    width: 3200,
    height: 2400,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/04550035.JPG',
    alt: 'Brooklyn Bridge from the skies',
    title: 'Brooklyn Bridge from the skies',
    width: 3200,
    height: 2400,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/04550036.JPG',
    alt: 'Skyline portraits',
    title: 'Skyline',
    width: 3200,
    height: 2400,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/12070008.JPG',
    alt: 'Vacation mode',
    title: 'Vacay mode',
    width: 3200,
    height: 2400,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/12070009.JPG',
    alt: 'Concrete and Wood',
    title: 'Concrete and Wood',
    width: 3200,
    height: 2400,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/12080001.JPG',
    alt: 'Snow fight',
    title: 'Snow Fight',
    width: 3200,
    height: 2400,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/12080005.JPG',
    alt: 'Snow storm NYC 2021',
    title: '',
    width: 3200,
    height: 2400,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/12080006.JPG',
    alt: 'Snow storm NYC 2021',
    title: 'Empty streets',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/12080009.JPG',
    alt: 'guitar Hotel',
    title: 'Guitar Hotel Miami',
    width: 3200,
    height: 2400,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/24430002.JPG',
    alt: 'Into the wild',
    title: 'Into the Wild',
    width: 3200,
    height: 2400,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/24430010.JPG',
    alt: 'Into the Wild',
    title: 'Into the Wild...',
    width: 3200,
    height: 2400,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/32790004.JPG',
    alt: 'last day in bk',
    title: 'Last day in bk',
    width: 1080,
    height: 1080,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/76480008.JPG',
    alt: 'Brook interview BTS',
    title: 'Brook interview BTS',
    width: 3200,
    height: 2400,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/78050001.JPG',
    alt: 'NYC <3',
    title: 'NYC <3',
    width: 3200,
    height: 2400,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/78050002.JPG',
    alt: 'NYC <3',
    title: 'NYC <3',
    width: 3200,
    height: 2400,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/78050004.JPG',
    alt: 'NYC Paints',
    title: 'NYC Paints',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/87280009.JPG',
    alt: 'Elizabeth <3',
    title: 'Elizabeth <3',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/000678220002.jpg',
    alt: 'Summer days',
    title: 'Summer days',
    width: 3200,
    height: 2400,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/000678230002.jpg',
    alt: 'NYC Chinatown <3',
    title: 'Chinatown <3',
    width: 3200,
    height: 2400,
    className: 'photos',
    loader: 'nextJsImage',
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
          columns={(containerWidth) => {
            if (containerWidth < 450) return 2;
            if (containerWidth < 800) return 3;
            return 4;
          }}
          spacing={5}
          padding={10}
        />
      </div>
    </Main>
  );
};

export default Index;
