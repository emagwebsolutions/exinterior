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
            <Image src="/wc.PNG" alt="" width="3" height="2" layout="responsive" />
            </div>
   
          </li>

          <li className="col-5">
            <div>
            <Image src="/wc.PNG" alt="" width="3" height="2" layout="responsive" />
            </div>
   
          </li>

        </ul>


  );
};

// export const Faucets = () => {
//   return (
//     <>
//       <ul>
//         <li>
//           <Link href="">
//             <a>Ball</a>
//           </Link>
//           <Link href="">
//             <a>Disc</a>
//           </Link>
//           <Link href="">
//             <a>Cartridge</a>
//           </Link>
//           <Link href="">
//             <a>Compression</a>
//           </Link>
//         </li>

//         <li></li>
//       </ul>
//     </>
//   );
// };

// export const Showers = () => {
//   return (
//     <>
//       <ul>
//         <li>
//           <Link href="">
//             <a>Digital Shower</a>
//           </Link>
//           <Link href="">
//             <a>Electric Shower</a>
//           </Link>
//           <Link href="">
//             <a>Mixer Shower</a>
//           </Link>
//           <Link href="">
//             <a>Power Shower</a>
//           </Link>
//         </li>
//         <li></li>
//       </ul>
//     </>
//   );
// };

// export const Bathroomfurniture = () => {
//   return (
//     <>
//       <ul>
//         <li>
//           <Link href="">
//             <a>Digital Shower</a>
//           </Link>
//           <Link href="">
//             <a>Electric Shower</a>
//           </Link>
//           <Link href="">
//             <a>Mixer Shower</a>
//           </Link>
//           <Link href="">
//             <a>Power Shower</a>
//           </Link>
//         </li>
//         <li></li>
//       </ul>
//     </>
//   );
// };

// export const Bathroomaccessories = () => {
//   return (
//     <>
//       <ul>
//         <li>
//           <Link href="">
//             <a>Towel Hanger </a>
//           </Link>
//           <Link href="">
//             <a> Bathroom Hooks</a>
//           </Link>
//           <Link href="">
//             <a>Bath Shelf</a>
//           </Link>
//           <Link href="">
//             <a>Toothbrush Holders</a>
//           </Link>
//         </li>

//         <li>
//           <Link href="">
//             <a>Shower Curtains </a>
//           </Link>
//           <Link href="">
//             <a>Shower Mat</a>
//           </Link>
//           <Link href="">
//             <a>Shower Soap Holder</a>
//           </Link>
//           <Link href="">
//             <a>Bathtub Tray</a>
//           </Link>
//         </li>
//         <li></li>
//       </ul>
//     </>
//   );
// };
