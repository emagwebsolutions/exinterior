import React from 'react';
import styles from './nav.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className={styles.wrapper}>
      <div className="container">
        <div className="col-1">
          <Link href="/">
            <a>
              <Image
                src="/logo.PNG"
                alt="Logo"
                layout="responsive"
                width="5"
                height="3"
              />
            </a>
          </Link>
        </div>
        <div className="col-7">
          <ul>
            <li>
              <Link href="">
                <a>Home</a>
              </Link>
            </li>

            <li>
              <Link href="">
                <a>About Us</a>
              </Link>
            </li>






            <li>
              <Link href="">
                <a>Sanitary ware</a>
              </Link>


              <ul>
                <li>One</li>
                <li>Two</li>

                <li>
                  <Image
                    src="/wc.PNG"
                    alt=""
                    width="5"
                    height="4"
                    layout="responsive"
                  />
                </li>
              </ul>


            </li>


















            <li>
              <Link href="">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-1 bg-warning">SIGN OUT</div>
      </div>
    </nav>
  );
};

export default Nav;
