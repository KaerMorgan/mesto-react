import React from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import InputWithLabel from './InputWithLabel';
import ImagePopup from './ImagePopup';


function App() {

const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
const [selectedCard, setSelectedCard] = React.useState({})

function closeAllPopups() {

  setIsEditProfilePopupOpen(false)
  setIsEditAvatarPopupOpen(false)
  setIsAddPlacePopupOpen(false)
  setSelectedCard({})
}

function handleEditProfileClick(){
  handleEditProfileClick(!isEditProfilePopupOpen)
}

function handleEditAvatarClick(){
  handleEditAvatarClick(!isEditAvatarPopupOpen)
}

function handleAddPlaceClick(){
  handleAddPlaceClick(!isAddPlacePopupOpen)
}

function handleCardClick(card) {
  setSelectedCard(card)
}


  return (
    <>
      <Header />
      <Main
      onEditProfile={handleEditProfileClick}
      onEditAvatar={handleEditAvatarClick}
      onAddPlace={handleAddPlaceClick}
      onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm name="edit" title="Редактировать профиль" submitButtonText="Сохранить" isOpened={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <InputWithLabel name="name" id="profile__name-input" type='text' placeholder='Имя' />
        <InputWithLabel name="about" id="profile__about-input" type='text' placeholder='Профессиональная деятельность' />
      </PopupWithForm>

      <PopupWithForm name="avatar" title="Обновить аватар" submitButtonText="Сохранить" isOpened={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <InputWithLabel name="avatar" id="avatar-input-link" type='url' placeholder='Ссылка на картинку' />
      </PopupWithForm>

      <PopupWithForm name="add" title="Новое место" submitButtonText="Создать" isOpened={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <InputWithLabel name="name" id="add-input-name" type='text' placeholder='Название' />
        <InputWithLabel name="link" id="add-input-link" type='url' placeholder='Ссылка на картинку' />
      </PopupWithForm>

      <PopupWithForm name="delete" title="Вы уверены?" submitButtonText="Да">
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </>
  );
}

export default App;
