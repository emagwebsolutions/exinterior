import { useRouter } from 'next/router';
import Nav from 'components/nav/Nav';
import Pageheader from 'components/Pageheader';
import Categories from 'components/shop/Categories';
import Productsort from 'components/shop/Productsort';
import Categorycat from 'components/shop/Categorytitle';
import Products from 'components/shop/Products';
import Brand from 'components/shop/Brand';

import { useEffect, useState } from 'react';
import { useStore } from 'store/store';

const Shop = () => {
  const router = useRouter();
  const { id } = router.query;

  const { state } = useStore();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(state.getProduct);
  }, [state]);

  const brandData = Object.values(menu)
    .filter((v: any) => v.brand == id)
    .map((v: any) => ({
      cat_title: v.cat_title,
      brand: v.brand,
    }))[0];

  const cat = brandData ? brandData?.cat_title+'' : id ;
  const prod = brandData ? brandData?.brand : id ? id : '';

  console.log(cat)
  console.log(prod)

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
            <Categorycat data="Shop By Brand" />
            <Brand qry={cat} />
          </div>

          <div className="col-7">
            <div className="container">
              <div className="col-1"></div>
              <div className="col-4">
                <Productsort />
              </div>
            </div>

            <div className="products-container">
              <Products qry={prod} />
            </div>
          </div>
        </div>
      </section>
      <br /> <br />
    </div>
  );
};

export default Shop;
