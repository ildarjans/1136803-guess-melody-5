import React from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {MAX_MISTAKES_COUNT} from "../../const";
import {GameType} from "../../const";
import {questionsPropTypes} from "../questions-prop-types/questions-prop-types";
import {actionCreator} from "../../store/actions";

import {Mistakes} from "../mistakes/mistakes";
import {GameArtistWithAudioPlayer} from "../game-artist/game-artist";
import {GameGenreWithAudioPlayer} from "../game-genre/game-genre";

const GameComponent = ({onUserAnswer, questions, step, mistakes}) => {
  if (step === questions.length) {
    if (mistakes < questions.length && MAX_MISTAKES_COUNT > mistakes) {
      return <Redirect to="/result"/>;
    }
    return <Redirect to="/lose"/>;
  }

  switch (questions[step].type) {
    case GameType.GENRE:
      return (
        <GameGenreWithAudioPlayer
          key={step}
          question={questions[step]}
          onAnswer={onUserAnswer}
        >
          <Mistakes count={mistakes}/>

        </GameGenreWithAudioPlayer>
      );
    case GameType.ARTIST:
      return (
        <GameArtistWithAudioPlayer
          question={questions[step]}
          key={step}
          onAnswer={onUserAnswer}
        >
          <Mistakes count={mistakes}/>

        </GameArtistWithAudioPlayer>
      );

  }
  return (
    <Redirect to="/"/>
  );

};

GameComponent.propTypes = {
  questions: questionsPropTypes.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
};

const mapStateToProps = ({GAME, DATA}) => ({
  step: GAME.step,
  mistakes: GAME.mistakes,
  questions: DATA.questions
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(actionCreator.resetGame());
  },
  onUserAnswer(question, answer) {
    dispatch(actionCreator.incrementStep());
    dispatch(actionCreator.incrementMistake(question, answer));
  }
});

export const Game = connect(mapStateToProps, mapDispatchToProps)(GameComponent);
