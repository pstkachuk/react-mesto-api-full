import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({onUpdateAvatar, isOpen, onClose, isLoading, onEscapeClose}) {
  const avatarRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();  
    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  useEffect(() => {   //очистить инпут при закрытии окна
    avatarRef.current.value = '';
  }, [isOpen, avatarRef])

  useEffect(() => {
    isOpen && document.addEventListener('keyup', onEscapeClose);
    return () => {
      document.removeEventListener('keyup', onEscapeClose);
    }
  }, [isOpen, onEscapeClose])

  return (
    <PopupWithForm
      name="avatar-popup"
      title="Обновить аватар"
      textOnButton="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <input
        className="popup__input"
        type="url"
        name="avatar-link"
        id="avatar-link"
        required
        placeholder="Ссылка"
        ref={avatarRef}
      />
      <span className="popup__input-error avatar-link-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;