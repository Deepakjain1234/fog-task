
import React from 'react';
import '../styles/SongItem.css';

const SongItem = ({ song, index, onSongClick, isActive }) => {
  return (
    <div
      className={`song-item ${isActive ? 'active' : ''}`}
      onClick={() => onSongClick(song)}
    >
      <div>{index}</div>
      <img src={song.image} alt="" />
      <div>{song.title}</div>
      <div>{song.plays}</div>
      <div>{song.time}</div>
      <div>{song.album}</div>
    </div>
  );
};

export default SongItem;
