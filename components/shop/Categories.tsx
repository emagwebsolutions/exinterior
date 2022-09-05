import React from 'react';
import Link from 'next/link';

const Categories = () => {
  return (
    <ul className='category-links'>
      <li>
        <Link href="/">
          <a>
            <i className="fa fa-check-circle-o"></i>
            <span>Sinks</span>
          </a>
        </Link>
      </li>

      <li>
        <Link href="/">
          <a>
            <i className="fa fa-check-circle-o"></i>
            <span>Sinks</span>
          </a>
        </Link>
      </li>

      <li>
        <Link href="/">
          <a>
            <i className="fa fa-check-circle-o"></i>
            Sinks
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Categories;
