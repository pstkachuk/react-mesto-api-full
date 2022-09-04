import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({onUpdateUser, isOpen, onClose, isLoading, onEscapeClose}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);
  
  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name,
      about: description
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen])

  useEffect(() => {
    isOpen && document.addEventListener('keyup', onEscapeClose);
    return () => {
      document.removeEventListener('keyup', onEscapeClose);
    }
  }, [isOpen, onEscapeClose])  

  return (
    <PopupWithForm
      name="profile-popup"
      title="Редактировать профиль"
      textOnButton="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      onEscapeClose={onEscapeClose}
    >
      <input
        className="popup__input"
        type="text"
        name="name"
        id="name"
        required
        minLength="2"
        maxLength="40"
        placeholder="Имя"
        value={name || ''}
        onChange={handleChangeName}
      />
      <span className="popup__input-error name-error"></span>
      <input
        className="popup__input"
        type="text"
        name="about"
        id="about"
        required
        minLength="2"
        maxLength="200"
        placeholder="Информация о пользователе"
        value={description  || ''}
        onChange={handleChangeDescription}
      />
      <span className="popup__input-error about-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;