import React from 'react'

const Card = (props) => {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element" >
      <img src={props.card.link} alt="Фото места" className="element__photo" onClick={handleClick} />
      <div className="element__group">
        <h2 className="element__caption">{props.card.name}</h2>
        <div className="element__like-group">
          <button type="button" className="element__like" aria-label="Мне нравится"></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
      <button type="button" aria-label="Удалить" className="element__delete"></button>
    </li>
  )
}

export default Card
