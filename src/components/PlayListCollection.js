import React, {useEffect} from 'react';
import Video from './Video';
import { connect } from 'react-redux';
import {getMyPlaylists} from '../actions/playlistAction';


const PlaylistCollection = ({getPlaylists, myPlaylists}) => {

    useEffect(() => {
        getPlaylists()
    }, [])
    
    
    return (
        <div className='row'>
            { myPlaylists.map( playlist => 
                <div className='col-3 white-translucent-02 margin-10px radius-5px'>
                    <h5 className='margin-10px'> {playlist.playlist_name}</h5>
                    <br/>
                    
                    {playlist.videos.map(video => <Video
                    key={video.youtube_video_id}
                    videoId={video.youtube_video_id}
                /> )}
            </div>) }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPlaylists: () => getMyPlaylists(dispatch)
    }
}

export default connect(store => ({myPlaylists: store.myPlaylists}), mapDispatchToProps)(PlaylistCollection)