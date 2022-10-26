import React from 'react';
type Details = {
  title: string;
  desc: string;
};
const Details = ({ title, desc }: Details) => {
  return (
    <div className="prod-details">
      <div>{title}</div>
      <div><div>{desc}</div></div>
    </div>
  );
};

export default Details;
