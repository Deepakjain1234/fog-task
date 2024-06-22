
import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../styles/NowPlaying.css';
// import '../styles/changes.sass'

const NowPlaying = ({ song, onNext, onPrevious }) => {
  return (
    <div className='main-now-playing'>
      <div className="now-playing">
      <p className='now-playing-heading'>Now playing</p>
      <img src={song.image} alt={song.title} className="now-playing-image" />
      <div className="now-playing-details">
        <h2 className='song-title'>{song.title}</h2>
        <p className='song-singer'>Michale jackson</p>
      </div>
      <div className="audio-player-wrapper">
        <AudioPlayer
          src={song.url}
          autoPlayAfterSrcChange={true}
          showSkipControls={true}
          showJumpControls={false}
          onClickNext={onNext}
          onClickPrevious={onPrevious}
          customAdditionalControls={[]}
          customVolumeControls={[]}
        />
      </div>
    </div>
    </div>
  );
};

export default NowPlaying;
