import React from "react";
import PropTypes from "prop-types";

import {MAX_MISTAKES_COUNT} from "../../const.js";

export const Welcome = ({onWelcomeButtonClick}) => {
  return (
    <section className="welcome">
      <div className="welcome__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
      </div>

      <button
        className="welcome__button"
        onClick={onWelcomeButtonClick}
      >
        <span className="visually-hidden">Начать игру</span>
      </button>

      <h2 className="welcome__rules-title">Правила игры</h2>
      <p className="welcome__text">Правила просты:</p>
      <ul className="welcome__rules-list">
        <li>Нужно ответить на все вопросы.</li>
        <li>Можно допустить {MAX_MISTAKES_COUNT} ошибки.</li>
      </ul>
      <p className="welcome__text">Удачи!</p>
    </section>
  );
};

Welcome.propTypes = {
  onWelcomeButtonClick: PropTypes.func.isRequired,
};
