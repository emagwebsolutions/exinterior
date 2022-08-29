import type { NextPage } from 'next';
import Nav from 'components/nav/Nav';
import Slider from 'components/Slider';
import Homesectionone from 'components/home/Homesectionone';
import Homesectiontwo from 'components/home/Homesectiontwo';
import Homesectionthree from 'components/home/Homesectionthree';
import Homesectionfour from 'components/home/Homesectionfour';
import Homesectionfive from 'components/home/Homesectionfive';
import Homesectionsix from 'components/home/Homesectionsix';

const Home: NextPage = () => {
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
