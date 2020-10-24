import React from "react";
import PropTypes from "prop-types";

export class AudioPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };

    this._audioRef = React.createRef();
    this._audio = null;

    this._handleCanPlayThrough = this._handleCanPlayThrough.bind(this);
  }

  _handleCanPlayThrough() {
    this.setState({isLoading: false});
  }

  componentDidMount() {
    this._audio = this._audioRef.current;
    this._audio.src = this.props.song;
    this._audio.oncanplaythrough = this._handleCanPlayThrough;
  }

  componentWillUnmount() {
    this._audio.oncanplaythrough = null;
  }

  componentDidUpdate() {
    if (this.props.isPlaying) {
      this._audio.play();
    } else {
      this._audio.pause();
    }
  }

  render() {
    const {isLoading} = this.state;
    const {isPlaying, onClickPlayButton} = this.props;
    return (
      <>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={onClickPlayButton}
        />
        <div className="track__status">
          <audio
            ref={this._audioRef}/>
        </div>
      </>
    );
  }
}

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onClickPlayButton: PropTypes.func.isRequired,
  song: PropTypes.string.isRequired
};
