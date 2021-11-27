import { FunctionComponent } from 'react';

import NavBar from './Navbar';

interface Props {
  width: number;
}

const UserMenu: FunctionComponent<Props> = ({ width }): JSX.Element => {
  const links = [
    { label: 'Settings', href: '/auth/user/settings' },
    { label: 'Profile', href: '/auth/user/profile' },
    { label: 'Sign out', href: '/auth/signout' },
  ];

  return (
    <div className="usermenu" style={{ width }}>
      {
        <div
          className={`usermenu__drawer ${
            width ? 'usermenu__drawer--active' : ''
          }`}
          style={{ width }}
        >
          <NavBar links={links} style="navbar--drawer" />
        </div>
      }
    </div>
  );
};

export default UserMenu;
