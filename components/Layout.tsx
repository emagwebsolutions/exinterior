import React from 'react';
import Footer from 'components/footer/Footer'
import Meta from 'components/Meta'

type Children = {
  children: React.ReactNode;
};

const Layout = ({ children }: Children) => {
  return (
    <>
    <Meta data={{
      description: 'y',
      keywords: 'y',
      title: 'EX INTERIOR DESIGN LTD'
    }}/>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
