import Link from 'next/link';

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
    </header>
  );
};
export default Header;
