import React from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {actionCreator} from "../../store/action-type";
import {GameArtistWithAudioPlayer} from "../game-artist/game-artist";
import {GameGenreWithAudioPlayer} from "../game-genre/game-genre";
import {questionsPropTypes} from "../questions-prop-types/questions-prop-types";
import {GameType} from "../../const";

import {Mistakes} from "../mistakes/mistakes";

const GameComponent = ({onUserAnswer, resetGame, questions, step, mistakes}) => {
  if (step >= questions.length || !questions) {
    resetGame();

    return (
      <Redirect to="/"/>
    );

  }

  switch (questions[step].type) {
    case GameType.GENRE:
      return (
        <GameGenreWithAudioPlayer
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
  resetGame: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  step: state.step,
  mistakes: state.mistakes,
  questions: state.questions
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
