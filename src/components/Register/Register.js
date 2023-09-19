import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFormWithValidation from '../../utils/useFormWithValidation';

function Register({ onRegister }) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
    resetForm();
  }

  return (
    <main className="register">
      <form
        className="register-form"
        noValidate
        onSubmit={handleSubmit}
      >
        <p className="register-form__input-title">
          Имя
        </p>
        <input
          className="register-form__input"
          name="name"
          type="text"
          required
          minLength="2"
          maxLength="30"
          value={values.name || ''}
          onChange={handleChange}
          pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
        ></input>
        <span className="register-form__error-text">
          {errors.name || ''}
        </span>
        <p className="register-form__input-title">
          E-mail
        </p>
        <input
          className="register-form__input"
          name="email"
          type="email"
          required
          onChange={handleChange}
          value={values.email || ''}
          pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
        ></input>
        <span className="register-form__error-text">
          {errors.email || ''}
        </span>
        <p className="register-form__input-title">
          Пароль
        </p>
        <input
          className="register-form__input"
          name="password"
          type="password"
          required
          minLength="8"
          value={values.password || ''}
          onChange={handleChange}
        ></input>
        <span className="register-form__error-text">
          {errors.password || ''}
        </span>
        <button
          className={`link-button register-form__button ${!isValid && "register-form__button_disabled"}`}
          type="submit"
          disabled={!isValid}
        >
          Зарегистрироваться
        </button>
      </form>
      <div className="register__under-button">
        <p className="register__under-button-text">
          Уже зарегистрированы?
        </p>
        <Link
          className="link register__link"
          to="/signin"
        >
          Войти
        </Link>
      </div>
    </main>
  );
}

export default Register;
