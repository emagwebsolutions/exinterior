import React from 'react';
import ScrollToTop from 'react-scroll-to-top';

const FooterBottom = () => {
  return (
    <section>
      <footer>
        <p>
          Copyright © 2022, Ex-Interior Designs Powered by Emagweb Solutions
        </p>

        <ScrollToTop smooth className="scrolltotop" />

        <a
          className="whatsappbtn"
          href="https://wa.me/233543725401?text=Hello%2C%20I%20want%20to%20inquire%20about%20your%20products%2C%20kindly%20tell%20me%20more"
        >
          How can we help you? <i className="fa fa-whatsapp"></i>
        </a>
      </footer>
    </section>
  );
};

export default FooterBottom;
