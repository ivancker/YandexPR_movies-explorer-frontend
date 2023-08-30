// import Navigation from "./Navigation/Navigation";
import logo from "../../images/logo.png";
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';

function Header() {

  return (
    <header className="header">
      <img
       className="header__logo"
       src={logo}
       alt="Лого - Фильмы"
       />
      <Routes>
        <Route 
          path="/"
          element={
            <div className="header__nav">
            <Link
              className="header__nav_signup-link"
              to="/signup"
            >
              Регистрация
            </Link>
            <Link
              className="header__nav_signin-button"
              to="/signin"
            >
              <p className="header__nav_signin-button-text">Войти</p>
            </Link>
            </div>
          }
        />
      </Routes>
    </header>
  )
}

export default Header
