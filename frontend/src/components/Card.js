import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({card, onCardClick, onCardLike, onCardDelete}) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;  //проверка владельца карточки
  const cardDeleteButtonClassName = (`element__delete-button ${!isOwn && 'element__delete-button_hide'}`); //Скрыть кнопку, если текущий пользователь не владелец карточки
  const isLiked = card.likes.some(item => item === currentUser._id);  //текущий пользователь "лайкнул" карточку
  const cardLikeButtonClassName = (`element__like-button ${isLiked && 'element__like-button_active'}`);  //отобразить лайк

  function handleClick() {
    onCardClick(card);    
  }
  function handleLikeClick() {
    onCardLike(card);
  }
  function handleDeleteClick() {
    onCardDelete(card);
  }

  return(
    <div className="element">
    <img 
      className="element__image" 
      src={card.link}
      alt={card.name}
      onClick={handleClick}
    />
    <div className="element__caption-container">
      <h2 className="element__caption">{card.name}</h2>
      <div className="element__likes-container">
        <button
          className={cardLikeButtonClassName}
          type="button"
          aria-label="поставить лайк"
          onClick={handleLikeClick}>        
        </button>
        <div className="element__likes-counter">{card.likes.length === 0 ? '' : card.likes.length}</div>
      </div>
    </div>
    <div 
      className={cardDeleteButtonClassName}
      onClick={handleDeleteClick}>
    </div>
  </div>
  )
}

export default Card;