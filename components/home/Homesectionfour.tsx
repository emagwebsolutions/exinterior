import React from 'react';
import Image from 'next/image';
import { useStore } from 'store/store.js';
import { useEffect, useState } from 'react';
import { PortableText } from '@portabletext/react';

const Homesectionfour = () => {
  const { state } = useStore();

  const [getallPost, setallPost] = useState([]);

  useEffect(() => {
    setallPost(state.getProduct);
  }, [state]);

  const elem = Object.values(getallPost)
    .filter((v: any) => {
      return v.cat_title + '' == 'Sanitary';
    })
    .slice(0, 6)
    .map((vl: any, k: any) => {
      return (
        <div key={k} className="col-3 caption-bx">
          <div>
            <Image
              src={vl.mainImage}
              alt=""
              layout="responsive"
              width="2"
              height="2"
            />
          </div>
        </div>
      );
    });

  return (
    <section>
      <div className="container">{elem}</div>
    </section>
  );
};

export default Homesectionfour;
