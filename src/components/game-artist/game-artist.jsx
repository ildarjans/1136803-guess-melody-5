import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {CircleStyle} from "../../styles/circle-style";
import {ArtistInput} from "../artist-input/artist-input";
import {artistQuestionPropTypes} from "../artist-prop-types/artist-question";

export class GameArtist extends React.PureComponent {
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
  }

  render() {
    const {onAnswer, question} = this.props;
    const {answers, song} = question;
    return (
      <section className="game game--artist">
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
              style={CircleStyle}/>
          </svg>

          <div className="game__mistakes">
            <div className="wrong"/>
            <div className="wrong"/>
            <div className="wrong"/>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <div className="track">
              <button className="track__button track__button--play" type="button"/>
              <div className="track__status">
                <audio src={song.src}/>
              </div>
            </div>
          </div>

          <form className="game__artist">
            {
              answers.map((answer, index) => (
                <ArtistInput
                  key={`${answer.picture}-${index}`}
                  index={index}
                  onAnswer={onAnswer}
                  answer={answer}
                  question={question}
                />
              ))
            }

          </form>
        </section>
      </section>
    );
  }
}

GameArtist.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: artistQuestionPropTypes.isRequired,
};
