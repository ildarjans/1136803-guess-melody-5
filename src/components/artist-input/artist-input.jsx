import React from 'react';
import PropTypes from 'prop-types';
import {artistQuestionPropTypes} from '../artist-prop-types/artist-question';
import {artistAnswerPropTypes} from '../artist-prop-types/artist-answers';

export const ArtistInput = ({onAnswer, answer, question, index}) => {
  const onChange = (evt) => {
    evt.preventDefault();
    onAnswer(question, answer);
  };

  return (
    <div className="artist" key={`${index}-${answer.picture}`}>
      <input
        className="artist__input visually-hidden"
        type="radio"
        name="answer"
        value={`answer-${index}`}
        id={`answer-${index}`}
        onChange={onChange}
      />
      <label className="artist__name" htmlFor={`answer-${index}`}>
        <img className="artist__picture" src={answer.picture} alt={answer.artist}/>
        {answer.artist}
      </label>
    </div>
  );
};

ArtistInput.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  question: artistQuestionPropTypes,
  answer: artistAnswerPropTypes.isRequired,
};
