import React from 'react';
import buttonAdd from '../images/button_add.svg'
import buttonEdit from '../images/button_edit.svg'
import avatarMask from '../images/avatar-mask.png'
import defaultAvatar from '../images/profile__avatar.png'
import api from '../utils/Api';
import Card from './Card';



function Main ({onEditProfile, onEditAvatar, onAddPlace, onCardClick}) {

  const [userName, setUserName] = React.useState("")
  const [userDescription, setUserDescription] = React.useState("")
  const [userAvatar, setUserAvatar] = React.useState("")
  const [cards, setCards] = React.useState([])
  const [avatarHover, setAvatarHover] = React.useState(false)

  function handleAvatarHover(){
    setAvatarHover(!avatarHover)
  }

  React.useEffect(() => {

    Promise.all([api.getUserInfo(), api.getCardList()])
    .then(([userData, cardData]) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);

      setCards(cardData)
    }).catch(err => console.log(err));
  }, [])

  return (

    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container" onClick={onEditAvatar} onMouseEnter={handleAvatarHover} onMouseLeave={handleAvatarHover}>
          <img src={ userAvatar || defaultAvatar} alt="Аватар" className="profile__avatar" />
          <div className={avatarHover ? "profile__avatar-mask profile__avatar-mask_active" : "profile__avatar-mask profile__avatar"}><img src={avatarMask} alt="Маска" /></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name" id="profile__name">{userName}</h1>
          <p className="profile__about" id="profile__about">{userDescription}</p>
          <button type="button" className="profile__edit-button" onClick={onEditProfile}>
            <img className="profile__edit-image" src={buttonEdit} alt="Редактировать" />
          </button>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace}>
          <img className="profile__add-button-icon" src={buttonAdd} alt="Добавить" />
        </button>
      </section>
      <section className="elements">
        <ul className="elements__grid">
          {cards.map(card => <Card card={card} key={card._id} onCardClick={onCardClick} />)}
        </ul>
      </section>
    </main>
  )

}

export default Main;
