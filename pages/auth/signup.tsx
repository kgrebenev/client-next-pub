import { useState, SyntheticEvent } from 'react';
import Router from 'next/router';

import requestValidation from '../../hooks/requestValidation';
import ErrorList from '../../components/ErrorList';

interface User {
  email: string;
  password: string;
}

const Signup = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { errors, successRequest } = requestValidation<User>({
    url: '/api/users/signup',
    method: 'post',
    data: { email, password },
  });

  const onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const user = await successRequest();
    if (user) Router.push('/');
  };

  return (
    <form className='form' onSubmit={onSubmit}>
      <h1>Sign up</h1>

      <ul className='form__list'>
        <li className='form__item'>
          <label className='form__label'>
            <input
              className='form__input'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type='text'
              name='email'
              placeholder='email'
            />
          </label>
        </li>

        <li className='form__item'>
          <label className='form__label'>
            <input
              className='form__input'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type='password'
              name='password'
              placeholder='password'
            />
          </label>
        </li>
      </ul>
      <div className='form__error'>
        <ErrorList errors={errors}></ErrorList>
      </div>

      <button className='button'>Sign up</button>
    </form>
  );
};

export default Signup;
