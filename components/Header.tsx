import { FunctionComponent, useState, useRef } from 'react';
import { gsap } from 'gsap';

import Link from 'next/link';
import NavBar from './Navbar';
import UserMenu from './UserMenu';
import useIsomorphicLayoutEffect from '../animation/useIsomorphicLayoutEffect';

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
  const [drawer, setDrawer] = useState(false);

  const [drawerHide, setDrawerHide] = useState({ display: 'none' });
  const [width, setWidth] = useState(0);

  const el = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(el);
  const tl = useRef<gsap.core.Animation>();

  const links = [
    { label: 'Link1', href: '/link1' },
    { label: 'Link2', href: '/link2' },
    { label: 'Sign in', href: '/auth/signin' },
    { label: 'Sign up', href: '/auth/signup' },
  ];

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap
      .timeline()

      .to(q('.drawer'), { x: 300 })
      .fromTo(q('.hamburger'), { height: '100vh' }, { height: '100px' })
      .to(q('.hamburger'), {
        x: 200,
        onComplete: () => {
          setDrawerHide({ display: 'block' });
        },
      });
  }, []);

  useIsomorphicLayoutEffect(() => {
    tl.current?.reversed(drawer);
  }, [drawer]);

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

      <div>
        <div className="header__square"></div>
        <div style={drawerHide} className="header__hamburger hamburger">
          <button
            onClick={() => setDrawer(!drawer)}
            className={`hamburger__icon ${
              drawer ? 'hamburger__icon--active' : ''
            }`}
            aria-label="menu"
          >
            <span className="hamburger__line"></span>
          </button>
        </div>

        <div style={drawerHide} className="drawer">
          <NavBar links={links} style="navbar--drawer" />
        </div>
      </div>
    </header>
  );
};
export default Header;
