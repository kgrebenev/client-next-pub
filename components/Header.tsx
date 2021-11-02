import Link from 'next/link';
import NavBar from './Navbar';

export interface CurrentUser {
  currentUser: {
    id: string;
    email: string;
    iat?: number;
  };
}

const Header = ({ currentUser }: CurrentUser): JSX.Element => {
  const logo = process.env.NEXT_PUBLIC_LOGO;

  return (
    <header className="header">
      <div className="header__logo logo">
        <Link href="/">
          <a className="logo__link">{logo}</a>
        </Link>
      </div>

      <NavBar links={[{ label: 'Ссылка1', href: 'www' }]} />
    </header>
  );
};
export default Header;
