import React from 'react';
import { LayoutInterface } from '../../types';
import Header from './header';

const Layout = ({ children }: LayoutInterface) => {
  return (
    <div className="page-wrapper">
      <Header />
      <main>
        {children}
        <footer>FOOTER GOES HERE</footer>
      </main>
    </div>
  );
};
export default Layout;
