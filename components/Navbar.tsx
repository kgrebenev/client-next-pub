import { FunctionComponent } from 'react';
import Link from 'next/link';

type ClassNames = 'navbar--header' | 'navbar--drawer' | 'navbar--footer';

export interface Props {
  links: {
    label: string;
    href: string;
  }[];
  style?: ClassNames;
}

const NavBar: FunctionComponent<Props> = ({
  links,
  style = '',
}): JSX.Element => {
  return (
    <nav className={`navbar ${style}`}>
      <ul className="navbar__list">
        {links.map(({ href, label }, index) => (
          <li className="navbar__item" key={index}>
            <Link href={href}>
              <a className="navbar__link">{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
