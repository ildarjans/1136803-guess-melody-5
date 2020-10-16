import PropTypes from "prop-types";
import {GameType} from "../../const";
import {ArtistAnswerPropTypes} from "./artist-answers";

export const ArtistQuestionPropTypes = PropTypes.shape({
  type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  song: PropTypes.shape({
    src: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
  }).isRequired,
  answers: PropTypes.arrayOf(ArtistAnswerPropTypes).isRequired,
});

