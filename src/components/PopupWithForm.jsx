import React from 'react'
import CloseButton from './CloseButton';
import SubmitButton from './SubmitButton'

const PopupWithForm = ({name, title, isOpened, onClose, submitButtonText, children}) => {


  return (
    <div className={isOpened ? `popup popup_type_${name} popup_opened` : `popup popup_type_${name}`}>
      <div className="popup__container">
        <CloseButton onClose={onClose} />
        <form className={`popup__form popup__form_type_${name}`} name={`profile-${name}`}>
          <h3 className="popup__heading">{title}</h3>
          {children}
          <SubmitButton submitButtonText={submitButtonText} />
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
