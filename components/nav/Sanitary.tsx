import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export const Sanitary = () => {
  return (
    <ul>
      <li className="col-2">
        <Link href="">
          <a>Urinals</a>
        </Link>
        <Link href="">
          <a>Toilet seats</a>
        </Link>
        <Link href="">
          <a>Water closet</a>
        </Link>
      </li>

      <li className="col-2">
        <Link href="">
          <a>Washbasin</a>
        </Link>
        <Link href="">
          <a>Bathtub</a>
        </Link>
        <Link href="">
          <a>Bidet</a>
        </Link>
      </li>

      <li className="col-5">
        <div>
          <Image
            src="/wc.PNG"
            alt=""
            width="3"
            height="2"
            layout="responsive"
          />
        </div>
      </li>
    </ul>
  );
}

export default Sanitary 
