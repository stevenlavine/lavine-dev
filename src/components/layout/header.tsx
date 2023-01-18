import React, { ReactComponentElement, useState } from 'react';
import { useScrollDirection } from '../../lib/helpers';
import Link from 'next/link';
import Logo from '../svg/logo.svg';

const Header = () => {
  const { direction } = useScrollDirection();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <header className={direction}>
      <nav>
        <div className="logo">
          <Logo />
        </div>
        <div className="menu">
          <ol>
            <li className={`${selected === 'about' ? 'active' : ''}`}>
              <Link
                href="/#about"
                onClick={() => setSelected('about')} // Set the onclick event
                scroll={false} // Disable the default scroll to top of page functionality
              >
                About Me
              </Link>
            </li>
            <li className={`${selected === 'projects' ? 'active' : ''}`}>
              <Link
                href="/#projects"
                onClick={() => setSelected('projects')} // Set the onclick event
                scroll={false} // Disable the default scroll to top of page functionality
              >
                Projects
              </Link>
            </li>
            {/*<li className={`${selected === 'blog' ? 'active' : ''}`}>*/}
            {/*  <Link*/}
            {/*    href="/#blog"*/}
            {/*    onClick={() => setSelected('blog')} // Set the onclick event*/}
            {/*    scroll={false} // Disable the default scroll to top of page functionality*/}
            {/*  >*/}
            {/*    Blog*/}
            {/*  </Link>*/}
            {/*</li>*/}
            <li className={`${selected === 'contact' ? 'active' : ''}`}>
              <Link
                href="/#contact"
                onClick={() => setSelected('contact')} // Set the onclick event
                scroll={false} // Disable the default scroll to top of page functionality
              >
                Contact Me
              </Link>
            </li>
          </ol>
        </div>
      </nav>
    </header>
  );
};
export default Header;
