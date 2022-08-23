import React from 'react';
import Image from 'next/image';
import { useStore } from 'store/store.js';
import { useEffect, useState } from 'react';
import { PortableText } from '@portabletext/react';

const Homesectionone = () => {
  const { state } = useStore();

  const [getallPost, setallPost] = useState([]);

  useEffect(() => {
    setallPost(state.getPost);
  }, [state]);

  const elem = Object.values(getallPost)
    .filter((v: any) => {
      return v.cat_title+'' == 'home section one';
    })
    .map((vl: any, k: any) => {

      return <div key={k} className="col-2 caption-bx">
        <div>
          <Image
            src={vl.mainImage.options.source.asset.url}
            alt=""
            layout="responsive"
            width="2"
            height="2"
          />
        </div>
        <h5>{vl.title}</h5>
        <div className="para">
          <PortableText value={vl.body} />
        </div>
      </div>
});



  return (
    <section>
      <div className="container ">
        <div>
          <div className="container">{elem}</div>
          <h2>Specialists in Sanitary Wares</h2>
        </div>
      </div>
    </section>
  );
};

export default Homesectionone;
