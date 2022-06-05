import React from 'react'

const InputWithLabel = (props) => {
  return (
    <label className="popup__field">
      <input className="popup__input" id={props.id} name={props.name} type={props.type} minLength="2" maxLength="40" placeholder={props.placeholder} required />
      <span className="popup__input-error" id={`${props.id}-error`}></span>
    </label>
  )
}

export default InputWithLabel;
