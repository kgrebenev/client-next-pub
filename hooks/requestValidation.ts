import { useState } from 'react';
import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';

interface Error {
  message: string;
  field: string;
}

const RequestValidation = <T,>({
  url,
  method,
  data,
}: AxiosRequestConfig<T>) => {
  const [errors, setErrors] = useState<Error[]>([]);

  const successRequest = async () => {
    return await axios({ method, url, data })
      .then((res: AxiosResponse) => {
        setErrors([]);
        return res.data;
      })

      .catch(({ response }: AxiosError<{ errors: Error[] }>) => {
        setErrors(response?.data.errors ? response.data.errors : []);
      });
  };

  return { successRequest, errors };
};

export default RequestValidation;
