import { FunctionComponent, useState, useRef } from 'react';
import { gsap } from 'gsap';

import Link from 'next/link';
import NavBar from './Navbar';
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
  const logo = process.env.NEXT_PUBLIC_LOGO;
  const [drawer, setDrawer] = useState(false);
  const [userDrawer, setUserDrawer] = useState(false);

  const [drawerHide, setDrawerHide] = useState({ display: 'none' });

  const el = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(el);
  const tl = useRef<gsap.core.Animation>();

  const links = [
    { label: 'Link1', href: '/test' },
    { label: 'Link2', href: '/test' },
    { label: 'Регистрация', href: '/auth/signup' },
    { label: 'Вход', href: '/auth/signin' },
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
      <a className="logo__link">{logo}</a>
    </Link>
  ) : (
    <button onClick={() => setUserDrawer(!userDrawer)} className="logo__button">
      {currentUser.email}
    </button>
  );

  return (
    <header ref={el} className="header">
      <div className="header__logo logo">
        <h1>{currentLogo}</h1>
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
