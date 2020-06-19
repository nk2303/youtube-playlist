import React from 'react';
import PlaylistCollection from '../components/PlayListCollection';
import SearchPlaylist from '../components/SearchPlaylist';

const FollowedPlaylists = () => {

    return (
        <div className='col-10 black-bg account-pl'> 
            <h4 className="text-muted">My playlists</h4><br/>
            <SearchPlaylist/><br/>
            <PlaylistCollection />
        </div>
    )
}

export default FollowedPlaylists