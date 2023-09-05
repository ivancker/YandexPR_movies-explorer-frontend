// import Navigation from "./Navigation/Navigation";
import logo from '../../images/logo.svg';
import profile from '../../images/profile-button.svg';
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';

function Header() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <header className="header">
            <img
              className="header__logo"
              src={logo}
              alt="Лого - Фильмы"
            />
            <div className="header__nav">
              <Link
                className="header__signup-link"
                to="/signup"
              >
                Регистрация
              </Link>
              <Link
                className="header__signin-button"
                to="/signin"
              >
                <p className="header__signin-button-text">
                  Войти
                </p>
              </Link>
            </div>
          </header>
        }
      />
      <Route
        path="/movies"
        element={
          <header className="header-movies">
            <img
              className="header__logo"
              src={logo}
              alt="Лого - Фильмы"
            />
            <div className="header__nav">
              <Link
                className="header__movies-link"
                to="/movies"
              >
                Фильмы
              </Link>
              <Link
                className="header__saved-link"
                to="/saved-movies"
              >
                Сохранённые фильмы
              </Link>
            </div>
            <Link
              className="header__profile-button"
              to="/profile"
            >
              <p className="header__profile-button-text">
                Аккаунт
              </p>
              <div className="header__profile-image-container">
                <img
                  className="header__profile-image"
                  src={profile}
                  alt="Профиль - Кнопка - Картинка"
                />
              </div>
            </Link>
          </header>
        }
      />
    </Routes>
  );
}

export default Header;
