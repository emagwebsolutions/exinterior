import { useRouter } from 'next/router';
import Categories from 'components/shop/Categories';
import Nav from 'components/nav/Nav';
import Categorycat from 'components/shop/Categorytitle';
import Pageheader from 'components/Pageheader';
import Thumbnails from 'components/shop/singleproduct/Thumbnails';

const Product = () => {
  const { query } = useRouter();

  const { cat, slug } = query;

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
            <div className="products-container">
              {/* Display Product here */}
              <Thumbnails slug={slug} />
            </div>
          </div>

        </div>
      </section>
      <br /> <br />
    </div>
  );
};

export default Product;
