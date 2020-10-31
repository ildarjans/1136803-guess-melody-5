import React from "react";
import PropTypes from "prop-types";

export const withAudio = (Component) => {
  class WithAudio extends React.PureComponent {
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
      return (
        <Component
          isLoading={isLoading}
          {...this.props}
        >

          <audio ref={this._audioRef}/>

        </Component>
      );
    }
  }

  WithAudio.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    onClickPlayButton: PropTypes.func.isRequired,
    song: PropTypes.string.isRequired
  };

  return WithAudio;

};


