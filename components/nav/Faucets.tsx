import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useStore } from 'store/store';

export const Faucets = () => {

  const { state } = useStore();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(state.getProduct);
  }, [state]);

  const linkItem = Object.values(menu)
    .filter((v: any) => v.cat_title + '' === 'Faucets')
    .map((v: any) => {
      return {
        title: v.name,
        slug: v.slug,
      };
    });


  const linkItemOne = Object.values(linkItem)
    .map((v: any, k: any) => (
        <Link key={k} href={'/product?cat=Sanitary&slug='+v.slug}>
          <a>{v.title}</a>
        </Link>
    ));

  return (
    <>
      <ul>
        <li className="col-2">
        {linkItemOne.slice(0, 5)}
        </li>

        <li className="col-5">
          <div>
            <Image
              src="/faucet1.jpg"
              alt=""
              width="3"
              height="2"
              layout="responsive"
            />
          </div>
        </li>

        <li className="col-5">
          <div>
            <Image
              src="/faucet2.jpg"
              alt=""
              width="3"
              height="2"
              layout="responsive"
            />
          </div>
        </li>
      </ul>
    </>
  );
}

export default Faucets
