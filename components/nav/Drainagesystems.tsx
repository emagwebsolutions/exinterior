import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export const Drainagesystems = () => {
  return (
    <>
      <ul>

        <li className="col-2">
          <Link href="">
            <a>ACO Multiline</a>
          </Link>
          <Link href="">
            <a> ACO Heavy Duty Channels</a>
          </Link>
          <Link href="">
            <a>ACO Residential Drainage</a>
          </Link>
          <Link href="">
            <a>ACO Monoblock Systems</a>
          </Link>
        </li>

        <li className="col-5">
          <div>
            <Image
              src="/monoblock.jpg"
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

export default Drainagesystems
