import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import {GenreQuestionPropTypes} from "../genre-prop-types/genre-quenstion";
import {CircleStyle} from "../../styles/circle-style";

import {withAudioPlayer} from "../../hocs/with-audio-player";
import {GameAnswer} from "../game-answer/game-answer";

class GameGenre extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      answers: [
        false,
        false,
        false,
        false,
      ],
    };

    this._handleAnswerChange = this._handleAnswerChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleAnswerChange(answers) {
    this.setState(answers);
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    const {onAnswer, question} = this.props;
    onAnswer(this.state.answers, question);
  }

  render() {
    const {answers} = this.state;
    const {question, renderPlayer, children} = this.props;
    return (
      <section className="game game--genre">
        <header className="game__header">
          <Link className="game__back" to="/">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
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
            onSubmit={this._handleSubmit}
          >
            {question.answers.map((answer, index) => (
              <div className="track" key={`${index}-${answer.src}`}>

                {renderPlayer(answer.src, index)}

                <GameAnswer
                  answers={answers}
                  index={index}
                  onChangeAnswer={this._handleAnswerChange}
                />

              </div>
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
  }
}

GameGenre.propTypes = {
  renderPlayer: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  onAnswer: PropTypes.func.isRequired,
  question: GenreQuestionPropTypes.isRequired,
};

export const GameGenreWithAudioPlayer = withAudioPlayer(GameGenre);
