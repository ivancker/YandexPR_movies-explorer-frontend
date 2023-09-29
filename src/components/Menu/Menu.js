import {
  Link,
  NavLink,
} from 'react-router-dom';
import profileIcon from '../../images/profile-button.svg';

const links = [
  { name: 'Главная', path: '/' },
  { name: 'Фильмы', path: '/movies' },
  {
    name: 'Сохранённые фильмы',
    path: '/saved-movies',
  },
];

function Menu({ value, onChange }) {
  const closeMenu = () => {
    onChange(false);
  };

  const menuItems = links.map(
    (link) => (
      <li
        key={link.name}
        className="menu__item"
      >
        <NavLink
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? 'menu__link menu__link_active'
              : 'menu__link'
          }
          onClick={closeMenu}
        >
          {link.name}
        </NavLink>
      </li>
    )
  );

  return (
    <nav
      className={`menu ${
        value ? 'menu_active' : ''
      }`}
    >
      <div
        className={`menu__overlay ${
          value
            ? 'menu__overlay_active'
            : ''
        }`}
      ></div>
      <div
        className="menu__content"
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <button
          className="menu__close-button"
          onClick={closeMenu}
        ></button>
        <ul className="menu__items">
          {menuItems}
        </ul>
        <Link
          to="/profile"
          onClick={closeMenu}
          className="menu__profile-button"
        >
          <p className="menu__profile-text">
            Аккаунт
          </p>
          <div className="menu__profile-image-container">
            <img
              className="menu__profile-image"
              src={profileIcon}
              alt="Профиль - Кнопка - Картинка"
            />
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Menu;
