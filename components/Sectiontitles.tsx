import React from 'react';
type Title = {
  title: string;
};
export const Sectiontitles = ({ title }: Title) => {
  return (
    <div className="sectiontitle">
      <h3>{title}</h3>
    </div>
  );
};

export default Sectiontitles;
