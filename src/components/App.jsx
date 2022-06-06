import React from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import InputWithLabel from './InputWithLabel';
import PopupWithImage from './PopupWithImage';


function App() {

const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)

  return (
    <>
      <Header />
      <Main
      isEditProfilePopupOpen={isEditProfilePopupOpen}
      handleEditProfileClick={setIsEditProfilePopupOpen}
      isEditAvatarPopupOpen={isEditAvatarPopupOpen}
      handleEditAvatarClick={setIsEditAvatarPopupOpen}
      isAddPlacePopupOpen={isAddPlacePopupOpen}
      handleAddPlaceClick={setIsAddPlacePopupOpen}
      />
      <Footer />

      <PopupWithForm name="edit" title="Редактировать профиль" submitButtonText="Сохранить" isOpened={isEditProfilePopupOpen} handleCloseButton={setIsEditProfilePopupOpen}>
        <InputWithLabel name="name" id="profile__name-input" type='text' placeholder='Имя' />
        <InputWithLabel name="about" id="profile__about-input" type='text' placeholder='Профессиональная деятельность' />
      </PopupWithForm>

      <PopupWithForm name="avatar" title="Обновить аватар" submitButtonText="Сохранить" isOpened={isEditAvatarPopupOpen} handleCloseButton={setIsEditAvatarPopupOpen}>
        <InputWithLabel name="avatar" id="avatar-input-link" type='url' placeholder='Ссылка на картинку' />
      </PopupWithForm>

      <PopupWithForm name="add" title="Новое место" submitButtonText="Создать" isOpened={isAddPlacePopupOpen} handleCloseButton={setIsAddPlacePopupOpen}>
        <InputWithLabel name="name" id="add-input-name" type='text' placeholder='Название' />
        <InputWithLabel name="link" id="add-input-link" type='url' placeholder='Ссылка на картинку' />
      </PopupWithForm>

      <PopupWithForm name="delete" title="Вы уверены?" submitButtonText="Да">
      </PopupWithForm>

      <PopupWithImage handleCloseButton isOpened/>
    </>
  );
}

export default App;
