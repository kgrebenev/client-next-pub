import { useRef } from 'react';
import { gsap } from 'gsap';

import useIsomorphicLayoutEffect from '../animation/useIsomorphicLayoutEffect';

const TestPage = (): JSX.Element => {
  const el = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.to(el.current, { rotation: '+=360' });
  });

  return (
    <div className="box" ref={el}>
      Hello
    </div>
  );
};

export default TestPage;
