import React from 'react';
import PlaylistCollection from './PlayListCollection';
import AccountNav from './AccountNav';

const AllPlaylist = (props) => {

    return (
        <div className='row '>
            <div className='col-2'> <AccountNav /></div>
            <div className='col-10'> All playlists <br/> <br/> <br/> <br/> 
            <PlaylistCollection />
            </div>
        </div>
    )
}

export default AllPlaylist