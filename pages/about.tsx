import Nav from 'components/nav/Nav';
import Pageheader from 'components/Pageheader';
import { PortableText } from '@portabletext/react';
import { useStore } from 'store/store';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Testimonials from 'components/Testimonials';

const About = () => {
  const { state } = useStore();

  const [getallPost, setallPost] = useState([]);

  useEffect(() => {
    setallPost(state.getPost);
  }, [state]);

  const elem = Object.values(getallPost)
    .filter((v: any) => {
      return v.slug == 'welcome-to-ex-interior-designs-ltd';
    })
    .map((vl: any, k: any) => {
      return (
        <div key={k} className="about-content">
          <div className="col-2">
            <Image
              src={vl.mainImage}
              alt=""
              layout="responsive"
              width="8"
              height="7"
            />
          </div>

          <div className="col-2">
            <h3>{vl.title}</h3>
            <PortableText value={vl.body} />
          </div>
        </div>
      );
    });

  return (
    <div className="about">
      <section>
        <Nav />
      </section>
      <Pageheader parent="Home" child="About" page="About" />
      <section>{elem}</section>
      <Testimonials />
    </div>
  );
};

export default About;
