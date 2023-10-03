import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import {
  TABLET_SCREEN_WIDTH,
  MOBILE_SCREEN_WIDTH,
} from '../../utils/constants';

function Movies({
  isTablet,
  onChange,
  movies,
  setMovies,
  isLoading,
  setIsLoading,
  addMovie,
  deleteMovie,
  filteredMovies,
  setFilteredMovies,
  likedMovies,
  setIsActionPending,
  isActionPending,
  setLikedMovies,
}) {
  const [searchError, setSearchError] = useState('');
  const [cardsToShow, setCardsToShow] = useState(0);
  const [isMoviesSearched, setIsMoviesSearched] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= MOBILE_SCREEN_WIDTH) {
      setCardsToShow(5);
    } else if (window.innerWidth <= TABLET_SCREEN_WIDTH) {
      setCardsToShow(8);
    } else {
      setCardsToShow(16);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleShowExtraCards = () => {
    const extraCards = window.innerWidth <= TABLET_SCREEN_WIDTH ? 2 : 4;
    setCardsToShow((prevCardsToShow) => prevCardsToShow + extraCards);
  };

  return (
    <div className="movies">
      <Header isTablet={isTablet} onChange={onChange} />
      <SearchForm
        setMovies={setMovies}
        setSearchError={setSearchError}
        movies={movies}
        setFilteredMovies={setFilteredMovies}
        setIsLoading={setIsLoading}
        isMoviesSearched={isMoviesSearched}
        setIsMoviesSearched={setIsMoviesSearched}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <MoviesCardList
            isMoviesSearched={isMoviesSearched}
            isActionPending={isActionPending}
            setIsActionPending={setIsActionPending}
            likedMovies={likedMovies}
            movies={filteredMovies}
            setMovies={setMovies}
            addMovie={addMovie}
            deleteMovie={deleteMovie}
            searchError={searchError}
            cardsToShow={cardsToShow}
            setLikedMovies={setLikedMovies}
          />
          {filteredMovies?.length > cardsToShow && (
            <button
              className="link-button movies__button-more"
              onClick={handleShowExtraCards}
              type="button"
            >
              Ещё
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default Movies;
