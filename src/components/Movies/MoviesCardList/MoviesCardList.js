// import image1 from '../../../images/card1.png';
// import image2 from '../../../images/card2.png';
// import image3 from '../../../images/card3.png';
// import image4 from '../../../images/card4.png';
// import image5 from '../../../images/card5.png';
// import image6 from '../../../images/card6.png';
// import image7 from '../../../images/card7.png';
// import image8 from '../../../images/card8.png';
// import image9 from '../../../images/card1.png';
// import image10 from '../../../images/card10.png';
// import image11 from '../../../images/card11.png';
// import image12 from '../../../images/card12.png';
// import image13 from '../../../images/card13.png';
// import image14 from '../../../images/card14.png';
// import image15 from '../../../images/card15.png';
// import image16 from '../../../images/card16.png';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({moviesList, savedMoviesList, onHeartClick, onDeleteClick}) {

  const [showMoviesList, setShowMoviesList] = useState([]);


  return (
    <section className="movies-cards">
      {showMoviesList.map(movie => (
              <MoviesCard
              key={movie.id || movie._id}
              onHeartClick={onHeartClick}
              onDeleteClick={onDeleteClick}
              movie={movie}
            />
            ))}
        <div className="movies-cards__more-container">
      <button className="link-button movies-cards__more-button">
        Ещё
      </button>
    </div>
    </section>
    
  );
}

export default MoviesCardList;
