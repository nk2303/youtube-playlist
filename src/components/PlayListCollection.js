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
        <div className='row playlist-box'>
            { userPlaylists.map( playlist => 
                <div key={playlist.id} className='width-300px margin-10 radius-5px dark-bg'>
                    <div className='text-light card-title'> {playlist.playlist_name}
                        <button type="button" className="close white" data-toggle="modal" data-target={`#deletePlaylist${playlist.id}`}>&times;</button>
                            <div className="radius-5px modal fade" 
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
                                            <button onClick={() => handleDelete(playlist.id)} type="submit" data-dismiss="modal" className="btn btn-danger radius-5px">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div> 
                    <div className="max-height-w overflow-auto">
                        {playlist.videos.map(video => <Video
                            key={video.youtube_video_id}
                            uniqueKey={`${playlist.id}:${video.youtube_video_id}`}
                            youtubeVideoId={video.youtube_video_id}
                            playlistId = {playlist.id}
                            videoId = {video.id}
                        /> )}
                    </div>
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