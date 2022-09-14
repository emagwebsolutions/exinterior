import { useRouter } from 'next/router';
import Categories from 'components/shop/Categories';
import Nav from 'components/nav/Nav';
import Categorycat from 'components/shop/Categorytitle';
import Pageheader from 'components/Pageheader';
import Thumbnails from 'components/shop/singleproduct/Thumbnails';
import Mainimage from 'components/shop/singleproduct/Mainimage';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useMemo } from 'react';
import { useStore } from 'store/store';

const Product = () => {
  const { query } = useRouter();

  const { cat, slug } = query;

  const { state } = useStore();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(state.getProduct);
  }, [state]);

  const obj = Object.values(product)
    .filter((v: { slug: string }) => v.slug === slug)
    .reduce((a: any, c: any) => {
      a = c;
      return a;
    }, {});

  return (
    <div className="shop">
      <section>
        <Nav />
      </section>
      <Pageheader parent="HOME" child={cat + ''} page={cat + ''} />
      <section>
        <div className="container">
          <div className="col-1">
            <Categorycat data="Category" />
            <Categories qry={cat} />
          </div>

          <div className="col-7">
            <div className="container">
              <div>
                <Mainimage img={obj.mainImage} name={obj.name} />
                <Thumbnails slug={slug} />
              </div>
              <div>

                
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /> <br />
    </div>
  );
};

export default Product;
