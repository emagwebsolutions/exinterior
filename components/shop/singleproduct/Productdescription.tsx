import React from 'react';

type Description = {
  des: React.ReactNode
};

const Productdescription = ({ des }: Description) => {
  return <div className="prod-description">{des}</div>;
};

export default Productdescription;
