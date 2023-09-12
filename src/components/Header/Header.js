// import Navigation from "./Navigation/Navigation";
import logo from '../../images/logo.svg';
import profile from '../../images/profile-button.svg';
import {
  useLocation,
  Link,
} from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && (
        <header className="header">
          <Link
            className="header__logo-link"
            to="/"
          >
            <img
              className="header__logo"
              src={logo}
              alt="Лого - Фильмы"
            />
          </Link>
          <div className="header__nav">
            <Link
              className="link header__signup-link"
              to="/signup"
            >
              Регистрация
            </Link>
            <Link
              className="link header__signin-button"
              to="/signin"
            >
              <p className="header__signin-button-text">
                Войти
              </p>
            </Link>
          </div>
        </header>
      )}
      {(location.pathname ===
        '/movies' ||
        location.pathname ===
          '/saved-movies' ||
        location.pathname ===
          '/profile') && (
        <header className="header-white">
          <Link
            className="header__logo-link"
            to="/"
          >
            <img
              className="header__logo"
              src={logo}
              alt="Лого - Фильмы"
            />
          </Link>
          <div className="header-white__nav">
            <Link
              className={
                location.pathname ===
                '/movies'
                  ? 'link header-white__movies-link_bold'
                  : 'link header-white__movies-link'
              }
              to="/movies"
            >
              Фильмы
            </Link>
            <Link
              className={
                location.pathname ===
                '/saved-movies'
                  ? 'link header-white__saved-link_bold'
                  : 'link header-white__saved-link'
              }
              to="/saved-movies"
            >
              Сохранённые фильмы
            </Link>
          </div>
          <Link
            className="header-white__profile-button"
            to="/profile"
          >
            <p className="header-white__profile-button-text">
              Аккаунт
            </p>
            <div className="header-white__profile-image-container">
              <img
                className="header-white__profile-image"
                src={profile}
                alt="Профиль - Кнопка - Картинка"
              />
            </div>
          </Link>
          <button className="header-white__nav-mob" />
        </header>
      )}
      {(location.pathname ===
        '/signin' ||
        location.pathname ===
          '/signup') && (
        <header className="header-register">
          <Link
            className="header__logo-link"
            to="/"
          >
            <img
              className="header-register__logo"
              src={logo}
              alt="Лого - Фильмы"
            />
          </Link>
          <h1 className="header-register__title">
            {location.pathname ===
            '/signin'
              ? 'Рады видеть!'
              : 'Добро пожаловать!'}
          </h1>
        </header>
      )}
    </>
  );
}

export default Header;
