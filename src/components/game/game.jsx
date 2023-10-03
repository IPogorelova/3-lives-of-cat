import { useState } from 'react';

import { SOCIAL_DATA, UNSOCIAL_DATA, CATS_DATA } from '../slides/data.jsx';

import './game.css';

const Field = ({ id, title, question, isCat, className }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  const buttonClickHandler = () => {
      setIsPopupOpened(true);
      setIsClicked(true);
  };

  return (
    <>
      <button type="button" onClick={() => buttonClickHandler()} className={`field__cell ${className} ${isClicked && 'field__cell_disabled'}`}>
        {id}
      </button>
      {isPopupOpened && (
        <div className="popup">
          <button type="button" onClick={() => setIsPopupOpened(false)} className="popup__close">X</button>
          <h2 className="popup__title popup__title_tag">
            {title}&nbsp;
            <span className="text-colored">{id}</span>
            {isCat && <span className="tag">Кот в мешке</span>}
          </h2>
          {question}
        </div>
      )}
    </>

  )
};

const Game = () => {

  return (
    <div className="field">
      <p className="field__cell field__cell_text field__cell_first">Социальная жизнь</p>
      {SOCIAL_DATA.map(question => <div key={`social_${question.id}`}><Field {...question} className="field__cell_first" /></div>)}
      <p className="field__cell field__cell_text">Асоциальная жизнь</p>
      {UNSOCIAL_DATA.map(question => <div key={`unsocial_${question.id}`}><Field {...question} className="field__cell_second" /></div>)}
      <p className="field__cell field__cell_text">Котячья жизнь</p>
      {CATS_DATA.map(question => <div key={`cats_${question.id}`}><Field {...question} className="field__cell_third" /></div>)}
    </div>
  )
};

export default Game;
