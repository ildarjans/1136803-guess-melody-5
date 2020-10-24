import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {withAudioPlayer} from "../../hocs/with-audio-player";
import {CircleStyle} from "../../styles/circle-style";
import {ArtistInput} from "../artist-input/artist-input";
import {ArtistQuestionPropTypes} from "../artist-prop-types/artist-question";


export const GameArtist = ({onAnswer, question, renderPlayer, children}) => {
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

        {children}

      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">

            {renderPlayer(question.song.src, 0)}

          </div>
        </div>

        <form className="game__artist">
          {
            question.answers.map((answer, index) => (
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
};

GameArtist.propTypes = {
  renderPlayer: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
  question: ArtistQuestionPropTypes.isRequired,
  children: PropTypes.element.isRequired
};

export const GameArtistWithAudioPlayer = withAudioPlayer(GameArtist);
