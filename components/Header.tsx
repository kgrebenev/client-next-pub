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

  const [hamburgerHide, setHamburgerHide] = useState({ display: 'none' });

  const el = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(el);
  const tl = useRef<gsap.core.Animation>();

  const links = [
    { label: 'Link1', href: '/test' },
    { label: 'Link2', href: '/test' },
    { label: 'Link3', href: '/test' },
    { label: 'Link4', href: '/test' },
  ];

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap
      .timeline()
      .to(q('.drawer'), { x: 300 })
      .to(q('.hamburger'), {
        x: 200,
        // onComplete: () => {
        //   setHamburgerHide({ display: 'block' });
        // },
      });
  }, []);

  useIsomorphicLayoutEffect(() => {
    console.log(drawer);
    tl.current?.reversed(drawer);
  }, [drawer]);

  return (
    <header className='header'>
      <div className='header__logo logo'>
        <h1>
          <Link href='/'>
            <a className='logo__link'>{logo}</a>
          </Link>
        </h1>
      </div>

      <NavBar links={links} />

      <div ref={el}>
        <div className='header__square'></div>
        <div className='header__hamburger hamburger'>
          <button
            onClick={() => setDrawer(!drawer)}
            className='hamburger__icon'
            aria-label='menu'
          >
            <span className='hamburger__line'></span>
          </button>
        </div>

        {/* <Drawer /> */}

        <div className='drawer'>
          <ul className='drawer__list'>
            <li>Link1</li>
            <li>Link2</li>
            <li>Link3</li>
            <li>Link4</li>
          </ul>
        </div>
      </div>

      {drawer && (
        <div
          onClick={() => setDrawer(!drawer)}
          className='drawer__background'
        ></div>
      )}
    </header>
  );
};
export default Header;
