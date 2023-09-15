import { useState } from 'react';

import { useLocation } from 'react-router-dom';

function MoviesCard({
  movieImage,
  movieName,
  movieDuration,
}) {
  const [toggleHeart, setToggleHeart] =
    useState(
      'link-button movie-card__heart'
    );

  const handleHeartClick = () => {
    setToggleHeart(!toggleHeart);
  };

  const location = useLocation();

  return (
    <div className="movie-card">
      <img
        className="movie-card__image"
        src={movieImage}
        alt="Фильм"
      />
      <div className="movie-card__title-container">
        <h3 className="movie-card__name">
          {movieName}
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
          />
        )}
      </div>
      <div className="section-line-grey movie-card__line-grey"></div>
      <p className="movie-card__time">
        {movieDuration}
      </p>
    </div>
  );
}

export default MoviesCard;
