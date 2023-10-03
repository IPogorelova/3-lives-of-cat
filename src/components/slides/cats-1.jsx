import { useState } from 'react';

import '../game/game.css';

const Cats1 = ({ id, question, answer }) => (
  <div className="slide">
    <h3>Сопоставь котиков и знак зодиака 🐈‍⬛</h3>
    <div className="row">
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h4>Инна</h4>
      </div>
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h4>Весы</h4>
      </div>
    </div>
    <div className="row">
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h4>Дина</h4>
      </div>
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h4>Водолей</h4>
      </div>
    </div>
    <div className="row">
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h4>Илья</h4>
      </div>
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h4>Рак</h4>
      </div>
    </div>
    <div className="row">
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h4>Алёна</h4>
      </div>
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h4>Овен</h4>
      </div>
    </div>
    <div className="row">
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h4>Аня</h4>
      </div>
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h4>Весы</h4>
      </div>
    </div>
    <div className="row">
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h4>Антон</h4>
      </div>
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h4>Водолей</h4>
      </div>
    </div>
  </div>
);

export default Cats1;
