import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createVideoPlaylist, deleteVideoPlaylist } from '../actions/videoplaylistAction';
import {getMyPlaylists} from '../actions/playlistAction';
import {createVideo} from '../actions/videoAction';

const youtubeEmbedLink = "https://www.youtube.com/embed/"

export const Video = (props) => {

    const [userPlaylist, setUserPlaylist] = useState(props.myPlaylists);

    let modal;


    const resetAllChanges = () => {
        setUserPlaylist(props.myPlaylists);
    }

    const handleClose = (e) => {
        resetAllChanges();
    }

    const handlePlaylistChange = (targetPlaylist) => {
        setUserPlaylist(userPlaylist.map(p => p.id === targetPlaylist.id ? { ...p, videos: togglePlaylist(p) } : p));
    }

    const togglePlaylist = (playlist) => {
        if (playlist.videos.find(v => v.youtube_video_id === props.youtubeVideoId)) {
            return playlist.videos.filter(v => v.youtube_video_id !== props.youtubeVideoId);
        }
        else {
            return [...playlist.videos, { youtube_video_id: props.youtubeVideoId }];
        }
    }

    const handleSubmit = (e) => {
        const checkPlaylists = [], uncheckPlaylists = [];
        for(let i = 0; i < userPlaylist.length; i++) {
            if (userPlaylist[i].videos.length > props.myPlaylists[i].videos.length) {
                checkPlaylists.push(userPlaylist[i].id);
            }
            else if (userPlaylist[i].videos.length < props.myPlaylists[i].videos.length) {
                uncheckPlaylists.push(userPlaylist[i].id);
            }
        }

        const makePromise = (videoId) => {
            const createPromise = checkPlaylists.map(playlistId => props.createVideoPlaylist(playlistId, videoId));
            const deletePromise = uncheckPlaylists.map(playlistId => props.deleteVideoPlaylist(playlistId, videoId));
            Promise.all(createPromise.concat(deletePromise));
        }
        if (!props.videoId) {
            createVideo(props.youtubeVideoId).then(action => {
                makePromise(action.payload.id);
            });
        }
        else{
            makePromise(props.videoId)
        }
    }

    return (
        <div className="card text-white video-btn mb-3 radius-5px margin-10">
            <div className="btn-group btn-block radius-5px " role="group" aria-label="Basic example">
                <button type="button" className="video-btn btn radius-5px" data-toggle="modal" data-target={`#${props.youtubeVideoId}_${props.playlistId}`}>Add +</button>

                <div 
                    className="modal fade" 
                    id={`${props.youtubeVideoId}_${props.playlistId}`} 
                    tabIndex="-1" role="dialog"
                    ref={elem => modal = elem}
                    onClick={e => e.target === modal && handleClose()}
                    aria-labelledby={`${props.youtubeVideoId}_${props.playlistId}Label`} 
                    aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <div><iframe title={props.youtubeVideoId} src={youtubeEmbedLink + props.youtubeVideoId} /></div>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                            <div aria-hidden="true">&times;</div>
                        </button>
                        
                    </div>
                    <div className="modal-body row">
                        <legend className="col-5">Save to Playlist</legend>
                        <div className="form-group col-7" onSubmit={handleSubmit}>
                            {userPlaylist.map((playlist) => 
                                <div key={playlist.id} className="custom-control custom-checkbox">
                                <input 
                                    type="checkbox"
                                    className="custom-control-input"
                                    id={`customCheck${playlist.id}${props.youtubeVideoId}:${props.uniqueKey}`}
                                    checked={`${playlist.videos.find( v => v.youtube_video_id === props.youtubeVideoId) ? 'check' : ''}`}
                                    onChange={() => handlePlaylistChange(playlist) }>
                                </input>
                                <label 
                                    className="custom-control-label" 
                                    htmlFor={`customCheck${playlist.id}${props.youtubeVideoId}:${props.uniqueKey}`} >{playlist.playlist_name}
                                </label>
                            </div>)}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button onClick={handleClose} type="button" className="btn btn-secondary radius-5px" data-dismiss="modal">Close</button>
                        <button onClick={handleSubmit} type="submit" className="btn btn-primary radius-5px" data-dismiss="modal">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>

            <Link to={`/videoshow/${props.youtubeVideoId}`} className="btn video-btn radius-5px" >Full Screen<span className="sr-only"></span></Link>
             
            </div>
            <iframe className="radius-5px" title={props.youtubeVideoId} src={youtubeEmbedLink + props.youtubeVideoId} />
            
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createVideoPlaylist: (playlistId, videoId) => createVideoPlaylist(playlistId, videoId, dispatch),
        deleteVideoPlaylist: (playlistId, videoId) => deleteVideoPlaylist(playlistId, videoId, dispatch),
        getPlaylists: () => getMyPlaylists(dispatch),
    }
}

const mapStateToProps = (store) => {
    return {
        myPlaylists: store.myPlaylists.values,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Video)