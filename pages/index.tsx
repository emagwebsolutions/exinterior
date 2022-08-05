import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Nav from 'components/nav/Nav';

const Home: NextPage = () => {
  return (
    <>
      <section className="">
        <Nav />
      </section>

    </>
  );
};

export default Home;
