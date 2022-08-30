import React from 'react';
import Sectiontitles from '../Sectiontitles';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import 'react-multi-carousel/lib/styles.css';
import { useStore } from 'store/store';
import { useState, useEffect } from 'react';
import { PortableText } from '@portabletext/react';

export const Testimonials = () => {
  const { state } = useStore();

  const [getallPost, setallPost] = useState([]);

  useEffect(() => {
    setallPost(state.getTestimonials);
  }, [state]);

  const elem = Object.values(getallPost).map((vl: any, k: any) => {

    return (
      <div key={k} className="test-box">
        <div>
          <div className="para">
            <PortableText value={vl.body} />
          </div>
          <div className="test-img-bx">
            <Image
              src={vl.mainImage}
              width="1"
              height="1"
              alt=""
              layout="responsive"
            />
          </div>
          <h3>{vl.name}</h3>
          <h4>{vl.title}</h4>
        </div>
      </div>
    );
  });

 

  const responsivex = {
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
    <section className="testimonials">
      <Sectiontitles title="TESTIMONIAL" />

      <Carousel
        arrows={true}
        responsive={responsivex}
        autoPlay={false}
        infinite
        slidesToSlide={1}
        swipeable
      >
        {elem}
      </Carousel>
    </section>
  );
};

export default Testimonials;
