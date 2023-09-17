import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';

import image1 from '../../images/card1.png';
import image2 from '../../images/card2.png';
import image3 from '../../images/card3.png';

function SavedMovies() {
  return (
    <main className='saved-movies'>
      <SearchForm />
      <section className="saved-movies-container">
        <MoviesCard
          movieName="33 слова о дизайне"
          movieImage={image1}
          movieDuration="1ч42м"
        />
        <MoviesCard
          movieName="Киноальманах «100 лет
    дизайна»"
          movieImage={image2}
          movieDuration="1ч42м"
        />
        <MoviesCard
          movieName="В погоне за Бенкси"
          movieImage={image3}
          movieDuration="1ч42м"
        />
      </section>
    </main>
  );
}

export default SavedMovies;
