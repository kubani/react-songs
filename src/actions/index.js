  // Return an action
  // Note: Type is required; payload is optional
  
export const selectSong = (song) => {
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};