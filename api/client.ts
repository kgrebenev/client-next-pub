import axios, { AxiosRequestConfig } from 'axios';
import { NextPageContext } from 'next';

const clientRequest = (ctx: NextPageContext) => {
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/',
      headers: ctx.req?.headers,
    } as AxiosRequestConfig);
  } else {
    return axios.create({
      baseURL: '/',
    });
  }
};

export { clientRequest };
