import { FunctionComponent } from 'react';

import NavBar from './Navbar';

interface Props {
  drawer: boolean;
}

const UserMenu: FunctionComponent<Props> = ({ drawer }): JSX.Element => {
  const links = [
    { label: 'link1', href: '/auth/user' },
    { label: 'link2', href: '/auth/signout' },
    { label: 'link3', href: '/auth/signout' },
  ];

  return (
    <div className="usermenu">
      <NavBar links={links} style="navbar--drawer" />;
    </div>
  );
};

export default UserMenu;