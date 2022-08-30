import React from 'react';
import FooterBottom from './FooterBottom';
import FooterMiddle from './FooterMiddle';
import FooterTop from './FooterTop';
import { useEffect } from 'react';
import {
  fetchPost,
  fetchProduct,
  fetchPromotion,
  fetchClientele,
  fetchContacts,
  useStore,
  fetchTestimonials,
  fetchTeamsection,
} from '../../store/store';

const Footer = () => {
  const { dispatch } = useStore();

  useEffect(() => {
    fetchContacts(dispatch);
    fetchPost(dispatch);
    fetchProduct(dispatch);
    fetchPromotion(dispatch);
    fetchClientele(dispatch);
    fetchTestimonials(dispatch);
    fetchTeamsection(dispatch);
  }, [dispatch]);

  return (
    <div className="footer">
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </div>
  );
};

export default Footer;
