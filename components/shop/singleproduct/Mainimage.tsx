import React, { useRef } from 'react';
import Image from 'next/image';
import { useStore } from '../../../store/store';

type IMG = {
  img: string;
  name: string;
};
const Mainimage = ({ img, name }: IMG) => {
  const { state } = useStore();

  return (
    <div className="main-image">
      <Image
        src={state.setMainimage ? state.setMainimage : img}
        alt={name}
        width="3"
        height="2"
        layout="responsive"
      />
    </div>
  );
};

export default Mainimage;
