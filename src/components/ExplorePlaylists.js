import React, {useEffect} from 'react';
import Video from './Video';
import { connect } from 'react-redux';
import {followPlaylist, getFollowedPlaylists} from '../actions/followPlaylistAction';
import {getAllPlaylists} from '../actions/allPlaylistsAction';
import LoadingSpinner from './LoadingSpinner'
import { act } from 'react-dom/test-utils';

const ExplorePlaylists = ({getFollowedPlaylists, myFollowedPlaylists, getAllPlaylists, allPlaylists, followPlaylist, searchPlaylistName}) => {

    useEffect(() => {
        getAllPlaylists();
    }, [])

    useEffect(() => {
        getFollowedPlaylists();
    }, [])

    const handleFollow = (playlist_id) => {
            followPlaylist(playlist_id); 
    }


    
    return allPlaylists ?
        (<div className='pl-box row'>
            { allPlaylists.filter(p => p.playlist_name.toLowerCase().includes(searchPlaylistName)).map( playlist => 
                <div className="pl-css">
                <div key={playlist.id} className='playlist-col'>
                    <div className='text-light card-title'> {playlist.playlist_name}
                    { !myFollowedPlaylists.values.find(p => p.id == playlist.id) ? 
                        <>
                        <button type="button" className="close white" data-toggle="modal" data-target={`#followPlaylist${playlist.id}`}>+</button>
                            <div className="radius-5px modal fade" 
                                id={`followPlaylist${playlist.id}`} 
                                tabIndex="-1" role="dialog" 
                                aria-labelledby={`followPlaylist${playlist.id}Label`} 
                                aria-hidden="true">
                                <div className="radius-5px modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id={`followPlaylist${playlist.id}Label`} >Follow playlist</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <p>Follow this playlist: {playlist.playlist_name}</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn-secondary radius-5px" data-dismiss="modal">Cancel</button>
                                            <button onClick={() => handleFollow(playlist.id)} type="submit" data-dismiss="modal" className="btn btn-info radius-5px">Follow</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </>
                            :
                            null
                        }
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
                </div> 
                </div> 
                ) 
            }
        </div>)
        :
        <LoadingSpinner info='followed playlists'/>
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllPlaylists: () => getAllPlaylists(dispatch),
        getFollowedPlaylists: () => getFollowedPlaylists(dispatch),
        followPlaylist: (playlist_id) => followPlaylist(playlist_id).then(dispatch)
    }
}


const mapStateToProps = (store) => {
    return {
        allPlaylists: store.allPlaylists,
        searchPlaylistName: store.searchPlaylist,
        myFollowedPlaylists: store.myFollowedPlaylists,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExplorePlaylists)