import React from "react";
import PropTypes from "prop-types";
import {withAudio} from "../../hocs/with-audio";

const AudioPlayerComponent = ({onClickPlayButton, isPlaying, isLoading, children}) => {
  return (
      <>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={onClickPlayButton}
        />
        <div className="track__status">
          {children}
        </div>
      </>
  );
};

AudioPlayerComponent.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onClickPlayButton: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export const AudioPlayer = withAudio(AudioPlayerComponent);
