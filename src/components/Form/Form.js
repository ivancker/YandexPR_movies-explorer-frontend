import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Form({
  children,
  formRef,
  onSubmit,
  isValid,
  title,
  buttonName,
  redirectText,
  redirectLink,
  redirectPath,
}) {
  const buttonClassName = `link-button form__button ${
    !isValid
      ? 'form__button_disabled'
      : ''
  }`;

  return (
    <form
      className="form"
      onSubmit={onSubmit}
      noValidate
      ref={formRef}
    >
      <Link
        to="/"
        className="form__link"
      >
        <img
          className="link-button form__logo"
          src={logo}
          alt="Лого"
        />
      </Link>
      <h2 className="form__title">
        {title}
      </h2>
      {children}
      <button
        className={buttonClassName}
        type="submit"
        aria-label="Кнопка действия"
        disabled={!isValid}
      >
        {buttonName}
      </button>
      <p className="form__redirect">
        {redirectText}
        <Link
          to={redirectPath}
          className="link form__redirect-link"
        >
          {redirectLink}
        </Link>
      </p>
    </form>
  );
}

export default Form;
