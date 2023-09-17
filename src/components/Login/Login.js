import { Link } from 'react-router-dom';

function Login({ handleRegistre }) {
  const { inputData } = validation()

  function handleSubmit(evn) {
    evn.preventDefault();
    handleRegistre(inputData);
  }


  return (
    <main className="login" onSubmit={handleSubmit}>
      <form className="login-form">
        <p className="login-form__input-title">
          E-mail
        </p>
        <input
          className="login-form__input"
          name="email"
          type="email"
          value={inputData.name}
        ></input>
        <p className="login-form__input-title">
          Пароль
        </p>
        <input
          className="login-form__input"
          name="password"
          type="password"
        ></input>
        <button className="link-button login-form__button">
          Войти
        </button>
      </form>
      <div className="login__under-button">
        <p className="login__under-button-text">
          Ещё не зарегистрированы?
        </p>
        <Link
          className="link login__link"
          to="/signup"
        >
          Регистрация
        </Link>
      </div>
    </main>
  );
}

export default Login;
