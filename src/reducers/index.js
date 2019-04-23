import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: '4 Your Eyez Only', duration: '8:23' },
    { title: 'Jet Fuel', duration: '3:56' },
    { title: '2009', duration: '4:05' },
    { title: 'Black Spiderman', duration: '4:41' }
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});