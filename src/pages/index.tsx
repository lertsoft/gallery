import { useRouter } from 'next/router';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-8">
        <div>
          <img src="" alt="" />
        </div>
        <div className="col-start-3 grid-flow-col hover:grid-flow-row">
          <img
            src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
            alt=""
          />
        </div>
        <div>
          <img
            src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
            alt=""
          />
        </div>
        <div>
          <img
            src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
            alt=""
          />
        </div>
        <div className="col-span-2 col-start-2 row-start-1">
          <img
            src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
            alt=""
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

        <section className="py-8 px-4">
          <div className="-mx-4 -mb-8 flex flex-wrap">
            <div className="mb-8 px-4 md:w-1/4">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="mb-8 px-4 md:w-1/4">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="mb-8 px-4 md:w-1/4">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="mb-8 px-4 md:w-1/4">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="mb-8 px-4 md:w-1/4">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="mb-8 px-4 md:w-1/4">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="mb-8 px-4 md:w-1/4">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="mb-8 px-4 md:w-1/4">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </Main>
  );
};

export default Index;
