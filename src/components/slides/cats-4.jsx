import { useState } from 'react';

import '../game/game.css';

const Cats4 = ({ id, question, answer }) => (
  <div className="slide">
    <h3>
      Мы спросили некоторых котов - "если бы ты пил кофе, то какой?"<br />
      Сопоставьте котов и их ответы 😼
    </h3>
    <div className="row">
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h5>Инна</h5>
      </div>
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h5>колд брю</h5>
      </div>
    </div>
    <div className="row">
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h5>Дина</h5>
      </div>
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h5>латте или капучино</h5>
      </div>
    </div>
    <div className="row">
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h5>Илья</h5>
      </div>
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h5>карамельный фраппучино или пампкин спайс латте</h5>
      </div>
    </div>
    <div className="row">
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h5>Алёна</h5>
      </div>
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h5>латте с карамельным сиропом, взбитыми сливками и со всем сладким, что в него можно впихнуть</h5>
      </div>
    </div>
    <div className="row">
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h5>Аня</h5>
      </div>
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h5>кленовый раф</h5>
      </div>
    </div>
    <div className="row">
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h5>Антон</h5>
      </div>
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h5>эспрессо-тоник</h5>
      </div>
    </div>
  </div>
);

export default Cats4;
