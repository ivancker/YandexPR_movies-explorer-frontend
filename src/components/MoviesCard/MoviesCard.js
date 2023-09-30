import {
  useState,
  useEffect,
} from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({
  image,
  duration,
  nameRU,
  isMobile,
  country,
  director,
  year,
  description,
  trailerLink,
  id: movieId,
  nameEN,
  addMovie,
  deleteMovie,
  likedMovies,
  setIsActionPending,
  isActionPending,
  _id,
}) {
  const movieData = {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    movieId,
    nameRU,
    nameEN,
    _id,
  };

  const isMovieLiked =
    likedMovies?.some(
      (likedMovie) =>
        likedMovie.movieId ===
        movieData.movieId
    );

  const [isLiked, setIsLiked] =
    useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsLiked(isMovieLiked);
  }, [isMovieLiked]);

  const handleLikeClick = async () => {
    if (isActionPending) {
      return;
    }

    setIsActionPending(true);

    try {
      if (!isLiked) {
        await addMovie(movieData);
        setIsLiked(true);
      } else {
        await deleteMovie(
          movieData.movieId
        );
        setIsLiked(false);
      }
    } catch (error) {
      
      console.error('Error:', error);
    } finally {
      setIsActionPending(false);
    }
  };

  const imgUrl = image
    .toString()
    .includes(
      'https://api.nomoreparties.co'
    )
    ? image
    : `https://api.nomoreparties.co${image.url}`;

  const timeDuration = `${Math.floor(
    duration / 60
  )}ч ${duration % 60}м`;

  const likeButtonClass =
    pathname === '/movies'
      ? `link-button movies-card__caption-heart-button ${
          isLiked
            ? 'movies-card__caption-heart-button_active'
            : ''
        }`
      : isMobile
      ? 'link-button movies-card__caption-delete-button-mobile'
      : 'link-button movies-card__caption-delete-button';

  return (
    <article className="movies-card">
      <a
        href={trailerLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="movies-card__image"
          src={imgUrl}
          alt="картинка"
        />
      </a>
      <div className="movies-card__caption">
        <h2 className="movies-card__caption-title">
          {nameRU}
        </h2>
        <button
          onClick={
            pathname === '/movies'
              ? handleLikeClick
              : () =>
                  deleteMovie(
                    movieData._id
                  )
          }
          className={likeButtonClass}
          type="button"
          aria-label={
            pathname === '/movies'
              ? 'Кнопка лайка'
              : ''
          }
        ></button>
      </div>
      <div className="movies-card__border-top"></div>
      <p className="movies-card-duration">
        {timeDuration}
      </p>
    </article>
  );
}

export default MoviesCard;
