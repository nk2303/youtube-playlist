import React from 'react';
import PlaylistCollection from '../components/PlayListCollection';
import SearchPlaylist from '../components/SearchPlaylist';

const FollowedPlaylists = () => {

    return (
        <div className='black-bg min-h-playlists'> 
            <div className='margin-25 width-300px'><h4 className="left-pad-20 text-muted">Followed playlists</h4><br/>
                <SearchPlaylist/>
            </div>
            <br/>
            <PlaylistCollection />
        </div>
    )
}

export default FollowedPlaylists