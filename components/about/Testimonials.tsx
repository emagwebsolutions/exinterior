import React from 'react';
import Sectiontitles from '../Sectiontitles';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import 'react-multi-carousel/lib/styles.css';

export const Testimonials = () => {
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
              <div className="test-box">
            <div>
          <div className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            fugiat facere dicta cum quas minus nam laudantium eos debitis, ?
          </div>
          <div className="test-img-bx">
            <Image
              src="/test-pic.jpg"
              width="1"
              height="1"
              alt=""
              layout="responsive"
            />
          </div>
          <h3>Mr Mensah</h3>
          <h4>Managing Director</h4>
          </div>
        </div>

        <div className="test-box">
            <div>
          <div className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            fugiat facere dicta cum quas minus nam laudantium eos debitis, ?
          </div>
          <div className="test-img-bx">
            <Image
              src="/test-pic.jpg"
              width="1"
              height="1"
              alt=""
              layout="responsive"
            />
          </div>
          <h3>Mr Mensah</h3>
          <h4>Managing Director</h4>
          </div>
        </div>

        <div className="test-box">
            <div>
          <div className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            fugiat facere dicta cum quas minus nam laudantium eos debitis, ?
          </div>
          <div className="test-img-bx">
            <Image
              src="/test-pic.jpg"
              width="1"
              height="1"
              alt=""
              layout="responsive"
            />
          </div>
          <h3>Mr Mensah</h3>
          <h4>Managing Director</h4>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonials;
