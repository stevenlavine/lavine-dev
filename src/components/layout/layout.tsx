import React from 'react';
import { LayoutInterface } from '../../types';
import Link from 'next/link';

const Layout = ({ children }: LayoutInterface) => {
  return (
    <div className="page-wrapper">
      <header>
        <nav>
          <div className="logo"></div>
          <ul>
            <ol>
              <li>
                <Link href="/#about">About</Link>
              </li>
              <li>
                <Link href="/#experience">Experience</Link>
              </li>
              <li>
                <Link href="/#projects">Projects</Link>
              </li>
              <li>
                <Link href="/#contact">Contact</Link>
              </li>
            </ol>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>FOOTER GOES HERE</footer>
    </div>
  );
};
export default Layout;
