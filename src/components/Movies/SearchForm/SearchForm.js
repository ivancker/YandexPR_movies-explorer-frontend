import { useState } from 'react';

function SearchForm() {
  const [toggleTumb, setToggleTumb] =
    useState(" ");

    const classTumbOn = `_on`

  const handleTumbClick = () => {
    setToggleTumb(!toggleTumb);
  };

  return (
    <section className="search-form">
      <div className="section search-form__container">
        <form className="search-form__form">
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
          <div className={`"search-form__tumb${toggleTumb}"` ? "search-form__tumb" : `"search-form__tumb${classTumbOn}"`}>
            <div className={`"search-form__tumb-circle${toggleTumb}"` ? "search-form__tumb-circle" : `"search-form__tumb-circle${classTumbOn}"`}></div>
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
