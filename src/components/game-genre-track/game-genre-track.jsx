import React from "react";
import PropTypes from "prop-types";

const GameGenreTrackComponent = ({renderPlayer, onChange, userAnswer, src, id}) => {
  const onAnswerChange = (evt) => {
    onChange(evt.target.checked, id);
  };

  return (
    <div className="track">

      {renderPlayer(src, id)}

      <div className="game__answer">
        <input
          className="game__input visually-hidden"
          type="checkbox"
          name="answer"
          value={`answer-${id}`}
          id={`answer-${id}`}
          checked={userAnswer}
          onChange={onAnswerChange}
        />
        <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
      </div>

    </div>
  );
};

GameGenreTrackComponent.propTypes = {
  userAnswer: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export const GameGenreTrack = React.memo(GameGenreTrackComponent);

