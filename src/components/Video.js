import React from "react";
import { connect } from "react-redux";
import { openModal } from "../actions/modalActions";
import { Link } from 'react-router-dom';

const youtubeEmbedLink = "https://www.youtube.com/embed/"
const Video = ({ videoInfo, openModal }) => {

    return (
        <div className="card text-white bg-secondary mb-3 radius-5px">
            <h6>Date: {videoInfo.snippet.publishedAt.slice(5,7)}-{videoInfo.snippet.publishedAt.slice(0,4)}</h6>
            <h6>Channel: {videoInfo.snippet.channelTitle}</h6>
            <div className="btn-group btn-block" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary" onClick={console.log("like button clicked")}>Like</button>
                {/* <button type="button" className="btn btn-secondary" onClick={() => openModal(videoInfo)} >Add +</button> */}
                <button type="button" className="btn btn-secondary" onClick={() => openModal(videoInfo)} >Add +</button>
                <Link to={`/videoshow/${videoInfo.id.videoId}`} className="btn btn-secondary" >Full Screen<span className="sr-only"></span></Link>
            </div>

            <iframe className="radius-5px text-center" title={videoInfo.id.videoId} src={youtubeEmbedLink + videoInfo.id.videoId} />

        </div>
    )
}

export default connect(null, dispatch => ({openModal: videoInfo => dispatch(openModal(videoInfo))}))(Video);

{/* <div class="card bg-light mb-3" style="max-width: 20rem;">
  <div class="card-body">
  <div className="btn-group btn-block" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary" onClick={console.log("like button clicked")}>Like</button>
                <button type="button" className="btn btn-secondary" >Add +</button>
                
                <Link to={`/videoshow/${videoInfo.id.videoId}`} className="nav-link btn-secondary" >Full Screen<span className="sr-only"></span></Link>
            </div>
            <iframe className="radius-5px" title={videoInfo.id.videoId} src={youtubeEmbedLink + videoInfo.id.videoId} />
            <h6>Date: {videoInfo.snippet.publishedAt.slice(5,7)}-{videoInfo.snippet.publishedAt.slice(0,4)}</h6>
            <h6>Channel: {videoInfo.snippet.channelTitle}</h6>
  </div>
</div> */}