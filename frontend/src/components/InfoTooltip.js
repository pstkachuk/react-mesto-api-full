function InfoTooltip({isOpen, onClose, tooltip}) {
  function handleClickOverlay(evt) {
    evt.target === evt.currentTarget && onClose();
  }

  return (
    <div 
      className={`popup tooltip-popup ${isOpen && 'popup_opened'}`}
      onClick={handleClickOverlay}>
      <div className="popup__container">
        <img className="tooltip-popup__image" alt="изображение" src={tooltip.image} />
        <h2 className="tooltip-popup__form-title">{tooltip.message}</h2>
        <button
          className="popup__close-button"
          type="button"
          aria-label="закрыть окно"
          onClick={onClose}>
        </button>        
      </div>
    </div>
  )
}

export default InfoTooltip;