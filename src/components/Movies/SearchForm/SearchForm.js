function SearchForm() {
  return (
    <section className="search-form">
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
    </section>
  );
}

export default SearchForm;
