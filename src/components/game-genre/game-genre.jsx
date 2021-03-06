import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import {GenreQuestionPropTypes} from "../genre-prop-types/genre-quenstion";
import {CircleStyle} from "../../styles/circle-style";

import {withAudioPlayer} from "../../hocs/with-audio-player";
import {withGameGenreAnswers} from "../../hocs/with-game-genre-answers";
import {GameGenreTrack} from "../game-genre-track/game-genre-track";

const GameGenre = (props) => {
  const {
    onAnswer,
    onChange,
    question,
    renderPlayer,
    userAnswers,
    children
  } = props;
  return (
    <section className="game game--genre">
      <header className="game__header">
        <Link className="game__back" to="/">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="/img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </Link>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle
            className="timer__line"
            cx="390"
            cy="390"
            r="370"
            style={CircleStyle}
          />
        </svg>

        {children}

      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите {question.genre} мелодию</h2>
        <form
          className="game__tracks"
          onSubmit={onAnswer}
        >
          {question.answers.map((answer, index) => (

            <GameGenreTrack
              key={`${index}-${answer.src}`}
              renderPlayer={renderPlayer}
              onChange={onChange}
              userAnswer={userAnswers[index]}
              src={answer.src}
              id={index}
            />

          ))
          }
          <button
            className="game__submit button"
            type="submit"
          >
            Ответить
          </button>

        </form>
      </section>
    </section>
  );
};

GameGenre.propTypes = {
  renderPlayer: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  onAnswer: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  question: GenreQuestionPropTypes.isRequired,
  userAnswers: PropTypes.arrayOf(PropTypes.bool.isRequired).isRequired,
};

export const GameGenreWithAudioPlayer = withAudioPlayer(withGameGenreAnswers(GameGenre));
