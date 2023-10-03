import { useState } from 'react';

import '../game/game.css';

import img1 from '../../assets/2-6/1.png';
import img2 from '../../assets/2-6/2.png';
import img3 from '../../assets/2-6/3.png';
import img4 from '../../assets/2-6/4.png';
import img5 from '../../assets/2-6/5.png';
import img52 from '../../assets/2-6/5-2.png';
import img6 from '../../assets/2-6/6.png';
import img7 from '../../assets/2-6/7.png';
import img8 from '../../assets/2-6/8.png';

let images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Asocial6 = ({ id, question, answer }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [isSpoilered, setIsSpoilered] = useState(false);

  return (
    <div className="slide">
      <h3>Сопоставь название сериала и кадр из него 🎥</h3>
      <div className="row offset-top-48">
        <button className="col-inline" onClick={() => setImgIndex(1)}>1</button>
        <button className="col-inline" onClick={() => setImgIndex(2)}>2</button>
        <button className="col-inline" onClick={() => setImgIndex(3)}>3</button>
        <button className="col-inline" onClick={() => setImgIndex(4)}>4</button>
        <button className="col-inline" onClick={() => setImgIndex(5)}>5</button>
        <button className="col-inline" onClick={() => setImgIndex(6)}>6</button>
        <button className="col-inline" onClick={() => setImgIndex(7)}>7</button>
        <button className="col-inline" onClick={() => setImgIndex(8)}>8</button>
      </div>
      <div className="row offset-top-48">
        {imgIndex !== 0 && imgIndex !== 5 && <img src={images[imgIndex - 1]} alt="Кадр из сериала" height="400" className="col-center" />}
        {imgIndex === 5 &&
          (
            <div className="col-12">
              <div className="col-12">
                <img src={!isSpoilered ? img5 : img52} alt="Кадр из сериала" height="400" className="col-center" />
              </div>
              {!isSpoilered &&
                (
                  <div className="col-12">
                    <button onClick={() => setIsSpoilered(true)} className="col-center offset-top-24">Подсказка 👀</button>
                  </div>
                )
              }
            </div>
          )
        }
      </div>
    </div>
  )
};

export default Asocial6;
