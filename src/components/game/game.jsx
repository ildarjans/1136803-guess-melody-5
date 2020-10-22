import React from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import {GameArtist} from "../game-artist/game-artist";
import {GameGenre} from "../game-genre/game-genre";
import {withAudioPlayer} from "../../hocs/with-audio-player";
import {GenreQuestionPropTypes} from "../genre-prop-types/genre-quenstion";
import {ArtistQuestionPropTypes} from "../artist-prop-types/artist-question";
import {GameType} from "../../const";

const GameGenreWrapped = withAudioPlayer(GameGenre);
const GameArtistWrapped = withAudioPlayer(GameArtist);

export class Game extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
    };

    this._handleClickAnswer = this._handleClickAnswer.bind(this);
  }

  _handleClickAnswer() {
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
          <GameGenreWrapped
            question={question}
            onAnswer={this._handleClickAnswer}
          />
        );
      case GameType.ARTIST:
        return (
          <GameArtistWrapped
            question={question}W
            onAnswer={this._handleClickAnswer}
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
          [GenreQuestionPropTypes, ArtistQuestionPropTypes]).isRequired
  ).isRequired
};
