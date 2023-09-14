import { Link } from 'react-router-dom';

function Profile() {
  let userName = `Виталий`;
  let userEmail = `pochta@yandex.ru`;

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
      </form>
      <button className="link profile__edit-btn">
        Редактировать
      </button>
      <Link
        className="link profile__exit-link"
        to="/"
      >
        Выйти из аккаунта
      </Link>
    </div>
  );
}

export default Profile;
