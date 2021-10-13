const Signup = (): JSX.Element => {
  return (
    <div className="container">
      <form className="form">
        <h1>Signup</h1>
        <ul className="form__list">
          <li className="form__item">
            <label className="form__label">
              Email:
              <input className="form__input" type="text" name="email" />
            </label>
          </li>

          <li className="form__item">
            <label className="form__label">
              Password:
              <input className="form__input" type="password" name="password" />
            </label>
          </li>
        </ul>

        <button className="form__button">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
