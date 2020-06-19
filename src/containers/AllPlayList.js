import React from 'react';
import PlaylistCollection from '../components/PlayListCollection';
import CreatePlaylist from '../components/CreatePlaylist';
import SearchPlaylist from '../components/SearchPlaylist';

const AllPlaylist = () => {

    return (
        <div className='col-10 black-bg account-pl'> 
            <h4 className="text-muted">My playlists</h4><br/>
            <SearchPlaylist/><br/>
            <CreatePlaylist/><br/>
            <PlaylistCollection />
        </div>
    )
}

export default AllPlaylist