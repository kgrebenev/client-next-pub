import { FunctionComponent, useState } from 'react';

import Link from 'next/link';
import NavBar from './Navbar';
import Drawer from './Drawer';

export interface Props {
  currentUser: {
    id: string;
    email: string;
    iat?: number;
  };
}

const Header: FunctionComponent<Props> = ({ currentUser }): JSX.Element => {
  const logo = process.env.NEXT_PUBLIC_LOGO;
  const [drawer, setDrawer] = useState(false);

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

      <Drawer drawer={drawer} />

      {drawer && (
        <div
          onClick={() => setDrawer(!drawer)}
          className="drawer__background"
        ></div>
      )}
    </header>
  );
};
export default Header;
