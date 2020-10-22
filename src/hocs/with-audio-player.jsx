import React from "react";
import {AudioPlayer} from "../components/audio/audio-player";


export const withAudioPlayer = (Component) => {
  return class WithAudioPlayer extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activePlayerId: 0
      };
    }

    render() {
      const {activePlayerId} = this.state;

      return (
        <Component
          {...this.props}
          renderPlayer={(src, id) => {
            return (
              <AudioPlayer
                isPlaying={activePlayerId === id}
                song={src}
                onClickPlayButton={() => {
                  this.setState({
                    activePlayerId: activePlayerId === id ? -1 : id
                  });
                }}
              />
            );
          }}
        />
      );
    }
  };
};

