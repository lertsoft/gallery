/* eslint-disable no-param-reassign */

import React from 'react';

// import TrailingImage from '@/components/trailingImage';
import PortraitsComponent from '@/components/portraitsComponent';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Portraits = () => {
  return (
    <Main
      meta={
        <Meta
          title="Ronny Coste Photo gallery"
          description="Photo gallery with a selection of Photos from the photographer Ronny Coste"
        />
      }
    >
      <>
        <div className=" hide">
          <PortraitsComponent />
        </div>
      </>
    </Main>
  );
};

export default Portraits;
