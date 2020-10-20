import PropTypes from "prop-types";

export const ArtistAnswerPropTypes = PropTypes.shape({
  artist: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
});
