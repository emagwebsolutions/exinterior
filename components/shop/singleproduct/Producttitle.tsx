import React from 'react';

type Title = {
  title: string;
};
const Producttitle = ({ title }: Title) => {
  return <h1 className="prod-title">{title}</h1>;
};

export default Producttitle;
