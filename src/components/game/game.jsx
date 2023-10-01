import { useState } from 'react';

import { SOCIAL_DATA, UNSOCIAL_DATA, CATS_DATA } from '../../assets/data.js';

import './game.css';

const Field = ({ id, question, answer }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  const buttonClickHandler = () => {
      setIsPopupOpened(true);
      setIsClicked(true);
  };

  return (
    <>
      {isPopupOpened && (
        <div className="popup">
          <button type="button" onClick={() => setIsPopupOpened(false)}>X</button>
          hi, that's me C:
          <h3>{question}</h3>
          <br/>
          <p>{answer}</p>
        </div>
      )}
      <button type="button" onClick={() => buttonClickHandler()} disabled={isClicked} className="field__cell">
        My Button
      </button>
    </>

  )
};

const Game = () => {

  return (
    <div className="field">
      {SOCIAL_DATA.map(question => <div key={`social_${question.id}`}><Field {...question} /></div>)}
      {UNSOCIAL_DATA.map(question => <div key={`unsocial_${question.id}`}><Field {...question} /></div>)}
      {CATS_DATA.map(question => <div key={`cats_${question.id}`}><Field {...question} /></div>)}
    </div>
  )
};

export default Game;
