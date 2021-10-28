import type { AppProps, AppContext } from 'next/app';

import '../scss/styles.scss';
import { clientRequest } from '../api/client';

const myApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <div>
      <h1>Header</h1>
      <Component {...pageProps} />;
    </div>
  );
};

myApp.getInitialProps = async ({ ctx }: AppContext) => {
  const client = clientRequest(ctx);
  const { data } = await client.get('/api/users/currentuser');
  console.log(data);
  return { data };
};

export default myApp;
