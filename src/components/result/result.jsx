import React from "react";
import PropTypes from "prop-types";

export const Result = ({isWin}) => {
  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
      </div>
      {
        isWin
        &&
        <>
          <h2 className="result__title">Вы настоящий меломан!</h2>
          <p className="result__total">Вы ответили правильно на 6 вопросов и совершили 2 ошибки</p>
        </>
      }
      {
        !isWin
        &&
        <>
          <h2 className="result__title">Какая жалость!</h2>
          <p className="result__total result__total--fail">
            У вас закончились все попытки. Ничего, повезёт в следующий раз!
          </p>
        </>
      }
      <button className="replay" type="button">Сыграть ещё раз</button>
    </section>
  );
};

Result.propTypes = {
  isWin: PropTypes.bool.isRequired,
};
