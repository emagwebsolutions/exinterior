import React from 'react';

type Para = {
  para: string;
};

const Paragraph = ({ para }: Para) => {
  return <div className="paragraph">{para}</div>;
};

export default Paragraph;
