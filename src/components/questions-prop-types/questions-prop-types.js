import PropTypes from "prop-types";
import {GenreQuestionPropTypes} from "../genre-prop-types/genre-quenstion";
import {ArtistQuestionPropTypes} from "../artist-prop-types/artist-question";

export const questionsPropTypes = PropTypes.arrayOf(
    PropTypes.oneOfType(
        [
          GenreQuestionPropTypes,
          ArtistQuestionPropTypes,
        ]).isRequired
);
