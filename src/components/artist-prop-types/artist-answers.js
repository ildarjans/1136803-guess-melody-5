import PropTypes from "prop-types";

export const artistAnswerPropTypes = PropTypes.shape({
  artist: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
});
