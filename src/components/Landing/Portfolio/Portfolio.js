import arrow from '../../../images/main_link_arrow.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <article className="section portfolio__container">
        <h5 className="portfolio__header">
          Портфолио
        </h5>
        <a
          className="link portfolio__link"
          href={'https://github.com/'}
          target="_blank"
          rel="noreferrer"
          alt="Статичный сайт"
        >
          Статичный сайт
          <img
            className="portfolio__arrow"
            src={arrow}
            alt="Стрелка"
          />
        </a>
        <div className="section-line-grey portfolio__line-grey"></div>
        <a
          className="link portfolio__link"
          href={'https://github.com/'}
          target="_blank"
          rel="noreferrer"
          alt="Адаптивный сайт"
        >
          Адаптивный сайт
          <img
            className="portfolio__arrow"
            src={arrow}
            alt="Стрелка"
          />
        </a>
        <div className="section-line-grey portfolio__line-grey"></div>
        <a
          className="link portfolio__link"
          href={'https://github.com/'}
          target="_blank"
          rel="noreferrer"
          alt="Одностраничное приложение"
        >
          Одностраничное приложение
          <img
            className="portfolio__arrow"
            src={arrow}
            alt="Стрелка"
          />
        </a>
      </article>
    </section>
  );
}

export default Portfolio;