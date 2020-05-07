import React from 'react';
import PlaylistCollection from '../components/PlayListCollection';
import CreatePlaylist from '../components/CreatePlaylist';
import SearchPlaylist from '../components/SearchPlaylist';

const AllPlaylist = () => {

    return (
        <div className='black-bg min-h-playlists'> 
            <div className='row'>
                <div className='margin-25 width-300px'><h4 className="left-pad-20 text-muted">My playlists</h4><br/>
                    <SearchPlaylist/>
                </div>
            </div>
            <br/>
            <CreatePlaylist/>
            <PlaylistCollection />
        </div>
    )
}

export default AllPlaylist