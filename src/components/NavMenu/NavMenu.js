import React from 'react';
import {
  NavLink,
  Link,
} from 'react-router-dom';
import profile from '../../images/profile-button.svg';

function NavMenu({ isOpen, onClose }) {
  return (
    <section
      className={`nav-menu ${
        isOpen ? 'nav-menu_opened' : ''
      }`}
    >
      <div className="nav-menu__container">
        <button
          className="link-button nav-menu__close"
          onClick={onClose}
        />
        <nav className="nav-menu__link-container">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `link nav-menu__link ${
                isActive
                  ? 'link nav-menu__link_active'
                  : ''
              }`
            }
          >
            Главная
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `link nav-menu__link ${
                isActive
                  ? 'link nav-menu__link_active'
                  : ''
              }`
            }
            to="/movies"
          >
            Фильмы
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `link nav-menu__link ${
                isActive
                  ? 'link nav-menu__link_active'
                  : ''
              }`
            }
            to="/saved-movies"
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link
          className="link-button nav-menu__profile-btn"
          to="/profile"
        >
          <p className="nav-menu__profile-btn-text">
            Аккаунт
          </p>
          <div className="nav-menu__profile-image-container">
            <img
              className="nav-menu__profile-image"
              src={profile}
              alt="Профиль - Кнопка - Картинка"
            />
          </div>
        </Link>
      </div>
    </section>
  );
}

export default NavMenu;
