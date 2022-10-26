import React from 'react';
import Link from 'next/link';

type Btn = {
  link: string;
  name: string;
};
const Button = ({ link, name }: Btn) => {
  return (
    <Link href={link}>
      <a className="prodbtn">{name}</a>
    </Link>
  );
};

export default Button;
