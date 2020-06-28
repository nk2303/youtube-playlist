import React, {useEffect} from 'react';
import Video from './Video';
import { connect } from 'react-redux';
import {getAllPlaylists, deletePlaylist} from '../actions/playlistAction';
import LoadingSpinner from './LoadingSpinner'

const FollowedPlaylistsCollection = ({getAllPlaylists, allPlaylists, deletePlaylist, searchPlaylistName}) => {

    useEffect(() => {
        getAllPlaylists();
    }, [])

    const handleDelete = (playlist_id) => {
        deletePlaylist(playlist_id);
    }

    
    return allPlaylists ?
        // (<div className='pl-box row'>
        //     { allPlaylists.filter(p => p.playlist_name.toLowerCase().includes(searchPlaylistName)).map( playlist => 
        //         <div className="pl-css">
        //         <div key={playlist.id} className='playlist-col'>
        //             <div className='text-light card-title'> {playlist.playlist_name}
        //                 {/* <button type="button" className="close white" data-toggle="modal" data-target={`#deletePlaylist${playlist.id}`}>&times;</button> */}
        //                     <div className="radius-5px modal fade" 
        //                         id={`deletePlaylist${playlist.id}`} 
        //                         tabIndex="-1" role="dialog" 
        //                         aria-labelledby={`deletePlaylist${playlist.id}Label`} 
        //                         aria-hidden="true">
        //                         <div className="radius-5px modal-dialog" role="document">
        //                             <div className="modal-content">
        //                                 <div className="modal-header">
        //                                     <h5 className="modal-title" id={`deletePlaylist${playlist.id}Label`} >Unfollow playlist</h5>
        //                                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        //                                     <span aria-hidden="true">&times;</span>
        //                                     </button>
        //                                 </div>
        //                                 <div className="modal-body">
        //                                     <p>Unfollow this playlist: {playlist.playlist_name}. Are you sure ?</p>
        //                                 </div>
        //                                 <div className="modal-footer">
        //                                     <button type="button" className="btn-secondary radius-5px" data-dismiss="modal">Cancel</button>
        //                                     <button onClick={() => handleDelete(playlist.id)} type="submit" data-dismiss="modal" className="btn btn-danger radius-5px">Unfollow</button>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //             </div> 
        //             <div className="max-height-w overflow-auto">
        //                 {playlist.videos.map(video => <Video
        //                     key={video.youtube_video_id}
        //                     uniqueKey={`${playlist.id}:${video.youtube_video_id}`}
        //                     youtubeVideoId={video.youtube_video_id}
        //                     playlistId = {playlist.id}
        //                     videoId = {video.id}
        //                 /> )}
        //             </div>
        //         </div> 
        //         </div> 
        //         ) 
        //     }
        // </div>)
        <p>*Page is not yet completed... in progress</p>
        :
        <LoadingSpinner info='followed playlists'/>
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllPlaylists: () => getAllPlaylists(dispatch),
        deletePlaylist: (playlist_id) => deletePlaylist(playlist_id, dispatch)
    }
}


const mapStateToProps = (store) => {
    return {
        allPlaylists: store.allPlaylists,
        searchPlaylistName: store.searchPlaylist
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowedPlaylistsCollection)