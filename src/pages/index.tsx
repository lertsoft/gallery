import React from 'react';

import PhotoAlbum from 'react-photo-album';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

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
    src: '/assets/images/000678230010.JPG',
    width: 800,
    height: 600,
  },
  {
    src: '/assets/images/IMG_0692.JPG',
    width: 1600,
    height: 900,
  },
  {
    src: '/assets/images/IMG_4328.PNG',
    width: 800,
    height: 600,
  },
  {
    src: '/assets/images/IMG_4329.PNG',
    width: 1600,
    height: 900,
  },
];

const Index = () => {
  const imageClick = () => {
    // eslint-disable-next-line no-console
    console.log('Click');
  };

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
          layout="masonry"
          photos={photos}
          columns={3}
          spacing={10}
          padding={20}
          onClick={() => imageClick()}
        />
      </div>
    </Main>
  );
};

export default Index;
