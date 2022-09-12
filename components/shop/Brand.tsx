import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useStore } from 'store/store';

type QRY = {
  qry: string | string[] | undefined
}
const Brand = ({qry}: QRY) => {
  const { state } = useStore();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(state.getProduct);
  }, [state]);

  const linkItem = Object.values(menu)
    .filter((v: {cat_title: string}) => v.cat_title + '' === qry)
    .map((v: {brand: string}, k: number) => (
      <li key={k}>
        <Link href={'/shop/' + v.brand}>
          <a>
            <i className="fa fa-check-circle-o"></i>
            <span>{v.brand}</span>
          </a>
        </Link>
      </li>
    ));

  return <ul className="category-links">{linkItem}</ul>;
};

export default Brand;
