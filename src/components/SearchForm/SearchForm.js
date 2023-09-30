import { React, useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useLocation } from 'react-router-dom';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';

import { getAllMovies } from '../../utils/MoviesApi';
import useMoviesFiltering from '../../hooks/useMoviesFiltering';

function SearchForm({
  setMovies,
  movies,
  setFilteredMovies,
  setIsLoading,
  setSearchError,
  isMoviesSearched,
  setIsMoviesSearched,
  isSavedMoviesSearched,
  setIsSavedMoviesSearched,
}) {
  const { pathname } = useLocation();

  const [isChecked, setIsChecked] = useState(false);

  const { values, handleChange, errors, isValid, formRef } = useFormWithValidation();
  const { filteredMovies } = useMoviesFiltering(movies, values.film, isChecked);

  useEffect(() => {
    if (pathname === '/saved-movies' && isSavedMoviesSearched) {
      setFilteredMovies(filteredMovies);
    } else if (pathname === '/saved-movies') {
      setFilteredMovies(movies);
    }
  }, [filteredMovies, setFilteredMovies, pathname, isSavedMoviesSearched, movies]);

  useEffect(() => {
    if (isMoviesSearched && pathname === '/movies') {
      localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
      localStorage.setItem('isChecked', isChecked);
      localStorage.setItem('filmQuery', values.film);
    }
  }, [filteredMovies, isChecked, values.film, isMoviesSearched, pathname]);

  useEffect(() => {
    if (pathname === '/movies') {
      const filtredMoviesFromLS =
        localStorage.getItem('filteredMovies') === 'undefined' ||
        localStorage.getItem('filteredMovies') === "[]"
          ? []
          : JSON.parse(localStorage.getItem('filteredMovies'));
      const isCheckedFromLS = localStorage.getItem('isChecked') === 'true';
      const filmQueryFromLS = localStorage.getItem('filmQuery');

      if (filmQueryFromLS) {
        setFilteredMovies(filtredMoviesFromLS);
        setIsChecked(isCheckedFromLS);
        handleChange({ target: { name: 'film', value: filmQueryFromLS } });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredMovies, setFilteredMovies, pathname]);

  const showMovieSearch = () => {
    setIsLoading(true);

    getAllMovies()
      .then((res) => {
        setSearchError('');
        setMovies(res);
        setIsMoviesSearched(true);
      })
      .catch(() =>
        setSearchError(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
        ),
      )
      .finally(() => setIsLoading(false));
  };

  const showSavedMovieSearch = () => {
    setMovies((savedMovies) => [...savedMovies]);
    setIsSavedMoviesSearched(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pathname === '/movies') {
      showMovieSearch();
      return;
    } else if (pathname === '/saved-movies') {
      showSavedMovieSearch();
      return;
    }
  };

  const toggleCheckbox = () => {
    if (isValid && pathname === '/movies') {
      setIsChecked(!isChecked);
      showMovieSearch();
    } else if (pathname === '/saved-movies' | movies.length !== 0) {
      setIsChecked(!isChecked);
      showSavedMovieSearch();
    } else {
      setIsChecked(!isChecked);
    }
  };

  return (
    <form className="search-form" noValidate onSubmit={handleSubmit} ref={formRef}>
      <div className="search-form__content">
        <input
          type="text"
          name="film"
          value={values.film}
          onChange={handleChange}
          required
          className="search-form__content-input"
          placeholder="Фильм"
        />
        <button
          disabled={!isValid}
          className={`link-button search-form__content-submit-button ${
            errors.film && 'search-form__content-submit-button_disabled'
          }`}
          type="submit"
          >Найти</button>
      </div>
      <div className="section-line-grey search-form__line-grey"></div>
      <span
        className={`search-form__error-span ${errors.film && 'search-form__error-span_visible'}`}>
        Введите запрос
      </span>
      <FilterCheckbox isChecked={isChecked} toggleCheckbox={toggleCheckbox} />
    </form>
  );
};

export default SearchForm;
