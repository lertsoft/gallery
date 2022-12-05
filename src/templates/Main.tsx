import { ReactNode } from 'react';

import Link from 'next/link';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

// NAVBAR
const Main = (props: IMainProps) => (
  <div className="w-full px-1 antialiased" id="main">
    {props.meta}

    <div className="mx-auto max-w-screen-xl">
      <div className="z fixed cursor-pointer py-8">
        <Link href="/">
          <span className="text-3xl font-bold text-gray-100 hover:text-blue-400">
            {AppConfig.title}
            {/* <div className="text-xl">{AppConfig.description}</div> */}
          </span>
        </Link>
      </div>

      {/* Navbar Div below */}
      <div className="z p-28 pl-10 flex-wrap fixed cursor-pointer">
        <ul className="inline-flex  text-lg font-bold">
          <li className="ml-0 mr-10 ">
            <Link href="/">
              <span className="border-none text-white hover:text-blue-400">
                {' '}
                Landscapes{' '}
              </span>
            </Link>
          </li>
          <li className="mr-10 ml-0">
            <Link
              href="/portraits"
              className="border-none  text-white hover:text-blue-400"
            >
              <span className="border-none text-white hover:text-blue-400">
                {' '}
                Portraits
              </span>
            </Link>
          </li>
          <li className="mr-10 ml-0">
            <Link
              href="/events"
              className="border-none  text-white hover:text-blue-400"
            >
              <span className="border-none text-white hover:text-blue-400">
                {' '}
                Events
              </span>
            </Link>
          </li>
          {/* <li className="mr-10 ml-0 ">
            <a
              href="https://www.ronnycoste.com/about"
              className="border-none text-white hover:text-blue-400"
            >
              The Artist
            </a>
          </li> */}
        </ul>
      </div>
      {/* ^^^^ NavBar Div ^^^^ */}

      {/* Body of the App */}

      <div className=" h-max pt-32">{props.children}</div>

      {/* FOOTER  */}
      <div className="">
        <div className=" z fixed inset-x-0 bottom-1 border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.title}.<br></br>{' '}
          Created with{' '}
          <span role="img" aria-label="Love">
            ♥
          </span>{' '}
          by <a href="https://www.ronnycoste.com">Ronny Coste</a>
        </div>
      </div>
    </div>
  </div>
);

export { Main };
