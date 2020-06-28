import React from 'react';
import ExplorePlaylists from '../components/ExplorePlaylists';
import SearchAllPlaylist from '../components/SearchAllPlaylist';

const Explore = () => {

    return (
        <div className='col-10 black-bg account-pl'> 
            <h4 className="text-muted">Explore all playlists</h4><br/>
            <SearchAllPlaylist/><br/>
            <ExplorePlaylists />
        </div>
    )
}

export default Explore