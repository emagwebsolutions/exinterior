import React from 'react';
import Image from 'next/image';
import { useStore } from 'store/store.js';
import { useEffect, useState } from 'react';
import { PortableText } from '@portabletext/react';

const Homesectionthree = () => {
  const { state } = useStore();

  const [getallPost, setallPost] = useState([]);

  useEffect(() => {
    setallPost(state.getPost);
  }, [state]);

  const elem = Object.values(getallPost)
    .filter((v: any) => {
      return v.cat_title == 'productcategories';
    })
    .map((vl: any, k: any) => {
      return (
        <div key={k} className="col-3 prodcat">
          <div>
            <Image
              src={vl.mainImage}
              alt=""
              layout="responsive"
              width="2"
              height="2"
            />
          </div>

          <h4>{vl.title}</h4>
        </div>
      );
    });

  return (
    <section>
      <div className="container gap-4">{elem}</div>
    </section>
  );
};

export default Homesectionthree;
