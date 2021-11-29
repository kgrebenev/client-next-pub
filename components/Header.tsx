import { FunctionComponent, useState, useRef } from 'react';
import { gsap } from 'gsap';

import Link from 'next/link';
import NavBar from './Navbar';
import UserMenu from './UserMenu';
import Sidebar from './Sidebar';

export interface CurrentUser {
  currentUser: {
    id: string;
    email: string;
    iat?: number;
  };
}

const Header: FunctionComponent<CurrentUser> = ({
  currentUser,
}): JSX.Element => {
  const logo = process.env.NEXT_PUBLIC_LOGO
    ? process.env.NEXT_PUBLIC_LOGO
    : 'Your company';

  const el = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(el);

  const [width, setWidth] = useState(0);

  const links = [
    { label: 'Link1', href: '/link1' },
    { label: 'Link2', href: '/link2' },
    { label: 'Sign in', href: '/auth/signin' },
    { label: 'Sign up', href: '/auth/signup' },
  ];

  const currentLogo = !currentUser ? (
    <Link href="/">
      <a className="logo__link">
        <h1>{logo}</h1>
      </a>
    </Link>
  ) : (
    <div>
      <button
        onClick={() => {
          setWidth(!width ? q('.logo')[0].offsetWidth : 0);
        }}
        className="logo__button"
      >
        <h1>{currentUser.email}</h1>
      </button>

      <UserMenu width={width} />
    </div>
  );

  return (
    <header ref={el} className="header">
      <div className="header__logo logo">
        {currentLogo}
        <div className="usermenu"></div>
      </div>

      <NavBar links={links} style="navbar--header" />

      <div className="header__square"></div>
      <Sidebar>
        <NavBar links={links} style="navbar--drawer" />
      </Sidebar>
    </header>
  );
};
export default Header;
