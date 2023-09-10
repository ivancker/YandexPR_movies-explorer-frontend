import image1 from '../../../images/card1.png';
import image2 from '../../../images/card2.png';
import image3 from '../../../images/card3.png';
import image4 from '../../../images/card4.png';
import image5 from '../../../images/card5.png';
import image6 from '../../../images/card6.png';
import image7 from '../../../images/card7.png';
import image8 from '../../../images/card8.png';
import image9 from '../../../images/card1.png';
import image10 from '../../../images/card10.png';
import image11 from '../../../images/card11.png';
import image12 from '../../../images/card12.png';
import image13 from '../../../images/card13.png';
import image14 from '../../../images/card14.png';
import image15 from '../../../images/card15.png';
import image16 from '../../../images/card16.png';

// ({ movieImage, movieName, movieDuration })

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className="movies-cards">
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
      <MoviesCard
        movieName="Баския: Взрыв реальности"
        movieImage={image4}
        movieDuration="1ч42м"
      />
      <MoviesCard
        movieName="Бег это свобода"
        movieImage={image5}
        movieDuration="1ч42м"
      />
      <MoviesCard
        movieName="Книготорговцы"
        movieImage={image6}
        movieDuration="1ч42м"
      />
      <MoviesCard
        movieName="Когда я думаю о Германии"
        movieImage={image7}
        movieDuration="1ч42м"
      />
      <MoviesCard
        movieName="Gimme Danger: История Игги и
    The Stooges"
        movieImage={image8}
        movieDuration="1ч42м"
      />
      <MoviesCard
        movieName="Дженис: Маленькая девочка грустит"
        movieImage={image9}
        movieDuration="1ч42м"
      />
      <MoviesCard
        movieName="Соберись перед прыжком"
        movieImage={image10}
        movieDuration="1ч42м"
      />
      <MoviesCard
        movieName="Пи Джей Харви: A dog called money"
        movieImage={image11}
        movieDuration="1ч42м"
      />
      <MoviesCard
        movieName="По волнам: Искусство звука в кино"
        movieImage={image12}
        movieDuration="1ч42м"
      />
      <MoviesCard
        movieName="Рудбой"
        movieImage={image13}
        movieDuration="1ч42м"
      />
      <MoviesCard
        movieName="Скейт — кухня"
        movieImage={image14}
        movieDuration="1ч42м"
      />
      <MoviesCard
        movieName="Война искусств"
        movieImage={image15}
        movieDuration="1ч42м"
      />
      <MoviesCard
        movieName="Зона"
        movieImage={image16}
        movieDuration="1ч42м"
      />
    </section>
  );
}

export default MoviesCardList;
