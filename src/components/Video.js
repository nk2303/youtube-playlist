import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {getMyPlaylists} from '../actions/playlistAction';
import { connect } from 'react-redux';
// import { render } from "@testing-library/react";
// import { editPlaylist } from '../actions/playlistAction';


const youtubeEmbedLink = "https://www.youtube.com/embed/"
export const Video = (props) => {

    const [userPlaylist, setUserPlaylist] = useState(props.myPlaylists);

    //1.Adding a video to a playlist when making relationship, is to identify the information about the video,
    //2. Get the video Id, playlist id, get video id, get playlist id, pass in some action that make the fetch
    //create or delete, adding = create relationship, if it's delete, make fetch request to DELETE.
    //database have to look into 2 tables, and join tables,
    //Call API, add this playlist and video together, make record of join table, 
    //API will send some info back to me, up to me when I modify
    //the backend, the most useful thing is an updated list of all your playlist.
    //Once the relationship is built in the backend, whatever info sent to the front end, will be used to create in the react store
    //in redux store, have playlist array, ""
    //we only edit the playlist store. dispatch na aciton to the store with the new playlist for the payload 
    //reducer update playlist USE MAP function.
    //Pets lab in mod 4.

    //last step: That reducer, when return that new state, that new state will automatically injected into my video comonent
    //properly map state to prop

    //next objective: 

    let modal;

    const handleClose = (e) => {
        setUserPlaylist(props.myPlaylists);
    }

    const handlePlaylistChange = (targetPlaylist) => {
        setUserPlaylist(userPlaylist.map(p => p.id === targetPlaylist.id ? { ...p, videos: togglePlaylist(p) } : p));
    }

    const togglePlaylist = (playlist) => {
        if (playlist.videos.find(v => v.youtube_video_id === props.videoId)) {
            return playlist.videos.filter(v => v.youtube_video_id !== props.videoId);
        }
        else {
            return [...playlist.videos, { youtube_video_id: props.videoId }];
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        // getMyPlaylists(dispatch)
    }

    return (
        <div className="card text-white light-grey mb-3 radius-5px">
            <div className="btn-group btn-block " role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary radius-5px" onClick={console.log("like button clicked")}>Comment</button>
                <button type="button" className="btn btn-secondary" data-toggle="modal" data-target={`#${props.videoId}_${props.playlistId}`}>Add +</button>

                <div 
                    className="modal fade" 
                    id={`${props.videoId}_${props.playlistId}`} 
                    tabIndex="-1" role="dialog"
                    ref={elem => modal = elem}
                    onClick={e => e.target === modal && handleClose()}
                    aria-labelledby={`${props.videoId}_${props.playlistId}Label`} 
                    aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <div><iframe {...props} title={props.videoId} src={youtubeEmbedLink + props.videoId} /></div>
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
                                    id={`customCheck${playlist.id}${props.videoId}`}
                                    //rerendering a lot of time
                                    checked={`${playlist.videos.find( v => v.youtube_video_id == props.videoId) ? 'check' : ''}`}
                                    onChange={() => handlePlaylistChange(playlist) }
                                    ></input>
                                <label className="custom-control-label" htmlFor={`customCheck${playlist.id}${props.videoId}`} >{playlist.playlist_name}</label>
                            </div>)}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button onClick={handleClose} type="button" className="btn btn-secondary radius-5px" data-dismiss="modal">Close</button>
                        <button onClick={handleSubmit} type="submit" className="btn btn-primary radius-5px">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
            <Link to={`/videoshow/${props.videoId}`} className="btn btn-secondary radius-5px" >Full Screen<span className="sr-only"></span></Link>
            </div>
            <iframe {...props} title={props.videoId} src={youtubeEmbedLink + props.videoId} />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPlaylists: () => getMyPlaylists(dispatch)
    }
}

const mapStateToProps = (store) => {
    return {
        myPlaylists: store.myPlaylists,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Video)