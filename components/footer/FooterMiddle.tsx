import React from 'react';
import Link from 'next/link';
import { useStore } from 'store/store.js';
import { useEffect, useState } from 'react';

const FooterMiddle = () => {
  const { state } = useStore();

  const [getContact, setallContacts] = useState([]);

  useEffect(() => {
    setallContacts(state.getContacts);
  }, [state]);

  const val = Object.values(getContact).reduce((a: any, b) => b, {});

  return (
    <section>
      <div className="container">
        <div></div>
        <div className="col-1">
          <div className="newsletter">
            <input type="text" placeholder="Email address" />
            <button>
              <i className="fa fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div></div>
      </div>

      <div className="container footer-details">
        <div>
          <h3>CONTACT US</h3>
          <ul>
            <li>
              <i className="fa fa-phone"></i>
              {val.phone1}
            </li>
            <li>
              <i className="fa fa-map-marker"></i>
              {val.location}
            </li>
            <li>
              <i className="fa fa-envelope"></i>
              {val.email1}
            </li>
          </ul>
        </div>
        <div>
          <h3>SUPPORT</h3>
          <ul>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>SOCIAL</h3>
          <div className="footer-social-box">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-instagram"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterMiddle;
