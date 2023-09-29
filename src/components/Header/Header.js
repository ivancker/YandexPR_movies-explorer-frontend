import {
  Link,
  NavLink,
  useLocation,
} from 'react-router-dom';

import logo from '../../images/logo.svg';
import profile from '../../images/profile-button.svg';

function Header({
  onChange,
  isTablet,
}) {
  const location = useLocation();
  if (
    localStorage.getItem('isLoggedIn')
  ) {
    return (
      <>
        {location.pathname === '/' && (
          <header className="header header_page-landing">
            <div className="header__content">
              <Link
                to="/"
                className={`link-button header__link ${
                  !isTablet
                    ? 'hidden'
                    : ''
                }`}
              >
                <img
                  src={logo}
                  alt="Лого"
                ></img>
              </Link>
              <button
                className={`link-button header__content-burger-button ${
                  isTablet
                    ? ''
                    : 'hidden'
                }`}
                onClick={onChange}
              ></button>

              <div
                className={`link-buton header__links header__links_page_movies ${
                  isTablet
                    ? 'hidden'
                    : ''
                }`}
              >
                <Link
                  to="/"
                  className="link-button header__link"
                >
                  <img
                    src={logo}
                    alt="Лого"
                  ></img>
                </Link>
                <div className="header__links-movies">
                  <NavLink
                    to="/movies"
                    className={({
                      isActive,
                    }) =>
                      isActive
                        ? 'link header__movies-link header__movies-link_active'
                        : 'link header__movies-link'
                    }
                  >
                    Фильмы
                  </NavLink>
                  <NavLink
                    to="/saved-movies"
                    className={({
                      isActive,
                    }) =>
                      isActive
                        ? 'link header__movies-link header__movies-link_active'
                        : 'link header__movies-link'
                    }
                  >
                    Сохранённые фильмы
                  </NavLink>
                </div>
                <Link
                  className="link-button header__profile-button"
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
              </div>
            </div>
          </header>
        )}
        {(location.pathname ===
          '/movies' ||
          location.pathname ===
            '/saved-movies' ||
          location.pathname ===
            '/profile') && (
          <header className="header-loggedin">
            <div className="header__content header__content_page_movies">
              <Link
                to="/"
                className={`link-button header__link ${
                  !isTablet
                    ? 'hidden'
                    : ''
                }`}
              >
                <img
                  src={logo}
                  alt="Логотип"
                ></img>
              </Link>
              <button
                className={`link-button header-loggedin__content-burger-button ${
                  isTablet
                    ? ''
                    : 'hidden'
                }`}
                onClick={onChange}
              ></button>

              <div
                className={`header__links header__links_page_movies ${
                  isTablet
                    ? 'hidden'
                    : ''
                }`}
              >
                <Link
                  to="/"
                  className="link-button header__link"
                >
                  <img
                    src={logo}
                    alt="Лого"
                  ></img>
                </Link>
                <div className="header__links-movies">
                  <NavLink
                    to="/movies"
                    className={({
                      isActive,
                    }) =>
                      isActive
                        ? 'link header-loggedin__movies-link header__movies-link_active'
                        : 'link header-loggedin__movies-link'
                    }
                  >
                    Фильмы
                  </NavLink>
                  <NavLink
                    to="/saved-movies"
                    className={({
                      isActive,
                    }) =>
                      isActive
                        ? 'link header-loggedin__movies-link header__movies-link_active'
                        : 'link header-loggedin__movies-link'
                    }
                  >
                    Сохранённые фильмы
                  </NavLink>
                </div>
                <Link
                  className="link-button header-loggedin__profile-button"
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
              </div>
            </div>
          </header>
        )}
      </>
    );
  }

  return (
    <header className="header">
      <div className="header__content">
        <Link
          to="/"
          className="link-button header__link"
        >
          <img
            src={logo}
            alt="Лого"
          ></img>
        </Link>
        <div className="header__links">
          <Link
            to="/signup"
            className="link header__signup-link"
          >
            Регистрация
          </Link>
          <Link
            className="link-button header__signin-button"
            to="/signin"
          >
            Войти
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
