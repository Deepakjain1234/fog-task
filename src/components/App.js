
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import SongList from './SongList';
import NowPlaying from './NowPlaying';
import song1 from '../asset/songs/song1.mp3'
import song2 from '../asset/songs/song2.mp3'
import song3 from '../asset/songs/song3.mp3'
import song4 from '../asset/songs/song4.mp3'
import song5 from '../asset/songs/song5.mp3'
import image1 from '../asset/image/image1.jpeg'
import image2 from '../asset/image/image2.jpeg'
import image3 from '../asset/image/image3.jpeg'
import image4 from '../asset/image/image4.jpeg'
import image5 from '../asset/image/image5.jpeg'
import '../styles/App.css';

const App = () => {
  const [songs, setSongs] = useState([
    { id: '1', title: 'Billie Jean', plays: '1,040,811,084', time: '4:53', album: 'Thriller 25 Super Deluxe Edition', image:image1, url: song1 },
    { id: '2', title: 'Beat It', plays: '643,786,045', time: '4:18', album: 'Thriller 25 Super Deluxe Edition', image: image2, url: song2 },
    { id: '3', title: 'Smooth Criminal - 2012 Remaster', plays: '407,234,004', time: '4:17', album: 'Thriller 25 Super Deluxe Edition', image: image3, url: song3 },
    { id: '4', title: 'Don\'t Stop \'Til You Get Enough', plays: '316,391,952', time: '6:05', album: 'Bad 25th Anniversary Edition', image: image4, url:  song4},
    { id: '5', title: 'Rock With You - Single Version', plays: '268,187,318', time: '3:40', album: 'Off The Wall', image: image5, url:song5 }
  ]);
  const [currentSong, setCurrentSong] = useState(songs[1]);

  const handleSongClick = (song) => {
    console.log(song)
    setCurrentSong(song);
  };

  const handleNext = () => {
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    const previousIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentSong(songs[previousIndex]);
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header song={currentSong} />
        <SongList songs={songs} onSongClick={handleSongClick} currentSong={currentSong} setSongs={setSongs} />
      </div>
      <NowPlaying song={currentSong} onNext={handleNext} onPrevious={handlePrevious} />
    </div>
  );
};

export default App;