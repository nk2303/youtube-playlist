import React from 'react';
import PlaylistCollection from './PlayListCollection';
import AccountNav from './AccountNav';
import CreatePlaylist from './CreatePlaylist';
import SearchPlaylist from './SearchPlaylist';

const AllPlaylist = (props) => {

    return (
        <div className='row'>
            <div className='col-2'> <AccountNav /></div>
            <div className='col-10'> 
                <div className='row'>
                    <div className='margin-25 width-300px'><h4>Your playlists</h4> </div>
                </div>
                <SearchPlaylist/>
                <br/>
                <br/> 
                <CreatePlaylist/>
                <PlaylistCollection />

            </div>
        </div>
    )
}

export default AllPlaylist