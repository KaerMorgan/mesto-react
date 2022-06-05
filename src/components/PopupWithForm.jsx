import React from 'react'
import buttonClose from '../images/button_close.svg'
import SubmitButton from './SubmitButton'

const PopupWithForm = (props) => {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <button type="button" className="popup__close">
          <img className="popup__close-icon" src={buttonClose} alt="Закрыть форму" />
        </button>
        <form className={`popup__form popup__form_type_${props.name}`} name={`profile-${props.name}`} noValidate>
          <h3 className="popup__heading">{props.title}</h3>
          {props.children}
          <SubmitButton buttonText="Сохранить"></SubmitButton>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
