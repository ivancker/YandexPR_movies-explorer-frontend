import logo from '../../../images/landing-logo.svg';
import { HashLink as Link } from 'react-router-hash-link';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__info">
        <h1 className="promo__info-title">
          Учебный проект студента
          факультета Веб-разработки.
        </h1>
        <h3 className="promo__info-description">
          Листайте ниже, чтобы узнать
          больше про этот проект и его
          создателя.
        </h3>
        <Link
          className="link promo__info-button"
          to="#about-project"
        >
          <p className="promo__info-button-text">
            Узнать больше
          </p>
        </Link>
      </div>
      <img
        className="promo__logo"
        src={logo}
        alt="Планета кино"
      />
    </section>
  );
}

export default Promo;