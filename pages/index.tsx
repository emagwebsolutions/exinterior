import type { NextPage } from 'next';
import Nav from 'components/nav/Nav';
import Slider from 'components/Slider';
import { useStore } from '../store/store';
import { useEffect } from 'react';
import Homesectionone from 'components/home/Homesectionone';
import Homesectiontwo from 'components/home/Homesectiontwo';
import Homesectionthree from 'components/home/Homesectionthree';
import Homesectionfour from 'components/home/Homesectionfour';
import Homesectionfive from 'components/home/Homesectionfive';
import Homesectionsix from 'components/home/Homesectionsix';
import { fetchPost, fetchProduct } from '../store/store';

const Home: NextPage = () => {
  const { dispatch } = useStore();

  useEffect(() => {
    fetchPost(dispatch);
    fetchProduct(dispatch);
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
      <Homesectionfive />
      <Homesectionsix />
    </div>
  );
};

export default Home;
