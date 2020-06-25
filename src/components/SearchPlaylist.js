import React, { useState } from 'react';
import {connect} from 'react-redux';
import {searchMyPlaylists} from '../actions/searchPlaylistAction';


const SearchPlaylist = ({searchMyPlaylists}) => {


    const [playlistName, setPlaylistName] = useState('');

    const handlePlaylistNameChange = e => {
        setPlaylistName(e.target.value)
        searchMyPlaylists(e.target.value.toLowerCase());
    }

    const handleMyPlaylistSearchSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        searchMyPlaylists(playlistName.toLowerCase());
    }

    return (
        <form className="form-inline my-2 my-lg-0" onSubmit={handleMyPlaylistSearchSubmit}>
            <input
                className="form-control mr-sm-2 radius-5px min-width-600"
                type="text"
                placeholder="Find playlist by name..." 
                onChange={handlePlaylistNameChange}
                value={playlistName}
            />
        </form>    
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchMyPlaylists: (playlistName) => dispatch(searchMyPlaylists(playlistName))
    }
}

const mapStateToProps = (store) => {
    return { userPlaylists: store.myPlaylists }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPlaylist)
