import { useState, useRef } from 'react';

function SearchForm() {
  const [toggleTumb, setToggleTumb] =
    useState(false);

  const [movie, setMovie] =
    useState(false);

  const handleTumbClick = () => {
    setToggleTumb(toggleTumb => !toggleTumb);
  };

  const toggleTumbClassCheck = toggleTumb ? '_on' : ' ';

  const handleSubmit = event => {
    event.preventDefault();
    setMovie("");
  }

  return (
    <section className="search-form">
      <div className="section search-form__container">
        <form className="search-form__form" onSubmit={handleSubmit}>
          <input
            className="search-form__input"
            name="search"
            type="text"
            placeholder="Фильм"
          ></input>
          <button
            className="search-form__button"
            aria-label="Найти"
            type="submit"
          >
            Найти
          </button>
        </form>
        <div className="section-line-grey search-form__line-grey"></div>
        <div
          className="search-form__tumb-container"
          onClick={handleTumbClick}
        >
          <div className={`search-form__tumb${toggleTumbClassCheck}`}>
            <div className={`search-form__tumb-circle${toggleTumbClassCheck}`}></div>
          </div>
          <p className="search-form__tumb-title">
            Короткометражки
          </p>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
