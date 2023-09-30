import { useState } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';

const SavedMovies = ({
  isMobile,
  isTablet,
  onChange,
  savedMovies,
  setMovies,
  setIsLoading,
  deleteMovie,
  filteredSavedMovies,
  setFilteredSavedMovies,
}) => {
  const [isSavedMoviesSearched, setIsSavedMoviesSearched] = useState(false);

  return (
    <section className="saved-movies">
      <Header isTablet={isTablet} onChange={onChange} />
      <SearchForm
        setMovies={setMovies}
        movies={savedMovies}
        setFilteredMovies={setFilteredSavedMovies}
        setIsLoading={setIsLoading}
        isSavedMoviesSearched={isSavedMoviesSearched}
        setIsSavedMoviesSearched={setIsSavedMoviesSearched}
      />
      <MoviesCardList
        movies={filteredSavedMovies}
        isMobile={isMobile}
        deleteMovie={deleteMovie}
        isSavedMoviesSearched={isSavedMoviesSearched}
      />
    </section>
  );
};

export default SavedMovies;
