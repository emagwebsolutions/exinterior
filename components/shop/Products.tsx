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
  const [product, setProduct] = useState([]);
  const [filterProd, setFilterprod] = useState([]);

  useEffect(() => {
    setFilterprod(state.filterProduct);

    setProduct(state.getProduct);
  }, [state]);

  const fnd = Object.values(filterProd).map((v: any) => v)[0];

  let productData;
  if (fnd?.cat_title) {
    productData = String(fnd?.cat_title) === qry ? filterProd : product;
  } else {
    productData = product;
  }

  const products = Object.values(productData)
    .filter(
      (v: { brand: string; cat_title: string }) =>
        v.cat_title + '' === qry || v.brand === qry
    )
    .map(
      (
        v: { slug: string; mainImage: string; name: string; price: number },
        k: any
      ) => (
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
      )
    );

  return <>{products}</>;
};

export default Products;
