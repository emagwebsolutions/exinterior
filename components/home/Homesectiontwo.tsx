import React from 'react';
import Image from 'next/image';
import { useStore } from 'store/store.js';
import { useEffect, useState } from 'react';
import { PortableText } from '@portabletext/react';

const Homesectiontwo = () => {
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
        <div key={k} className="about-us">
          <div className="col-2 welcome-image-wrapper">
            <Image
              src={vl.mainImage}
              alt=""
              layout="responsive"
              width="8"
              height="7"
            />
            <div></div>
          </div>

          <div className="col-2">
            <h3>{vl.title}</h3>
            <PortableText value={vl.body} />
          </div>
        </div>
      );
    });

  return <section>{elem}</section>;
};

export default Homesectiontwo;
