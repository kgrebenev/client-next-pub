const Header = ({ currentUser }: any): JSX.Element => {
  return <h1>HEADER: {currentUser.email}</h1>;
};
export default Header;
