import React from "react";
import { Link } from 'react-router-dom';
import {getMyPlaylists} from '../actions/playlistAction';
import { connect } from 'react-redux';

const youtubeEmbedLink = "https://www.youtube.com/embed/"
export const Video = (props) => {
    return (
        <div className="card text-white bg-secondary mb-3 radius-5px">
            <div className="btn-group btn-block" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary" onClick={console.log("like button clicked")}>Like</button>
                <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">Add +</button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <iframe {...props} title={props.videoId} src={youtubeEmbedLink + props.videoId} />
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <legend>Save to Playlist</legend>
                        <div className="form-group">
                            {props.myPlaylists.map(playlist => 
                                <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" checked=""></input>
                                <label className="custom-control-label" htmlFor="customCheck1">{playlist.playlist_name}</label>
                            </div>)}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
            <Link to={`/videoshow/${props.videoId}`} className="btn btn-secondary" >Full Screen<span className="sr-only"></span></Link>
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