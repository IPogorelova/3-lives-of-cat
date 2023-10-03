import { useState } from 'react';

import '../game/game.css';

import img1 from '../../assets/3-6/1.png';
import img2 from '../../assets/3-6/2.png';
import img3 from '../../assets/3-6/3.png';
import img4 from '../../assets/3-6/4.png';
import img5 from '../../assets/3-6/5.png';
import img6 from '../../assets/3-6/6.png';

let images = [img1, img2, img3, img4, img5, img6];

const Cats6 = ({ id, question, answer }) => {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div className="slide">
      <h3>Чьи это котики? 🐈</h3>
      <div className="row offset-top-48">
        <button className="col-inline" onClick={() => setImgIndex(1)}>1</button>
        <button className="col-inline" onClick={() => setImgIndex(2)}>2</button>
        <button className="col-inline" onClick={() => setImgIndex(3)}>3</button>
        <button className="col-inline" onClick={() => setImgIndex(4)}>4</button>
        <button className="col-inline" onClick={() => setImgIndex(5)}>5</button>
        <button className="col-inline" onClick={() => setImgIndex(6)}>6</button>
      </div>
      <div className="row offset-top-48">
        {imgIndex !== 0 && <img src={images[imgIndex - 1]} alt="Чей-то замечательный кот" height="400" className="col-center" />}
      </div>
    </div>
  )
};

export default Cats6;
