import { useState } from 'react';

import '../game/game.css';

import img1 from '../../assets/3-3/1.png';
import img2 from '../../assets/3-3/2.png';
import img3 from '../../assets/3-3/3.png';
import img4 from '../../assets/3-3/4.png';
import img5 from '../../assets/3-3/5.png';
import img6 from '../../assets/3-3/6.png';
import imgCat from '../../assets/cat.png';

let images = [img1, img2, img3, img4, img5, img6];

const Cats3 = ({ id, question, answer }) => {
  const [isCat, setIsCat] = useState(true);

  return (
    <div className="slide slide-long">
      <h3>
        Здесь представлены несколько человеческих котиков, сгенерированных AI по ключевым словам.<br />
        Вам нужно назвать этих котиков 😽
      </h3>
      {isCat ?
        (
          <>
            <div className="row">
              <img src={imgCat} alt="Кот в мешке" height="400" className="col-center" />
            </div>
            <div className="row">
              <button onClick={() => setIsCat(false)} className="col-center offset-top-24">Начать 👀</button>
            </div>
          </>
        )
      :
        (
          <>
            <div className="row row-center offset-top-48">
              {images.slice(0, 4).map(img => (
                <div className="col-inline">
                  <img src={img} alt="Котик, сгенерированный AI по ключевым словам" height="400" />
                </div>
              ))}
            </div>
            <div className="row row-center offset-top-24">
              {images.slice(4).map(img => (
                <div className="col-inline">
                  <img src={img} alt="Котик, сгенерированный AI по ключевым словам" height="400" />
                </div>
              ))}
            </div>
          </>
        )
      }
    </div>
  )
};

export default Cats3;
