// eslint-disable-next-line import/order
import Image from 'next/image';

// import { useRouter } from 'next/router';

import PhotoAlbum from 'react-photo-album';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

import nextJsImage from './nextJsImage';
// import photos from './photos';

const photos = [
  {
    src: '/assets/images/BLM2020-2.jpg',
    alt: 'photo taken',
    title: 'photo mine',
    width: 800,
    height: 600,
    sizes: '(max-height: 500px) 1000px',
    className: 'photos',
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

// const App = () => <PhotoAlbum photos={photos} layout="masonry" />;

// <PhotoAlbum layout="columns" photos={photos} renderPhoto={nextJsImage} />;

// export default App;

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <PhotoAlbum
        layout="masonry"
        photos={photos}
        columns={4}
        spacing={40}
        padding={0}
        renderPhoto={nextJsImage}
      />

      <div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-8">
        <div>
          <Image
            src="/banner.png"
            alt=""
            layout="intrinsic"
            width={1000}
            height={1000}
          />
        </div>
        <div className="col-start-3 grid-flow-col hover:grid-flow-row">
          <Image
            src="/banner.png"
            alt=""
            layout="intrinsic"
            width={1000}
            height={1000}
          />
        </div>
        <div>
          <Image
            src="/banner.png"
            alt=""
            layout="intrinsic"
            width={1000}
            height={1000}
          />
        </div>
        <div>
          <Image
            src="/banner.png"
            alt=""
            layout="intrinsic"
            width={1000}
            height={1000}
          />
        </div>
        <div className="col-span-2 col-start-2 row-start-1">
          <Image
            src="/banner.png"
            alt=""
            layout="intrinsic"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      {/* Different formats to display the photos... So future Ronny decides. */}
      <div className="container mx-auto">
        <div className="grid-cols-3 space-y-2 bg-yellow-200 p-20 lg:grid lg:grid-rows-3 lg:gap-3 lg:space-y-0">
          <div className="w-full rounded">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>
          <div className="col-span-2 row-span-2 w-full rounded">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>
          <div className="w-full rounded">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>
          <div className="w-full rounded">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>
          <div className="w-full rounded">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>
          <div className="w-full rounded">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>
        </div>
      </div>
      {/* Another format */}
      <div className="container mx-auto px-4">
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
      </div>
      {/* You know me  */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute inset-x-0 bottom-0 mb-4 flex justify-center p-0">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption absolute hidden text-center md:block">
              <h5 className="text-xl">First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption absolute hidden text-center md:block">
              <h5 className="text-xl">Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption absolute hidden text-center md:block">
              <h5 className="text-xl">Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute inset-y-0 left-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute inset-y-0 right-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Main>
  );
};

export default Index;
