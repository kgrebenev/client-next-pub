import Link from 'next/link';

export interface NavLinks {
  links: {
    label: string;
    href: string;
  }[];
}

const NavBar = ({ links }: NavLinks): JSX.Element => {
  return (
    <nav className="navbar">
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
