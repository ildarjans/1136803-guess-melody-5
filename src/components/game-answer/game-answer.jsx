import React from "react";
import PropTypes from "prop-types";

export const GameAnswer = ({onChangeAnswer, answers, index}) => {
  const onChange = (evt) => {
    onChangeAnswer({
      answers: [
        ...answers.slice(0, index),
        evt.target.checked,
        ...answers.slice(index + 1),
      ],
    });
  };

  return (
    <div className="game__answer">
      <input
        className="game__input visually-hidden"
        type="checkbox"
        name="answer"
        value={`answer-${index}`}
        id={`answer-${index}`}
        checked={answers[index]}
        onChange={onChange}
      />
      <label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
    </div>
  );
};

GameAnswer.propTypes = {
  index: PropTypes.number.isRequired,
  onChangeAnswer: PropTypes.func.isRequired,
  answers: PropTypes.arrayOf(PropTypes.bool.isRequired).isRequired,
};
