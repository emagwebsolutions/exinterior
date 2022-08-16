import type { NextPage } from 'next';
import Nav from 'components/nav/Nav';
import Slider from 'components/Slider';

const Home: NextPage = () => {
  return (
    <div className="home">
      <section>
        <Slider />
        <Nav />
      </section>
      <section>
        <div className="container">
          <div>
            <div className="container">
              <div>
                

              </div>
              <div>

              </div>
              <div>

              </div>
              <div>

              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
