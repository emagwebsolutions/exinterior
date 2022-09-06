import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useStore } from '../store/store';

type Data = {
  data: {
    description: string;
    keywords: string;
    title: string;
  };
};

const Meta = ({ data }: Data) => {
  const { description, keywords, title } = data;

  const [brand, setBrand] = useState([]);

  const { state } = useStore();

  useEffect(() => {
    setBrand(state.getBrand);
  }, [state]);

  const val = Object.values(brand).reduce((a: any, b) => b, {});

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={val.tags} />
      <link rel="icon" href="/favicon.PNG" />
      <title>{val.companyname}</title>
    </Head>
  );
};

export default Meta;
