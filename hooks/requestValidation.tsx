import { useState, SyntheticEvent } from 'react';
import axios, { AxiosResponse, AxiosError, AxiosStatic } from 'axios';

interface HookRequest {
  url: string;
  method: string;
  data: {};
}

interface Error {
  message: string;
  field: string;
}

const RequestValidation = ({
  url,
  method,
  data,
}: HookRequest): (Error[] | Function)[] => {
  const [errors, setErrors] = useState<Error[]>([]);

  const validatedRequest = async () => {
    return await axios[method](url, data);
  };

  return [errors, validatedRequest];
};

export default RequestValidation;
