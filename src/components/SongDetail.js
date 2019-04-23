import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ hitUpMySongHomie }) => {
  if(!hitUpMySongHomie) {
    return <div>Click on a song home!</div>;
  }

  return (
  <div>
    <h3>Details for:</h3>
    <p>
      Title: {hitUpMySongHomie.title}
      <br />
      Duration: {hitUpMySongHomie.duration}
    </p>
  </div>
  )
};

const mapStateToProps = (state) => {
  return { hitUpMySongHomie: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);