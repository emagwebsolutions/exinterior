import React from 'react';
import Head from 'next/head';

type Data = {
  data: {
    description: string;
    keywords: string;
    title: string;
  }
};

const Meta = ({ data }: Data) => {
  const { description, keywords, title } = data;
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/favicon.PNG" />
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
