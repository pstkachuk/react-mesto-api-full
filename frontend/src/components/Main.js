import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';

function Main({onEditAvatar, onEditProfile, onAddPlace, cards, onCardClick, onCardLike, onCardDelete}) {  
  const currentUser = useContext(CurrentUserContext);  
    
  return(
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Аватар"
          />
          <div className="profile__avatar-edit-button" onClick={onEditAvatar}></div>
        </div>
        <div className="profile__profile-info">
          <div className="profile__title-container">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="редактировать профиль"
              onClick={onEditProfile}>
            </button>
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="добавить карточку"
          onClick={onAddPlace}>
        </button>
      </section>

      <section className="elements">    {/* отрисовка полученных карточек */}
       {cards.map((cardItem) => (
        <Card 
          key={cardItem._id} 
          card={cardItem}
          onCardClick={onCardClick}
          onCardLike={onCardLike}
          onCardDelete={onCardDelete}
        /> 
        )
       )}
      </section>

    </main>
  )
}

export default Main;