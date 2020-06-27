import React from 'react';
import FollowedPlaylistsCollection from '../components/FollowedPlaylistsCollection';
import SearchAllPlaylist from '../components/SearchAllPlaylist';

const FollowedPlaylists = () => {

    return (
        <div className='col-10 black-bg account-pl'> 
            <h4 className="text-muted">My followed playlists</h4><br/>
            <SearchAllPlaylist/><br/>
            <FollowedPlaylistsCollection />
        </div>
    )
}

export default FollowedPlaylists