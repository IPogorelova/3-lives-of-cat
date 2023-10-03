import { useState } from 'react';

import '../game/game.css';

const Social1 = ({ id, question, answer }) => (
  <div className="slide">
    <h3>Сопоставь унисоновца и описание того, что ему дал унисон 💜</h3>
    <div className="row">
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h4>Тимур</h4>
      </div>
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <ul className="ul">
          <li>понимание, что работа с детьми - не их</li>
          <li>склонность к алкоголизму</li>
          <li>академический отпуск</li>
          <li>много друзей, которые свалили из РФ, и теперь им грустно</li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h4>Вика</h4>
      </div>
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <ul className="ul">
          <li>первую допсу</li>
          <li>никотиновую зависимость</li>
          <li>сеансы с психологом</li>
          <li>сломанный принтер</li>
          <li>ещё не начатый диплом в марте на 4 курсе</li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h4>Коля</h4>
      </div>
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <ul className="ul">
          <li>угрозу вылета из-за трёх долгов + комиссию у Демченко</li>
          <li>множество нервных срывов</li>
          <li>пиздов</li>
          <li>желание никогда больше не быть вожатым</li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <h4>Элина</h4>
      </div>
      <div className="col-6" style={{cursor: 'pointer'}} onClick={(e) => e.target.style.opacity = 0.3}>
        <ul className="ul">
          <li>эмоциональное выгорание</li>
          <li>привычку курить</li>
          <li>несколько алкогольных отравлений</li>
          <li>фиктивный брак</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Social1;
