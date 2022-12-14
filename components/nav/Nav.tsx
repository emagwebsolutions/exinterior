import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useStore } from '../../store/store';
import Pages from './Pages';
import Sanitary from './Sanitary';
import Faucets from './Faucets';
import Showers from './Showers';
import Bathroomfurniture from './Bathroomfurniture';
import Bathroomaccessories from './Bathroomaccessories';
import Drainagesystems from './Drainagesystems';
import Hamburger from './Hamburger';

const Nav = () => {
  const [navslide, setNavslide] = useState('');

  const [brand, setBrand] = useState([]);

  const { state } = useStore();

  useEffect(() => {
    setBrand(state.getBrand);
  }, [state]);

  const val = Object.values(brand).reduce((a: any, b) => b, {});

  return (
    <nav>
      <div className={navslide}>
        <div className="col-1">
          <Link href="/">
            <a>
              <Image
                src={val.mainImage}
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
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>

            <li>
              <Link href="/shop/Sanitary">
                <a>Sanitary</a>
              </Link>
              <Sanitary />
            </li>

            <li>
              <Link href="/shop/Faucets">
                <a>Faucets</a>
              </Link>
              <Faucets />
            </li>

            <li>
              <Link href="/shop/Showers">
                <a>Showers</a>
              </Link>
              <Showers />
            </li>

            <li>
              <Link href="/shop/Bathroom Furniture">
                <a>Bathroom Furniture</a>
              </Link>

              <Bathroomfurniture />
            </li>

            <li>
              <Link href="/shop/Bathroom Accessories">
                <a>Bathroom Accessories</a>
              </Link>
              <Bathroomaccessories />
            </li>

            <li>
              <Link href="/shop/ACO Drainage Systems">
                <a>ACO Drainage Systems</a>
              </Link>
              <Drainagesystems />
            </li>

            <li>
              <Link href="#">
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

      <Hamburger setNavslide={setNavslide} />
    </nav>
  );
};

export default Nav;
