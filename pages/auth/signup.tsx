import { useState } from 'react';

const Signup = (): JSX.Element => {
  const result = useState('инициализация useState');

  console.log(result);

  return (
    <div className="container">
      <form className="form">
        <h1>Sign up</h1>

        <ul className="form__list">
          <li className="form__item">
            <label className="form__label">
              <input
                className="form__input"
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
                type="password"
                name="password"
                placeholder="password"
              />
            </label>
          </li>
        </ul>

        <button className="button">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
