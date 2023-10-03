import { useState } from 'react';

import '../game/game.css';

import img from '../../assets/1-4.png';

const Social4 = ({ id, question, answer }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="slide">
      <h3>С чем тебя поздравляет Маргарита Плеханова в первом посте на странице ВК? 🎉</h3>
      <div className="row offset-top-48">
          {isShown ?
            <div className="col-center">
              <img src={img} alt="Поздравление на стене ВКонтакте" height="500" />
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

export default Social4;
