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
          href="https://wa.me/233543725401?text=Hello%2C%20I%20want%20to%20make%20enquiry%20on%20your%20cleaning%20service"
        >
          How can we help you? <i className="fa fa-whatsapp"></i>
        </a>
      </footer>
    </section>
  );
};

export default FooterBottom;
