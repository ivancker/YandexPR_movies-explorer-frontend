function Footer() {
  return (
    <footer className="footer">
      <div className="footer__info">
        <p className="footer__about">
          Учебный проект
          Яндекс.Практикум х BeatFilm.
        </p>
        <div className="section-line-grey"></div>
        <div className="footer__last-line">
          <p className="footer__copyright">
            © 2023
          </p>
          <a
            className="link footer__yandex"
            href={
              'https://practicum.yandex.ru/'
            }
            target="_blank"
            rel="noreferrer"
            alt="Яндекс Практикум"
          >
            Яндекс.Практикум
          </a>
          <a
            className="link footer__github"
            href={'https://github.com/'}
            target="_blank"
            rel="noreferrer"
            alt="Гитхаб"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
