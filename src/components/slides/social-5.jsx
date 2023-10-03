import { useState } from 'react';

import '../game/game.css';

import img1 from '../../assets/1-5/1.png';
import img2 from '../../assets/1-5/2.png';
import img3 from '../../assets/1-5/3.png';
import img4 from '../../assets/1-5/4.png';
import img5 from '../../assets/1-5/5.png';
import img6 from '../../assets/1-5/6.png';
import imgCat from '../../assets/cat.png';

let images = [img1, img2, img3, img4, img5, img6];

const Social5 = ({ id, question, answer }) => {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div className="slide">
      <h3>Кто это написал? ✍️</h3>
      <div className="row offset-top-48">
        <button className="col-inline" onClick={() => setImgIndex(1)}>1</button>
        <button className="col-inline" onClick={() => setImgIndex(2)}>2</button>
        <button className="col-inline" onClick={() => setImgIndex(3)}>3</button>
        <button className="col-inline" onClick={() => setImgIndex(4)}>4</button>
        <button className="col-inline" onClick={() => setImgIndex(5)}>5</button>
        <button className="col-inline" onClick={() => setImgIndex(6)}>6</button>
      </div>
      <div className="row offset-top-48">
        {imgIndex === 0 && <img src={imgCat} alt="Кот в мешке" height="430" className="col-center" />}
        {imgIndex !== 0 && <img src={images[imgIndex - 1]} alt="Твит из твиттера" height="300" className="col-center" />}
      </div>
    </div>
  )
};

export default Social5;
