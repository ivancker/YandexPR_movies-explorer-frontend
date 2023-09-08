import arrow from '../../../images/main_link_arrow.svg';

function Portfolio() {
  return (
    <section className="portfolio">
    <p className="about-me__github">
    Github
  </p>
   <h5 className="about-me__portfolio-header">
   Портфолио
 </h5>
 <a
   className="about-me__link"
   href={'https://github.com/'}
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
 <div className="section-line-grey about-me__line-grey"></div>
 <a
   className="about-me__link"
   href={'https://github.com/'}
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
 <div className="section-line-grey about-me__line-grey"></div>
 <a
   className="about-me__link"
   href={'https://github.com/'}
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
 </section>
  )
}

export default Portfolio;
