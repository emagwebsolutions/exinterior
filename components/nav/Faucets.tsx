import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export const Faucets = () => {
  return (
    <>
      <ul>
        <li className="col-2">
          <Link href="">
            <a>GELE Bathroom Faucet</a>
          </Link>
          <Link href="">
            <a>OWOFAN Kitchen Faucets</a>
          </Link>
          <Link href="">
            <a>Bathroom Faucet</a>
          </Link>
        </li>

        <li className="col-5">
          <div>
            <Image
              src="/faucet1.jpg"
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
              src="/faucet2.jpg"
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

export default Faucets
