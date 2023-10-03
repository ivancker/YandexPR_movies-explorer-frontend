import Form from '../Form/Form';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';

const Login = ({ onLogin }) => {
  const {
    values,
    handleChange,
    errors,
    isValid,
    formRef,
  } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin(values);
  };

  return (
    <section className="login">
      <Form
        formRef={formRef}
        isValid={isValid}
        onSubmit={handleSubmit}
        title="Рады видеть!"
        buttonName="Войти"
        redirectText="Ещё не зарегистрированы?"
        redirectLink="Регистрация"
        redirectPath="/signup"
      >
        <label
          className="form__label"
          htmlFor="email"
        >
          E-mail
        </label>
        <input
          className={`form__input ${
            errors.email &&
            'form__input_type_error'
          }`}
          name="email"
          type="email"
          id="email"
          placeholder="Введите E-mail"
          value={values.email}
          onChange={handleChange}
          required
        />
        <span
          className={`form__error-span ${
            errors.email &&
            'form__error-span_visible'
          }`}
        >
          {errors.email}
        </span>
        <label
          className="form__label"
          htmlFor="password"
        >
          Пароль
        </label>
        <input
          className={`form__input ${
            errors.password &&
            'form__input_type_error'
          }`}
          name="password"
          type="password"
          id="password"
          placeholder="Введите пароль"
          value={values.password}
          onChange={handleChange}
          required
          minLength={8}
          maxLength={30}
        />
        <span
          className={`form__error-span form__error-span_type_login ${
            errors.password &&
            'form__error-span_visible'
          }`}
        >
          {errors.password}
        </span>
      </Form>
    </section>
  );
};

export default Login;
