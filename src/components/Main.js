import buttonAdd from '../images/button_add.svg'
import buttonEdit from '../images/button_edit.svg'
import profileAvatar from '../images/profile__avatar.png'
import avatarMask from '../images/avatar-mask.png'

function Main () {

return (
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
)

}

export default Main;