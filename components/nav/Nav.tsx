import React from 'react';
import styles from './nav.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import LargeDropdown from './LargeDropdown';
import { MenuOne } from './DropDownMenus';

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
                <a>Sanitary</a>
              </Link>
                <LargeDropdown img="wc.PNG" data={<MenuOne />} />
            </li>


            <li>
              <Link href="">
                <a>Pages</a>
              </Link>
              <LargeDropdown img="wc.PNG" data={<MenuOne />} />
            </li>




          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Nav;
