import { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmPopup({isOpen, onClose, isLoading, onDeleteCard, onEscapeClose}) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onDeleteCard();
  }

  useEffect(() => {
    isOpen && document.addEventListener('keyup', onEscapeClose);
    return () => {
      document.removeEventListener('keyup', onEscapeClose);
    }
  }, [isOpen, onEscapeClose])

  return (
    <PopupWithForm
      name="confirm-popup"
      title="Вы уверены?" 
      textOnButton="Да" 
      isOpen={isOpen}
      onClose={onClose}
      isLoading={isLoading}
      onSubmit={handleSubmit}
    />
  )
}

export default ConfirmPopup;