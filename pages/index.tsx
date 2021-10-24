import { GetServerSideProps } from 'next';

import { clientRequest } from '../api/client';

interface CurrentUser {
  currentUser: {
    id: string;
    email: string;
    iat?: number;
  };
}

const IndexPage = ({ currentUser }: CurrentUser) => {
  return currentUser ? (
    <h1>Index page: signed in as {currentUser.email}</h1>
  ) : (
    <h1>Not signed in</h1>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const client = clientRequest(context);

  const { data } = await client.get<CurrentUser>('/api/users/currentuser');

  return { props: data };
};

export default IndexPage;
