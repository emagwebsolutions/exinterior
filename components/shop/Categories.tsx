import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useStore } from 'store/store';

type QRY = {
  qry: string | string[] | undefined
}
const Categories = ({qry}: QRY) => {
  const { state } = useStore();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(state.getProduct);
  }, [state]);

  const linkItem = Object.values(menu)
    .filter((v: any) => v.cat_title + '' === qry)
    .map((v: any, k: any) => (
      <li key={k}>
        <Link href={`/product?cat=${qry}&slug=${v.slug}`}>
          <a>
            <i className="fa fa-check-circle-o"></i>
            <span>{v.name}</span>
          </a>
        </Link>
      </li>
    ));

  return <ul className="category-links">{linkItem}</ul>;
};

export default Categories;
