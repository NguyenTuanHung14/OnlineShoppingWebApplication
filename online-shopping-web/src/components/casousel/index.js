import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';

export default (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {/* <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://dosi-in.com/dosiinmarketplace.jpg'
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://static.dosi-in.com/images/promo/64/PC-GhostFestival-1920-1-week2.jpg'
          alt='Second slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://static.dosi-in.com/images/promo/62/PC-1920.jpg'
          alt='Third slide'
        />
      </Carousel.Item>
    </Carousel>
  );
};
