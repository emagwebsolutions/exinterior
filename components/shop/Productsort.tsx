import React, { useState, useEffect } from 'react';
import { useStore } from 'store/store';

type Cat = {
  qry: string | string[] | undefined;
};

const Productsort = ({ qry }: Cat) => {
  const { state, dispatch } = useStore();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(state.getProduct);
  }, [state]);

  const changeFunc = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;

    let prod: string | boolean;

    //Featured
    let products;
    if (val === 'Featured') {
      products = Object.values(product).filter(
        (v: { cat_title: string }) => v.cat_title + '' === qry
      );
    }

    if (val === 'Price, low to high') {
      products = Object.values(product)
        .filter((v: { cat_title: string }) => v.cat_title + '' === qry)
        .sort((a: { price: number }, b: { price: number }) => {
          if (a.price > b.price) return 1;
          if (b.price > a.price) return -1;
          return 0;
        });
    }

    if (val === 'Price, high to low') {
      products = Object.values(product)
        .filter((v: { cat_title: string }) => v.cat_title + '' === qry)
        .sort((a: { price: number }, b: { price: number }) => {
          if (a.price < b.price) return 1;
          if (b.price < a.price) return -1;
          return 0;
        });
    }

    if (val === 'A-Z') {
      products = Object.values(product)
        .filter((v: { cat_title: string }) => v.cat_title + '' === qry)
        .sort((a: { name: string }, b: { name: string }) => {
          if (a.name > b.name) return 1;
          if (b.name > a.name) return -1;
          return 0;
        });
    }

    if (val === 'Z-A') {
      products = Object.values(product)
        .filter((v: { cat_title: string }) => v.cat_title + '' === qry)
        .sort((a: { name: number }, b: { name: number }) => {
          if (a.name < b.name) return 1;
          if (b.name < a.name) return -1;
          return 0;
        });
    }

    if (val === 'Date, new to old') {
      products = Object.values(product)
        .filter((v: { cat_title: string }) => v.cat_title + '' === qry)
        .sort((a: { _createdAt: string }, b: { _createdAt: string }) => {
          if (a._createdAt > b._createdAt) return 1;
          if (b._createdAt > a._createdAt) return -1;
          return 0;
        });
    }

    if (val === 'Date, old to new') {
      products = Object.values(product)
        .filter((v: { cat_title: string }) => v.cat_title + '' === qry)
        .sort((a: { _createdAt: string }, b: { _createdAt: string }) => {
          if (a._createdAt < b._createdAt) return 1;
          if (b._createdAt < a._createdAt) return -1;
          return 0;
        });
    }

    dispatch({
      type: 'FILTER_PRODUCT',
      payload: products,
    });
  };

  return (
    <div className="sort-wrapper">
      <div>
        <h3>Sort by</h3>
      </div>
      <div className="7">
        <select className="sort" onChange={changeFunc}>
          <option value="Featured">Featured</option>
          <option value="Price, low to high">Price, low to high</option>
          <option value="Price, high to low">Price, high to low</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="Date, old to new">Date, old to new</option>
          <option value="Date, new to old">Date, new to old</option>
          <option value="Best Selling">Best Selling</option>
        </select>
      </div>
    </div>
  );
};

export default Productsort;
