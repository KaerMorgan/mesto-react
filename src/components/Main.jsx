import React from 'react';
import buttonAdd from '../images/button_add.svg'
import buttonEdit from '../images/button_edit.svg'
import profileAvatar from '../images/profile__avatar.png'
import avatarMask from '../images/avatar-mask.png'
import api from '../utils/Api';



function Main (props) {

  function handleEditProfileClick(){
    props.handleEditProfileClick(!props.isEditProfilePopupOpen)
  }

  function handleEditAvatarClick(){
    props.handleEditAvatarClick(!props.isEditAvatarPopupOpen)
  }

  function handleAddPlaceClick(){
    props.handleAddPlaceClick(!props.isAddPlacePopupOpen)
  }


    let [userName, setUserName] = React.useState("")
    let [userDescription, setUserDescription] = React.useState("")
    let [userAvatar, setUserAvatar] = React.useState("")
    let [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api.getUserInfo().then(data => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
  }, [])

  React.useEffect(() => {
    api.getCardList().then(data => {
      setCards(data)
    })
  }, [])

  return (

    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container" onClick={handleEditAvatarClick}>
          <img src={userAvatar} alt="Аватар" className="profile__avatar" />
          <div className="profile__avatar-mask"><img src={avatarMask} alt="Маска" /></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name" id="profile__name">{userName}</h1>
          <p className="profile__about" id="profile__about">{userDescription}</p>
          <button type="button" className="profile__edit-button" onClick={handleEditProfileClick}>
            <img className="profile__edit-image" src={buttonEdit} alt="Редактировать" />
          </button>
        </div>
        <button type="button" className="profile__add-button" onClick={handleAddPlaceClick}>
          <img className="profile__add-button-icon" src={buttonAdd} alt="Добавить" />
        </button>
      </section>
      <section className="elements">
        <ul className="elements__grid">
          {cards.map(card => {
            return (<li class="element">
            <img src="#" alt="Фото места" class="element__photo" />
            <div class="element__group">
              <h2 class="element__caption"></h2>
              <div class="element__like-group">
                <button type="button" class="element__like" aria-label="Мне нравится"></button>
                <p class="element__like-counter">{card.length}</p>
              </div>
            </div>
            <button type="button" aria-label="Удалить" class="element__delete"></button>
          </li>)
          })}
        </ul>
      </section>
    </main>
  )

}

export default Main;
