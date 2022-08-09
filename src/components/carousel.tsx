import React, { useEffect, useState } from 'react';

// import { useSwipeable } from 'react-swipeable';

export const CarouselItem = ({
  children,
  width,
}: {
  children: any;
  width: any;
}) => {
  return (
    <div id="carousel-item" style={{ width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }: { children: any }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused] = useState(false);
  // const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex: React.SetStateAction<number>) => {
    if (newIndex < 0) {
      // eslint-disable-next-line no-param-reassign
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      // eslint-disable-next-line no-param-reassign
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  // const handlers = useSwipeable({
  //   onSwipedLeft: () => updateIndex(activeIndex + 1),
  //   onSwipedRight: () => updateIndex(activeIndex - 1),
  // });

  return (
    <div
    // {...handlers}
    // id="carousel"
    // onMouseEnter={() => setPaused(true)}
    // onMouseLeave={() => setPaused(false)}
    >
      <div
        id="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, _index) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </div>
      <div id="indicators">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        {React.Children.map(children, (_child, index) => {
          return (
            <button
              className={`${index === activeIndex ? 'active' : ''}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;

// import React, { FunctionComponent } from 'react';

// import { useSwipeable } from 'react-swipeable';
// import styled from 'styled-components';

// export const Paper = styled.div`
//   box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
//     0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
//   border-radius: 4px;
//   padding: 25px;
// `;

// export const NEXT = 'NEXT';
// export const PREV = 'PREV';

// export const Item = styled.div<{ img: string }>`
//   text-align: center;
//   padding: 100px;
//   background-image: ${(props) => `url(${props.img})`};
//   background-size: cover;
// `;

// export const CarouselContainer = styled.div<{ sliding: boolean }>`
//   display: flex;
//   transition: ${(props) => (props.sliding ? 'none' : 'transform 1s ease')};
//   transform: ${(props) => {
//     if (!props.sliding) return 'translateX(calc(-80% - 20px))';
//     if (props.dir === PREV) return 'translateX(calc(2 * (-80% - 20px)))';
//     return 'translateX(0%)';
//   }};
// `;

// export const Wrapper = styled.div`
//   width: 100%;
//   overflow: hidden;
//   box-shadow: 5px 5px 20px 7px rgba(168, 168, 168, 1);
// `;

// export const CarouselSlot = styled.div<{ order: number }>`
//   flex: 1 0 100%;
//   flex-basis: 80%;
//   margin-right: 20px;
//   order: ${(props) => props.order};
// `;

// export const SlideButtonContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// export const SlideButton = styled.button<{ float: 'left' | 'right' }>`
//   color: #ffffff;
//   font-family: Open Sans;
//   font-size: 16px;
//   font-weight: 100;
//   padding: 10px;
//   background-color: #f66f3e;
//   border: 1px solid white;
//   text-decoration: none;
//   display: inline-block;
//   cursor: pointer;
//   margin-top: 20px;
//   text-decoration: none;

//   &:active {
//     position: relative;
//     top: 1px;
//   }
//   &:focus {
//     outline: 0;
//   }
// `;

// export const PatternBox = styled.div`
//   border: 2px solid black;
//   width: 60%;
//   margin: 20px auto;
//   padding: 30px 20px;
//   white-space: pre-line;
// `;

// export const D = styled.span`
//   padding: 3px;
// `;
// type Direction = typeof PREV | typeof NEXT;

// interface CarouselState {
//   pos: number;
//   sliding: boolean;
//   dir: Direction;
// }

// type CarouselAction =
//   | { type: Direction; numItems: number }
//   | { type: 'stopSliding' };

// const getOrder = (index: number, pos: number, numItems: number) => {
//   return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
// };

// const getInitialState = (numItems: number): CarouselState => ({
//   pos: numItems - 1,
//   sliding: false,
//   dir: NEXT,
// });

// const Carousel: FunctionComponent = (props) => {
//   const numItems = React.Children.count(props.children);
//   const [state, dispatch] = React.useReducer(
//     reducer,
//     getInitialState(numItems)
//   );

//   const slide = (dir: Direction) => {
//     dispatch({ type: dir, numItems });
//     setTimeout(() => {
//       dispatch({ type: 'stopSliding' });
//     }, 50);
//   };

//   const handlers = useSwipeable({
//     onSwipedLeft: () => slide(NEXT),
//     onSwipedRight: () => slide(PREV),
//     preventDefaultTouchmoveEvent: true,
//     trackMouse: true,
//   });

//   return (
//     <div {...handlers}>
//       <div>
//         <CarouselContainer dir={state.dir} sliding={state.sliding}>
//           {React.Children.map(props.children, (child, index) => (
//             <CarouselSlot order={getOrder(index, state.pos, numItems)}>
//               {child}
//             </CarouselSlot>
//           ))}
//         </CarouselContainer>
//       </div>
//       <SlideButtonContainer>
//         <SlideButton onClick={() => slide(PREV)} float="left">
//           Prev
//         </SlideButton>
//         <SlideButton onClick={() => slide(NEXT)} float="right">
//           Next
//         </SlideButton>
//       </SlideButtonContainer>
//     </div>
//   );
// };

// function reducer(state: CarouselState, action: CarouselAction): CarouselState {
//   switch (action.type) {
//     case PREV:
//       return {
//         ...state,
//         dir: PREV,
//         sliding: true,
//         pos: state.pos === 0 ? action.numItems - 1 : state.pos - 1,
//       };
//     case NEXT:
//       return {
//         ...state,
//         dir: NEXT,
//         sliding: true,
//         pos: state.pos === action.numItems - 1 ? 0 : state.pos + 1,
//       };
//     case 'stopSliding':
//       return { ...state, sliding: false };
//     default:
//       return state;
//   }
// }

// export default Carousel;

// import React, { useEffect, useState } from 'react';
// import 'tw-elements';

// // import { ScriptProps } from 'next/script';
// import { useSwipeable } from 'react-swipeable';

// // import './Carousel.css';

// export const CarouselItem = ({
//   children,
//   width,
// }: {
//   children: any;
//   width: any;
// }) => {
//   return (
//     <div className="carousel-item" style={{ width }}>
//       {children}
//     </div>
//   );
// };

// // Always name functions components with an Capital letter to begin or React will react badly and not like you!!
// // The any on the function is to apease Typescript hunger for types as we need to declare how we want the code to work and not let it be
// // Decide by the compiler.
// const Carousel = ({ children }: { children: any }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [paused, setPaused] = useState(false);

//   const updateIndex = (newIndex: any) => {
//     if (newIndex < 0) {
//       // eslint-disable-next-line no-param-reassign
//       newIndex = React.Children.count(children) - 1;
//     } else if (newIndex >= React.Children.count(children)) {
//       // eslint-disable-next-line no-param-reassign
//       newIndex = 0;
//     }

//     setActiveIndex(newIndex);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!paused) {
//         updateIndex(activeIndex + 1);
//       }
//     }, 3000);

//     return () => {
//       if (interval) {
//         clearInterval(interval);
//       }
//     };
//   });

//   const handlers = useSwipeable({
//     onSwipedLeft: () => updateIndex(activeIndex + 1),
//     onSwipedRight: () => updateIndex(activeIndex - 1),
//   });

//   return (
//     <div
//       {...handlers}
//       className="carousel"
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//     >
//       <div
//         className="inner"
//         style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//       >
//         {React.Children.map(children, (child) => {
//           return React.cloneElement(child, { width: '100%' });
//         })}
//       </div>
//       <div className="indicators">
//         <button
//           onClick={() => {
//             updateIndex(activeIndex - 1);
//           }}
//         >
//           Prev
//         </button>
//         {React.Children.map(children, (index) => {
//           return (
//             <button
//               className={`${index === activeIndex ? 'active' : ''}`}
//               onClick={() => {
//                 updateIndex(index);
//               }}
//             >
//               {index + 1}
//             </button>
//           );
//         })}
//         <button
//           onClick={() => {
//             updateIndex(activeIndex + 1);
//           }}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
