import React from 'react';
import Carousel from 'react-elastic-carousel'
import Item from './Item'

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3, itemsToScroll: 3 },
  { width: 1200, itemsToShow: 4 }
];

const Slider = () => {
  const arr = [1,2,3,4,5,6,7,8,9]
  

  return (
    <div className='slider-wrap'>
      <div className='slider-content'>
      <Carousel breakPoints={breakPoints}>
        {
          arr.map((item, index) => {
            return <Item key={index}>{item}</Item>
          })
        }
      </Carousel>
      </div>
    </div>
  );
};


export default Slider;