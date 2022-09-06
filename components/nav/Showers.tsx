import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export const Showers = () => {
  return (
    <>
      <ul>
        <li className="col-2">
          <Link href="">
            <a>Digital Shower</a>
          </Link>
          <Link href="">
            <a>Electric Shower</a>
          </Link>
          <Link href="">
            <a>Mixer Shower</a>
          </Link>
          <Link href="">
            <a>Power Shower</a>
          </Link>
        </li>
        <li className="col-5">
          <div>
            <Image
              src="/showers1.jpg"
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
              src="/showers2.jpg"
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

export default Showers
