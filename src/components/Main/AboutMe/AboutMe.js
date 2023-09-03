import photo from '../../../images/photo.png';
import arrow from '../../../images/main_link_arrow.svg';

function AboutMe() {
  return (
    <section className="about-me">
      <article className="section">
        <h2 className="section-title">
          Студент
        </h2>
        <div className="section-line"></div>
        <div className="about-me__info">
          <h3 className="about-me__name">
            Виталий
          </h3>
          <h4 className="about-me__subtitle">
            Фронтенд-разработчик, 30 лет
          </h4>
          <p className="about-me__text">
            Я родился и живу в Саратове,
            закончил факультет экономики
            СГУ. У меня есть жена и
            дочь. Я люблю слушать
            музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить.
            С 2015 года работал в
            компании «СКБ Контур». После
            того, как прошёл курс по
            веб-разработке, начал
            заниматься фриланс-заказами
            и ушёл с постоянной работы.
          </p>
          <p className="about-me__github">
            Github
          </p>
          <img
            className="about-me__photo"
            src={photo}
            alt="Фото студента"
          />
        </div>
        <h5 className="about-me__portfolio-header">
          Портфолио
        </h5>
        <a
          className="about-me__link"
          href={'https://google.com'}
          target="_blank"
          rel="noreferrer"
          alt="Статичный сайт"
        >
          Статичный сайт
          <img
            className="about-me__arrow"
            src={arrow}
            alt="Стрелка"
          />
        </a>
        <div className="section-line-grey"></div>
        <a
          className="about-me__link"
          href={'https://google.com'}
          target="_blank"
          rel="noreferrer"
          alt="Адаптивный сайт"
        >
          Адаптивный сайт
          <img
            className="about-me__arrow"
            src={arrow}
            alt="Стрелка"
          />
        </a>
        <div className="section-line-grey"></div>
        <a
          className="about-me__link"
          href={'https://google.com'}
          target="_blank"
          rel="noreferrer"
          alt="Одностраничное приложение"
        >
          Одностраничное приложение
          <img
            className="about-me__arrow"
            src={arrow}
            alt="Стрелка"
          />
        </a>
      </article>
    </section>
  );
}

export default AboutMe;
