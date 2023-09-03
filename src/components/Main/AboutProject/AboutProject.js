function AboutProject() {
  return (
    <section className="about-project">
      <article className="section">
        <h2 className="section-title">
          О проекте
        </h2>
        <div className="section-line"></div>
        <div className="about-project__info">
          <div className="about-project__info-container">
            <h3 className="about-project__subtitle">
              Дипломный проект включал 5
              этапов
            </h3>
            <p className="about-project__text">
              Составление плана, работу
              над бэкендом, вёрстку,
              добавление
              функциональности и
              финальные доработки.
            </p>
          </div>
          <div className="about-project__info-container">
            <h3 className="about-project__subtitle">
              На выполнение диплома ушло
              5 недель
            </h3>
            <p className="about-project__text">
              У каждого этапа был мягкий
              и жёсткий дедлайн, которые
              нужно было соблюдать,
              чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__time-line">
          <div className="about-project__one-week">
            <p className="about-project__week-text">
              1 неделя
            </p>
          </div>
          <div className="about-project__four-week">
            <p className="about-project__week-text">
              4 недели
            </p>
          </div>
          <p className="about-project__text-under">
            Back-end
          </p>
          <p className="about-project__text-under">
            Front-end
          </p>
        </div>
      </article>
    </section>
  );
}

export default AboutProject;
