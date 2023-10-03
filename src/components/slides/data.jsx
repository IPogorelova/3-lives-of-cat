import Social1 from './social-1.jsx';
import Social4 from './social-4.jsx';
import Social5 from './social-5.jsx';
import Social6 from './social-6.jsx';

import Asocial5 from './asocial-5.jsx';
import Asocial6 from './asocial-6.jsx';

import Cats1 from './cats-1.jsx';
import Cats3 from './cats-3.jsx';
import Cats4 from './cats-4.jsx';
import Cats5 from './cats-5.jsx';
import Cats6 from './cats-6.jsx';

import imgCat from '../../assets/cat.png';

export const SOCIAL_DATA = [
    {
      id: '1',
      title: 'Социальная жизнь',
      question: <Social1 />
    },
    {
      id: '2',
      title: 'Социальная жизнь',
      question:
        <div>
          <h3>Сколько у тебя твитов в Твиттере? 🐦</h3>
          <ul>
            <li>1232</li>
            <li>1057</li>
            <li>2222</li>
            <li>1639</li>
          </ul>
        </div>
    },
    {
      id: '3',
      title: 'Социальная жизнь',
      question: <h3>
        Сколько раз имя <span className="text-colored"><i>Алёна</i></span> упоминается в чате<br />
        <span className="text-colored"><i>кружочки интернациональные</i></span>? 🌍
      </h3>
    },
    {
      id: '4',
      title: 'Социальная жизнь',
      question: <Social4 />
    },
    {
      id: '5',
      title: 'Социальная жизнь',
      question: <Social5 />,
      isCat: true
    },
    {
      id: '6',
      title: 'Социальная жизнь',
      question: <Social6 />
    }
];

export const UNSOCIAL_DATA = [
    {
      id: '1',
      title: 'Асоциальная жизнь',
      question:
        <div>
          <h3>Расшифруй пейринги по Гарри Поттеру из названий ⚡</h3>
          <ul>
              <li>Драмиона</li>
              <li>Гармония или Пампкинпай</li>
              <li>Гудшип или Ромиона</li>
              <li>Вульфстар</li>
              <li>Оранджкраш</li>
          </ul>
        </div>
    },
    {
      id: '2',
      title: 'Асоциальная жизнь',
      question:
        <div>
          <h3>Вам будет представлено несколько специально подготовленных отрывков из Гли.<br />На них вы сможете увидеть исполнение песни без звука.<br /><br />Ваша задача - назвать, что за песню исполняют 🎤</h3>
          <div>
            <a href="youtube.com" target="_blank">Дина Андреевна, ваш выход</a>
          </div>
          <div className="row">
            <img src={imgCat} alt="Кот в мешке" height="330" className="col-center" />
          </div>
        </div>,
      isCat: true
    },
    {
      id: '3',
      title: 'Асоциальная жизнь',
      question:
        <div>
          <h3>Угадай серию книг по эмодзи 📖</h3>
          <ul className="emoji">
            <li>🐲🪄🎻</li>
            <li>⚡️🪄🤓</li>
            <li>👻⚔️🕵️</li>
            <li>👸🤖🌌</li>
            <li>🧛‍♂️❤️🐺</li>
          </ul>
        </div>
    },
    {
      id: '4',
      title: 'Асоциальная жизнь',
      question:
        <div>
          <h3>Продолжи строчки из песен 🎶</h3>
          <ul>
            <li>Экология, экология - ...</li>
            <li>Я ем сою...</li>
            <li>Я опять кручу на пальце прядь...</li>
            <li>Поcлушай мой cовет в формате мр3...</li>
            <li>А у меня во дворе...</li>
          </ul>
        </div>
    },
    {
      id: '5',
      title: 'Асоциальная жизнь',
      question: <Asocial5 />
    },
    {
      id: '6',
      title: 'Асоциальная жизнь',
      question: <Asocial6 />
    }
];

export const CATS_DATA = [
    {
      id: '1',
      title: 'Котячья жизнь',
      question: <Cats1 />
    },
    {
      id: '2',
      title: 'Котячья жизнь',
      question:
        <div>
          <h3>Кто больше - люди или коты? 🙀</h3>
          <ul>
            <li>Спят</li>
            <li>Левшей</li>
            <li>Больше зубов</li>
            <li>Лучше слышат</li>
          </ul>
        </div>
    },
    {
      id: '3',
      title: 'Котячья жизнь',
      question: <Cats3 />,
      isCat: true
    },
    {
      id: '4',
      title: 'Котячья жизнь',
      question: <Cats4 />
    },
    {
      id: '5',
      title: 'Котячья жизнь',
      question: <Cats5 />
    },
    {
      id: '6',
      title: 'Котячья жизнь',
      question: <Cats6 />
    }
];