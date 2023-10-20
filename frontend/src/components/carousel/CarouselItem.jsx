import React, { useState } from 'react';


const CarouselItem = ({data,index,activeIndex}) => {
    const [scaled, setScaled] = useState(false);

  const offset = (index - activeIndex) / 4;
  const direction = Math.sign(index - activeIndex);
  const absOffset = Math.abs(offset);

  const cssTransformProperties = `
        rotateY(calc(${offset} * 55deg))
        scaleY(calc(1 +  ${absOffset}  * -0.5))
        translateX(calc( ${direction} * -3.5rem))
        translateZ(calc( ${absOffset} * -35rem))
        scale(${scaled && index === activeIndex ? 6.5 : 1})
       `;

  const cssOpacity = `
        ${Math.abs(index - activeIndex) >= 3 ? '0' : '1'}`;

  const cssDisplay = `
        ${Math.abs(index - activeIndex) >= 3 ? 'none' : 'block'},
  `;
    return (
        <div
        className=" absolute h-full w-full cursor-pointer overflow-hidden rounded-3xl drop-shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-700 ease-in-out"
        style={{
          transform: cssTransformProperties,
          opacity: cssOpacity,
          display: cssDisplay,
          zIndex: `${scaled ? 4 : 1}`,
        }}
        onClick={() => {
          //setScaled(!scaled);
        }}
      >
        {data}
      </div>
    );
};

export default CarouselItem;