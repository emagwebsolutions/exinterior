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
import Producttitle from 'components/shop/singleproduct/Producttitle';
import Productprice from 'components/shop/singleproduct/Productprice';
import Stars from 'components/shop/singleproduct/Stars';
import Productdescription from 'components/shop/singleproduct/Productdescription';
import { PortableText } from '@portabletext/react';
import Productdetails from 'components/shop/singleproduct/Productdetails';
import Addtocartbtn from 'components/shop/singleproduct/Addtocartbtn';
import Buynowbtn from 'components/shop/singleproduct/Buynowbtn';
import Addtowishlistbtn from 'components/shop/singleproduct/Addtowishlistbtn';

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
        <div className="container prod-main-container">
          <div className="col-1">
            <Categorycat data="Category" />
            <Categories qry={cat} />
          </div>

          <div className="col-7 prod-page-wrapper">
            <div className="container">
              <div className="col-3">
                <Mainimage img={obj.mainImage} name={obj.name} />
                <Thumbnails slug={slug} />
              </div>
              <div  className="col-3">
                <Producttitle title={obj.name} />
                <Productprice price={obj.price} />
                <Stars />
                <Productdescription des={<PortableText value={obj.body} />} />
                <Productdetails obj={obj} />

                <div className="allprodbtns">
                <Addtocartbtn />
                <Buynowbtn />
                <Addtowishlistbtn />
                </div>
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
