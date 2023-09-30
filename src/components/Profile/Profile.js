import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { updateUser } from '../../utils/MainApi';
import { errorMessages, successMessages } from '../../utils/constants';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

const Profile = ({
  onSignOut,
  isTablet,
  onChange,
  handleSuccessMessage,
  handleErrorMessage,
}) => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const {
    values,
    setValues,
    handleChange,
    errors,
    isValid,
    setIsValid,
    resetForm,
    formRef,
  } = useFormWithValidation();
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      values.name !== currentUser.name ||
      values.email !== currentUser.email
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [values.name, values.email, currentUser.name, currentUser.email, setIsValid]);

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser, setValues]);

  const handleSignOut = () => {
    onSignOut();
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateUser(values)
      .then((res) => {
        setCurrentUser({
          ...currentUser,
          name: res.name,
          email: res.email,
        });
        handleSuccessMessage(successMessages.profileEditing);
        setIsEditingProfile(false);
        resetForm({
          name: values.name,
          email: values.email,
        });
      })
      .catch(() => {
        handleErrorMessage(errorMessages.emailAlreadyExists);
      });
  };

  return (
    <>
      <Header isTablet={isTablet} onChange={onChange} />
      <section className="profile">
        <div className="profile__content">
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          {isEditingProfile ? (
            <form className="profile__form" onSubmit={handleSubmit} noValidate ref={formRef}>
              <fieldset className="profile__form-fieldset">
                <label className="profile__form-label" htmlFor="name">
                  Имя
                </label>
                <div className="profile__form-editing-group">
                  <input
                    className="profile__form-input"
                    name="name"
                    id="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Введите новое имя"
                    required
                    minLength={2}
                    maxLength={30}
                  />
                  <span className={`profile__form-error-span ${errors.name && 'profile__form-error-span_visible'}`}>
                    {errors.name}
                  </span>
                </div>
              </fieldset>
              <fieldset className="profile__form-fieldset">
                <label className="profile__form-label" htmlFor="email">
                  E-mail
                </label>
                <div className="profile__form-editing-group">
                  <input
                    className={`profile__form-input ${errors.email && 'profile__form-input_type_error'}`}
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Введите новый E-mail"
                    required
                  />
                  <span className={`profile__form-error-span ${errors.email && 'profile__form-error-span_visible'}`}>
                    {errors.email}
                  </span>
                </div>
              </fieldset>
              <div className="profile__form-editing">
                <button
                  disabled={!isValid}
                  className={`link-button profile__form-editing-save-button ${!isValid && 'profile__form-editing-save-button_disabled'}`}
                  type="submit"
                >
                  Сохранить
                </button>
              </div>
            </form>
          ) : (
            <>
              <div className="profile__info-group">
                <p className="profile__info-group-text">Имя</p>
                <p className="profile__info-group-text profile__info-group-text_type_user">{currentUser.name}</p>
              </div>
              <div className="profile__info-group">
                <p className="profile__info-group-text">E-mail</p>
                <p className="profile__info-group-text profile__info-group-text_type_user">{currentUser.email}</p>
              </div>
            </>
          )}
        </div>
        {!isEditingProfile && (
          <div className="profile__buttons">
            <button onClick={() => setIsEditingProfile(true)} className="link profile__buttons-edit-button" type="button">
              Редактировать
            </button>
            <button onClick={handleSignOut} className="link profile__buttons-exit-button" type="button">
              Выйти из аккаунта
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Profile;
