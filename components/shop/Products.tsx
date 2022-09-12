import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useStore } from 'store/store';

type QRY = {
  qry: string | string[] | undefined;
};

const Products = ({ qry }: QRY) => {
  const { state } = useStore();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(state.getProduct);
  }, [state]);

  const products = Object.values(menu)
    .filter((v: any) => v.cat_title + '' === qry || v.brand === qry)
    .map((v: any, k: any) => (
      <div key={k} className="col-2">
        <div className="prod-imgbx-wrapper">
          <Link href={'product/' + v.slug}>
            <a>
              <div>
                <Image
                  src={v.mainImage}
                  width="3"
                  height="3"
                  alt=""
                  layout="responsive"
                />
              </div>

              <div>
                <div>
                  <h3>{v.name}</h3>
                  <h4>GHc {v.price}</h4>
                  <Link href="/">
                    <a>Add to Cart</a>
                  </Link>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    ));

  return <>{products}</>;
};

export default Products;
