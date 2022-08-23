import React from 'react';
import Footer from 'components/footer/Footer'
import Meta from 'components/Meta'
import {StoreProvider} from '../store/store'

type Children = {
  children: React.ReactNode;
};

const Layout = ({ children }: Children) => {
  return (
    <StoreProvider>
    <Meta data={{
      description: 'y',
      keywords: 'y',
      title: 'EX INTERIOR DESIGN LTD'
    }}/>
      <main>{children}</main>
      <Footer />
    </StoreProvider>
  );
};

export default Layout;
