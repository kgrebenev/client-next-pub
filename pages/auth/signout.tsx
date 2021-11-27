import { useEffect } from 'react';
import Router from 'next/router';

import RequestValidation from '../../hooks/requestValidation';
import ErrorList from '../../components/ErrorList';

const Signout = (): JSX.Element => {
  const { successRequest, errors } = RequestValidation({
    url: '/api/users/signout',
    method: 'post',
    data: {},
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await successRequest();
      if (result) Router.push('/');
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Singin out!</h1>
      {errors && <ErrorList errors={errors}></ErrorList>}
    </div>
  );
};

export default Signout;
