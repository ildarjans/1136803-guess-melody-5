import React from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import {GameArtist} from "../game-artist/game-artist";
import {GameGenre} from "../game-genre/game-genre";
import {GameType} from "../../const";
import {GenreQuestionPropTypes} from "../genre-prop-types/genre-quenstion";
import {ArtistQuestionPropTypes} from "../artist-prop-types/artist-question";

export class Game extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
    };

    this._handleAnswer = this._handleAnswer.bind(this);
  }

  _handleAnswer() {
    this.setState((prevState) => ({
      step: prevState.step + 1,
    }));
  }

  render() {
    const {questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step >= questions.length || !questions) {
      return (
        <Redirect to="/"/>
      );
    }

    switch (question.type) {
      case GameType.GENRE:
        return (
          <GameGenre
            question={question}
            onAnswer={this._handleAnswer}
          />
        );
      case GameType.ARTIST:
        return (
          <GameArtist
            question={question}
            onAnswer={this._handleAnswer}
          />
        );
    }
    return (
      <Redirect to="/"/>
    );
  }
}

Game.propTypes = {
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType(
          [GenreQuestionPropTypes, ArtistQuestionPropTypes])
  ).isRequired
};
