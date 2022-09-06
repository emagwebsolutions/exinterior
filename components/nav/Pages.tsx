import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export const Pages = () => {
  return (
    <ul>
      <li className="col-2">
        <Link href="/about">
          <a>About Us</a>
        </Link>
        <Link href="/contact">
          <a>Contact Us</a>
        </Link>
      </li>
    </ul>
  );
}

export default Pages
