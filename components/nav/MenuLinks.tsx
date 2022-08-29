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
};

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
};

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
};

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
};

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
};

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
};



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
};

type Link = {
  title: string;
  data: React.ReactNode;
};

