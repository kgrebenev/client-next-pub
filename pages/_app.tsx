import { AppProps } from 'next/app';
import '../scss/styles.scss';

const myApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default myApp;
