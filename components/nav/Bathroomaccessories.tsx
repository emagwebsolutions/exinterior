import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export const Bathroomaccessories = () => {
  return (
    <>
      <ul>
        <li className="col-2">
          <Link href="">
            <a>Towel Hanger </a>
          </Link>
          <Link href="">
            <a> Bathroom Hooks</a>
          </Link>
          <Link href="">
            <a>Bath Shelf</a>
          </Link>
          <Link href="">
            <a>Toothbrush Holders</a>
          </Link>
        </li>

        <li className="col-2">
          <Link href="">
            <a>Shower Curtains </a>
          </Link>
          <Link href="">
            <a>Shower Mat</a>
          </Link>
          <Link href="">
            <a>Shower Soap Holder</a>
          </Link>
          <Link href="">
            <a>Bathtub Tray</a>
          </Link>
        </li>
        <li className="col-5">
          <div>
            <Image
              src="/bathaccess.PNG"
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

export default Bathroomaccessories
