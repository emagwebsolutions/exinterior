import type { NextPage } from 'next';
import Nav from 'components/nav/Nav';
import Slider from 'components/Slider';
import { useStore } from '../store/store';
import { useEffect, useState } from 'react';
import { setCookie } from 'cookies-next';
import Homesectionone from 'components/home/Homesectionone';
import client from '../store/client';
import imageUrlBuilder from '@sanity/image-url';
import { projectId, dataset } from '../store/config';
import Homesectiontwo from 'components/home/Homesectiontwo';

const Home: NextPage = () => {
  const { dispatch } = useStore();

  const builder = imageUrlBuilder({
    projectId,
    dataset,
  });

  useEffect(() => {
    const fetchData = async () => {
      const post = await client.fetch(`*[_type == 'post']{
        title,
        body,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        "cat_title": categories[]->title,
        "slug": slug.current,
      }`);

      const data = post.map((v: any) => {
        return {
          ...v,
          mainImage: builder.image(v.mainImage),
        };
      });

      dispatch({
        type: 'GET_POST',
        payload: data,
      });

      setCookie('getpost', JSON.stringify(data));
    };

    fetchData();
  });

  return (
    <div className="home">
      <section>
        <Slider />
        <Nav />
      </section>

      <Homesectionone />

      <Homesectiontwo />
    </div>
  );
};

export default Home;
