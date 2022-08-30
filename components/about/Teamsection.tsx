import React from 'react';
import Image from 'next/image';
import Sectiontitles from 'components/Sectiontitles';
import { useStore } from 'store/store';
import {useEffect,useState} from 'react'
import { PortableText } from '@portabletext/react';

export const Teamsection = () => {

  const { state } = useStore();

  const [getallPost, setallPost] = useState([]);

  useEffect(() => {
    setallPost(state.getTeamsection);
  }, [state]);

  const elem = Object.values(getallPost).map((vl: any, k: any) => {

    return (
      <div key={k}>
      <div className="team-member">
        <Image
          width="3"
          height="2"
          alt=""
          src={vl.mainImage}
          layout="responsive"
        />
        <h3>{vl.name}</h3>
        <h4>{vl.title}</h4>
      </div>
    </div>
    );
  });

 



  return (
    <section className="teamsection">
      <Sectiontitles title="TEAM SECTION" />
      <div className="container gap-2">
 {elem}
      </div>
    </section>
  );
};

export default Teamsection;
