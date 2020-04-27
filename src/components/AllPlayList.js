import React from 'react';
import PlayList from './PlayList';
import AccountNav from './AccountNav';

const AllPlaylist = (props) => {

    return (
        <div className='row'>
            <div className='col-2'> <AccountNav /></div>
            <div className='col-10'> All playlists <br/> <br/> <br/> <br/> <PlayList/> </div>
        </div>
    )
}

export default AllPlaylist