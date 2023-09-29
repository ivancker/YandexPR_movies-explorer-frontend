import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  movies,
  isMobile,
  searchError,
  cardsToShow,
  addMovie,
  deleteMovie,
  likedMovies,
  isAbleToLike,
  setIsActionPending,
  isActionPending,
  isMoviesSearched,
  isSavedMoviesSearched,
}) {
  const renderMovies = () => {
    if (searchError) {
      return <p className="movies-card-list__inside">{searchError}</p>;
    } else if (movies?.length === 0) {
      return (
        <p className="movies-card-list__inside">
          {isMoviesSearched || isSavedMoviesSearched ? 'Ничего не найдено' : ''}
        </p>
      );
    } else {
      return movies
        ?.slice(0, cardsToShow)
        .map((movie) => (
          <MoviesCard
            isActionPending={isActionPending}
            setIsActionPending={setIsActionPending}
            isAbleToLike={isAbleToLike}
            likedMovies={likedMovies}
            key={movie.description}
            {...movie}
            isMobile={isMobile}
            addMovie={addMovie}
            deleteMovie={deleteMovie}
          />
        ));
    }
  };

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__content">
        {renderMovies()}
      </div>
    </section>
  );
}

export default MoviesCardList;
