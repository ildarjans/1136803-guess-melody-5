import React from "react";
import PropTypes from "prop-types";

export const GameAnswer = ({onChangeAnswer, userAnswers, index}) => {
  const onChange = (evt) => {
    onChangeAnswer({
      answers: [
        ...userAnswers.slice(0, index),
        evt.target.checked,
        ...userAnswers.slice(index + 1),
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
        checked={userAnswers[index]}
        onChange={onChange}
      />
      <label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
    </div>
  );
};

GameAnswer.propTypes = {
  index: PropTypes.number.isRequired,
  onChangeAnswer: PropTypes.func.isRequired,
  userAnswers: PropTypes.arrayOf(PropTypes.bool.isRequired).isRequired,
};
