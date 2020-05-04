import React from "react";
import { useParams } from "react-router-dom";
import VideoInteract from "./VideoInteract";

const youtubeEmbedLink = "https://www.youtube.com/embed/"
const VideoShow = (props) => {
    const { videoId } = useParams();
    return (
        <>
            {/* This is youtube video is */}
            <iframe title={videoId} src={youtubeEmbedLink + videoId} style={{'height': '800px', 'width': '1600px'}} />
            <VideoInteract youtube_video_id={videoId}/>
        </>
    )
}

export default VideoShow;

