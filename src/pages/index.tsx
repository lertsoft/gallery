/* eslint-disable no-param-reassign */

import React from 'react';

// import TrailingImage from '@/components/trailingImage';
import TrailingImage from '@/components/trailingImage';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
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
          <TrailingImage />
        </div>
      </>
    </Main>
  );
};

export default Index;
