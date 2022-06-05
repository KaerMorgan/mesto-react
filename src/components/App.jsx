import React from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import InputWithLabel from './InputWithLabel';
import PopupWithImage from './PopupWithImage';


function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />

      <PopupWithForm name="edit" title="Редактировать профиль" submitButtonText="Сохранить">
        <InputWithLabel name="name" id="profile__name-input" type='text' placeholder='Имя' />
        <InputWithLabel name="about" id="profile__about-input" type='text' placeholder='Профессиональная деятельность' />
      </PopupWithForm>

      <PopupWithForm name="add" title="Новое место" submitButtonText="Создать">
        <InputWithLabel name="name" id="add-input-name" type='text' placeholder='Название' />
        <InputWithLabel name="link" id="add-input-link" type='url' placeholder='Ссылка на картинку' />
      </PopupWithForm>

      <PopupWithForm name="avatar" title="Обновить аватар" submitButtonText="Сохранить">
        <InputWithLabel name="avatar" id="avatar-input-link" type='url' placeholder='Ссылка на картинку' />
      </PopupWithForm>

      <PopupWithForm name="delete" title="Вы уверены?" submitButtonText="Да">
      </PopupWithForm>

      <PopupWithImage />
    </>
  );
}

export default App;
