import React from 'react';
import VideoList from './VideoList';

const Playlist = (props) => {

    return (
        <div className='row'>      
            <div className='col-3 white-translucent-02 margin-10px radius-5px'><h5 className='margin-10px'>Playlist name 1 </h5><br/><VideoList /></div>
            <div className='col-3 white-translucent-02 margin-10px radius-5px'><h5 className='margin-10px'>Playlist name 2 </h5><br/><VideoList /></div>
            <div className='col-3 white-translucent-02 margin-10px radius-5px'><h5 className='margin-10px'>Playlist name 3 </h5><br/><VideoList /></div>
        </div>
    )
}

export default Playlist