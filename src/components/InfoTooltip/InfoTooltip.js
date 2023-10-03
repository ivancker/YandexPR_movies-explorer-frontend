import IconTrue from '../../images/icon-true.svg';
import IconFalse from '../../images/icon-false.svg';

const InfoTooltip = ({
  isOpen,
  onClose,
  errorMessage,
  successMessage,
}) => {
  return (
    <div
      className={`info-tooltip ${
        isOpen && 'info-tooltip_open'
      }`}
    >
      <div className="info-tooltip__container">
        <div className="info-tooltip__content">
          <button
            onClick={onClose}
            className="link-button info-tooltip__content-close-button"
            type="button"
          ></button>
          {errorMessage ? (
            <>
              <img
                className="info-tooltip__false"
                src={IconFalse}
                alt="Иконка - Нудача"
              />
              <p className="info-tooltip__content-text">
                {errorMessage}
              </p>
            </>
          ) : (
            <>
              <img
                className="info-tooltip__false"
                src={IconTrue}
                alt="Иконка - Успех"
              />
              <p className="info-tooltip__content-text">
                {successMessage}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoTooltip;
