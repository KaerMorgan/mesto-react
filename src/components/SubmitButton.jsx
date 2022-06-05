import React from 'react'

const SubmitButton = (props) => {
  return (
    <button className="popup__submit" type="submit">{props.buttonText}</button>
  )
}

export default SubmitButton;
