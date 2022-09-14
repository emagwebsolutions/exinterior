import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useStore } from 'store/store';
import imageURLBuilder from '@sanity/image-url';
import client from '../../../store/client';
type Prop = {
  slug: string | string[] | undefined;
};

const Thumbnails = ({ slug }: Prop) => {
  const { state,dispatch } = useStore();
  const [product, setProduct] = useState([]);

  const builder = imageURLBuilder(client);

  useEffect(() => {
    setProduct(state.getProduct);
  }, [state]);


  const getImgSrc = (e: any) => {
    const src = e.target.getAttribute('src');

    dispatch ({
      type: 'SET_MAIN_IMAGE',
      payload: src
    })
  };

  const img = Object.values(product)
    .filter((v: { slug: string }) => v.slug === slug)
    .map((v: any, k: number) => {
      return v.imagesGallery;
    })[0];

  const multiimages = Object.values({ ...img }).map((v: any, k: number) => {
    return (
      <div key={k}>
        <Image
          src={builder.image(v).url()}
          alt=""
          width="3"
          height="2"
          layout="responsive"
          onClick={getImgSrc}
          data-src="ddd"
        />
      </div>
    );
  });

  return <div className="thumbnail">{multiimages}</div>;
};

export default Thumbnails;
