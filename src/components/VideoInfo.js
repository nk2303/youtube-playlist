import React from "react";
import Video from './Video.js';


const VideoInfo = ({ videoInfo }) => {
    return (
        
        <div className="card text-white bg-secondary mb-3 radius-5px">
            <h6>Date: {videoInfo.snippet.publishedAt.slice(5,7)}-{videoInfo.snippet.publishedAt.slice(0,4)}</h6>
            <h6>Channel: {videoInfo.snippet.channelTitle}</h6>
            <Video className="radius-5px text-center" videoId={videoInfo.id.videoId} />

        </div>
    )
}


export default VideoInfo

