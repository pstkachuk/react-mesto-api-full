import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({onAddPlace, isOpen, onClose, isLoading, onEscapeClose}) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault(); 
    onAddPlace({
      name,
      link
    });
  }

  function handleSetName(evt) {
    setName(evt.target.value);
  }

  function handleSetLink(evt) {
    setLink(evt.target.value);
  }

  useEffect(() => {  //очистить инпуты при закрытии несохраненного окна
    setName('');
    setLink('');
  }, [isOpen])

  useEffect(() => {
    isOpen && document.addEventListener('keyup', onEscapeClose);
    return () => {
      document.removeEventListener('keyup', onEscapeClose);
    }
  }, [isOpen, onEscapeClose])
 
  return (
    <PopupWithForm
      name="new-card"
      title="Новое место"
      textOnButton="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <input
        className="popup__input"
        type="text"
        name="card-name"
        id="card-name"
        required
        placeholder="Название"
        minLength="2"
        maxLength="30"
        value={name || ''}
        onChange={handleSetName}
      />
      <span className="popup__input-error card-name-error"></span>
      <input
        className="popup__input"
        type="url"
        name="link"
        id="link"
        required
        placeholder="Ссылка на картинку"
        value={link || ''}
        onChange={handleSetLink}
      />
      <span className="popup__input-error link-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;