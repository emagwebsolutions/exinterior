import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useStore } from 'store/store';

export const Sanitary = () => {
  const { state } = useStore();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(state.getProduct);
  }, [state]);

  const linkItem = Object.values(menu)
    .filter((v: any) => v.cat_title + '' === 'Sanitary')
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
    <ul>
      <li className="col-2">
        {linkItemOne.slice(0, 5)}
        </li>

      <li className="col-2">
      {linkItemOne.slice(5, 10)}
      </li>

      <li className="col-5">
        <div>
          <Image
            src="/wc.PNG"
            alt=""
            width="3"
            height="2"
            layout="responsive"
          />
        </div>
      </li>
    </ul>
  );
};

export default Sanitary;
