import React from "react";
import { Link } from 'react-router-dom';

const youtubeEmbedLink = "https://www.youtube.com/embed/"
const Video = ({ videoInfo }) => {

    return (
        <div className="card text-white bg-secondary mb-3 radius-5px">
            <h6>Date: {videoInfo.snippet.publishedAt.slice(5,7)}-{videoInfo.snippet.publishedAt.slice(0,4)}</h6>
            <h6>Channel: {videoInfo.snippet.channelTitle}</h6>
            <div className="btn-group btn-block" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary" onClick={console.log("like button clicked")}>Like</button>
                <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">Add +</button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <iframe title={videoInfo.id.videoId} src={youtubeEmbedLink + videoInfo.id.videoId} />
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <legend>Save to Playlist</legend>
                        <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" checked=""></input>
                                    <label className="custom-control-label" htmlFor="customCheck1">Playlist Name 1</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck2" checked=""></input>
                                    <label className="custom-control-label" htmlFor="customCheck2">Playlist Name 2</label>
                                </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
                <Link to={`/videoshow/${videoInfo.id.videoId}`} className="btn btn-secondary" >Full Screen<span className="sr-only"></span></Link>
            </div>

            <iframe className="radius-5px text-center" title={videoInfo.id.videoId} src={youtubeEmbedLink + videoInfo.id.videoId} />

        </div>
    )
}


export default Video;
