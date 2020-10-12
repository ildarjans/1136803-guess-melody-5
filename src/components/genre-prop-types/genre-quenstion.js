import PropTypes from "prop-types";
import {GameType} from "../../const";
import {genreAnswerPropTypes} from "./genre-answer";

export const genreQuestionPropTypes = PropTypes.shape({
  type: PropTypes.oneOf([
    GameType.ARTIST,
    GameType.GENRE,
  ]).isRequired,
  genre: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(genreAnswerPropTypes).isRequired,
});
