import type { NextPage } from 'next';
import Nav from 'components/nav/Nav';
import Slider from 'components/Slider';
import { useStore } from '../store/store';
import { useEffect, useState } from 'react';
import { setCookie } from 'cookies-next';
import Homesectionone from 'components/home/Homesectionone';
import client from '../store/client';
import ImageUrlBuilder from '@sanity/image-url';
import { projectId, dataset } from '../store/config';
import Homesectiontwo from 'components/home/Homesectiontwo';
import Homesectionthree from 'components/home/Homesectionthree';
import Homesectionfour from 'components/home/Homesectionfour';

const Home: NextPage = () => {
  const { dispatch } = useStore();

  const builder = ImageUrlBuilder(client);

  useEffect(() => {
    const fetchData = async () => {
      const post = await client.fetch(`*[_type == 'post']{
        title,
        body,
        mainImage{
          asset->{
            url
          }
        },
        "cat_title": categories[]->title,
        "slug": slug.current,
      }`);

      const data = post.map((v: any) => {
        return {
          ...v,
          mainImage: builder.image(v.mainImage).url(),
        };
      });

      dispatch({
        type: 'GET_POST',
        payload: data,
      });

      setCookie('getpost', JSON.stringify(data));
    };

    const fetchProduct = async () => {
      const post = await client.fetch(`*[_type == 'product']{
        mainImage,
        "cat_title": categories[]->title,
      }`);

      const data = post.map((v: any) => {
        return {
          ...v,
          mainImage: builder.image(v.mainImage),
        };
      });

      console.log(data)

      dispatch({
        type: 'GET_PRODUCT',
        payload: data,
      });

      setCookie('getproduct', JSON.stringify(data));
    };

    fetchData();
    fetchProduct();
  });

  return (
    <div className="home">
      <section>
        <Slider />
        <Nav />
      </section>
      <Homesectionone />
      <Homesectiontwo />
      <Homesectionthree />
      <Homesectionfour />
    </div>
  );
};

export default Home;
