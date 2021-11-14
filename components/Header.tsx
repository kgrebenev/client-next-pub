import { useState } from 'react';

import Link from 'next/link';
import NavBar from './Navbar';

export interface CurrentUser {
  currentUser: {
    id: string;
    email: string;
    iat?: number;
  };
}

const Header = ({ currentUser }: CurrentUser): JSX.Element => {
  const [drawer, setDrawer] = useState(false);

  const logo = process.env.NEXT_PUBLIC_LOGO;
  const links = [
    { label: 'Link1', href: '/test' },
    { label: 'Link2', href: '/test' },
    { label: 'Link3', href: '/test' },
    { label: 'Link4', href: '/test' },
  ];

  return (
    <header className="header">
      <div className="header__logo logo">
        <h1>
          <Link href="/">
            <a className="logo__link">{logo}</a>
          </Link>
        </h1>
      </div>

      <NavBar links={links} />
      <div className="header__hamburger hamburger">
        <button
          onClick={() => setDrawer(!drawer)}
          className="hamburger__icon"
          aria-label="menu"
        >
          <span className="hamburger__line"></span>
        </button>
      </div>

      {drawer && (
        <div
          onMouseLeave={() => setDrawer(!drawer)}
          className="header__drawer drawer"
        >
          <ul className="drawer__list">
            <li>Link1</li>
            <li>Link2</li>
            <li>Link3</li>
            <li>Link4</li>
          </ul>
        </div>
      )}
    </header>
  );
};
export default Header;
