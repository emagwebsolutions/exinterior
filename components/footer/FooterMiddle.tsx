import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FooterMiddle = () => {
  return (
    <section>
      <div className="container">
        <div className="footer-social"></div>

        <div>
          <div className="newsletter">
            <input type="text" placeholder="Email address" />
            <button>
              <i className="fa fa-angle-right"></i>
            </button>
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default FooterMiddle;
