import { Link } from 'react-router-dom';

function Register() {
  return (
    <main className="register">
      <form className="register-form">
        <p className="register-form__input-title">
          Имя
        </p>
        <input
          className="register-form__input"
          name="name"
          type="text"
          required
        ></input>
        <p className="register-form__input-title">
          E-mail
        </p>
        <input
          className="register-form__input"
          name="email"
          type="email"
          required
        ></input>
        <p className="register-form__input-title">
          Пароль
        </p>
        <input
          className="register-form__input"
          name="password"
          type="password"
          required
        ></input>
        <span className="login-form__error-space">
          <p className="login-form__error-text">
            Что-то пошло не так...
          </p>
        </span>
        <button className="link-button register-form__button">
          Зарегистрироваться
        </button>
      </form>
      <div className="register__under-button">
        <p className="register__under-button-text">
          Уже зарегистрированы?
        </p>
        <Link
          className="link register__link"
          to="/signin"
        >
          Войти
        </Link>
      </div>
    </main>
  );
}

export default Register;
