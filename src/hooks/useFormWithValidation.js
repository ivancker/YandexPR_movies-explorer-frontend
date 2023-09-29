import {
  useState,
  useRef,
  useCallback,
} from 'react';

import { regExpUserName } from '../utils/constants';

export function useFormWithValidation() {
  const formRef = useRef(null);

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    film: '',
  });
  const [errors, setErrors] = useState(
    {}
  );
  const [isValid, setIsValid] =
    useState(false);

  const handleChange = (e, form) => {
    const { name, value } = e.target;

    const isName = name === 'name';
    const isNameValid = isName
      ? regExpUserName.test(value)
      : true;
    const errorMessage = !isNameValid
      ? e.target.validationMessage ||
        'Имя может содержать только латиницу, кириллицу, пробел или дефис.'
      : e.target.validationMessage;

    setValues({
      ...values,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: errorMessage,
    });
    setIsValid(
      isNameValid &&
        formRef.current.checkValidity()
    );
  };

  const resetForm = useCallback(
    (
      newValues = {},
      newErrors = {},
      newIsValid = false
    ) => {
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
