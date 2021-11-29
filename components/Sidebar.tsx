import { FunctionComponent, useState, useRef } from 'react';
import { gsap } from 'gsap';

import useIsomorphicLayoutEffect from '../animation/useIsomorphicLayoutEffect';

const Sidebar: FunctionComponent = ({ children }) => {
  const [drawer, setDrawer] = useState(false);
  const [drawerHide, setDrawerHide] = useState({ display: 'none' });

  const el = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(el);
  const tl = useRef<gsap.core.Animation>();

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap
      .timeline()

      .to(q('.sidebar__drawer'), { x: 300 })
      .fromTo(q('.sidebar'), { height: '100vh' }, { height: '100px' })
      .to(q('.sidebar'), {
        x: 200,
        onComplete: () => {
          setDrawerHide({ display: 'block' });
        },
      });
  }, []);

  useIsomorphicLayoutEffect(() => {
    console.log(drawer);
    tl.current?.reversed(drawer);
  }, [drawer]);

  return (
    <div ref={el}>
      <div style={drawerHide} className="header__sidebar sidebar">
        <button
          onClick={() => setDrawer(!drawer)}
          className={`sidebar__icon ${drawer ? 'sidebar__icon--active' : ''}`}
          aria-label="menu"
        >
          <span className="sidebar__line"></span>
        </button>
      </div>

      <div style={drawerHide} className="sidebar__drawer">
        {children}
        {/* <NavBar links={links} style="navbar--drawer" /> */}
      </div>
    </div>
  );
};

export default Sidebar;
