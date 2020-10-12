import PropTypes from "prop-types";
import {GameType} from "../../const";
import {artistAnswerPropTypes} from "./artist-answers";

export const artistQuestionPropTypes = PropTypes.shape({
  type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  song: PropTypes.shape({
    src: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
  }).isRequired,
  answers: PropTypes.arrayOf(artistAnswerPropTypes).isRequired,
});

