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
      return v.slug == 'welcome-to-ex-interior-designs-ltd';
    })
    .map((vl: any, k: any) => {
      return (
        <div key={k} className="col-1">
            <Image
              src={vl.mainImage.options.source.asset.url}
              alt=""
              layout="responsive"
              width="4"
              height="3"
            />

            <h3>BATH THUB</h3>

        </div>
      );
    });

  return <section>{elem}</section>;
};

export default Homesectionthree
