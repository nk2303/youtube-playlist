import React from 'react';
import PlaylistCollection from '../components/PlayListCollection';
import CreatePlaylist from '../components/CreatePlaylist';
import SearchPlaylist from '../components/SearchPlaylist';

const AllPlaylist = () => {

    return (
        <div className='col'> 
            <h4 className="row left-pad-20 text-muted">My playlists</h4>
            <SearchPlaylist/>
            <CreatePlaylist/>
            <PlaylistCollection />
        </div>
    )
}

export default AllPlaylist