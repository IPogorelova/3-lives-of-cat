import { useState } from 'react';

import '../game/game.css';

import img from '../../assets/1-6.png';
import img2 from '../../assets/1-6-2.png';

const Social6 = ({ id, question, answer }) => {
  const [isSpoilered, setIsSpoilered] = useState(false);

  return (
    <div className="slide">
      <h3>Про что самый последний мем в чате <span className="text-colored"><i>три комиссара, три методиста и один командир</i></span>? 💕</h3>
      <div className="row offset-top-48">
        <div className="col-12">
          <div className="col-12">
            <img src={!isSpoilered ? img : img2} alt="Последний мем в чатике 'три комиссара, три методиста и один командир'" width="400" className="col-center" />
          </div>
          {!isSpoilered &&
            (
              <div className="col-12">
                <button onClick={() => setIsSpoilered(true)} className="col-center offset-top-24">Ответ 👀</button>
              </div>
            )
          }
        </div>

        <div className="col-center">
        </div>
      </div>
    </div>
  )
};

export default Social6;
