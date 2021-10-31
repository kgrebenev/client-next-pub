export interface CurrentUser {
  currentUser: {
    id: string;
    email: string;
    iat?: number;
  };
}

const Header = ({ currentUser }: CurrentUser): JSX.Element => {
  return <h1>HEADER: {currentUser.email}</h1>;
};
export default Header;
