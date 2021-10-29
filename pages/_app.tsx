import type { AppProps, AppContext } from 'next/app';

import '../scss/styles.scss';
import { clientRequest } from '../api/client';
import Header from '../components/Header';

interface CurrentUser {
  currentUser: {
    id: string;
    email: string;
    iat?: number;
  };
}

const myApp = ({
  Component,
  pageProps,
  currentUser,
}: AppProps & CurrentUser): JSX.Element => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />;
    </div>
  );
};

myApp.getInitialProps = async ({ ctx }: AppContext) => {
  const client = clientRequest(ctx);
  const { data } = await client.get<CurrentUser>('/api/users/currentuser');

  return data;
};

export default myApp;
