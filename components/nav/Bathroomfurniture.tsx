import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export const Bathroomfurniture = () => {
  return (
    <>
      <ul>
        <li className="col-2">
          <Link href="">
            <a>Vanities</a>
          </Link>
          <Link href="">
            <a>Mirrors</a>
          </Link>
          <Link href="">
            <a>Cabinets</a>
          </Link>
          <Link href="">
            <a>Additional Storage</a>
          </Link>
        </li>

        <li className="col-5">
          <div>
            <Image
              src="/bathfurniture1.jpg"
              alt=""
              width="3"
              height="2"
              layout="responsive"
            />
          </div>
        </li>

        <li className="col-5">
          <div>
            <Image
              src="/bathfurniture2.jpg"
              alt=""
              width="3"
              height="2"
              layout="responsive"
            />
          </div>
        </li>
      </ul>
    </>
  );
}

export default Bathroomfurniture