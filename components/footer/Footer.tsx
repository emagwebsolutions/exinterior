import React from 'react';
import FooterBottom from './FooterBottom';
import FooterMiddle from './FooterMiddle';
import FooterTop from './FooterTop';

const Footer = () => {
  return (
    <div className="footer">
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </div>
  );
};

export default Footer;
