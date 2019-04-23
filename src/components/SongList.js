import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';


class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button 
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>;
        </div>
      );
    });
  }
  render() {
    console.log(this.props);
    // this.props === { songs: state.songs } --- similar to the mapStateToProps
    return <div className="ui divided list">{this.renderList()}</div>
  };
} 

// Take everything in Redux store, run computation, that causes data to show up as PROPS inside of the component
const mapStateToProps = (state) => {

  // You then return an object
  return { songs: state.songs };
};
export default connect(mapStateToProps, { selectSong: selectSong })(SongList);

/* ^^^This is essentially the exact same valid JavaScript
function connect() {
  return function() {
    return 'Hi there!';
  }
} */