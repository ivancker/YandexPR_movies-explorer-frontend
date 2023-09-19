import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFormWithValidation from '../../utils/useFormWithValidation';

function Login({ onLogin }) {
  const {
    values,
    handleChange,
    resetForm,
    errors,
    isValid,
  } = useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({
      email: values.email,
      password: values.password,
    });
    resetForm();
  }

  return (
    <main className="login">
      <form
        className="login-form"
        onSubmit={handleSubmit}
        formNoValidate
      >
        <p className="login-form__input-title">
          E-mail
        </p>
        <input
          className="login-form__input"
          name="email"
          type="email"
          required
          onChange={handleChange}
          value={values.email || ''}
        ></input>
                <span className="register-form__error-text">
          {errors.name || ''}
        </span>
        <p className="login-form__input-title">
          Пароль
        </p>
        <input
          className="login-form__input"
          name="password"
          type="password"
          required
          value={values.password || ''}
          onChange={handleChange}
        ></input>
                <span className="register-form__error-text">
          {errors.password || ''}
        </span>
        <button
          className={`link-button login-form__button ${!isValid && 'login-form__button_disabled'}`}
          disabled={!isValid}
        >
          Войти
        </button>
      </form>
      <div className="login__under-button">
        <p className="login__under-button-text">
          Ещё не зарегистрированы?
        </p>
        <Link
          className="link login__link"
          to="/signup"
        >
          Регистрация
        </Link>
      </div>
    </main>
  );
}

export default Login;
