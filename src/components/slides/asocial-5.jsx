import { useState } from 'react';

import '../game/game.css';

import img from '../../assets/2-5.png';

const Asocial5 = ({ id, question, answer }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="slide">
      <h3>Расставь игры в порядке убывания общего времени, проведённого в игре 🎮</h3>
      <div className="row offset-top-48">
        <div className="col-inline button">Growing Up</div>
        <div className="col-inline button">Хогвартс. Наследие</div>
        <div className="col-inline button">Portal 2</div>
        <div className="col-inline button">Disney Dreamlight Valley</div>
        <div className="col-inline button">The Tenants</div>
      </div>
      <div className="row offset-top-48">
        {isShown ?
          <div className="col-center">
            <img src={img} alt="Поздравление на стене ВКонтакте" height="420" />
          </div>
          :
          <div className="col-12">
            <button onClick={() => setIsShown(true)} className="col-center">Ответ</button>
          </div>
        }
      </div>
    </div>
  )
};

export default Asocial5;
