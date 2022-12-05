/* eslint-disable no-param-reassign */

import React from 'react';

// import TrailingImage from '@/components/trailingImage';
import EventsComponent from '@/components/eventsComponent';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Events = () => {
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
          <EventsComponent />
        </div>
      </>
    </Main>
  );
};

export default Events;
