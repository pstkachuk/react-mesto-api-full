function PopupWithForm({name, isOpen, title, onClose, onSubmit, children, isLoading, textOnButton}) {  
  function handleClickOverlay(evt) {
    evt.target === evt.currentTarget && onClose();
  }

  return(
    <div className={`popup ${name} ${isOpen && 'popup_opened'}`}
      onClick={handleClickOverlay}>
      <div className="popup__container">
        <h2 className="popup__form-title">{title}</h2>
        <button
          className="popup__close-button"
          type="button"
          aria-label="закрыть окно"
          onClick={onClose}>
        </button>
        <form
          className={`popup__form ${name}__form`}
          name={name}
          onSubmit={onSubmit}
          noValidate>
            {children}         
            <button type="submit" className="popup__submit-button">
              {isLoading ? ((name === 'confirm-popup') ? 'Удаление...' : 'Сохранение...') : textOnButton}
            </button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;