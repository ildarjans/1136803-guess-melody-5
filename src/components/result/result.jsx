import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../../../guess-melody-5/src/store/action";

export const ResultComponent = ({isWin, mistakes, step, onReplayButtonClick, resetGame}) => {
  const correctAnswers = step - mistakes;
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
          <p className="result__total">
            {`Вы ответили правильно на ${correctAnswers} вопросов и совершили ${mistakes} ошибки`}
          </p>
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
      <button
        className="replay"
        type="button"
        onClick={() => {
          resetGame();
          onReplayButtonClick();
        }}
      >
        Сыграть ещё раз
      </button>
    </section>
  );
};

ResultComponent.propTypes = {
  isWin: PropTypes.bool.isRequired,
  mistakes: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  onReplayButtonClick: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  mistakes: state.mistakes,
  step: state.step,
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  }
});

export const Result = connect(mapStateToProps, mapDispatchToProps)(ResultComponent);
