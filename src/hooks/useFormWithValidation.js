import {
  useState,
  useRef,
  useCallback,
} from 'react';

import { regExpUserName, regExpEmail, regExpPassword } from '../utils/constants';

export function useFormWithValidation() {
  const formRef = useRef(null);

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    film: '',
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e, form) => {
    const { name, value } = e.target;
    let errorMessage = '';

    if (name === 'email') {
      const isEmailValid = regExpEmail.test(value);
      errorMessage = !isEmailValid
        ? e.target.validationMessage || 'Введите корректный адрес электронной почты.'
        : '';
      setErrors({
        ...errors,
        [name]: errorMessage,
      });
    } else if (name === 'name') {
      const isNameValid = regExpUserName.test(value);
      errorMessage = !isNameValid
        ? e.target.validationMessage || 'Имя может содержать только латиницу, кириллицу, пробел или дефис.'
        : '';
      setErrors({
        ...errors,
        [name]: errorMessage,
      });
    } else if (name === 'password') {
      const isPasswordValid = regExpPassword.test(value);
      errorMessage = !isPasswordValid
        ? e.target.validationMessage || 'Пароль должен содержать цифавы и буквы.'
        : '';
      setErrors({
        ...errors,
        [name]: errorMessage,
      });
    }

    setValues({
      ...values,
      [name]: value,
    });

    setIsValid(formRef.current.checkValidity() && errorMessage === '');
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    setValues,
    handleChange,
    errors,
    isValid,
    setIsValid,
    resetForm,
    formRef,
  };
}
