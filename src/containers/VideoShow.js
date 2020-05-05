import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import { useParams } from 'react-router-dom';
import VideoInteract from './VideoInteract';
import { findVideo } from '../actions/videoAction';

const youtubeEmbedLink = "https://www.youtube.com/embed/"
const VideoShow = ({targetVideo, findVideo}) => {
    const { videoId } = useParams();

    useEffect(() =>{
        findVideo(videoId)
    }, []);

    if (targetVideo.video) {
        return (
            <>
                <iframe title={targetVideo.video.youtube_video_id} src={youtubeEmbedLink + targetVideo.video.youtube_video_id} style={{'height': '800px', 'width': '1600px'}} />
                <VideoInteract youtube_video_id={targetVideo.video.youtube_video_id} videoInfoBE={targetVideo}/>
            </>
        )
    }
    return (null)
}


const mapDispatchToProps = (dispatch) => {
    return {
        findVideo: (videoId) => findVideo(videoId, dispatch)
    }
}


export default connect(store => ({targetVideo: store.targetVideo}), mapDispatchToProps)(VideoShow);


