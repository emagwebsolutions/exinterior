import React from 'react';
type Title = {
  title: string;
};
export const Sectiontitles = ({ title }: Title) => {
  return <div className="sectiontitle">{title}</div>;
};

export default Sectiontitles;
