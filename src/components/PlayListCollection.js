import React, {useEffect} from 'react';
import Video from './Video';
import { connect } from 'react-redux';
import {getMyPlaylists, deletePlaylist} from '../actions/playlistAction';


const PlaylistCollection = ({getPlaylists, userPlaylists, deletePlaylist}) => {

    useEffect(() => {
        getPlaylists()
    }, [])

    const handleDelete = (playlist_id) => {
        deletePlaylist(playlist_id);
    }
    
    
    return (
        <div className='row left-margin-5'>
            { userPlaylists.map( playlist => 
                <div key={playlist.id} className='col-3 white-translucent-02 margin-10px radius-5px'>
                    <div className='margin-10px'> {playlist.playlist_name}
                    <button type="button" className="close white" data-toggle="modal" data-target={`#deletePlaylist${playlist.id}`}>&times;</button>
                    <div 
                        className="radius-5px modal fade" 
                        id={`deletePlaylist${playlist.id}`} 
                        tabIndex="-1" role="dialog" 
                        aria-labelledby={`deletePlaylist${playlist.id}Label`} 
                        aria-hidden="true">
                    <div className="radius-5px modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={`deletePlaylist${playlist.id}Label`} >Delete playlist</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Deleting a playlist means you will lose all existing videos in this playlist: {playlist.playlist_name}. Are you sure ?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary radius-5px" data-dismiss="modal">Cancel</button>
                            <button onClick={() => handleDelete(playlist.id)} type="submit" className="btn btn-danger radius-5px">Delete</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    
                    
                    {playlist.videos.map(video => <Video
                        className="radius-5px"
                        key={video.youtube_video_id}
                        uniqueKey={`${playlist.id}:${video.youtube_video_id}`}
                        youtubeVideoId={video.youtube_video_id}
                        playlistId = {playlist.id}
                        videoId = {video.id}
                    /> )}
            </div>) }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPlaylists: () => getMyPlaylists(dispatch),
        deletePlaylist: (playlist_id) => deletePlaylist(playlist_id, dispatch)
    }
}

export default connect(store => ({userPlaylists: store.myPlaylists}), mapDispatchToProps)(PlaylistCollection)