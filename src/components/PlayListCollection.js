import React, {useEffect} from 'react';
import Video from './Video';
import { connect } from 'react-redux';
import {getMyPlaylists} from '../actions/playlistAction';
import {deletePlaylist} from '../actions/playlistAction';


const PlaylistCollection = ({getPlaylists, myPlaylists, deletePlaylist}) => {

    useEffect(() => {
        getPlaylists()
    }, [])

    const handleDelete = (playlist_id) => {
        deletePlaylist(playlist_id);

    }
    
    
    return (
        <div className='row left-margin-5'>
            { myPlaylists.map( playlist => 
                <div key={playlist.id} className='col-3 white-translucent-02 margin-10px radius-5px'>
                    <h5 className='margin-10px'> {playlist.playlist_name}
                    <button type="button" class="close white" data-toggle="modal" data-target={`#deletePlaylist${playlist.id}`}>&times;</button>
                    <div class="radius-5px modal fade" id={`deletePlaylist${playlist.id}`} tabindex="-1" role="dialog" aria-labelledby={`deletePlaylist${playlist.id}Label`} aria-hidden="true">
                    <div class="radius-5px modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id={`deletePlaylist${playlist.id}Label`} >Delete playlist</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Deleting a playlist means you will lose all existing videos in this playlist: {playlist.playlist_name}. Are you sure ?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary radius-5px" data-dismiss="modal">Cancel</button>
                            <button onClick={() => handleDelete(playlist.id)} type="submit" class="btn btn-danger radius-5px">Delete</button>
                        </div>
                        </div>
                    </div>
                </div>
                    </h5>
                    
                    
                    {playlist.videos.map(video => <Video
                        className="radius-5px"
                        key={video.youtube_video_id}
                        videoId={video.youtube_video_id}
                        playlistId = {playlist.id}
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

export default connect(store => ({myPlaylists: store.myPlaylists}), mapDispatchToProps)(PlaylistCollection)