import React from "react";
import Video from './Video.js';


const VideoInfo = ({ videoInfo }) => {
    return (
        
        <div className="card text-white bg-secondary mb-3 radius-5px">
            <div className="margin-10">
                <h6>Date: {videoInfo.snippet.publishedAt.slice(5,7)}-{videoInfo.snippet.publishedAt.slice(0,4)}</h6>
                <h6>Channel: {videoInfo.snippet.channelTitle}</h6>
            </div>
            <Video className="radius-5px text-center" youtubeVideoId={videoInfo.id.videoId} />

        </div>
    )
}


export default VideoInfo

