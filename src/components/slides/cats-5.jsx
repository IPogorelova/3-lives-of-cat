import { useState } from 'react';

import '../game/game.css';

const Cats4 = ({ id, question, answer }) => (
  <div className="slide">
    <h3>
      Мы спросили некоторых котов - "если бы Алёна была сладостью, то какой?"<br />
      Сопоставьте котов и их ответы 😻
    </h3>
    <div className="row">
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h5>Инна</h5>
      </div>
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h5>грушевый пирог</h5>
      </div>
    </div>
    <div className="row">
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h5>Дина</h5>
      </div>
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h5>сладкая булочка</h5>
      </div>
    </div>
    <div className="row">
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h5>Илья</h5>
      </div>
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h5>пончик в красивой коробочке</h5>
      </div>
    </div>
    <div className="row">
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h5>Аня</h5>
      </div>
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h5>зефирная косичка</h5>
      </div>
    </div>
    <div className="row">
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h5>Антон</h5>
      </div>
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h5>безешки</h5>
      </div>
    </div>
  </div>
);

export default Cats4;
