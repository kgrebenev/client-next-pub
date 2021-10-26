import axios, { AxiosRequestConfig } from 'axios';
import { GetServerSidePropsContext } from 'next';

const clientRequest = ({ req }: GetServerSidePropsContext) => {
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/',
      headers: req.headers,
    } as AxiosRequestConfig);
  } else {
    return axios.create({
      baseURL: '/',
    });
  }
};

export { clientRequest };
