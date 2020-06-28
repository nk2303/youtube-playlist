import React from 'react';
import PlaylistCollection from '../components/PlayListCollection';
import CreatePlaylist from '../components/CreatePlaylist';
import SearchMyPlaylist from '../components/SearchMyPlaylist';

const AllPlaylist = () => {

    return (
        <div className='col-10 black-bg account-pl'> 
            <h4 className="text-muted">My playlists</h4><br/>
            <SearchMyPlaylist/><br/>
            <CreatePlaylist/><br/>
            <PlaylistCollection />
        </div>
    )
}

export default AllPlaylist