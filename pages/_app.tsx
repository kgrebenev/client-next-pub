import { AppProps } from 'next/app';
import '../scss/global.scss';

const myApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default myApp;
