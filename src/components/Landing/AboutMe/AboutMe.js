import photo from '../../../images/ttt.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <article className="section about-me__container">
        <h2 className="section-title about-me__title">
          Студент
        </h2>
        <div className="section-line about-me__line"></div>
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
          <a
            className="link about-me__github"
            href={'https://github.com/'}
            target="_blank"
            rel="noreferrer"
            alt="Гитхаб"
          >
            Github
          </a>
          <img
            className="about-me__photo"
            src={photo}
            alt="Фото студента"
          />
        </div>
      </article>
    </section>
  );
}

export default AboutMe;
