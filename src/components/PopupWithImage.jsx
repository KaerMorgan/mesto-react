/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import CloseButton from './CloseButton';

const PopupWithImage = () => {
  return (
    <div className="popup photo-view">
        <div className="photo-view__container">
          <CloseButton />
          <img src="#" alt="Фото места" className="photo-view__image" />
          <h3 className="photo-view__caption"></h3>
        </div>
      </div>
  )
}

export default PopupWithImage
