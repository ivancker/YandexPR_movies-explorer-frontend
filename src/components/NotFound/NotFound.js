import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  function PageBack() {
    navigate(-4);
  }

  return (
    <section className="not-found">
      <h2 className="not-found__title-number">
        404
      </h2>
      <h3 className="not-found__title">
        Страница не найдена
      </h3>
      <button
        className="not-found__page-back"
        onClick={PageBack}
      >
        Назад
      </button>
    </section>
  );
}

export default NotFound;
