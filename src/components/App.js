import buttonAdd from '../images/button_add.svg'
import buttonClose from '../images/button_close.svg'
import buttonEdit from '../images/button_edit.svg'
// import liked from '../images/liked.svg'
// import likeButton from '../images/like_button.svg'
// import deleteButton from '../images/delete_button.png'
import headerLogo from '../images/header__logo.svg'
import profileAvatar from '../images/profile__avatar.png'
import avatarMask from '../images/avatar-mask.png'

function App() {
  return (
    <>
      <header className="header">
        <img src={headerLogo} alt="Место" className="header__logo" />
      </header>
      <main className="main">
        <section className="profile">
          <div className="profile__avatar-container">
            <img src={profileAvatar} alt="Аватар" className="profile__avatar" />
            <div className="profile__avatar-mask"><img src={avatarMask} alt="Маска" /></div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name" id="profile__name">Жак-Ив Кусто</h1>
            <p className="profile__about" id="profile__about">Исследователь океана</p>
            <button type="button" className="profile__edit-button">
              <img className="profile__edit-image" src={buttonEdit} alt="Редактировать" />
            </button>
          </div>
          <button type="button" className="profile__add-button">
            <img className="profile__add-button-icon" src={buttonAdd} alt="Добавить" />
          </button>
        </section>
        <section className="elements">
          <ul className="elements__grid">
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">© 2022 Mesto Russia</p>
      </footer>
      <div className="popup popup_type_edit">
        <div className="popup__container">
          <button type="button" className="popup__close">
            <img className="popup__close-icon" src={buttonClose} alt="Закрыть форму" />
          </button>
          <form className="popup__form popup__form_type_edit" name="profile-edit" noValidate>
            <h3 className="popup__heading">Редактировать профиль</h3>
            <label className="popup__field">
              <input required className="popup__input" id="profile__name-input" name="name" type="text" minLength="2" maxLength="40" placeholder="Имя" />
              <span className="popup__input-error" id="profile__name-input-error"></span>
            </label>
            <label className="popup__field">
              <input required className="popup__input" id="profile__about-input" name="about" type="text" minLength="2" maxLength="40" placeholder="Профессиональная деятельность" />
              <span className="popup__input-error" id="profile__about-input-error"></span>
            </label>
            <button className="popup__submit" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_add">
        <div className="popup__container">
          <button type="button" className="popup__close">
            <img className="popup__close-icon" src={buttonClose} alt="Закрыть форму" />
          </button>
          <form className="popup__form popup__form_type_add" name="profile-add" noValidate>
            <h3 className="popup__heading">Новое место</h3>
            <label className="popup__field">
              <input required className="popup__input" id="add-input-name" name="name" type="text" placeholder="Название"  minLength="2" maxLength="40" />
              <span className="popup__input-error" id="add-input-name-error"></span>
            </label>
            <label className="popup__field">
              <input required className="popup__input" id="add-input-link" name="link" type="url" placeholder="Ссылка на картинку" />
              <span className="popup__input-error" id="add-input-link-error"></span>
            </label>
            <button className="popup__submit" type="submit">Создать</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <button type="button" className="popup__close">
            <img className="popup__close-icon" src={buttonClose} alt="Закрыть форму" />
          </button>
          <form className="popup__form popup__form_type_avatar" name="profile-edit" noValidate>
            <h3 className="popup__heading">Обновить аватар</h3>
            <label className="popup__field">
              <input required className="popup__input" id="avatar-input-link" name="avatar" type="url" placeholder="Ссылка на картинку" />
              <span className="popup__input-error" id="avatar-input-link-error"></span>
            </label>
            <button className="popup__submit" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_delete">
        <div className="popup__container">
          <button type="button" className="popup__close">
            <img className="popup__close-icon" src={buttonClose} alt="Закрыть форму" />
          </button>
          <h3 className="popup__heading">Вы уверены?</h3>
          <button className="popup__submit" type="submit">Да</button>
        </div>
      </div>
      <div className="popup photo-view">
        <div className="photo-view__container">
          <button type="button" className="popup__close">
          <img className="popup__close-icon" src={buttonClose} alt="Закрыть форму" />
          </button>
          <img src="#" alt="Фото места" className="photo-view__image" />
          <h3 className="photo-view__caption"></h3>
        </div>
      </div>

      <template id="card">
        <li className="element">
          <img src="#" alt="Фото места" className="element__photo" />
          <div className="element__group">
            <h2 className="element__caption"></h2>
            <div className="element__like-group">
              <button type="button" className="element__like" aria-label="Мне нравится"></button>
              <p className="element__like-counter"></p>
            </div>
          </div>
          <button type="button" aria-label="Удалить" className="element__delete"></button>
        </li>
      </template>
    </>
  );
}

export default App;
