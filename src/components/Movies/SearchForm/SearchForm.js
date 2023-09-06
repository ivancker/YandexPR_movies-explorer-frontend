function SearchForm() {
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
          >Найти</button>
        </form>
        <div className="section-line-grey search-form__line-grey"></div>
        </div>
    </section>
  );
}

export default SearchForm;
