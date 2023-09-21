import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({
  movie,
  savedMovies,
  onHeartClick,
  onDeleteClick,
}) {
  const location = useLocation();
  const [toggleHeart, setToggleHeart] =
    useState(
      'link-button movie-card__heart'
    );

  const handleHeartClick = () => {
    setToggleHeart(!toggleHeart);
    onHeartClick(movie);
  };

  const handleDeleteClick = () => {
    onDeleteClick(movie);
  };

  const transformDuration = (duration) => {
      const hours = Math.trunc(duration / 60);
      const minutes = duration % 60;
      if(hours === 0) {
        return `${minutes}м`;
      } else {
        return `${hours}ч ${minutes}м`;
      }
  }

  return (
    <div className="movie-card">
      <img
        className="movie-card__image"
        src={movie.image}
        alt={movie.nameRU}
      />
      <div className="movie-card__title-container">
        <h3 className="movie-card__name">
        {movie.nameRU}
        </h3>
        {location.pathname ===
          '/movies' && (
          <button
            className={
              toggleHeart
                ? 'link-button movie-card__heart'
                : 'link-button movie-card__heart_red'
            }
            onClick={handleHeartClick}
          />
        )}
        {location.pathname ===
          '/saved-movies' && (
          <button
            className={
              'link-button movie-card__delete-fav'
            }
            onClick={handleDeleteClick}
          />
        )}
      </div>
      <div className="section-line-grey movie-card__line-grey"></div>
      <p className="movie-card__time">
      {transformDuration(movie.duration)}
      </p>
    </div>
  );
}

export default MoviesCard;
