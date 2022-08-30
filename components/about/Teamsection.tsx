import React from 'react';
import Image from 'next/image';
import Sectiontitles from 'components/Sectiontitles';

export const Teamsection = () => {
  return (
    <section className="teamsection">
      <Sectiontitles title="TEAM SECTION" />
      <div className="container gap-2">
        <div>
          <div className="team-member">
            <Image
              width="2"
              height="2"
              alt=""
              src="/test-pic.jpg"
              layout="responsive"
            />
            <h3>Mr Ram</h3>
            <h4>C.E.O</h4>
          </div>
        </div>

        <div>
          <div className="team-member">
            <Image
              width="2"
              height="2"
              alt=""
              src="/test-pic.jpg"
              layout="responsive"
            />
            <h3>Mr Ram</h3>
            <h4>C.E.O</h4>
          </div>
        </div>

        <div>
          <div className="team-member">
            <Image
              width="2"
              height="2"
              alt=""
              src="/test-pic.jpg"
              layout="responsive"
            />
            <h3>Mr Ram</h3>
            <h4>C.E.O</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teamsection;
