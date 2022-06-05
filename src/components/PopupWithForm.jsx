import React from 'react'
import CloseButton from './CloseButton';
import SubmitButton from './SubmitButton'

const PopupWithForm = (props) => {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <CloseButton />
        <form className={`popup__form popup__form_type_${props.name}`} name={`profile-${props.name}`} noValidate>
          <h3 className="popup__heading">{props.title}</h3>
          {props.children}
          <SubmitButton submitButtonText={props.submitButtonText} />
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
