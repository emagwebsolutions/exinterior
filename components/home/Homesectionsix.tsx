import React from 'react';
import Image from 'next/image';
import { useStore } from 'store/store.js';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Homesectionsix = () => {
  const { state } = useStore();

  const [clientele, setClientele] = useState([]);

  useEffect(() => {
    setClientele(state.getClientele);
  }, [state]);

  const obj = Object.values(clientele).map((v: any, k: any) => (
    <div key={k}>
      <Image
        layout="responsive"
        alt=""
        src={v.mainImage}
        width="5"
        height="1"
      />
    </div>
  ));

  const responsivex = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <section>
      <Carousel
        arrows={false}
        responsive={responsivex}
        autoPlay={true}
        infinite
        autoPlaySpeed={3000}
        slidesToSlide={1}
        swipeable
      >
        {obj}
      </Carousel>
    </section>
  );
};

export default Homesectionsix;
