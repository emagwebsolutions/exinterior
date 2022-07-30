import React from 'react';
import Nav from 'components/nav/Nav';
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
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
