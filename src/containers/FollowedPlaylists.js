import React from 'react';
import PlaylistCollection from '../components/PlayListCollection';
import CreatePlaylist from '../components/CreatePlaylist';
import SearchPlaylist from '../components/SearchPlaylist';

const FollowedPlaylists = () => {

    return (
        <div className='dark-bg min-h-playlists'> 
            <div className='row'>
                <div className='margin-25 width-300px'><h4 className="left-pad-20 text-muted">Followed playlists</h4> </div>
                <SearchPlaylist/>
            </div>
            <br/>
            <br/> 
            <CreatePlaylist/>
            <PlaylistCollection />
        </div>
    )
}

export default FollowedPlaylists