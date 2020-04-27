import React from "react";
import { useParams } from "react-router-dom";


const youtubeEmbedLink = "https://www.youtube.com/embed/"
const VideoShow = (props) => {
    const { videoId } = useParams();
    return (
            <iframe title={videoId} src={youtubeEmbedLink + videoId} style={{'height': '600px', 'width': '1200px'}} />
    )
}

export default VideoShow;

