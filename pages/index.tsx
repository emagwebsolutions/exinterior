import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Nav from 'components/nav/Nav';
import Slider from 'components/Slider';

const Home: NextPage = () => {
  return (
    <>
      <section className="home">
        <Slider />
        <Nav />
      </section>

    </>
  );
};

export default Home;
