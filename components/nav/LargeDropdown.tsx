import Image from 'next/image';
import map from '../utils/map';

type Lmenu = {
  img: string;
  data: React.ReactNode;
};

export const LargeDropdown = ({ img, data }: Lmenu) => {
  return (
    <>
      <ul>
        {data}
        <li>
          <Image
            src={`/${img}`}
            alt=""
            width="5"
            height="4"
            layout="responsive"
          />
        </li>
      </ul>
    </>
  );
};

export default LargeDropdown;
