import React, { useEffect } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { useStore } from '../../store/store';

type Fun = {
  setNavslide: any;
};

export const Hamburger = ({ setNavslide }: Fun) => {
  const [navbtn, setNavbtn] = useState(false);
  const [brand, setBrand] = useState([]);
  const { state } = useStore();
  useEffect(() => {
    setBrand(state.getBrand);
  }, [state]);

  const val = Object.values(brand).reduce((a: any, b) => b, {});

  const hamburger = (e: any) => {
    e.preventDefault();
    const btn = e.target.getAttribute('alt');
    const bol = btn === 'open-btn' ? true : false;
    setNavbtn(bol);
  };

  const closebutton = navbtn ? 'show-close-btn' : 'close-close-btn';
  const shownavmenu = navbtn ? 'close-hamburger' : 'display-hamburger';

  useEffect(() => {
    const container = navbtn ? 'container open' : 'container close';
    setNavslide(container);
  });

  return (
    <div className="hamburger">
      <div className={shownavmenu} onClick={hamburger}>
        <div>
          <Image
            alt="open-btn"
            width="1"
            height="1"
            layout="responsive"
            src="/open.jpg"
          />
        </div>
        <div>
          <h4>{val.companyname}</h4>
        </div>
      </div>
      <div className={closebutton} onClick={hamburger}>
        <div>
          <Image
            alt="close-btn"
            width="1"
            height="1"
            layout="responsive"
            src="/close.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
