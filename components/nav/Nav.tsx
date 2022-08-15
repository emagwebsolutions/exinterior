import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Pages,
  Sanitary,
  Faucets,
  Showers,
  Bathroomfurniture,
  Bathroomaccessories,
} from './MenuLinks';

const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="col-2">
          <Link href="/">
            <a>
              <Image
                src="/logo.PNG"
                alt="Logo"
                layout="responsive"
                width="3"
                height="1"
                priority
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
              <Sanitary />
            </li>

            <li>
              <Link href="">
                <a>Faucets</a>
              </Link>
              <Faucets />
            </li>

            <li>
              <Link href="">
                <a>Showers</a>
              </Link>
              <Showers />
            </li>

            <li>
              <Link href="">
                <a>Bathroom Furniture</a>
              </Link>

              <Bathroomfurniture />
            </li>

            <li>
              <Link href="">
                <a>Bathroom Accessories</a>
              </Link>
              <Bathroomaccessories />
            </li>

            <li>
              <Link href="">
                <a>Pages</a>
              </Link>
              <Pages />
            </li>
          </ul>
        </div>
        <div className="col-1 social-icons">
          <div>
            <i className="fa fa-shopping-basket">
              <span>0</span>
            </i>
            <i className="fa fa-search"></i>
            <i className="fa fa-user"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
