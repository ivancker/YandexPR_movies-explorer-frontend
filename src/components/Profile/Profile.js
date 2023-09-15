import { Link } from 'react-router-dom';
import { useState } from 'react';

function Profile() {
  let userName = `Виталий`;
  let userEmail = `pochta@yandex.ru`;

  const [editButton, setEditButton] =
    useState('link profile__edit-btn');
  const [
    editButtonText,
    setEditButtonText,
  ] = useState('Редактировать');
  const [exitLink, setExitLink] =
    useState('profile__exit-link');

  const handleEditButtonClick = (e) => {
    e.preventDefault();
    setEditButton(
      'link-button profile__edit-btn_save'
    );
    setEditButtonText('Сохранить');
    setExitLink(
      'profile__exit-link_off'
    );
  };

  return (
    <div className="profile">
      <h2 className="profile__title">
        Привет, {userName}!
      </h2>
      <form
        className="profile__form"
        noValidate
      >
        <ul className="profile__form-container">
          <li className="profile__input-title">
            Имя
          </li>
          <li className="profile__input-container">
            <input
              className="profile__input"
              defaultValue={userName}
              id="profile-input-name"
              type="text"
              name="name"
              disabled
            />
          </li>
          <div className="section-line-grey profile__line-grey"></div>
          <li className="profile__input-title">
            E-mail
          </li>
          <li className="profile__input-container">
            <input
              className="profile__input"
              defaultValue={userEmail}
              id="profile-input-email"
              type="email"
              name="email"
              disabled
            />
          </li>
        </ul>
        <p className="profile__edit-error">При обновлении профиля произошла ошибка.</p>
        <button
          className={editButton}
          onClick={
            handleEditButtonClick
          }
        >
          {editButtonText}
        </button>
      </form>
      <Link className={exitLink} to="/">
        Выйти из аккаунта
      </Link>
    </div>
  );
}

export default Profile;
