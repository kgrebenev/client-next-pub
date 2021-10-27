import { FunctionComponent } from 'react';
import { Error } from '../hooks/requestValidation';

interface Props {
  errors: readonly Error[];
}

const ErrorList: FunctionComponent<Props> = ({ errors }): JSX.Element => {
  return (
    <div>
      {errors.length > 0 && (
        <div className="error">
          <ul className="error__list">
            {errors.map(({ message }) => (
              <li className="error__item" key={message}>
                {message}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ErrorList;
