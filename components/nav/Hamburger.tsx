import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

type Fun = {
  setNavslide: any;
};

export const Hamburger = ({ setNavslide }: Fun) => {
  const [navbtn, setNavbtn] = useState(false);

  const hamburger = (e: any) => {
    e.preventDefault()
    const btn = e.target.getAttribute('alt');
    const bol = btn === 'open-btn' ? true : false;
    setNavbtn(bol);
  };

  const container = navbtn ? 'container open' : 'container close';
  const closebutton = navbtn ? 'show-close-btn' : 'close-close-btn';
  const shownavmenu = navbtn ? 'close-hamburger' : 'display-hamburger';

  setNavslide(container);

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
