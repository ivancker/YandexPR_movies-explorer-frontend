import { useState } from 'react';

import heart from '../../../images/heart.svg';
import heartWhite from '../../../images/heart_white.svg';

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

  return (
    <div className="movie-card">
      <img
        className="movie-cards__image"
        src={movieImage}
        alt="Фильм"
      />
      <div className="movie-card__title-container">
        <h3 className="movie-card__name">
          {movieName}
        </h3>
        <img
          className={
            'movie-card__heart'
          }
          src={
            toggleHeart
              ? heartWhite
              : heart
          }
          alt={movieName}
          onClick={handleHeartClick}
        />
      </div>
      <div className="section-line-grey movie-card__line-grey"></div>
      <p className="movie-cards__time">
        {movieDuration}
      </p>
    </div>
  );
}

export default MoviesCard;
