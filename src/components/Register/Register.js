import React from 'react';
import Form from '../Form/Form';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Register({ onRegister }) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    formRef,
  } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister(values);
  };

  return (
    <section className="register">
      <Form
        formRef={formRef}
        onSubmit={handleSubmit}
        isValid={isValid}
        title="Добро пожаловать!"
        buttonName="Зарегистрироваться"
        redirectText="Уже зарегистрированы?"
        redirectLink="Войти"
        redirectPath="/signin"
      >
        <label
          className="form__label"
          htmlFor="name"
        >
          Имя
        </label>
        <input
          className={`form__input ${
            errors.name &&
            'form__input_type_error'
          }`}
          name="name"
          type="text"
          placeholder="Введите имя"
          id="name"
          value={values.name}
          onChange={handleChange}
          required
          minLength={2}
          maxLength={30}
        />
        <span
          className={`form__error-span ${
            errors.name &&
            'form__error-span_visible'
          }`}
        >
          {errors.name}
        </span>
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
          placeholder="Введите E-mail"
          id="email"
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
          placeholder="Введите пароль"
          id="password"
          value={values.password}
          onChange={handleChange}
          required
          minLength={8}
          maxLength={30}
        />
        <span
          className={`form__error-span ${
            errors.password &&
            'form__error-span_visible'
          }`}
        >
          {errors.password}
        </span>
      </Form>
    </section>
  );
}

export default Register;
