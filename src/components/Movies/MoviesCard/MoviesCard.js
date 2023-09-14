import { useState } from 'react';

import { useLocation } from 'react-router-dom';

import heart from '../../../images/heart.svg';
import heartWhite from '../../../images/heart_white.svg';
import deleteFav from '../../../images/delete.svg';

function MoviesCard({
  movieImage,
  movieName,
  movieDuration,
}) {
  const [toggleHeart, setToggleHeart] =
    useState(heartWhite);

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
          <img
            className={
              'link-button movie-card__heart'
            }
            src={
              toggleHeart
                ? heartWhite
                : heart
            }
            alt={movieName}
            onClick={handleHeartClick}
          />
        )}
        {location.pathname ===
          '/saved-movies' && (
          <img
            className={
              'link-button movie-card__delete-fav'
            }
            src={deleteFav}
            alt={movieName}
            onClick={handleHeartClick}
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
