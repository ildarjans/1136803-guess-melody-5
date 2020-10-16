import PropTypes from "prop-types";
import {GameType} from "../../const";
import {GenreAnswerPropTypes} from "./genre-answer";

export const GenreQuestionPropTypes = PropTypes.shape({
  type: PropTypes.oneOf([
    GameType.ARTIST,
    GameType.GENRE,
  ]).isRequired,
  genre: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(GenreAnswerPropTypes).isRequired,
});
