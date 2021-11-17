import { FunctionComponent, useRef, useState } from 'react';
import { gsap } from 'gsap';

import useIsomorphicLayoutEffect from '../animation/useIsomorphicLayoutEffect';

interface Props {
  drawer: boolean;
}

const Drawer: FunctionComponent<Props> = ({ drawer }) => {
  const [drawerStyle, setDrawerStyle] = useState({ display: 'none' });

  const el = useRef<HTMLDivElement>(null);

  const tl = useRef<gsap.core.Animation>();

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap.timeline().to(el.current, {
      x: 300,
      onComplete: () => {
        setDrawerStyle({ display: 'block' });
      },
    });
  }, []);

  useIsomorphicLayoutEffect(() => {
    tl.current?.reversed(drawer);
  }, [drawer]);

  return (
    <div style={drawerStyle} ref={el} className="drawer">
      <ul className="drawer__list">
        <li>Link1</li>
        <li>Link2</li>
        <li>Link3</li>
        <li>Link4</li>
      </ul>
    </div>
  );
};

export default Drawer;
