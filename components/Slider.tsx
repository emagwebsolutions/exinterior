import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

export const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="slider-wrapper">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite
        autoPlaySpeed={3000}
        slidesToSlide={1}
        swipeable
      >
        <Image
          src="/slide1.jpg"
          alt=""
          width="5"
          height="2"
          layout="responsive"
        />
        <Image
          src="/slide2.jpg"
          alt=""
          width="5"
          height="2"
          layout="responsive"
        />
        <Image
          src="/slide3.jpg"
          alt=""
          width="5"
          height="2"
          layout="responsive"
        />
      </Carousel>
    </div>
  );
};

export default Slider;
