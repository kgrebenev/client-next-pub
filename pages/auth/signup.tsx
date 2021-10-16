import { useState, SyntheticEvent } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface Error {
  message: string;
  field: string;
}

const Signup = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<Error[]>([]);

  const onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    await axios
      .post('/api/users/signup', { email, password })
      .then(({ data }: AxiosResponse) => console.log(data))

      .catch(({ response }: AxiosError<{ errors: Error[] }>) => {
        setErrors(response?.data.errors ? response.data.errors : []);
      });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={onSubmit}>
        <h1>Sign up</h1>

        <ul className="form__list">
          <li className="form__item">
            <label className="form__label">
              <input
                className="form__input"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="text"
                name="email"
                placeholder="email"
              />
            </label>
          </li>

          <li className="form__item">
            <label className="form__label">
              <input
                className="form__input"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                name="password"
                placeholder="password"
              />
            </label>
          </li>
        </ul>

        <div>{errors.map(({ message }) => message)}</div>

        <button className="button">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
