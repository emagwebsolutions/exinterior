import { useRouter } from 'next/router';
import Nav from 'components/nav/Nav';
import Pageheader from 'components/Pageheader';
import Categories from 'components/shop/Categories';

const Shop = () => {
  const router = useRouter();
  const { id } = router.query;

  const title = id ? id : '';

  return (
    <div className="shop">
      <section>
        <Nav />
      </section>
      <Pageheader parent="HOME" child={title + ''} page={title + ''} />
      <section>
        <div className="container">
          <div className="col-1">
            <div className="category">Category</div>
          </div>
          <div className="col-3"></div>
          <div className="col-4">
            <div className="sort-wrapper">
              <div>
                <h3>Sort by</h3>
              </div>
              <div className="7">
                <select className="sort">
                  <option value="">Featured</option>
                  <option value="">Price, low to high</option>
                  <option value="">Price, high to low</option>
                  <option value="">A-Z</option>
                  <option value="">Z-A</option>
                  <option value="">Date, old to new</option>
                  <option value="">Date, new to old</option>
                  <option value="">Best Selling</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col-1">
            <Categories />
          </div>
          <div className="col-7">THIS IS THE RIGHT COLUMN</div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
